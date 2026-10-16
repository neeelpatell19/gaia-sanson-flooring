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
    id: 5,
    slug: "how-to-reduce-echo-in-a-room",
    title: "How to Reduce Echo in a Room: What Actually Works",
    seoTitle: "How to Reduce Echo in a Room: What Works | GAIA",
    metaDescription:
      "How to reduce echo in a room: treat the facing walls first, then the ceiling and floor. A clap-test checklist, a treatment diagram and what absorbs sound.",
    excerpt:
      "Echo comes from hard, parallel surfaces. Which surfaces to treat first, what absorbs sound, and how panels, ceiling absorbers and carpet work together.",
    category: "Acoustic Panels",
    cluster: "room-acoustics",
    tags: ["Acoustics", "Acoustic Panels", "Carpet Tiles"],
    author: "GAIA by Sanson Floorings",
    location: "New Delhi",
    publishedDate: "2026-10-16",
    readTime: "9 min read",
    coverImage:
      "/Images/Blogs/how-to-reduce-echo-in-a-room/hero-home-office-geometric-acoustic-wall-panels.webp",
    coverImageAlt:
      "Wall of teal, mustard, orange and grey geometric acoustic panels with a leafy plant in front",
    ogImage:
      "/Images/Blogs/how-to-reduce-echo-in-a-room/og-how-to-reduce-echo-in-a-room.jpg",
    relatedProduct: {
      name: "Acoustic PET Panels",
      path: "/categories/acoustic-tiles",
    },
    faqs: [
      {
        question: "Do plants reduce echo?",
        answer:
          "Only slightly. Large, leafy plants scatter some sound and soften a corner, but they absorb far less than panels, carpet or curtains of the same size.",
      },
      {
        question: "Why does my new house echo so much?",
        answer:
          "New homes are finished in tile, plaster and glass and have little soft furniture at first. With every surface reflecting, echo is at its worst before rugs, curtains and sofas arrive.",
      },
    ],
  },
  {
    id: 8,
    slug: "noise-reduction-open-plan-office",
    title: "Noise Reduction in Open-Plan Offices: Seven Fixes That Work",
    seoTitle: "Noise Reduction in Open-Plan Offices: 7 Fixes | GAIA",
    metaDescription:
      "Noise reduction in an open-plan office: absorb speech at the ceiling and walls, soften the floor and zone loud and quiet work. Seven fixes, ranked.",
    excerpt:
      "Open-plan noise is reflected speech. Seven fixes, from quick wins to structural changes, to make an open office calmer without putting the walls back up.",
    category: "Acoustic Panels",
    cluster: "room-acoustics",
    tags: ["Workplace", "Acoustics", "Carpet Tiles"],
    author: "GAIA by Sanson Floorings",
    location: "New Delhi",
    publishedDate: "2026-10-16",
    readTime: "5 min read",
    coverImage:
      "/Images/Blogs/noise-reduction-open-plan-office/hero-open-plan-office-ceiling-clouds.webp",
    coverImageAlt:
      "Open-plan office with rows of purple ceiling baffles, suspended red and pink ceiling clouds with built-in lights, free-standing red felt screens and cork stools",
    ogImage:
      "/Images/Blogs/noise-reduction-open-plan-office/og-noise-reduction-open-plan-office.jpg",
    relatedProduct: {
      name: "Acoustic PET Panels",
      path: "/categories/acoustic-tiles",
    },
    faqs: [
      {
        question: "Can acoustic panels carry our brand?",
        answer:
          "Yes. GAIA printed panels can carry your artwork or logo, so a wall can mark out a team area and absorb sound at the same time. Our article on printed acoustic feature walls covers artwork and lighting.",
      },
      {
        question: "Can acoustic panels go on a glass wall?",
        answer:
          "Usually not directly. In glass-walled rooms, treat the solid walls, the ceiling and the floor, or use frame-mounted panels near the glass.",
      },
    ],
  },
  {
    id: 9,
    slug: "acoustic-panels-vs-foam",
    title: "Acoustic Panels vs Acoustic Foam: Which Should You Use?",
    seoTitle: "Acoustic Panels vs Foam: Which Should You Use? | GAIA",
    metaDescription:
      "Acoustic panels vs foam: both absorb sound, but PET panels suit finished interiors and foam suits studios. Compare absorption, mounting, looks and lifespan.",
    excerpt:
      "Both absorb echo. The real difference is where the treatment goes, who sees it, and how long it has to look good.",
    category: "Acoustic Panels",
    cluster: "acoustic-panels",
    tags: ["Acoustic Panels", "PET Panels"],
    author: "GAIA by Sanson Floorings",
    location: "New Delhi",
    publishedDate: "2026-10-16",
    readTime: "5 min read",
    coverImage:
      "/Images/Blogs/acoustic-panels-vs-foam/hero-hexagon-acoustic-wall-panels.webp",
    coverImageAlt:
      "Wall of hexagonal acoustic panels shading from white at the top to charcoal at the bottom",
    ogImage:
      "/Images/Blogs/acoustic-panels-vs-foam/og-acoustic-panels-vs-foam.jpg",
    relatedProduct: {
      name: "Acoustic PET Panels",
      path: "/categories/acoustic-tiles",
    },
    faqs: [
      {
        question: "Are PET acoustic panels better than foam?",
        answer:
          "For finished interiors, usually yes, because they look like a wall finish, last longer in busy rooms and can stand off the wall. Foam remains a reasonable choice for studios and hidden treatment.",
      },
      {
        question: "Do thicker acoustic panels absorb more?",
        answer:
          "Generally yes, especially lower-pitched sound. Standing a panel off the wall has a similar effect, so a slimmer panel on an air gap can outperform a thicker one fixed flat.",
      },
      {
        question: "Can you paint acoustic foam?",
        answer:
          "It is best avoided. Paint seals the open cells that let sound in, so painted foam absorbs less. If colour matters, a panel made in that colour is the better route.",
      },
    ],
  },
  {
    id: 6,
    slug: "carpet-tiles-vs-vinyl-flooring",
    title: "Carpet Tiles vs Vinyl Flooring for Offices: Comfort, Noise, Cost and Upkeep",
    seoTitle: "Carpet Tiles vs Vinyl Flooring for Offices | GAIA",
    metaDescription:
      "Carpet tiles vs vinyl flooring for offices: compare noise, comfort, cleaning and repairs, with a zone-by-zone list of where each floor works best.",
    excerpt:
      "Neither floor wins everywhere. Choose by zone: carpet tiles where people sit and talk, a hard floor where spills and rain come in.",
    category: "Carpet Tiles",
    cluster: "flooring-choices",
    tags: ["Carpet Tiles", "Office Flooring"],
    author: "GAIA by Sanson Floorings",
    location: "New Delhi",
    publishedDate: "2026-10-16",
    readTime: "7 min read",
    coverImage:
      "/Images/Blogs/carpet-tiles-vs-vinyl-flooring/hero-office-desk-patterned-carpet-tiles.webp",
    coverImageAlt:
      "Office desk corner with a grey chair on a dark carpet tile floor patterned with gold triangles, and a plant beside the desk",
    ogImage:
      "/Images/Blogs/carpet-tiles-vs-vinyl-flooring/og-carpet-tiles-vs-vinyl-flooring.jpg",
    relatedProduct: {
      name: "Carpet Tiles",
      path: "/categories/carpet-tiles",
    },
    faqs: [
      {
        question: "Are carpet tiles good for offices?",
        answer:
          "Yes, for desks, meeting rooms, cabins and corridors. They are the quieter, more comfortable choice wherever people sit and talk for long periods.",
      },
      {
        question: "Can carpet tiles be used in a pantry or kitchen area?",
        answer:
          "A hard floor is usually the better choice where spills and wet cleaning are daily events. Use carpet tiles in the surrounding work areas and a transition strip where they meet.",
      },
      {
        question: "Can carpet tiles be laid over an existing vinyl floor?",
        answer:
          "Often, if the existing floor is flat, clean and firmly bonded. Loose or damaged vinyl should come up first. We check the existing floor and the fixing method before quoting.",
      },
    ],
  },
  {
    id: 7,
    slug: "balcony-makeover-ideas-artificial-grass",
    title: "Balcony Makeover Ideas with Artificial Grass",
    seoTitle: "Balcony Makeover Ideas with Artificial Grass | GAIA",
    metaDescription:
      "Balcony makeover ideas with artificial grass: six layouts, which pile height suits a balcony, how to lay it over tiles and a measuring checklist.",
    excerpt:
      "A soft green floor, a few planters and light for the evenings. Six ideas, the right grass for a small space and a checklist before you order.",
    category: "Artificial Grass",
    cluster: "outdoor-living",
    tags: ["Artificial Grass", "Landscape Grass", "Balcony"],
    author: "GAIA by Sanson Floorings",
    location: "New Delhi",
    publishedDate: "2026-10-16",
    readTime: "6 min read",
    coverImage:
      "/Images/Blogs/balcony-makeover-ideas-artificial-grass/hero-artificial-grass-garden-lounge.webp",
    coverImageAlt:
      "Garden lounge with a hanging egg chair, woven basket planters, a grey outdoor sofa and a timber coffee table on a green artificial lawn, with trees behind",
    ogImage:
      "/Images/Blogs/balcony-makeover-ideas-artificial-grass/og-balcony-makeover-ideas-artificial-grass.jpg",
    relatedProduct: {
      name: "Landscape Grass",
      path: "/artificial-grass/landscape-grass",
    },
    faqs: [
      {
        question: "Does artificial grass need watering?",
        answer:
          "No. An occasional rinse removes dust.",
      },
      {
        question: "Can I put plant pots on artificial grass?",
        answer:
          "Yes. Stand them on saucers or pot feet so water drains away instead of sitting in the grass, and move heavy pots now and then so the blades underneath can recover.",
      },
      {
        question: "Does the same advice apply to a terrace?",
        answer:
          "Mostly. A larger terrace can take a taller, lawn-like pile, but drainage, sun and fire safety need the same planning, and the bigger area makes the direction of joins more important.",
      },
    ],
  },
  {
    id: 4,
    slug: "acoustic-panels-air-gap",
    title: "Should Acoustic Panels Have an Air Gap? NRC, Depth and Wall Lights",
    seoTitle: "Acoustic Panels Air Gap: NRC, Depth and Wall Lights | GAIA",
    metaDescription:
      "Should acoustic panels have an air gap? GAIA PET panels go from NRC 0.3 fixed flat to 0.85–0.90 with a gap. How it works and how to plan lights around it.",
    excerpt:
      "An air gap roughly triples what a PET panel absorbs. It also moves every light, switch and socket on the wall, so plan it first.",
    category: "Acoustic Panels",
    cluster: "acoustic-panels",
    tags: ["Acoustic Panels", "NRC", "Installation"],
    author: "GAIA by Sanson Floorings",
    location: "New Delhi",
    publishedDate: "2026-10-05",
    readTime: "6 min read",
    coverImage:
      "/Images/Blogs/acoustic-panels-air-gap/hero-acoustic-ceiling-office.webp",
    coverImageAlt:
      "Executive office with a grey wave-shaped acoustic ceiling, recessed downlights between the curves, a timber desk and a leather armchair",
    ogImage:
      "/Images/Blogs/acoustic-panels-air-gap/og-acoustic-panels-air-gap.jpg",
    relatedProduct: {
      name: "Acoustic PET Panels",
      path: "/categories/acoustic-tiles",
    },
    faqs: [
      {
        question: "Should acoustic panels have an air gap?",
        answer:
          "Where absorption matters, yes. GAIA PET acoustic panels achieve NRC 0.3 fixed directly to the wall and NRC 0.85–0.90 with an air gap behind them.",
      },
      {
        question: "How deep should the air gap be?",
        answer:
          "It depends on the panel thickness and the sound you need to control. Deeper cavities help more with lower frequencies, so the depth is set room by room.",
      },
      {
        question: "Can a wall light be fixed directly onto an acoustic panel?",
        answer:
          "It should not hang on the panel face. Fix the light back to the wall or to a solid mount and bring it through a neat cut-out in the panel.",
      },
    ],
  },
  {
    id: 3,
    slug: "does-artificial-grass-fade-in-the-sun",
    title: "Does Artificial Grass Fade in the Sun? What Indian Summers Do to Turf",
    seoTitle: "Does Artificial Grass Fade in the Sun? | GAIA",
    metaDescription:
      "Does artificial grass fade in the sun? Why UV fades synthetic turf, how GAIA Landscape Grass resists it, and the site factors that make fading faster.",
    excerpt:
      "Every outdoor synthetic surface changes under sunlight. How slowly depends on the yarn, and on the site it is laid on.",
    category: "Artificial Grass",
    cluster: "outdoor-living",
    tags: ["Artificial Grass", "Landscape Grass", "Outdoor"],
    author: "GAIA by Sanson Floorings",
    location: "New Delhi",
    publishedDate: "2026-10-05",
    readTime: "6 min read",
    coverImage:
      "/Images/Blogs/does-artificial-grass-fade-in-the-sun/hero-artificial-grass-close-up.webp",
    coverImageAlt:
      "Close-up of green artificial grass blades at ground level with a softly blurred green background",
    ogImage:
      "/Images/Blogs/does-artificial-grass-fade-in-the-sun/og-does-artificial-grass-fade-in-the-sun.jpg",
    relatedProduct: {
      name: "Landscape Grass",
      path: "/artificial-grass/landscape-grass",
    },
    faqs: [
      {
        question: "Will artificial grass fade in Indian sun?",
        answer:
          "All outdoor artificial grass changes slowly under UV. How quickly depends on how well the yarn is UV-stabilised and on the site: hours of direct sun, reflected glare, use and upkeep.",
      },
      {
        question: "Is GAIA Landscape Grass UV resistant?",
        answer:
          "Yes. Every variant from SFL 20 to SFL 60 uses UV-resistant yarn from Bellinturf, certified to UNE 14836.",
      },
      {
        question: "How many years will the colour last?",
        answer:
          "That depends on the sun, glare, use and care the lawn gets, so no honest figure fits every site. Ask us for the warranty terms and test documentation for the variant you choose.",
      },
    ],
  },
  {
    id: 2,
    slug: "carpet-tiles-vs-carpet-planks",
    title: "Carpet Tiles vs Carpet Planks: Sizes, Layouts and How to Choose",
    seoTitle: "Carpet Tiles vs Carpet Planks: Sizes and Layouts | GAIA",
    metaDescription:
      "Carpet tiles vs carpet planks: GAIA 50 × 50 cm tiles and 25 × 100 cm planks compared on size, coverage, layouts such as herringbone, and which suits your room.",
    excerpt:
      "Tiles are square, planks are long, and each piece covers the same 0.25 m². The real choice is direction, layout and how the floor will change over time.",
    category: "Carpet Tiles",
    cluster: "flooring-choices",
    tags: ["Carpet Tiles", "Carpet Planks", "Layouts"],
    author: "GAIA by Sanson Floorings",
    location: "New Delhi",
    publishedDate: "2026-10-05",
    readTime: "6 min read",
    coverImage:
      "/Images/Blogs/carpet-tiles-vs-carpet-planks/hero-carpet-planks-office-lounge.webp",
    coverImageAlt:
      "Office lounge with grey-brown carpet planks running towards a kitchen counter with bar stools and hanging plants",
    ogImage:
      "/Images/Blogs/carpet-tiles-vs-carpet-planks/og-carpet-tiles-vs-carpet-planks.jpg",
    relatedProduct: {
      name: "Carpet Tiles",
      path: "/categories/carpet-tiles",
    },
    faqs: [
      {
        question: "What size are carpet planks?",
        answer:
          "GAIA carpet planks, including Miami, Signature, Alankrit and Drip, are 25 × 100 cm. GAIA carpet tiles such as Aangan, Shining Glow, Naqsh and Dalaan are 50 × 50 cm.",
      },
      {
        question: "Do carpet planks and carpet tiles cover the same area per box?",
        answer:
          "Yes. Each plank or tile covers 0.25 m² and they come 20 to a box, so one box covers 5 m² in either format.",
      },
      {
        question: "Can carpet tiles be laid in herringbone?",
        answer:
          "No. Herringbone relies on the long, narrow shape of a plank. Square carpet tiles are laid Quarter-turn, Brick, Ashlar or Monolithic instead.",
      },
    ],
  },
  {
    id: 1,
    slug: "printed-acoustic-panels-feature-wall-lighting",
    title: "Printed Acoustic Panels: How to Light a Feature Wall",
    seoTitle: "Printed Acoustic Panels: How to Light a Feature Wall | GAIA",
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
