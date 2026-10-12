// ===========================================
// ARTICLE HEADINGS
// Gives every <h2> in an article an id and returns the table of contents.
// This runs while the page is rendered (also at build time), so the anchors
// and the "In this article" links are in the static HTML: search engines can
// link straight to a section, and #section URLs work without JavaScript.
// ===========================================

const ENTITIES = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'", "&nbsp;": " " };

const toText = (html) =>
  html
    .replace(/<[^>]*>/g, "")
    .replace(/&(amp|lt|gt|quot|#39|nbsp);/g, (entity) => ENTITIES[entity])
    .replace(/\s+/g, " ")
    .trim();

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

// Returns { html, toc } where toc is [{ id, text }] in article order.
export function addHeadingIds(html) {
  const used = new Set();
  const toc = [];

  const withIds = html.replace(/<h2(\s[^>]*)?>([\s\S]*?)<\/h2>/gi, (match, attrs = "", inner) => {
    const text = toText(inner);
    const existing = /\sid="([^"]+)"/i.exec(attrs);

    let id = existing ? existing[1] : slugify(text) || "section";
    const base = id;
    for (let n = 2; used.has(id); n += 1) id = `${base}-${n}`;
    used.add(id);
    toc.push({ id, text });

    return existing ? match : `<h2${attrs} id="${id}">${inner}</h2>`;
  });

  return { html: withIds, toc };
}
