import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// The SEO data, the Ant Design style helper and the finishing step are loaded
// only while building. Importing them at the top of this file would make Vite
// restart the dev server every time site content (blog data, categories) is
// edited, because it restarts when anything this file imports changes.
const load = (path) => import(/* @vite-ignore */ new URL(path, import.meta.url).href);

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3002,
    host: true, // Allow access from network
  },
  // `npm run build` runs vite-ssg, which renders every page to static HTML
  // (server-side rendering at build time) and hydrates it in the browser.
  ssgOptions: {
    // Module scripts are deferred by default: hydration starts only after the
    // whole document has been parsed (async could run it earlier).
    script: "defer",
    // Each page becomes <route>/index.html, served without the extension.
    dirStyle: "nested",
    // Leave the markup exactly as Vue rendered it, so hydration matches.
    formatting: "none",
    // paths: the path of every route in src/router, including :param ones.
    includedRoutes: async (paths, routes) => {
      const { getPrerenderPaths, ENUMERATED_ROUTE_NAMES } = await load("./src/seo/pages.js");
      const planned = getPrerenderPaths();
      // Hosting has no catch-all rewrite, so a page that is not rendered here
      // would be a 404 in production, and one without SEO data would be
      // served as noindex. Stop the build instead.
      const isDynamic = (path) => /[:*]/.test(path);
      const missing = paths.filter((path) => !isDynamic(path) && !planned.includes(path));
      const unlisted = routes.filter((r) => isDynamic(r.path) && !ENUMERATED_ROUTE_NAMES.includes(r.name));
      if (missing.length || unlisted.length) {
        throw new Error(
          "Add new routes to src/seo/pages.js (getIndexablePaths, STATIC_PAGES, ENUMERATED_ROUTE_NAMES): " +
            [...missing, ...unlisted.map((r) => r.path)].join(", ")
        );
      }
      return planned;
    },
    onPageRendered: async (route, html, { app }) =>
      (await load("./scripts/antd-ssr-styles.js")).insertAntdStyles(html, app),
    onFinished: async () => (await load("./scripts/finalize-build.js")).finalizeBuild("dist"),
  },
});
