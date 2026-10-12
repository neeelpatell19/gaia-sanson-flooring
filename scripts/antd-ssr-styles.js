// ===========================================
// ANT DESIGN STYLES FOR THE PRE-RENDERED HTML
// ant-design-vue (Row, Col, Image) creates its CSS in the browser. Without
// this step the pre-rendered page has no column layout until JavaScript
// has run, so content jumps around when the page hydrates (layout shift)
// and a crawler's text-only snapshot loses the layout. This copies the CSS
// that the server render created into the page's <head>.
// ===========================================

import { createRequire } from "module";

const require = createRequire(import.meta.url);
// The CommonJS build is the one Node loads for the server render.
const { extractStyle } = require("ant-design-vue/lib/_util/cssinjs");

const CHARSET_TAG = /<meta charset="UTF-8">/i;

// app: the Vue app that was just rendered. Each server-rendered app gets its
// own style cache, so one page's styles never leak into another.
export function insertAntdStyles(html, app) {
  const cache = app.config.globalProperties.__ANTDV_CSSINJS_CACHE__;
  if (!cache) return html;
  if (!CHARSET_TAG.test(html)) {
    // Better to stop the build than to publish pages that lose their layout
    // until JavaScript has run.
    throw new Error("antd-ssr-styles: no <meta charset> found to insert the Ant Design styles after");
  }
  const styles = extractStyle(cache);
  // Right after the charset tag, which must stay within the first 1024 bytes.
  return html.replace(CHARSET_TAG, (charset) => `${charset}${styles}`);
}
