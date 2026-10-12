// ===========================================
// BLOG SEO HELPERS
// Structured data for the blog listing and the articles. The page head
// itself (title, meta, canonical, Open Graph) is applied for every page by
// src/seo/pages.js through App.vue, so it is also present in the
// pre-rendered HTML.
// ===========================================

import { LINKEDIN_URL, SITE_URL, absoluteUrl } from "../../../seo/site.js";

export { SITE_URL };

export function buildArticleSchemas(blog) {
  const url = `${SITE_URL}/blogs/${blog.slug}`;
  const organization = {
    "@type": "Organization",
    name: "GAIA by Sanson Floorings",
    url: `${SITE_URL}/`,
    logo: { "@type": "ImageObject", url: `${SITE_URL}/Images/GAIA_Logo.png` },
    sameAs: [LINKEDIN_URL],
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
      about: blog.tags.map((name) => ({ "@type": "Thing", name })),
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
    image: "/Images/Blogs/og-blogs.jpg",
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
