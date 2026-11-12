// ===========================================
// PAGE SEO
// The single place that decides, for every URL of the site, its title,
// description, canonical, share image, robots rule, breadcrumb and
// structured data. The app (App.vue), the visible breadcrumb, the pre-render
// step (vite.config.js), the sitemap and the route guards all read from
// here, so they cannot drift apart.
//
// Page copy lives next to its data: Categories.js, grassTypesData.js,
// designSwatches.js and BlogsData.js. Titles: aim for 60 characters or fewer.
// Descriptions: 120 to 160. scripts/verify-seo.js enforces the hard limits.
// ===========================================

import CategoriesData from "../components/OtherComponents/Categories/CategoriesLayout/Categories.js";
import { grassTypesData } from "../components/OtherComponents/Categories/Layouts/DynamicArtificialPage/grassTypesData.js";
import BlogsData from "../components/OtherComponents/Blogs/BlogsData.js";
import CarpetTileDesigns, {
  designAlt,
  designBySlug,
  designPath,
  filledSpecs,
} from "../components/OtherComponents/Categories/Layouts/CarpetTilesLayout/designSwatches.js";
import { LEGAL_PAGES } from "../components/OtherComponents/Legal/legalContent.js";
import {
  blogIndexPageCount,
  blogIndexPath,
  buildArticleSchemas,
  buildBlogListingSeo,
} from "../components/OtherComponents/Blogs/BlogSeo.js";
import { GREENPRO_VIDEOS } from "../components/OtherComponents/About/GreenProCertified/greenProVideos.js";
import {
  DEFAULT_OG_IMAGE,
  ORGANIZATION_ID,
  breadcrumbSchema,
  itemListSchema,
  organizationSchema,
  productSchema,
  videoSchema,
  webPageSchema,
  websiteSchema,
} from "./site.js";

const HOME = { name: "Home", path: "/" };
const PRODUCTS = { name: "Products", path: "/products" };
const ORGANIZATION_REF = { "@id": ORGANIZATION_ID };

// The product range, as listed on the home and products pages.
const CATALOG = CategoriesData.map((category) => ({
  name: category.name,
  path: `/${category.slug}`,
  description: category.metaDescription,
}));

// ---- which URLs exist -------------------------------------------------

const categoryBySlug = (slug) => CategoriesData.find((c) => c.slug === slug);
const blogBySlug = (slug) => BlogsData.find((b) => b.slug === slug);
const BLOG_PAGES = blogIndexPageCount(BlogsData.length);

// Category pages live at the site root: /carpet-tiles, /acoustic-pet-panels ...
export const CATEGORY_SLUGS = CategoriesData.map((c) => c.slug);

export const isValidCategory = (slug) => Boolean(categoryBySlug(slug));
export const isValidGrassType = (slug) =>
  Object.prototype.hasOwnProperty.call(grassTypesData, slug);
export const isValidBlog = (slug) => Boolean(blogBySlug(slug));
export const isValidDesign = (slug) => Boolean(designBySlug(slug));
// /blogs/page/1 is not a page: page 1 is /blogs itself.
export const isValidBlogPage = (page) =>
  /^\d+$/.test(page) && Number(page) >= 2 && Number(page) <= BLOG_PAGES;

// Routes with a :param whose pages getIndexablePaths() lists from the data
// above. A new route of this kind must be added here and to getIndexablePaths().
export const ENUMERATED_ROUTE_NAMES = [
  "CategoryDetail",
  "DynamicArtificialPage",
  "CarpetTileDesign",
  "BlogsPage",
  "BlogDetail",
  "NotFound",
];

const blogIndexPaths = () =>
  Array.from({ length: BLOG_PAGES - 1 }, (_, i) => blogIndexPath(i + 2));

// Pages that are in the sitemap, in the order they are listed.
export function getIndexablePaths() {
  return [
    "/",
    "/products",
    ...CategoriesData.map((c) => `/${c.slug}`),
    ...CarpetTileDesigns.map(designPath),
    ...Object.keys(grassTypesData).map((slug) => `/artificial-grass/${slug}`),
    "/about-us",
    "/tools",
    "/blogs",
    ...blogIndexPaths(),
    ...BlogsData.map((b) => `/blogs/${b.slug}`),
    ...Object.values(LEGAL_PAGES).map((p) => p.path),
  ];
}

// Pages written to disk at build time. /demo is built so it does not 404,
// but it is kept out of search (noindex) and out of the sitemap.
export const getPrerenderPaths = () => [
  ...getIndexablePaths(),
  "/demo",
  "/404",
];

// The sitemap lists every indexable page with its main images. PDFs are left
// out: each brochure names its HTML design page as canonical instead (the
// Link: rel="canonical" headers in vercel.json).
export function getSitemapEntries() {
  const blogDates = new Map(
    BlogsData.map((b) => [`/blogs/${b.slug}`, b.updatedDate || b.publishedDate])
  );
  // lastmod only where it is a real date. Static pages carry none: stamping
  // every page with the build date makes search engines distrust lastmod.
  const pages = getIndexablePaths().map((path) => {
    const seo = resolvePagePath(path);
    return {
      path,
      lastmod: blogDates.get(path),
      images: seo.image && seo.image !== DEFAULT_OG_IMAGE ? [seo.image] : [],
    };
  });
  return pages;
}

// ---- per-page SEO -----------------------------------------------------

const STATIC_PAGES = {
  Home: {
    path: "/",
    title: "Carpet Tiles, Acoustic Panels & Artificial Grass | GAIA",
    description:
      "India's first startup offering integrated solutions in floorings and acoustic panels. Carpet tiles, broadloom carpets, acoustic PET panels and artificial grass.",
    localBusiness: true,
    webPage: { about: ORGANIZATION_REF },
  },
  Products: {
    path: "/products",
    title: "Flooring & Acoustic Product Range | GAIA by Sanson Floorings",
    description:
      "Explore GAIA's product range: modular carpet tiles, broadloom carpets, acoustic PET panels, and artificial grass and multiturf for interiors, sports and landscapes.",
    image: "/Images/carpet_tiles.webp",
    imageAlt: "Home office desk and chair on olive patterned GAIA carpet tiles",
    crumbs: [PRODUCTS],
    webPage: { type: "CollectionPage", mainEntity: itemListSchema(CATALOG) },
  },
  AboutUs: {
    path: "/about-us",
    title: "About Sanson Group & GAIA | Flooring Since 1982",
    description:
      "Sanson Group has served clients for over 40 years, since 1982. GAIA is the first Indian MSME to earn the GreenPro label for both acoustic PET panels and carpet tiles.",
    image: "/Images/AboutUsBannerImage.webp",
    imageAlt: "Open-plan office with desks on grey GAIA carpet tiles",
    crumbs: [{ name: "About Us", path: "/about-us" }],
    webPage: {
      type: "AboutPage",
      about: ORGANIZATION_REF,
      mainEntity: ORGANIZATION_REF,
    },
    extraJsonLd: [videoSchema(GREENPRO_VIDEOS.about)],
  },
  Tools: {
    path: "/tools",
    title: "TilesView: See Flooring in Your Room | GAIA by Sanson",
    description:
      "Use the TilesView web tool to see how GAIA flooring looks in your own room before you decide. Upload a room photo, select a product and visualise the result.",
    crumbs: [{ name: "Tools", path: "/tools" }],
    webPage: {},
  },
  AnimationDemo: {
    path: "/demo",
    title: "Animation Demo | GAIA by Sanson Floorings",
    description:
      "Internal animation demo for the GAIA website. This page is not part of the public site and is hidden from search engines.",
    noindex: true,
  },
  NotFound: {
    title: "Page Not Found | GAIA by Sanson Floorings",
    description:
      "The page you are looking for does not exist. Browse GAIA's carpet tiles, broadloom carpets, acoustic PET panels and artificial grass instead.",
    noindex: true,
    noCanonical: true,
  },
};

function categoryPage(slug) {
  const category = categoryBySlug(slug);
  const path = `/${slug}`;
  // The products the page lists, for its ItemList.
  const items =
    slug === "carpet-tiles"
      ? CarpetTileDesigns.map((d) => ({ name: `${d.name} carpet tiles`, path: designPath(d) }))
      : slug === "artificial-grass"
        ? Object.entries(grassTypesData).map(([key, grass]) => ({
            name: grass.heading.trim(),
            path: `/artificial-grass/${key}`,
          }))
        : [];
  return {
    path,
    title: category.seoTitle,
    description: category.metaDescription,
    image: category.heroImage,
    imageAlt: category.heroImageAlt,
    crumbs: [PRODUCTS, { name: category.name, path }],
    webPage: {
      type: "CollectionPage",
      about: { "@type": "Thing", name: category.name },
      ...(items.length && { mainEntity: itemListSchema(items) }),
    },
    extraJsonLd: CATEGORY_VIDEOS[slug] ? [videoSchema(CATEGORY_VIDEOS[slug])] : [],
  };
}

// The GreenPro video each category page shows (GreenProCertified.vue).
const CATEGORY_VIDEOS = {
  "carpet-tiles": GREENPRO_VIDEOS.carpetTiles,
  "acoustic-pet-panels": GREENPRO_VIDEOS.acousticPanels,
};

function grassPage(slug) {
  const grass = grassTypesData[slug];
  const category = categoryBySlug("artificial-grass");
  return {
    path: `/artificial-grass/${slug}`,
    title: grass.seoTitle,
    description: grass.metaDescription,
    image: grass.imageSrc,
    imageAlt: grass.imageAlt,
    crumbs: [
      PRODUCTS,
      { name: category.name, path: `/${category.slug}` },
      { name: grass.heading.trim(), path: `/artificial-grass/${slug}` },
    ],
    webPage: { about: { "@type": "Thing", name: grass.heading.trim() } },
  };
}

// The copy for a design page. Shared with CarpetTileDesign.vue so the page
// and its meta description say the same thing.
export const designDescription = (design) =>
  `${design.name} is a modular carpet tile design in the ${design.collection} collection by GAIA, GreenPro labelled and made in India. View the design and request a sample.`;

function designPage(slug) {
  const design = designBySlug(slug);
  const category = categoryBySlug("carpet-tiles");
  const path = designPath(design);
  const description = designDescription(design);
  return {
    path,
    title: `${design.name} Carpet Tiles, ${design.collection} Collection | GAIA`,
    description,
    image: design.image,
    imageAlt: designAlt(design),
    crumbs: [
      PRODUCTS,
      { name: category.name, path: `/${category.slug}` },
      { name: design.name, path },
    ],
    webPage: { type: "ItemPage", mainEntity: { "@id": `${path}#product` } },
    extraJsonLd: [
      productSchema({
        path,
        name: `${design.name} carpet tiles`,
        description,
        image: design.image,
        category: "Carpet tiles",
        collection: `${design.collection} collection`,
        specs: filledSpecs(design),
      }),
    ],
  };
}

function blogPages(name, params) {
  if (name === "Blogs" || name === "BlogsPage") {
    const page = name === "BlogsPage" ? Number(params.page) : 1;
    const { jsonLd, ...seo } = buildBlogListingSeo(BlogsData);
    const path = blogIndexPath(page);
    return page === 1
      ? { ...seo, crumbs: [{ name: "Blogs", path }], extraJsonLd: jsonLd }
      : {
          ...seo,
          path,
          title: `Blogs, Page ${page} | GAIA by Sanson Floorings`,
          description: `Page ${page} of the GAIA blog: guides on carpet tiles, broadloom carpets, acoustic PET panels and artificial grass from GAIA by Sanson Floorings.`,
          crumbs: [
            { name: "Blogs", path: "/blogs" },
            { name: `Page ${page}`, path },
          ],
        };
  }
  const blog = blogBySlug(params.slug);
  return {
    path: `/blogs/${blog.slug}`,
    title: blog.seoTitle || `${blog.title} | GAIA`,
    description: blog.metaDescription,
    image: blog.ogImage || blog.coverImage,
    imageAlt: blog.coverImageAlt,
    type: "article",
    // The visible breadcrumb; the article builder adds its own schema.
    crumbs: [
      { name: "Blogs", path: "/blogs" },
      { name: blog.title, path: `/blogs/${blog.slug}` },
    ],
    crumbsInArticleSchema: true,
    // The article builder already includes the breadcrumb and FAQ schemas.
    extraJsonLd: buildArticleSchemas(blog),
  };
}

function legalPage(key) {
  const page = LEGAL_PAGES[key];
  return {
    path: page.path,
    title: page.seoTitle,
    description: page.metaDescription,
    crumbs: [{ name: page.title, path: page.path }],
    webPage: {},
  };
}

function lookup(name, params = {}) {
  if (name === "CategoryDetail" && isValidCategory(params.slug))
    return categoryPage(params.slug);
  if (name === "DynamicArtificialPage" && isValidGrassType(params.grassType))
    return grassPage(params.grassType);
  if (name === "CarpetTileDesign" && isValidDesign(params.design))
    return designPage(params.design);
  if (name === "Blogs") return blogPages("Blogs", params);
  if (name === "BlogsPage" && isValidBlogPage(params.page))
    return blogPages("BlogsPage", params);
  if (name === "BlogDetail" && isValidBlog(params.slug))
    return blogPages("BlogDetail", params);
  if (name === "Terms") return legalPage("terms");
  if (name === "Privacy") return legalPage("privacy");
  return { ...(STATIC_PAGES[name] || STATIC_PAGES.NotFound) };
}

// The visible breadcrumb trail for a route: [{ name, path }] from Home to
// the current page, or [] on the home page and the 404 page.
export function resolveBreadcrumb(route) {
  const page = lookup(route.name, route.params);
  return page.crumbs && !page.noindex ? [HOME, ...page.crumbs] : [];
}

// route: anything with { name, params }, e.g. a vue-router route. The
// canonical path comes from the page itself, not from the URL that was typed.
// A 404 has no canonical URL of its own, so its path is null.
export function resolvePageSeo(route) {
  const page = lookup(route.name, route.params);
  const image = page.image || DEFAULT_OG_IMAGE;
  const indexable = !page.noindex;

  const webPage = page.webPage
    ? [
        webPageSchema({
          path: page.path,
          name: page.title,
          description: page.description,
          image,
          hasBreadcrumb: Boolean(page.crumbs),
          ...page.webPage,
        }),
      ]
    : [];
  const breadcrumb =
    page.crumbs && !page.crumbsInArticleSchema
      ? [breadcrumbSchema([HOME, ...page.crumbs])]
      : [];

  return {
    title: page.title,
    description: page.description,
    path: page.noCanonical ? null : page.path,
    image,
    imageAlt: page.imageAlt,
    type: page.type || "website",
    noindex: !indexable,
    jsonLd: [
      organizationSchema({
        full: Boolean(page.localBusiness),
        catalog: CATALOG,
      }),
      // Pages kept out of search get the organization only.
      ...(indexable ? [websiteSchema()] : []),
      ...webPage,
      ...breadcrumb,
      ...(page.extraJsonLd || []),
    ],
  };
}

// The SEO of a page by its path, for the sitemap and the build checks.
const ROUTE_BY_PATH = [
  [/^\/$/, () => ({ name: "Home" })],
  [/^\/products$/, () => ({ name: "Products" })],
  [/^\/about-us$/, () => ({ name: "AboutUs" })],
  [/^\/tools$/, () => ({ name: "Tools" })],
  [/^\/blogs$/, () => ({ name: "Blogs" })],
  [/^\/terms$/, () => ({ name: "Terms" })],
  [/^\/privacy-policy$/, () => ({ name: "Privacy" })],
  [/^\/blogs\/page\/(\d+)$/, (m) => ({ name: "BlogsPage", params: { page: m[1] } })],
  [/^\/blogs\/([^/]+)$/, (m) => ({ name: "BlogDetail", params: { slug: m[1] } })],
  [/^\/carpet-tiles\/([^/]+)$/, (m) => ({ name: "CarpetTileDesign", params: { design: m[1] } })],
  [/^\/artificial-grass\/([^/]+)$/, (m) => ({ name: "DynamicArtificialPage", params: { grassType: m[1] } })],
  [/^\/([^/]+)$/, (m) => ({ name: "CategoryDetail", params: { slug: m[1] } })],
];
export function resolvePagePath(path) {
  for (const [re, toRoute] of ROUTE_BY_PATH) {
    const match = path.match(re);
    if (match) return resolvePageSeo(toRoute(match));
  }
  return resolvePageSeo({ name: "NotFound" });
}
