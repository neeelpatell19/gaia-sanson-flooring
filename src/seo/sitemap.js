// ===========================================
// SITEMAP
// Builds sitemap.xml from the same page list the app uses
// (see getSitemapEntries in ./pages.js).
// ===========================================

import { canonicalUrl } from "./site.js";

const escapeXml = (value) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export function buildSitemapXml(entries) {
  const urls = entries
    .map(({ path, lastmod }) => {
      const lines = [`    <loc>${escapeXml(canonicalUrl(path))}</loc>`];
      if (lastmod) lines.push(`    <lastmod>${lastmod}</lastmod>`);
      return `  <url>\n${lines.join("\n")}\n  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}
