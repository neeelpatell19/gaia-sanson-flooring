#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import BlogsData from '../src/components/OtherComponents/Blogs/BlogsData.js';

// Configuration
const BASE_URL = 'https://sansonfloorings.com';
const OUTPUT_FILE = 'public/sitemap.xml';
const CURRENT_DATE = new Date().toISOString().split('T')[0];

// Define pages with their metadata
const pages = [
  {
    url: '/',
    lastmod: CURRENT_DATE,
    changefreq: 'weekly',
    priority: '1.0'
  },
  {
    url: '/about',
    lastmod: CURRENT_DATE,
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    url: '/products',
    lastmod: CURRENT_DATE,
    changefreq: 'weekly',
    priority: '0.9'
  },
  {
    url: '/services',
    lastmod: CURRENT_DATE,
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    url: '/contact',
    lastmod: CURRENT_DATE,
    changefreq: 'monthly',
    priority: '0.7'
  },
  // Product pages
  {
    url: '/products/acoustic-tiles',
    lastmod: CURRENT_DATE,
    changefreq: 'monthly',
    priority: '0.6'
  },
  {
    url: '/products/broadloom-carpets',
    lastmod: CURRENT_DATE,
    changefreq: 'monthly',
    priority: '0.6'
  },
  {
    url: '/products/carpet-tiles',
    lastmod: CURRENT_DATE,
    changefreq: 'monthly',
    priority: '0.6'
  },
  {
    url: '/products/luxury-vinyl',
    lastmod: CURRENT_DATE,
    changefreq: 'monthly',
    priority: '0.6'
  },
  {
    url: '/products/hardwood-flooring',
    lastmod: CURRENT_DATE,
    changefreq: 'monthly',
    priority: '0.6'
  },
  {
    url: '/products/laminate-flooring',
    lastmod: CURRENT_DATE,
    changefreq: 'monthly',
    priority: '0.6'
  },
  // Blog pages
  {
    url: '/blogs',
    lastmod: CURRENT_DATE,
    changefreq: 'weekly',
    priority: '0.7'
  },
  ...BlogsData.map(blog => ({
    url: `/blogs/${blog.slug}`,
    lastmod: blog.updatedDate || blog.publishedDate,
    changefreq: 'monthly',
    priority: '0.6'
  }))
];

// Generate XML content
function generateSitemapXML() {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  pages.forEach(page => {
    xml += '  <url>\n';
    xml += `    <loc>${BASE_URL}${page.url}</loc>\n`;
    xml += `    <lastmod>${page.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  return xml;
}

// Write sitemap to file
function writeSitemap() {
  try {
    const sitemapContent = generateSitemapXML();
    fs.writeFileSync(OUTPUT_FILE, sitemapContent, 'utf8');
    console.log(`✅ Sitemap generated successfully: ${OUTPUT_FILE}`);
    console.log(`📊 Total pages: ${pages.length}`);
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
}

// Run the script
writeSitemap(); 