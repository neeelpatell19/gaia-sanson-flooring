// ===========================================
// BLOGS DATA
// -------------------------------------------
// To publish a new article:
//   1. Add the article body HTML to ./BlogPosts/<slug>.html
//   2. Add its images to /public/Images/Blogs/<slug>/
//   3. Add an entry below (newest first). The listing page, the article
//      page, the sitemap and the SEO tags all read from this file.
// ===========================================

const BlogsData = [
  {
    id: 1,
    slug: "printed-acoustic-panels-feature-wall-lighting",
    title: "Printed Acoustic Panels: How to Light a Feature Wall",
    seoTitle: "Printed Acoustic Panels: Lighting a Feature Wall | GAIA",
    metaDescription:
      "How to light and fix GAIA Printed Acoustic Panels as a feature wall: wall washing vs grazing, air gaps and NRC, colour under real lighting and planning artwork around 1220 x 2440 mm sheets.",
    excerpt:
      "A printed panel has to carry an image and absorb sound. Lighting decides the first, fixing the second, and both need planning before the artwork is signed off.",
    category: "Acoustic Panels",
    tags: ["Acoustic Panels", "Lighting"],
    author: "GAIA by Sanson Floorings",
    location: "New Delhi",
    publishedDate: "2026-09-28",
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
        question: "Can printed acoustic panels be lit with a wall washer?",
        answer:
          "Yes. Wall washing is usually the better choice for a printed panel because it shows colour and pattern evenly. Fitting positions, clearances and cable routes should be coordinated with the panel layout before installation.",
      },
      {
        question: "Do printed acoustic panels still absorb sound?",
        answer:
          "They are acoustic PET panels, so absorption depends largely on thickness and fixing. GAIA publishes NRC 0.3 for its PET panels fixed directly and NRC 0.85–0.90 with an air gap; confirm the figures for your chosen printed panel.",
      },
      {
        question:
          "What thicknesses are GAIA Printed Acoustic Panels available in?",
        answer: "The catalogue lists 9 mm, 12 mm, 18 mm and 24 mm.",
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
