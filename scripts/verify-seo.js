#!/usr/bin/env node
// ===========================================
// SEO / SSR BUILD CHECK
// Reads the files in dist/ the way a crawler that does NOT run JavaScript
// would, and fails (exit 1) if any page is not crawlable or its SEO tags
// are missing, duplicated or inconsistent. Run after `npm run build`:
//   npm run verify:seo
// ===========================================

import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';
import BlogsData from '../src/components/OtherComponents/Blogs/BlogsData.js';
import CarpetTileDesigns, { hasPdf } from '../src/components/OtherComponents/Categories/Layouts/CarpetTilesLayout/designSwatches.js';
import { blogIndexPageCount } from '../src/components/OtherComponents/Blogs/BlogSeo.js';

const DIST = 'dist';
const SITE = 'https://sansonfloorings.com';

// Every page that must exist as real HTML. Written out on purpose rather
// than read from the app's own route list, so a route that is dropped from
// the app is caught here.
const INDEXABLE = [
  '/',
  '/products',
  '/carpet-tiles',
  '/broadloom-carpets',
  '/acoustic-pet-panels',
  '/artificial-grass',
  ...CarpetTileDesigns.map((design) => `/carpet-tiles/${design.slug}`),
  '/artificial-grass/landscape-grass',
  '/artificial-grass/sports-grass',
  '/artificial-grass/multiturf',
  '/artificial-grass/curly-grass',
  '/about-us',
  '/tools',
  '/blogs',
  ...Array.from({ length: blogIndexPageCount(BlogsData.length) - 1 }, (_, i) => `/blogs/page/${i + 2}`),
  ...BlogsData.map((blog) => `/blogs/${blog.slug}`),
  '/terms',
  '/privacy-policy',
];

// Old URLs that must 301 straight to their new address (no chains).
const MOVED = {
  '/categories': '/products',
  '/categories/carpet-tiles': '/carpet-tiles',
  '/categories/broadloom-carpets': '/broadloom-carpets',
  '/categories/acoustic-tiles': '/acoustic-pet-panels',
  '/categories/artificial-multiturf': '/artificial-grass',
  '/artificial-grass/multisports-grass': '/artificial-grass/multiturf',
};
const NOINDEX = ['/demo'];

const TITLE = { min: 15, max: 70 };
const DESCRIPTION = { min: 70, max: 170 };
const MIN_VISIBLE_TEXT = 300;

const failures = [];
const warnings = [];
const fail = (where, message) => failures.push(`${where}  ${message}`);
const warn = (where, message) => warnings.push(`${where}  ${message}`);

const pageFile = (route) =>
  route === '/' ? path.join(DIST, 'index.html') : path.join(DIST, route, 'index.html');

// A blog post, not a numbered page of the blog index.
const isArticle = (route) => route.startsWith('/blogs/') && !route.startsWith('/blogs/page/');

const canonicalFor = (route) => (route === '/' ? `${SITE}/` : `${SITE}${route}`);

function loadDom(file) {
  return new JSDOM(fs.readFileSync(file, 'utf8')).window.document;
}

const attr = (doc, selector, name) => {
  const els = [...doc.querySelectorAll(selector)];
  return { count: els.length, value: els[0]?.getAttribute(name) ?? '' };
};

const visibleText = (doc) => {
  const app = doc.querySelector('#app');
  if (!app) return '';
  const clone = app.cloneNode(true);
  clone.querySelectorAll('script, style, noscript').forEach((el) => el.remove());
  return clone.textContent.replace(/\s+/g, ' ').trim();
};

const localFileExists = (url) => {
  const clean = url.replace(SITE, '').split('?')[0].split('#')[0];
  return fs.existsSync(path.join(DIST, decodeURIComponent(clean)));
};

function checkPage(route, { indexable }) {
  const where = route === '/' ? '/' : route;
  const file = pageFile(route);
  if (!fs.existsSync(file)) {
    fail(where, `no built page (${file})`);
    return null;
  }
  const doc = loadDom(file);
  const page = { route, title: '', description: '', links: [] };

  // ---- title / description
  const titles = doc.querySelectorAll('title');
  page.title = titles[0]?.textContent.trim() ?? '';
  if (titles.length !== 1) fail(where, `expected 1 <title>, found ${titles.length}`);
  else if (!page.title) fail(where, 'empty <title>');
  else if (page.title.length < TITLE.min || page.title.length > TITLE.max)
    // length is advice, not a reason to stop a deploy
    warn(where, `title is ${page.title.length} chars (want ${TITLE.min}-${TITLE.max}): "${page.title}"`);

  const description = attr(doc, 'meta[name="description"]', 'content');
  page.description = description.value.trim();
  if (description.count !== 1) fail(where, `expected 1 meta description, found ${description.count}`);
  else if (!page.description) fail(where, 'empty meta description');
  else if (page.description.length < DESCRIPTION.min || page.description.length > DESCRIPTION.max)
    warn(where, `meta description is ${page.description.length} chars (want ${DESCRIPTION.min}-${DESCRIPTION.max})`);

  // ---- canonical + social tags
  const canonical = attr(doc, 'link[rel="canonical"]', 'href');
  if (canonical.count !== 1) fail(where, `expected 1 canonical, found ${canonical.count}`);
  else if (indexable && canonical.value !== canonicalFor(route))
    fail(where, `canonical is "${canonical.value}", want "${canonicalFor(route)}"`);

  for (const [selector, label] of [
    ['meta[property="og:title"]', 'og:title'],
    ['meta[property="og:description"]', 'og:description'],
    ['meta[property="og:url"]', 'og:url'],
    ['meta[property="og:image"]', 'og:image'],
    ['meta[property="og:site_name"]', 'og:site_name'],
    ['meta[name="twitter:card"]', 'twitter:card'],
    ['meta[name="twitter:title"]', 'twitter:title'],
    ['meta[name="twitter:image"]', 'twitter:image'],
  ]) {
    const found = attr(doc, selector, 'content');
    if (found.count !== 1) fail(where, `expected 1 ${label}, found ${found.count}`);
  }
  const ogUrl = attr(doc, 'meta[property="og:url"]', 'content').value;
  if (indexable && ogUrl && ogUrl !== canonical.value)
    fail(where, `og:url "${ogUrl}" differs from canonical "${canonical.value}"`);
  const ogImage = attr(doc, 'meta[property="og:image"]', 'content').value;
  if (ogImage) {
    if (!ogImage.startsWith('https://')) fail(where, `og:image is not an absolute https URL: ${ogImage}`);
    else if (ogImage.startsWith(SITE) && !localFileExists(ogImage))
      fail(where, `og:image points to a file that is not in dist: ${ogImage}`);
  }

  // ---- robots
  const robots = attr(doc, 'meta[name="robots"]', 'content').value.toLowerCase();
  if (indexable && /noindex/.test(robots)) fail(where, `indexable page has robots "${robots}"`);
  if (!indexable && !/noindex/.test(robots)) fail(where, 'non-indexable page is missing robots noindex');

  // ---- document language + headings
  if (!doc.documentElement.getAttribute('lang')) fail(where, '<html> has no lang attribute');
  const h1 = [...doc.querySelectorAll('h1')].filter((el) => el.textContent.trim());
  if (indexable ? h1.length !== 1 : h1.length > 1)
    fail(where, `expected ${indexable ? 'exactly 1' : 'at most 1'} <h1>, found ${h1.length}`);
  // Headings outline the page: no repeats, no body sentences as headings.
  const headings = [...doc.querySelectorAll('#app h2, #app h3, #app h4')].filter((h) => !h.closest('.navigation-bar'))
    .map((h) => h.textContent.replace(/\s+/g, ' ').trim())
    .filter(Boolean);
  headings
    .filter((h, i) => headings.indexOf(h) !== i)
    .forEach((h) => warn(where, `heading repeated on the page: "${h.slice(0, 50)}"`));
  headings
    .filter((h) => h.split(' ').length > 25)
    .forEach((h) => warn(where, `body text marked up as a heading: "${h.slice(0, 50)}..."`));
  // The menu is output once: the mobile menu is rendered only when opened.
  if (doc.querySelectorAll('#app .mobile-nav').length)
    fail(where, 'mobile menu is in the static HTML (menu repeated in the source)');

  // ---- content is in the HTML, not rendered later by JavaScript
  const text = visibleText(doc);
  if (text.length < MIN_VISIBLE_TEXT)
    fail(where, `only ${text.length} chars of text inside #app (want >= ${MIN_VISIBLE_TEXT}); page is not server-rendered`);

  // ---- Ant Design builds its CSS in the browser; the build copies it into the HTML
  if (doc.querySelector('#app [class*="ant-"]') && !doc.querySelector('head style[data-css-hash]'))
    fail(where, 'uses Ant Design components but the page has no Ant Design styles (layout would jump on hydration)');

  // ---- blog articles: section anchors and table of contents are in the HTML
  if (isArticle(route)) {
    const headingIds = new Set([...doc.querySelectorAll('article h2[id]')].map((h) => h.id));
    const tocLinks = [...doc.querySelectorAll('.blog-toc a[href^="#"]')].map((a) => a.getAttribute('href').slice(1));
    if (!headingIds.size) fail(where, 'article <h2> headings have no id in the static HTML');
    if (!tocLinks.length) fail(where, 'table of contents is not in the static HTML');
    tocLinks.filter((id) => !headingIds.has(id)).forEach((id) => fail(where, `table of contents links to #${id}, which does not exist`));
  }

  // ---- structured data
  const ldTypes = [];
  const ldNodes = [];
  doc.querySelectorAll('script[type="application/ld+json"]').forEach((el, index) => {
    try {
      const data = JSON.parse(el.textContent);
      (Array.isArray(data) ? data : [data]).forEach((item) => {
        ldTypes.push(...[].concat(item['@type']));
        ldNodes.push(item);
      });
      // logos / images named in structured data must exist
      JSON.stringify(data).match(/https:\/\/sansonfloorings\.com\/[^"]+\.(png|jpe?g|webp|svg)/g)?.forEach((url) => {
        if (!localFileExists(url)) fail(where, `JSON-LD references a file that is not in dist: ${url}`);
      });
      if (/"(sameAs|logo|image)"\s*:\s*(""|\[""|\["",)/.test(el.textContent))
        fail(where, `JSON-LD block ${index + 1} has an empty sameAs/logo/image value`);
    } catch {
      fail(where, `JSON-LD block ${index + 1} is not valid JSON`);
    }
  });
  if (indexable) {
    if (!ldTypes.includes('Organization')) fail(where, 'JSON-LD is missing Organization');
    if (!ldTypes.includes('WebSite')) fail(where, 'JSON-LD is missing WebSite');
    if (route === '/' && !ldTypes.includes('LocalBusiness')) fail(where, 'home JSON-LD is missing LocalBusiness');
    const webPageNode = ldNodes.find((n) => ['WebPage', 'CollectionPage', 'AboutPage', 'ItemPage'].includes(n['@type']));
    if (!route.startsWith('/blogs')) {
      if (!webPageNode) fail(where, 'JSON-LD is missing a WebPage / CollectionPage / AboutPage node');
      else if (webPageNode.url !== canonicalFor(route)) fail(where, `WebPage url "${webPageNode.url}" differs from the canonical`);
    }
    if (route !== '/' && !ldTypes.includes('BreadcrumbList')) fail(where, 'JSON-LD is missing BreadcrumbList');
    if (isArticle(route) && !ldTypes.includes('Article')) fail(where, 'JSON-LD is missing Article');
    if (route.startsWith('/carpet-tiles/') && !ldTypes.includes('Product')) fail(where, 'JSON-LD is missing Product');
    if (['/products', '/carpet-tiles', '/artificial-grass'].includes(route) && !ldNodes.some((n) => n.mainEntity?.['@type'] === 'ItemList'))
      fail(where, 'JSON-LD is missing the ItemList of products on the page');
  }

  // ---- images and links
  const imgs = [...doc.querySelectorAll('#app img')];
  const noAlt = imgs.filter((img) => !img.hasAttribute('alt')).length;
  const emptyAlt = imgs.filter((img) => img.getAttribute('alt') === '').length;
  if (noAlt) fail(where, `${noAlt} <img> without an alt attribute`);
  if (emptyAlt) warn(where, `${emptyAlt} <img> with empty alt (fine only for decorative images)`);

  doc.querySelectorAll('#app a[href]').forEach((a) => {
    const href = a.getAttribute('href');
    if (!href || href === '#') return warn(where, `link goes nowhere (href="${href}"): "${a.textContent.trim().slice(0, 40)}"`);
    if (/^(mailto:|tel:|https?:|#)/.test(href)) return;
    page.links.push(href.split('#')[0].split('?')[0] || '/');
  });
  return page;
}

// ---------------------------------------------------------------- run
const pages = [];
INDEXABLE.forEach((route) => pages.push(checkPage(route, { indexable: true })));
NOINDEX.forEach((route) => pages.push(checkPage(route, { indexable: false })));
const built = pages.filter(Boolean);

// titles and descriptions must be unique across the site
for (const key of ['title', 'description']) {
  const seen = new Map();
  built
    .filter((p) => INDEXABLE.includes(p.route))
    .forEach((p) => {
      if (seen.has(p[key])) fail(p.route, `duplicate ${key} (also used by ${seen.get(p[key])})`);
      else seen.set(p[key], p.route);
    });
}

// internal links must lead to a built page or file
const knownRoutes = new Set([...INDEXABLE, ...NOINDEX]);
// Paths that vercel.json rewrites to another server, so they are not in dist.
const PROXIED = [/^\/pdfs\/GAIA_.*\.pdf$/];
built.forEach((page) =>
  page.links.forEach((href) => {
    const clean = href.replace(/\/$/, '') || '/';
    if (PROXIED.some((re) => re.test(clean))) return;
    if (!knownRoutes.has(clean) && !fs.existsSync(path.join(DIST, decodeURIComponent(clean))))
      fail(page.route, `internal link to "${href}" has no page in dist`);
  })
);

// 404 page
{
  const file = path.join(DIST, '404.html');
  if (!fs.existsSync(file)) fail('404.html', 'missing: unknown URLs would be served as 200 pages');
  else {
    const doc = loadDom(file);
    if (!/noindex/i.test(attr(doc, 'meta[name="robots"]', 'content').value))
      fail('404.html', 'missing robots noindex');
    if (!visibleText(doc)) fail('404.html', 'page body is empty');
  }
  if (fs.existsSync(path.join(DIST, '404', 'index.html')))
    fail('/404', 'also built as a normal page, it would be served with status 200');
}

// sitemap
{
  const file = path.join(DIST, 'sitemap.xml');
  if (!fs.existsSync(file)) fail('sitemap.xml', 'missing');
  else {
    const xml = fs.readFileSync(file, 'utf8');
    const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    const expected = INDEXABLE.map(canonicalFor);
    // PDFs stay out: each brochure names its HTML page as canonical instead.
    if (/\.pdf<\/loc>/i.test(xml)) fail('sitemap.xml', 'lists a PDF');
    if (!xml.includes('<image:loc>')) fail('sitemap.xml', 'lists no images');
    expected.filter((url) => !urls.includes(url)).forEach((url) => fail('sitemap.xml', `missing ${url}`));
    urls.filter((url) => !expected.includes(url)).forEach((url) => fail('sitemap.xml', `lists ${url}, which is not an indexable page`));
    if (new Set(urls).size !== urls.length) fail('sitemap.xml', 'contains duplicate URLs');
    if (/<lastmod>/.test(xml)) {
      const bad = [...xml.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)].filter((m) => Number.isNaN(Date.parse(m[1])));
      if (bad.length) fail('sitemap.xml', 'has an invalid lastmod date');
    }
  }
}

// robots.txt
{
  const file = path.join(DIST, 'robots.txt');
  if (!fs.existsSync(file)) fail('robots.txt', 'missing');
  else {
    const robots = fs.readFileSync(file, 'utf8');
    if (!robots.includes(`Sitemap: ${SITE}/sitemap.xml`)) fail('robots.txt', 'does not point to the sitemap');
    const groups = robots.split(/\n\s*\n/);
    const star = groups.find((g) => /^\s*User-agent:\s*\*/im.test(g)) || '';
    if (/^\s*Disallow:\s*\/\s*$/im.test(star)) fail('robots.txt', 'blocks every crawler');
    ['GPTBot', 'ClaudeBot', 'PerplexityBot', 'Googlebot', 'Bingbot'].forEach((bot) => {
      const own = groups.find((g) => new RegExp(`^\\s*User-agent:\\s*${bot}\\b`, 'im').test(g));
      if (own && /^\s*Disallow:\s*\/\s*$/im.test(own)) fail('robots.txt', `blocks ${bot}`);
    });
  }
}

// web manifest must not point at files that do not exist
{
  const file = path.join(DIST, 'manifest.json');
  if (fs.existsSync(file)) {
    const manifest = JSON.parse(fs.readFileSync(file, 'utf8'));
    const files = [...(manifest.icons || []), ...(manifest.screenshots || [])].map((i) => i.src);
    files.filter((src) => !localFileExists(src)).forEach((src) => fail('manifest.json', `references missing file ${src}`));
    (manifest.shortcuts || [])
      .map((s) => s.url)
      .filter((url) => !knownRoutes.has(url))
      .forEach((url) => fail('manifest.json', `shortcut points to ${url}, which is not a page`));
  }
}

// hosting: www must redirect to the host the canonical URLs use
{
  const config = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));
  const redirects = config.redirects || [];
  const isPermanent = (r) => r.statusCode === 301 || r.permanent;
  const wwwRedirect = redirects.find(
    (r) => isPermanent(r) && r.has?.some((h) => h.type === 'host' && h.value === 'www.sansonfloorings.com') && r.destination.startsWith(SITE)
  );
  if (!wwwRedirect) fail('vercel.json', 'no permanent redirect from www.sansonfloorings.com to ' + SITE + ' (two live copies of the site)');

  // Moved pages: one 301, listed before the www rule, straight to a live page.
  const wwwIndex = redirects.indexOf(wwwRedirect);
  for (const [from, to] of Object.entries(MOVED)) {
    const index = redirects.findIndex((r) => r.source === from && !r.has);
    const rule = redirects[index];
    if (!rule) fail('vercel.json', `no redirect from ${from}`);
    else if (rule.statusCode !== 301) fail('vercel.json', `${from} redirects with ${rule.statusCode || 308}, want 301`);
    else if (rule.destination !== SITE + to) fail('vercel.json', `${from} redirects to ${rule.destination}, want ${SITE + to}`);
    else if (wwwIndex !== -1 && index > wwwIndex)
      fail('vercel.json', `${from} comes after the www rule (www + old URL would take two hops)`);
    if (!INDEXABLE.includes(to)) fail('vercel.json', `${from} redirects to ${to}, which is not a page`);
  }


  // Brochure PDFs name their HTML design page as canonical.
  const headerRules = config.headers || [];
  CarpetTileDesigns.filter(hasPdf).forEach((design) => {
    const page = `${SITE}/carpet-tiles/${design.slug}`;
    const rule = headerRules.find((r) => r.source.replace(/\\/g, '') === design.pdf);
    if (!rule) fail('vercel.json', `no Link canonical header for ${design.pdf}`);
    else if (!rule.headers.some((h) => h.key === 'Link' && h.value === `<${page}>; rel="canonical"`))
      fail('vercel.json', `${design.pdf} canonical header does not point to ${page}`);
  });
}

// blog index: every post is linked from /blogs or one of its numbered pages
{
  const linked = new Set();
  INDEXABLE.filter((r) => r === '/blogs' || r.startsWith('/blogs/page/')).forEach((route) => {
    const file = pageFile(route);
    if (!fs.existsSync(file)) return;
    loadDom(file).querySelectorAll('#app a[href^="/blogs/"]').forEach((a) => linked.add(a.getAttribute('href')));
  });
  BlogsData.filter((b) => !linked.has(`/blogs/${b.slug}`)).forEach((b) =>
    fail('/blogs', `post /blogs/${b.slug} is not linked from any page of the blog index`)
  );
}

// hosting: a catch-all rewrite would turn every unknown URL into a 200 page
{
  const config = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));
  (config.rewrites || [])
    .filter((r) => /^\/\(\.\*\)$|^\/\(\.\+\)$|^\/:path\*$/.test(r.source))
    .forEach((r) => fail('vercel.json', `catch-all rewrite "${r.source}" -> "${r.destination}" hides 404s`));
}

// ---------------------------------------------------------------- report
const total = INDEXABLE.length + NOINDEX.length;
console.log(`Checked ${built.length}/${total} pages in ${DIST}/`);
if (warnings.length) {
  console.log(`\n${warnings.length} warning(s):`);
  warnings.forEach((w) => console.log(`  ! ${w}`));
}
if (failures.length) {
  console.log(`\n${failures.length} failure(s):`);
  failures.forEach((f) => console.log(`  x ${f}`));
  process.exit(1);
}
console.log('\nAll SEO checks passed.');
