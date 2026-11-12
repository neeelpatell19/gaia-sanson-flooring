// ===========================================
// SITEMAP
// Builds sitemap.xml from the same page list the app uses
// (see getSitemapEntries in ./pages.js), with each page's main images.
// ===========================================

import { absoluteUrl, canonicalUrl } from "./site.js";

const escapeXml = (value) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Image paths may hold spaces or other characters a URL cannot carry raw.
const imageUrl = (path) => encodeURI(decodeURI(absoluteUrl(path)));

export function buildSitemapXml(entries) {
  const urls = entries
    .map(({ path, lastmod, images = [] }) => {
      const lines = [`    <loc>${escapeXml(canonicalUrl(path))}</loc>`];
      if (lastmod) lines.push(`    <lastmod>${lastmod}</lastmod>`);
      for (const image of images) {
        lines.push(`    <image:image><image:loc>${escapeXml(imageUrl(image))}</image:loc></image:image>`);
      }
      return `  <url>\n${lines.join("\n")}\n  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urls}\n</urlset>\n`;
}
