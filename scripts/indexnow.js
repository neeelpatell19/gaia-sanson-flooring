#!/usr/bin/env node
// ===========================================
// INDEXNOW
// Tells Bing (and the other IndexNow search engines) about every URL in the
// live sitemap, so new and changed pages are picked up straight away.
// Run after a deploy has gone live:
//   npm run indexnow
// The key is the file public/<KEY>.txt, served at the site root.
// ===========================================

const SITE = "https://sansonfloorings.com";
const KEY = "2e48cc35be06e959b5b3cf23ef810aa8";

const xml = await (await fetch(`${SITE}/sitemap.xml`)).text();
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (!urlList.length) throw new Error("No URLs found in the live sitemap");

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: new URL(SITE).host,
    key: KEY,
    keyLocation: `${SITE}/${KEY}.txt`,
    urlList,
  }),
});
console.log(`IndexNow: submitted ${urlList.length} URLs, status ${res.status} ${res.statusText}`);
if (!res.ok && res.status !== 202) process.exit(1);
