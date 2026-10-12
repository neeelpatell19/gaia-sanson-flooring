// ===========================================
// PAGE SEO
// The single place that decides, for every URL of the site, its title,
// description, canonical, share image, robots rule and structured data.
// The app (App.vue), the pre-render step (vite.config.js), the sitemap and
// the route guards all read from here, so they cannot drift apart.
//
// Page copy lives next to its data: Categories.js, grassTypesData.js and
// BlogsData.js each carry seoTitle / metaDescription. Titles: aim for 60
// characters or fewer. Descriptions: 120 to 160. scripts/verify-seo.js
// enforces the hard limits.
// ===========================================

import CategoriesData from "../components/OtherComponents/Categories/CategoriesLayout/Categories.js";
import { grassTypesData } from "../components/OtherComponents/Categories/Layouts/DynamicArtificialPage/grassTypesData.js";
import BlogsData from "../components/OtherComponents/Blogs/BlogsData.js";
import {
  buildArticleSchemas,
  buildBlogListingSeo,
} from "../components/OtherComponents/Blogs/BlogSeo.js";
import {
  DEFAULT_OG_IMAGE,
  ORGANIZATION_ID,
  breadcrumbSchema,
  itemListSchema,
  organizationSchema,
  webPageSchema,
  websiteSchema,
} from "./site.js";

const HOME = { name: "Home", path: "/" };
const PRODUCTS = { name: "Products", path: "/categories" };
const ORGANIZATION_REF = { "@id": ORGANIZATION_ID };

// The product range, as listed on the home and categories pages.
const CATALOG = CategoriesData.map((category) => ({
  name: category.name,
  path: `/categories/${category.slug}`,
  description: category.metaDescription,
}));

// ---- which URLs exist -------------------------------------------------

const categoryBySlug = (slug) => CategoriesData.find((c) => c.slug === slug);
const blogBySlug = (slug) => BlogsData.find((b) => b.slug === slug);

export const isValidCategory = (slug) => Boolean(categoryBySlug(slug));
export const isValidGrassType = (slug) =>
  Object.prototype.hasOwnProperty.call(grassTypesData, slug);
export const isValidBlog = (slug) => Boolean(blogBySlug(slug));

// Routes with a :param whose pages getIndexablePaths() lists from the data
// above. A new route of this kind must be added here and to getIndexablePaths().
export const ENUMERATED_ROUTE_NAMES = [
  "CategoryDetail",
  "DynamicArtificialPage",
  "BlogDetail",
  "NotFound",
];

// Pages that are in the sitemap, in the order they are listed.
export function getIndexablePaths() {
  return [
    "/",
    "/categories",
    ...CategoriesData.map((c) => `/categories/${c.slug}`),
    ...Object.keys(grassTypesData).map((slug) => `/artificial-grass/${slug}`),
    "/about-us",
    "/tools",
    "/blogs",
    ...BlogsData.map((b) => `/blogs/${b.slug}`),
  ];
}

// Pages written to disk at build time. /demo is built so it does not 404,
// but it is kept out of search (noindex) and out of the sitemap.
export const getPrerenderPaths = () => [
  ...getIndexablePaths(),
  "/demo",
  "/404",
];

export function getSitemapEntries() {
  const blogDates = new Map(
    BlogsData.map((b) => [`/blogs/${b.slug}`, b.updatedDate || b.publishedDate])
  );
  // lastmod only where it is a real date. Static pages carry none: stamping
  // every page with the build date makes search engines distrust lastmod.
  return getIndexablePaths().map((path) => ({
    path,
    lastmod: blogDates.get(path),
  }));
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
  Categories: {
    path: "/categories",
    title: "Flooring & Acoustic Product Range | GAIA by Sanson Floorings",
    description:
      "Explore GAIA's product range: modular carpet tiles, broadloom carpets, acoustic PET panels, and artificial grass and multiturf for interiors, sports and landscapes.",
    crumbs: [PRODUCTS],
    webPage: { type: "CollectionPage", mainEntity: itemListSchema(CATALOG) },
  },
  AboutUs: {
    path: "/about-us",
    title: "About Sanson Group & GAIA | Flooring Since 1982",
    description:
      "Sanson Group has served clients for over 40 years, since 1982. GAIA is the first Indian MSME to earn the GreenPro label for both acoustic PET panels and carpet tiles.",
    crumbs: [{ name: "About Us", path: "/about-us" }],
    webPage: {
      type: "AboutPage",
      about: ORGANIZATION_REF,
      mainEntity: ORGANIZATION_REF,
    },
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
  const path = `/categories/${slug}`;
  return {
    path,
    title: category.seoTitle,
    description: category.metaDescription,
    crumbs: [PRODUCTS, { name: category.name, path }],
    webPage: { about: { "@type": "Thing", name: category.name } },
  };
}

function grassPage(slug) {
  const grass = grassTypesData[slug];
  const multiturf = categoryBySlug("artificial-multiturf");
  return {
    path: `/artificial-grass/${slug}`,
    title: grass.seoTitle,
    description: grass.metaDescription,
    crumbs: [
      PRODUCTS,
      { name: multiturf.name, path: `/categories/${multiturf.slug}` },
      { name: grass.heading.trim(), path: `/artificial-grass/${slug}` },
    ],
    webPage: { about: { "@type": "Thing", name: grass.heading.trim() } },
  };
}

function blogPages(name, slug) {
  if (name === "Blogs") {
    const { jsonLd, ...seo } = buildBlogListingSeo(BlogsData);
    return {
      ...seo,
      crumbs: [{ name: "Blogs", path: "/blogs" }],
      extraJsonLd: jsonLd,
    };
  }
  const blog = blogBySlug(slug);
  return {
    path: `/blogs/${blog.slug}`,
    title: blog.seoTitle || `${blog.title} | GAIA`,
    description: blog.metaDescription,
    image: blog.ogImage || blog.coverImage,
    imageAlt: blog.coverImageAlt,
    type: "article",
    // The article builder already includes the breadcrumb and FAQ schemas.
    extraJsonLd: buildArticleSchemas(blog),
  };
}

function lookup(name, params = {}) {
  if (name === "CategoryDetail" && isValidCategory(params.slug))
    return categoryPage(params.slug);
  if (name === "DynamicArtificialPage" && isValidGrassType(params.grassType))
    return grassPage(params.grassType);
  if (name === "Blogs") return blogPages("Blogs");
  if (name === "BlogDetail" && isValidBlog(params.slug))
    return blogPages("BlogDetail", params.slug);
  return { ...(STATIC_PAGES[name] || STATIC_PAGES.NotFound) };
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
  const breadcrumb = page.crumbs
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
