// ===========================================
// BLOG SEO HELPER
// Applies page-level title, meta, canonical, Open Graph and JSON-LD
// for the blog pages, and restores the site defaults from index.html
// when the visitor navigates away.
// ===========================================

export const SITE_URL = "https://sansonfloorings.com";
const SEO_ATTR = "data-blog-seo";

const absoluteUrl = (path) =>
  path && path.startsWith("http") ? path : `${SITE_URL}${path || ""}`;

export function applyBlogSeo({ title, description, path, image, type, jsonLd = [] }) {
  const head = document.head;
  const restore = [];

  const previousTitle = document.title;
  document.title = title;
  restore.push(() => (document.title = previousTitle));

  const setTag = (selector, create, attr, value) => {
    if (!value) return;
    let el = head.querySelector(selector);
    if (el) {
      const previous = el.getAttribute(attr);
      el.setAttribute(attr, value);
      restore.push(() => el.setAttribute(attr, previous));
    } else {
      el = create();
      el.setAttribute(attr, value);
      el.setAttribute(SEO_ATTR, "");
      head.appendChild(el);
    }
  };

  const meta = (key, name, value) =>
    setTag(
      `meta[${key}="${name}"]`,
      () => {
        const el = document.createElement("meta");
        el.setAttribute(key, name);
        return el;
      },
      "content",
      value
    );

  const url = absoluteUrl(path);
  const imageUrl = image ? absoluteUrl(image) : null;

  meta("name", "title", title);
  meta("name", "description", description);
  meta("property", "og:type", type || "website");
  meta("property", "og:url", url);
  meta("property", "og:title", title);
  meta("property", "og:description", description);
  meta("property", "og:image", imageUrl);
  meta("property", "twitter:url", url);
  meta("property", "twitter:title", title);
  meta("property", "twitter:description", description);
  meta("property", "twitter:image", imageUrl);

  setTag(
    'link[rel="canonical"]',
    () => {
      const el = document.createElement("link");
      el.setAttribute("rel", "canonical");
      return el;
    },
    "href",
    url
  );

  jsonLd.forEach((schema) => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute(SEO_ATTR, "");
    script.textContent = JSON.stringify(schema);
    head.appendChild(script);
  });

  return () => {
    head.querySelectorAll(`[${SEO_ATTR}]`).forEach((el) => el.remove());
    restore.reverse().forEach((fn) => fn());
  };
}

export function buildArticleSchemas(blog) {
  const url = `${SITE_URL}/blogs/${blog.slug}`;
  const organization = {
    "@type": "Organization",
    name: "GAIA by Sanson Floorings",
    url: `${SITE_URL}/`,
    logo: { "@type": "ImageObject", url: `${SITE_URL}/Images/GAIA_Logo.png` },
  };

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: blog.title,
      description: blog.metaDescription,
      inLanguage: "en-IN",
      mainEntityOfPage: url,
      url,
      image: [absoluteUrl(blog.ogImage || blog.coverImage)],
      datePublished: blog.publishedDate,
      dateModified: blog.updatedDate || blog.publishedDate,
      author: organization,
      publisher: organization,
      about: blog.tags,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Blogs", item: `${SITE_URL}/blogs` },
        { "@type": "ListItem", position: 3, name: blog.title, item: url },
      ],
    },
  ];

  if (blog.faqs && blog.faqs.length) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: blog.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    });
  }

  return schemas;
}
