#!/usr/bin/env node
// ===========================================
// SITEMAP
// Runs after `vite build` (postbuild). Writes sitemap.xml into dist/,
// which is what Vercel serves. Only real routes are listed; blog lastmod
// comes from each article's publishedDate / updatedDate.
// ===========================================

import fs from 'fs';
import path from 'path';
import BlogsData from '../src/components/OtherComponents/Blogs/BlogsData.js';

const BASE_URL = 'https://sansonfloorings.com';
const OUTPUT_DIRS = ['dist', 'public'].filter((dir) => fs.existsSync(dir));

// Keep in step with src/router/index.js, the category slugs in
// Categories.js and the grass types in DynamicArtificialPage.vue.
const staticPages = [
  { url: '/', priority: '1.0' },
  { url: '/categories', priority: '0.9' },
  { url: '/categories/carpet-tiles', priority: '0.9' },
  { url: '/categories/broadloom-carpets', priority: '0.9' },
  { url: '/categories/acoustic-tiles', priority: '0.9' },
  { url: '/categories/artificial-multiturf', priority: '0.9' },
  { url: '/artificial-grass/landscape-grass', priority: '0.8' },
  { url: '/artificial-grass/sports-grass', priority: '0.8' },
  { url: '/artificial-grass/multisports-grass', priority: '0.8' },
  { url: '/artificial-grass/curly-grass', priority: '0.8' },
  { url: '/about-us', priority: '0.6' },
  { url: '/blogs', priority: '0.8' },
];

const blogPages = BlogsData.map((blog) => ({
  url: `/blogs/${blog.slug}`,
  lastmod: blog.updatedDate || blog.publishedDate,
  priority: '0.7',
}));

const pages = [...staticPages, ...blogPages];

function generateSitemapXML() {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  pages.forEach((page) => {
    xml += '  <url>\n';
    xml += `    <loc>${BASE_URL}${page.url}</loc>\n`;
    if (page.lastmod) xml += `    <lastmod>${page.lastmod}</lastmod>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    xml += '  </url>\n';
  });
  xml += '</urlset>\n';
  return xml;
}

try {
  const xml = generateSitemapXML();
  OUTPUT_DIRS.forEach((dir) => {
    fs.writeFileSync(path.join(dir, 'sitemap.xml'), xml, 'utf8');
  });
  console.log(`Sitemap written to ${OUTPUT_DIRS.join(', ')} (${pages.length} URLs)`);
} catch (error) {
  console.error('Error generating sitemap:', error);
  process.exit(1);
}
