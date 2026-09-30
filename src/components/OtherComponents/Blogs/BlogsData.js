// ===========================================
// BLOGS DATA
// -------------------------------------------
// To publish a new article:
//   1. Add the article body HTML to ./BlogPosts/<slug>.html
//   2. Add its images to /public/Images/Blogs/<slug>/
//   3. Add an entry below (newest first). The listing page, the article
//      page, the sitemap, the SEO tags and the static (prerendered)
//      article pages all read from this file.
//
// cluster: the topic cluster the article belongs to (short, lowercase,
// hyphenated, e.g. "room-acoustics"). Clusters are open-ended; the live
// register is in the GAIA SEO Authority Playbook. Related articles show
// the same cluster first, then the same category.
// updatedDate (optional, YYYY-MM-DD): set when an article is materially
// revised. It feeds dateModified and the sitemap lastmod.
// ===========================================

const BlogsData = [
  {
    id: 1,
    slug: "printed-acoustic-panels-feature-wall-lighting",
    title: "Printed Acoustic Panels: Custom Designs, Sizes and Installation",
    seoTitle: "Printed Acoustic Panels: Designs, Sizes, Installation | GAIA",
    metaDescription:
      "Custom printed acoustic panels from GAIA: 9–24 mm PET on 1220 × 2440 mm sheets, NRC up to 0.90 and your own artwork, plus how to fix and light them.",
    excerpt:
      "Printed acoustic panels put artwork on a surface that also absorbs sound. What they are, where they work, and how to plan the artwork, fixing and lighting.",
    category: "Acoustic Panels",
    cluster: "acoustic-panels",
    tags: ["Acoustic Panels", "Printed Panels", "Interior Design"],
    author: "GAIA by Sanson Floorings",
    location: "New Delhi",
    publishedDate: "2026-09-28",
    updatedDate: "2026-10-01",
    readTime: "7 min read",
    coverImage:
      "/Images/Blogs/printed-acoustic-panels-feature-wall-lighting/hero-printed-acoustic-panels-feature-wall.webp",
    coverImageAlt:
      "Five pastel printed acoustic panels with lattice, stripe, dot, chevron and cross patterns on a wall above a wooden dining table, with a floor lamp beside a sofa",
    ogImage:
      "/Images/Blogs/printed-acoustic-panels-feature-wall-lighting/og-printed-acoustic-panels-feature-wall.jpg",
    relatedProduct: {
      name: "Acoustic PET Panels",
      path: "/categories/acoustic-tiles",
    },
    faqs: [
      {
        question: "Are printed acoustic panels soundproof?",
        answer:
          "No. Printed acoustic panels absorb sound inside a room and reduce echo. Stopping sound from passing between rooms depends on the construction of the walls, doors and ceiling.",
      },
      {
        question: "Can I print my company logo on acoustic panels?",
        answer:
          "Yes. GAIA printed acoustic panels can carry your own artwork or logo. Plan where panel joints fall and approve colours on a printed sample before production.",
      },
      {
        question: "What sizes do printed acoustic panels come in?",
        answer:
          "GAIA printed acoustic panels come in 9, 12, 18 and 24 mm thicknesses. The standard sheet is 1220 × 2440 mm.",
      },
    ],
  },
];

export const formatBlogDate = (isoDate) =>
  new Date(`${isoDate}T00:00:00`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export const getBlogBySlug = (slug) =>
  BlogsData.find((blog) => blog.slug === slug);

export default BlogsData;
