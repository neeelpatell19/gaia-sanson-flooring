// ===========================================
// BUILD FINISH
// Runs once vite-ssg has written every page into dist/ (see ssgOptions in
// vite.config.js):
//   1. turns the rendered /404 page into dist/404.html, which Vercel serves
//      with a 404 status for any URL that has no file;
//   2. writes dist/sitemap.xml from the app's own page list.
// ===========================================

import fs from "fs";
import path from "path";
import { getSitemapEntries } from "../src/seo/pages.js";
import { buildSitemapXml } from "../src/seo/sitemap.js";

export function finalizeBuild(dist = "dist") {
  const notFoundDir = path.join(dist, "404");
  const rendered = path.join(notFoundDir, "index.html");
  if (!fs.existsSync(rendered)) {
    throw new Error(`Expected the pre-rendered 404 page at ${rendered}`);
  }
  fs.renameSync(rendered, path.join(dist, "404.html"));
  fs.rmdirSync(notFoundDir);

  const entries = getSitemapEntries();
  fs.writeFileSync(path.join(dist, "sitemap.xml"), buildSitemapXml(entries), "utf8");
  console.log(`Wrote dist/404.html and dist/sitemap.xml (${entries.length} URLs)`);
}
