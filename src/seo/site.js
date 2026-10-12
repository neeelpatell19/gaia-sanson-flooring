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

const ORGANIZATION_ID = `${SITE_URL}/#organization`;

// Facts below match the footer of the site (address, phone, e-mail, LinkedIn).
// On the home page the same node is also typed LocalBusiness, so search
// engines get one business entity rather than two blocks to reconcile.
export const organizationSchema = ({ local = false } = {}) => ({
  "@context": "https://schema.org",
  "@type": local ? ["Organization", "LocalBusiness"] : "Organization",
  "@id": ORGANIZATION_ID,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/Images/GAIA_Logo.png`,
  description:
    "India's first startup offering integrated solutions in floorings and acoustic panels for high-performance interiors.",
  foundingDate: "2021",
  address: {
    "@type": "PostalAddress",
    streetAddress: "B-5B, Plot No. 70, 1st Floor, Rama Road Industrial Area",
    addressLocality: "New Delhi",
    postalCode: "110015",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-99109-21119",
    email: "contact@sansonfloorings.com",
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: "en",
  },
  sameAs: [LINKEDIN_URL],
  ...(local && {
    image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
    telephone: "+91-99109-21119",
    email: "contact@sansonfloorings.com",
    openingHours: "Mo-Fr 09:00-18:00",
    priceRange: "$$",
  }),
});

export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  inLanguage: SITE_LANGUAGE,
  publisher: { "@id": ORGANIZATION_ID },
});

// items: [{ name, path }] from the home page down to the current page.
export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: canonicalUrl(item.path),
  })),
});
