// ===========================================
// HEAD BUILDER
// Turns the result of resolvePageSeo() into the input of useHead().
// ===========================================

import {
  DEFAULT_OG_IMAGE,
  DEFAULT_OG_IMAGE_ALT,
  SITE_LANGUAGE,
  SITE_LOCALE,
  SITE_NAME,
  absoluteUrl,
  canonicalUrl,
} from "./site.js";

const ROBOTS_INDEX = "index, follow, max-image-preview:large";
const ROBOTS_NOINDEX = "noindex, nofollow";

// "<" is escaped so no text in the data can close the <script> tag.
const jsonLdScript = (schema, index) => ({
  key: `ld-json-${index}`,
  type: "application/ld+json",
  innerHTML: JSON.stringify(schema).replace(/</g, "\\u003c"),
});

export function buildHead(seo) {
  const url = seo.path ? canonicalUrl(seo.path) : null;
  const image = absoluteUrl(seo.image);
  const imageAlt =
    seo.imageAlt || (seo.image === DEFAULT_OG_IMAGE ? DEFAULT_OG_IMAGE_ALT : "");

  const meta = [
    { name: "description", content: seo.description },
    { name: "robots", content: seo.noindex ? ROBOTS_NOINDEX : ROBOTS_INDEX },
    { property: "og:type", content: seo.type },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:locale", content: SITE_LOCALE },
    { property: "og:title", content: seo.title },
    { property: "og:description", content: seo.description },
    { property: "og:image", content: image },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: seo.title },
    { name: "twitter:description", content: seo.description },
    { name: "twitter:image", content: image },
  ];
  if (url) meta.push({ property: "og:url", content: url });
  if (imageAlt) {
    meta.push({ property: "og:image:alt", content: imageAlt });
    meta.push({ name: "twitter:image:alt", content: imageAlt });
  }

  return {
    htmlAttrs: { lang: SITE_LANGUAGE },
    title: seo.title,
    meta,
    link: url ? [{ rel: "canonical", href: url }] : [],
    script: seo.jsonLd.map(jsonLdScript),
  };
}
