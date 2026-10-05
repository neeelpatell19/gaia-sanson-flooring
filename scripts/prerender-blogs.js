#!/usr/bin/env node
// ===========================================
// STATIC BLOG PAGES
// Runs after `vite build` (postbuild). For /blogs and every article in
// BlogsData.js it writes dist/blogs/.../index.html with the article's own
// title, meta description, canonical, Open Graph tags, JSON-LD and the
// full article text already in the HTML. Search engines and AI crawlers
// that do not run JavaScript can then read the article. Vercel serves
// these files before the SPA rewrite; the Vue app mounts over them as
// usual.
// ===========================================

import fs from 'fs';
import path from 'path';
import BlogsData, { formatBlogDate } from '../src/components/OtherComponents/Blogs/BlogsData.js';
import {
  SITE_URL,
  buildArticleSchemas,
  buildBlogListingSeo,
} from '../src/components/OtherComponents/Blogs/BlogSeo.js';

const DIST = 'dist';
const POSTS_DIR = 'src/components/OtherComponents/Blogs/BlogPosts';
const template = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');

const esc = (value = '') =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

const absoluteUrl = (p) => (p && p.startsWith('http') ? p : `${SITE_URL}${p || ''}`);

// Replace the content of an existing head tag, keeping the site default
// in data-default-content so the app can restore it on other pages.
function setAttrTag(html, pattern, attr, value) {
  const re = new RegExp(`<(meta|link)([^>]*?)${pattern}([^>]*?)>`, 'i');
  const match = html.match(re);
  if (!match) throw new Error(`Head tag not found: ${pattern}`);
  const tag = match[0];
  const current = (tag.match(new RegExp(`${attr}="([^"]*)"`, 'i')) || [])[1] || '';
  const updated = tag
    .replace(new RegExp(`${attr}="[^"]*"`, 'i'), `${attr}="${esc(value)}"`)
    .replace(/\s*\/?>$/, ` data-default-content="${current}">`);
  return html.replace(tag, updated);
}

function applyHead(html, seo) {
  const url = absoluteUrl(seo.path);
  const image = absoluteUrl(seo.image);
  const defaultTitle = (html.match(/<title>([^<]*)<\/title>/i) || [])[1] || '';

  html = html.replace(/<html([^>]*)>/i, `<html$1 data-default-title="${esc(defaultTitle)}">`);
  html = html.replace(/<title>[^<]*<\/title>/i, `<title>${esc(seo.title)}</title>`);

  html = setAttrTag(html, 'name="title"', 'content', seo.title);
  html = setAttrTag(html, 'name="description"', 'content', seo.description);
  html = setAttrTag(html, 'property="og:type"', 'content', seo.type);
  html = setAttrTag(html, 'property="og:url"', 'content', url);
  html = setAttrTag(html, 'property="og:title"', 'content', seo.title);
  html = setAttrTag(html, 'property="og:description"', 'content', seo.description);
  html = setAttrTag(html, 'property="og:image"', 'content', image);
  html = setAttrTag(html, 'property="twitter:url"', 'content', url);
  html = setAttrTag(html, 'property="twitter:title"', 'content', seo.title);
  html = setAttrTag(html, 'property="twitter:description"', 'content', seo.description);
  html = setAttrTag(html, 'property="twitter:image"', 'content', image);
  html = setAttrTag(html, 'rel="canonical"', 'href', url);

  const jsonLd = seo.jsonLd
    .map(
      (schema) =>
        `<script type="application/ld+json" data-prerender-seo>${JSON.stringify(schema).replace(/</g, '\\u003c')}</script>`
    )
    .join('\n  ');
  return html.replace('</head>', `  ${jsonLd}\n</head>`);
}

const withBody = (html, body) =>
  html.replace(/<div id="app"><\/div>/, `<div id="app">${body}</div>`);

function write(route, html) {
  const dir = path.join(DIST, route);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8');
}

const sorted = [...BlogsData].sort((a, b) => b.publishedDate.localeCompare(a.publishedDate));

// Listing page
{
  const seo = buildBlogListingSeo(BlogsData);
  const items = sorted
    .map(
      (blog) =>
        `<li><a href="/blogs/${blog.slug}">${esc(blog.title)}</a><p>${esc(blog.excerpt)}</p></li>`
    )
    .join('');
  const body = `<main><nav aria-label="Breadcrumb"><a href="/">Home</a> / Blogs</nav><h1>Blogs</h1><ul>${items}</ul></main>`;
  write('blogs', withBody(applyHead(template, seo), body));
}

// Article pages
sorted.forEach((blog) => {
  const articleHtml = fs.readFileSync(path.join(POSTS_DIR, `${blog.slug}.html`), 'utf8');
  const seo = {
    title: blog.seoTitle || `${blog.title} | GAIA`,
    description: blog.metaDescription,
    path: `/blogs/${blog.slug}`,
    image: blog.ogImage || blog.coverImage,
    type: 'article',
    jsonLd: buildArticleSchemas(blog),
  };

  const related = sorted
    .filter((item) => item.slug !== blog.slug)
    .sort(
      (a, b) =>
        Number(b.cluster === blog.cluster) - Number(a.cluster === blog.cluster) ||
        Number(b.category === blog.category) - Number(a.category === blog.category) ||
        b.publishedDate.localeCompare(a.publishedDate)
    )
    .slice(0, 3);

  const relatedProduct = blog.relatedProduct
    ? `<p><a href="${blog.relatedProduct.path}">${esc(blog.relatedProduct.name)}</a></p>`
    : '';
  const relatedList = related.length
    ? `<aside><h2>Related articles</h2><ul>${related
        .map((item) => `<li><a href="/blogs/${item.slug}">${esc(item.title)}</a></li>`)
        .join('')}</ul></aside>`
    : '';

  const body = [
    '<main>',
    `<nav aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/blogs">Blogs</a> / ${esc(blog.title)}</nav>`,
    '<article>',
    `<h1>${esc(blog.title)}</h1>`,
    `<p>${esc(blog.excerpt)}</p>`,
    `<p>${esc(blog.author)} · ${esc(blog.location)} · <time datetime="${blog.publishedDate}">${formatBlogDate(blog.publishedDate)}</time>${blog.updatedDate ? ` · Updated <time datetime="${blog.updatedDate}">${formatBlogDate(blog.updatedDate)}</time>` : ''}</p>`,
    `<img src="${blog.coverImage}" alt="${esc(blog.coverImageAlt)}">`,
    articleHtml,
    '</article>',
    relatedProduct,
    relatedList,
    '</main>',
  ].join('\n');

  write(`blogs/${blog.slug}`, withBody(applyHead(template, seo), body));
});

console.log(`Static blog pages written: /blogs and ${sorted.length} article(s)`);
