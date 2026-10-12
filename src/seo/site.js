// ===========================================
// SITE-WIDE SEO CONSTANTS AND SCHEMA BUILDERS
// Plain JS with no Vue or Vite imports, so the build scripts can read it
// as well as the app.
// ===========================================

export const SITE_URL = "https://sansonfloorings.com";
export const SITE_NAME = "GAIA by Sanson Floorings";
export const SITE_LOCALE = "en_IN";
export const SITE_LANGUAGE = "en-IN";

// 1200x630 share image used when a page has no image of its own.
export const DEFAULT_OG_IMAGE = "/og-default.jpg";
export const DEFAULT_OG_IMAGE_ALT =
  "Executive office with a timber desk on grey GAIA carpet tiles";

export const LINKEDIN_URL =
  "https://www.linkedin.com/company/gaia-by-sanson-floorings/";

export const absoluteUrl = (path = "") =>
  path.startsWith("http") ? path : `${SITE_URL}${path}`;

// One canonical form per page: no trailing slash, except the home page.
export const canonicalUrl = (path = "/") => {
  const clean = path.split("?")[0].split("#")[0].replace(/\/+$/, "");
  return clean ? `${SITE_URL}${clean}` : `${SITE_URL}/`;
};

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
const LOGO_ID = `${SITE_URL}/#logo`;
const BRAND_ID = `${SITE_URL}/#brand`;

const LOGO_URL = `${SITE_URL}/Images/GAIA_Logo.png`;
const PHONE = "+91-99109-21119";
const EMAIL = "contact@sansonfloorings.com";
const ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "B-5B, Plot No. 70, 1st Floor, Rama Road Industrial Area",
  addressLocality: "New Delhi",
  postalCode: "110015",
  addressCountry: "IN",
};

// Facts below match the site itself: the footer (address, phone, e-mail,
// LinkedIn) and the About page (Sanson Group, since 1982; GAIA is its brand).
//
// Every page carries a lean node. The home page carries the full one, typed
// as LocalBusiness too (one business entity, not two blocks to reconcile)
// and listing the product range. catalog: [{ name, path, description }].
export const organizationSchema = ({ full = false, catalog = [] } = {}) => ({
  "@context": "https://schema.org",
  "@type": full ? ["Organization", "LocalBusiness"] : "Organization",
  "@id": ORGANIZATION_ID,
  name: SITE_NAME,
  alternateName: "GAIA",
  url: `${SITE_URL}/`,
  logo: {
    "@type": "ImageObject",
    "@id": LOGO_ID,
    url: LOGO_URL,
    contentUrl: LOGO_URL,
    width: 820,
    height: 304,
    caption: SITE_NAME,
  },
  description:
    "India's first startup offering integrated solutions in floorings and acoustic panels for high-performance interiors.",
  foundingDate: "2021",
  address: ADDRESS,
  telephone: PHONE,
  email: EMAIL,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: PHONE,
    email: EMAIL,
    contactType: "customer service",
    availableLanguage: "en",
  },
  sameAs: [LINKEDIN_URL],
  brand: { "@type": "Brand", "@id": BRAND_ID, name: "GAIA", logo: LOGO_URL },
  parentOrganization: {
    "@type": "Organization",
    name: "Sanson Group",
    foundingDate: "1982",
  },
  ...(full && {
    image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
    openingHours: "Mo-Fr 09:00-18:00",
    priceRange: "$$",
    knowsAbout: catalog.map((item) => item.name),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${SITE_NAME} product range`,
      url: canonicalUrl("/categories"),
      itemListElement: catalog.map((item) => ({
        "@type": "OfferCatalog",
        name: item.name,
        url: canonicalUrl(item.path),
        description: item.description,
      })),
    },
  }),
});

export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  inLanguage: SITE_LANGUAGE,
  publisher: { "@id": ORGANIZATION_ID },
});

// The page itself, tied to the site and (when it has one) its breadcrumb by
// @id. type: WebPage, CollectionPage or AboutPage.
export const webPageSchema = ({
  type = "WebPage",
  path,
  name,
  description,
  image,
  about,
  mainEntity,
  hasBreadcrumb = true,
}) => {
  const url = canonicalUrl(path);
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: SITE_LANGUAGE,
    isPartOf: { "@id": WEBSITE_ID },
    ...(image && {
      primaryImageOfPage: { "@type": "ImageObject", url: absoluteUrl(image) },
    }),
    ...(about && { about }),
    ...(mainEntity && { mainEntity }),
    ...(hasBreadcrumb && { breadcrumb: { "@id": `${url}#breadcrumb` } }),
  };
};

// items: [{ name, path }]
export const itemListSchema = (items) => ({
  "@type": "ItemList",
  numberOfItems: items.length,
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    url: canonicalUrl(item.path),
  })),
});

// items: [{ name, path }] from the home page down to the current page.
export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${canonicalUrl(items[items.length - 1].path)}#breadcrumb`,
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: canonicalUrl(item.path),
  })),
});
