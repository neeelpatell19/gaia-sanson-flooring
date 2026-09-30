// ===========================================
// BLOG SEO HELPER
// Applies page-level title, meta, canonical, Open Graph and JSON-LD
// for the blog pages, and restores the site defaults from index.html
// when the visitor navigates away.
// ===========================================

export const SITE_URL = "https://sansonfloorings.com";
const SEO_ATTR = "data-blog-seo";
// Tags written into the static HTML by scripts/prerender-blogs.js.
// They carry the site default in data-default-content so the defaults
// can be restored when the visitor navigates to a non-blog page.
const PRERENDER_ATTR = "data-prerender-seo";
const DEFAULT_ATTR = "data-default-content";

const absoluteUrl = (path) =>
  path && path.startsWith("http") ? path : `${SITE_URL}${path || ""}`;

export function applyBlogSeo({ title, description, path, image, type, jsonLd = [] }) {
  const head = document.head;
  const restore = [];

  // Structured data from the static HTML is replaced by the live copy below.
  head
    .querySelectorAll(`script[${PRERENDER_ATTR}]`)
    .forEach((el) => el.remove());

  const previousTitle =
    document.documentElement.getAttribute("data-default-title") ||
    document.title;
  document.title = title;
  restore.push(() => (document.title = previousTitle));

  const setTag = (selector, create, attr, value) => {
    if (!value) return;
    let el = head.querySelector(selector);
    if (el) {
      const previous = el.hasAttribute(DEFAULT_ATTR)
        ? el.getAttribute(DEFAULT_ATTR)
        : el.getAttribute(attr);
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

export function buildBlogListingSeo(blogs) {
  const sorted = [...blogs].sort((a, b) =>
    b.publishedDate.localeCompare(a.publishedDate)
  );
  return {
    title: "Blogs | GAIA by Sanson Floorings — Flooring & Acoustic Insights",
    description:
      "Ideas, guides and trends on carpet tiles, broadloom carpets, acoustic PET panels and artificial grass from GAIA by Sanson Floorings, New Delhi.",
    path: "/blogs",
    image: "/Images/Blogs/BlogsBannerImage.webp",
    type: "website",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "GAIA by Sanson Floorings Blog",
        url: `${SITE_URL}/blogs`,
        inLanguage: "en-IN",
        publisher: {
          "@type": "Organization",
          name: "GAIA by Sanson Floorings",
          url: `${SITE_URL}/`,
        },
        blogPost: sorted.map((blog) => ({
          "@type": "BlogPosting",
          headline: blog.title,
          url: `${SITE_URL}/blogs/${blog.slug}`,
          datePublished: blog.publishedDate,
          image: `${SITE_URL}${blog.ogImage || blog.coverImage}`,
        })),
      },
    ],
  };
}
