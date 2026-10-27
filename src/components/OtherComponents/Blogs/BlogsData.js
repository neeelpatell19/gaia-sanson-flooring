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
    id: 27,
    slug: "auditorium-acoustics",
    title: "Auditorium Acoustics: How to Design a Hall for Clear Speech",
    seoTitle: "Auditorium Acoustics: Design a Hall for Clear Speech | GAIA",
    metaDescription:
      "Auditorium acoustics: why halls echo, where to place wall and ceiling absorption, reverberation for speech, seats and carpet, and a checklist for halls.",
    excerpt:
      "Reflect at the front, absorb at the back. How to make every row of an auditorium or seminar hall hear clearly.",
    category: "Acoustic Panels",
    cluster: "room-acoustics",
    tags: ["Acoustics", "Auditoriums", "Education"],
    author: "GAIA by Sanson Floorings",
    location: "New Delhi",
    publishedDate: "2026-10-27",
    readTime: "6 min read",
    coverImage:
      "/Images/Blogs/auditorium-acoustics/hero-conference-hall-vertical-acoustic-panels.webp",
    coverImageAlt:
      "Conference hall with a long white table and black chairs in front of a wall of tall, dark vertical acoustic panels under linear lights",
    ogImage:
      "/Images/Blogs/auditorium-acoustics/og-auditorium-acoustics.jpg",
    relatedProduct: {
      name: "Acoustic PET Panels",
      path: "/categories/acoustic-tiles",
    },
    faqs: [
      {
        question: "Why does the microphone boom in our hall?",
        answer:
          "Usually because the hall is too reverberant, so the amplified sound keeps reflecting and builds up. Absorbing the rear and side walls lets the system run at a lower level and sound clearer.",
      },
      {
        question: "Can an existing auditorium be treated without rebuilding it?",
        answer:
          "Yes. Panels fix to the existing walls and absorbers hang from the existing ceiling, so most work can be scheduled between events.",
      },
    ],
  },
  {
    id: 26,
    slug: "what-is-nrc-noise-reduction-coefficient",
    title: "What Is NRC? The Noise Reduction Coefficient Explained",
    seoTitle: "What Is NRC? Noise Reduction Coefficient Explained | GAIA",
    metaDescription:
      "NRC explained: what the noise reduction coefficient measures, how it is calculated, what a good rating is, NRC vs SAA and αw, and what NRC does not tell you.",
    excerpt:
      "One number from 0 to 1 for how much sound a surface absorbs. How it is measured, what a good rating is, and how to compare products fairly.",
    category: "Acoustic Panels",
    cluster: "acoustic-panels",
    tags: ["Acoustics", "NRC", "Acoustic Panels"],
    author: "GAIA by Sanson Floorings",
    location: "New Delhi",
    publishedDate: "2026-10-27",
    readTime: "6 min read",
    coverImage:
      "/Images/Blogs/what-is-nrc-noise-reduction-coefficient/hero-green-open-cell-acoustic-ceiling.webp",
    coverImageAlt:
      "Open-plan space with a green open cell acoustic ceiling grid above long planters of tropical plants and tall windows",
    ogImage:
      "/Images/Blogs/what-is-nrc-noise-reduction-coefficient/og-what-is-nrc-noise-reduction-coefficient.jpg",
    relatedProduct: {
      name: "Acoustic PET Panels",
      path: "/categories/acoustic-tiles",
    },
    faqs: [
      {
        question: "Is a higher NRC always better?",
        answer:
          "For absorbing echo, generally yes, but placement and coverage matter as much. A room can also be over-treated, which leaves it sounding dull and lifeless.",
      },
      {
        question: "What is the NRC of carpet?",
        answer:
          "It varies with pile, backing and underlay. Carpet on a hard floor usually falls in the lower part of the scale, which is why it helps a room but rarely fixes an echo on its own.",
      },
      {
        question: "Does NRC measure soundproofing?",
        answer:
          "No. NRC measures absorption within a room. Sound passing through walls and doors is rated separately, with measures such as STC or Rw.",
      },
    ],
  },
  {
    id: 25,
    slug: "carpet-tiles-for-home",
    title: "Carpet Tiles for Home: Which Rooms They Suit and How to Choose",
    seoTitle: "Carpet Tiles for Home: Rooms, Pros and Choosing | GAIA",
    metaDescription:
      "Are carpet tiles good for homes? Which rooms suit them, laying over marble or vitrified tile, carpet tiles vs rugs, children and pets, and how to choose.",
    excerpt:
      "Warm, quiet and repairable one piece at a time. Where carpet tiles work in an Indian home, and where a hard floor is still better.",
    category: "Carpet Tiles",
    cluster: "flooring-choices",
    tags: ["Carpet Tiles", "Home Flooring", "Interiors"],
    author: "GAIA by Sanson Floorings",
    location: "New Delhi",
    publishedDate: "2026-10-27",
    readTime: "6 min read",
    coverImage:
      "/Images/Blogs/carpet-tiles-for-home/hero-nevada-carpet-tiles-living-room.webp",
    coverImageAlt:
      "Living room with a pink velvet armchair, a navy armchair, a pouffe and a lit fireplace on light grey textured carpet tiles",
    ogImage:
      "/Images/Blogs/carpet-tiles-for-home/og-carpet-tiles-for-home.jpg",
    relatedProduct: {
      name: "Carpet Tiles",
      path: "/categories/carpet-tiles",
    },
    faqs: [
      {
        question: "Are carpet tiles warm in winter?",
        answer:
          "Yes. A textile floor feels far warmer underfoot than marble or vitrified tile, which is why bedrooms and lounges in North Indian homes benefit most.",
      },
      {
        question: "Can carpet tiles be taken up when we move?",
        answer:
          "Often they can be lifted, though how easily depends on the fixing used. If you are renting, tell us at the start so we can plan the installation with that in mind.",
      },
      {
        question: "Do carpet tiles suit a ground-floor room?",
        answer:
          "Yes, provided the floor is dry. Where rising damp or seepage is a risk, deal with it first, or choose a hard floor for that room.",
      },
    ],
  },
  {
    id: 24,
    slug: "types-of-artificial-grass",
    title: "Types of Artificial Grass: Which One Do You Need?",
    seoTitle: "Types of Artificial Grass: Which Do You Need? | GAIA",
    metaDescription:
      "The four types of artificial grass explained: landscape grass, curly grass, sports grass and MultiTurf, with a chooser for homes, terraces, fields and courts.",
    excerpt:
      "Landscape, curly, sports and MultiTurf look alike in photographs and behave very differently. Choose by what the surface is for.",
    category: "Artificial Grass",
    cluster: "outdoor-living",
    tags: ["Artificial Grass", "Landscape Grass", "Sports Turf"],
    author: "GAIA by Sanson Floorings",
    location: "New Delhi",
    publishedDate: "2026-10-27",
    readTime: "10 min read",
    coverImage:
      "/Images/Blogs/types-of-artificial-grass/hero-rolls-of-artificial-grass.webp",
    coverImageAlt:
      "Rolls of thick green artificial grass laid in a row beside a low timber fence",
    ogImage:
      "/Images/Blogs/types-of-artificial-grass/og-types-of-artificial-grass.jpg",
    relatedProduct: {
      name: "Artificial Grass",
      path: "/categories/artificial-multiturf",
    },
    faqs: [
      {
        question: "What is the difference between artificial grass and artificial turf?",
        answer:
          "The terms overlap. \"Artificial grass\" usually means landscaping products for homes and gardens; \"artificial turf\" or \"sports turf\" usually means surfaces built for play.",
      },
      {
        question: "Can landscape grass be used for sports?",
        answer:
          "For casual play in a garden, yes. For regular football, tennis or badminton, sports grass or MultiTurf gives a more consistent, harder-wearing surface.",
      },
      {
        question: "What is the best artificial grass for a balcony?",
        answer:
          "A short-pile landscape grass, which is easy to sweep and stands up under furniture. Curly grass works where a textured, decorative layer suits the design.",
      },
    ],
  },
  {
    id: 23,
    slug: "best-flooring-for-office",
    title: "Best Flooring for Offices in India: A Zone-by-Zone Guide",
    seoTitle: "Best Flooring for Offices in India: Zone Guide | GAIA",
    metaDescription:
      "The best flooring for an office in India, zone by zone: carpet tiles, broadloom and hard floors compared, with a zone map, raised floors and life costs.",
    excerpt:
      "Carpet tiles for the working floor, a hard floor where water arrives, broadloom where the design is bespoke. The whole office, zone by zone.",
    category: "Carpet Tiles",
    cluster: "flooring-choices",
    tags: ["Office Flooring", "Carpet Tiles", "Broadloom"],
    author: "GAIA by Sanson Floorings",
    location: "New Delhi",
    publishedDate: "2026-10-27",
    readTime: "10 min read",
    coverImage:
      "/Images/Blogs/best-flooring-for-office/hero-open-plan-office-carpet.webp",
    coverImageAlt:
      "Open-plan office with two rows of timber workstations and black mesh chairs on light grey patterned carpet, beside tall windows",
    ogImage:
      "/Images/Blogs/best-flooring-for-office/og-best-flooring-for-office.jpg",
    relatedProduct: {
      name: "Carpet Tiles",
      path: "/categories/carpet-tiles",
    },
    faqs: [
      {
        question: "What is the most durable flooring for an office?",
        answer:
          "Durability depends on how a floor is used and maintained. In work areas, carpet tiles last well because worn pieces in busy routes can be replaced individually; in wet areas, vinyl and vitrified tile cope best.",
      },
      {
        question: "Is carpet hygienic for an office?",
        answer:
          "Yes, when it is vacuumed regularly, spills are dealt with the same day and the floor is deep-cleaned on schedule. A written routine for each zone keeps it that way.",
      },
      {
        question: "What flooring is best for an office reception?",
        answer:
          "A hard floor and matting at the door, then carpet in the waiting area. Broadloom suits a reception built around a bespoke design; carpet tiles suit one that may change.",
      },
    ],
  },
  {
    id: 20,
    slug: "home-theatre-acoustics",
    title: "Home Theatre Acoustics: Where to Put Acoustic Panels",
    seoTitle: "Home Theatre Acoustics: Where to Put Panels | GAIA",
    metaDescription:
      "Home theatre acoustics: finding first reflection points, treating the rear wall and ceiling, handling bass, choosing panel colours and keeping sound in.",
    excerpt:
      "Side-wall reflection points, the rear wall and the ceiling. Where acoustic panels do most for a home theatre or media room.",
    category: "Acoustic Panels",
    cluster: "room-acoustics",
    tags: ["Acoustics", "Home Theatre", "Acoustic Panels"],
    author: "GAIA by Sanson Floorings",
    location: "New Delhi",
    publishedDate: "2026-10-26",
    readTime: "6 min read",
    coverImage:
      "/Images/Blogs/home-theatre-acoustics/hero-living-room-geometric-acoustic-wall.webp",
    coverImageAlt:
      "Living room with a green sofa and striped rug in front of a wall of geometric acoustic panels in orange, mustard and navy",
    ogImage:
      "/Images/Blogs/home-theatre-acoustics/og-home-theatre-acoustics.jpg",
    relatedProduct: {
      name: "Acoustic PET Panels",
      path: "/categories/acoustic-tiles",
    },
    faqs: [
      {
        question: "How much treatment does a media room need?",
        answer:
          "A small media room often starts with a panel at each side-wall reflection point, several across the rear wall and one overhead, then adds corner treatment for bass if the room still booms.",
      },
      {
        question: "Can acoustic panels be used in a living-room home theatre?",
        answer:
          "Yes. Printed, grooved and fluted panels look like a designed feature wall, so a living room can be treated without looking like a studio.",
      },
    ],
  },
  {
    id: 19,
    slug: "choosing-carpet-tile-colours-for-office",
    title: "How to Choose Carpet Tile Colours for an Office",
    seoTitle: "How to Choose Carpet Tile Colours for an Office | GAIA",
    metaDescription:
      "Choosing carpet tile colours for an office: colours that hide dirt, light or dark floors, zoning with colour, brand colours and a three-layer colour plan.",
    excerpt:
      "A forgiving base, a zone colour and a small accent. A simple method for choosing office carpet colours that last.",
    category: "Carpet Tiles",
    cluster: "flooring-choices",
    tags: ["Carpet Tiles", "Office Design", "Colour"],
    author: "GAIA by Sanson Floorings",
    location: "New Delhi",
    publishedDate: "2026-10-26",
    readTime: "6 min read",
    coverImage:
      "/Images/Blogs/choosing-carpet-tile-colours-for-office/hero-carpet-tiles-colour-blocks-lounge.webp",
    coverImageAlt:
      "Office lounge with a green sofa and two people talking, on carpet tiles in blocks of orange, grey and green beneath pendant lights",
    ogImage:
      "/Images/Blogs/choosing-carpet-tile-colours-for-office/og-choosing-carpet-tile-colours-for-office.jpg",
    relatedProduct: {
      name: "Carpet Tiles",
      path: "/categories/carpet-tiles",
    },
    faqs: [
      {
        question: "Why is grey so common for office carpet?",
        answer:
          "Because grey in its many shades sits well with most furniture and hides soil. Blended greys with a warm or blue undertone avoid the flat look of a single plain grey.",
      },
      {
        question: "Can carpet tiles of different colours be mixed in one layout?",
        answer:
          "Yes. Tiles of the same collection and size can be mixed freely, from a simple checkerboard to blocks and random scatters.",
      },
    ],
  },
  {
    id: 18,
    slug: "restaurant-acoustics",
    title: "Restaurant Acoustics: How to Make a Dining Room Less Noisy",
    seoTitle: "Restaurant Acoustics: Make a Dining Room Less Noisy | GAIA",
    metaDescription:
      "Restaurant acoustics: why dining rooms get loud, where to put ceiling and wall treatment, whether to carpet, and a room-by-room acoustic plan.",
    excerpt:
      "Guests talk louder to be heard, and the room gets louder still. How to break the cycle without losing the buzz.",
    category: "Acoustic Panels",
    cluster: "hospitality-spaces",
    tags: ["Acoustics", "Restaurants", "Hospitality"],
    author: "GAIA by Sanson Floorings",
    location: "New Delhi",
    publishedDate: "2026-10-26",
    readTime: "6 min read",
    coverImage:
      "/Images/Blogs/restaurant-acoustics/hero-cafe-long-table-wave-acoustic-ceiling.webp",
    coverImageAlt:
      "Long timber table with red stools under a ceiling of yellow wave-shaped acoustic baffles, in a bright room with timber floors",
    ogImage:
      "/Images/Blogs/restaurant-acoustics/og-restaurant-acoustics.jpg",
    relatedProduct: {
      name: "Acoustic PET Panels",
      path: "/categories/acoustic-tiles",
    },
    faqs: [
      {
        question: "Can acoustic treatment be added to a restaurant that is already open?",
        answer:
          "Yes. Wall panels and suspended ceiling elements can usually be installed outside service hours, without closing the restaurant.",
      },
      {
        question: "Do ceiling baffles get in the way of sprinklers and air-conditioning?",
        answer:
          "Not when they are planned together. Baffles and clouds are set out around sprinklers, lights and air outlets on a coordinated ceiling drawing, so every service keeps working.",
      },
    ],
  },
  {
    id: 17,
    slug: "artificial-grass-on-terrace",
    title: "Artificial Grass on a Terrace or Rooftop: What to Check First",
    seoTitle: "Artificial Grass on a Terrace or Rooftop | GAIA",
    metaDescription:
      "Artificial grass on a terrace or rooftop: protect the waterproofing, keep rainwater outlets clear, secure the edges against wind, and inspect the roof first.",
    excerpt:
      "Waterproofing, drainage and wind decide how a rooftop lawn goes down. What to inspect before the grass arrives.",
    category: "Artificial Grass",
    cluster: "outdoor-living",
    tags: ["Artificial Grass", "Terrace", "Landscape Grass"],
    author: "GAIA by Sanson Floorings",
    location: "New Delhi",
    publishedDate: "2026-10-26",
    readTime: "6 min read",
    coverImage:
      "/Images/Blogs/artificial-grass-on-terrace/hero-rooftop-terrace-lawn-illustration.webp",
    coverImageAlt:
      "Illustration of a rooftop terrace with an artificial lawn, planters along the parapet and water tanks on a raised platform",
    ogImage:
      "/Images/Blogs/artificial-grass-on-terrace/og-artificial-grass-on-terrace.jpg",
    relatedProduct: {
      name: "Landscape Grass",
      path: "/artificial-grass/landscape-grass",
    },
    faqs: [
      {
        question: "Is artificial grass heavy for a roof?",
        answer:
          "No. It weighs far less than a soil lawn, which needs a deep, wet growing bed. Heavy planters, water features and built-in furniture are the items to check with a structural engineer.",
      },
      {
        question: "Can artificial grass be lifted when the roof needs repairs?",
        answer:
          "Yes, if it was laid without fixings through the waterproofing. The affected area is rolled back, repaired and relaid.",
      },
      {
        question: "Do I need permission to lay grass on a shared terrace?",
        answer:
          "Often, yes. Where the roof is common property, check with the housing society or building management before work starts.",
      },
    ],
  },
  {
    id: 16,
    slug: "how-to-clean-carpet-tiles",
    title: "How to Clean Carpet Tiles: Daily Care, Stains and Deep Cleaning",
    seoTitle: "How to Clean Carpet Tiles: Stains and Deep Cleaning | GAIA",
    metaDescription:
      "How to clean carpet tiles: vacuuming by traffic, removing stains, hot-water extraction, replacing a damaged tile, and a cleaning schedule for each area.",
    excerpt:
      "Vacuum by traffic, blot spills from the edge inwards, deep-clean on a calendar and swap any tile that will not come clean.",
    category: "Carpet Tiles",
    cluster: "flooring-choices",
    tags: ["Carpet Tiles", "Maintenance", "Office Flooring"],
    author: "GAIA by Sanson Floorings",
    location: "New Delhi",
    publishedDate: "2026-10-26",
    readTime: "7 min read",
    coverImage:
      "/Images/Blogs/how-to-clean-carpet-tiles/hero-carpet-tiles-office-cafe.webp",
    coverImageAlt:
      "Office café with red and timber chairs around a high table on grey carpet tiles laid in a checked pattern",
    ogImage:
      "/Images/Blogs/how-to-clean-carpet-tiles/og-how-to-clean-carpet-tiles.jpg",
    relatedProduct: {
      name: "Carpet Tiles",
      path: "/categories/carpet-tiles",
    },
    faqs: [
      {
        question: "Can you mop carpet tiles?",
        answer:
          "No. Mopping leaves too much water in the pile. Vacuum regularly, spot-clean with a cloth, and leave wet cleaning to hot-water extraction equipment that removes the moisture again.",
      },
      {
        question: "Can carpet tiles be cleaned with a steam cleaner?",
        answer:
          "Professional hot-water extraction, often called steam cleaning, is the standard deep-cleaning method. The key is that the floor is dry within 24 hours.",
      },
    ],
  },
  {
    id: 15,
    slug: "classroom-acoustics",
    title: "Classroom Acoustics: Why Children Struggle to Hear and How to Fix It",
    seoTitle: "Classroom Acoustics: How to Fix Echo in a Classroom | GAIA",
    metaDescription:
      "Classroom acoustics explained: the ANSI S12.60 targets, which surfaces to treat first, carpet in classrooms and a treatment checklist for schools.",
    excerpt:
      "Reverberation blurs a teacher's words before they reach the back row. The targets, the surfaces to treat first and a checklist for schools.",
    category: "Acoustic Panels",
    cluster: "room-acoustics",
    tags: ["Acoustics", "Education", "Acoustic Panels"],
    author: "GAIA by Sanson Floorings",
    location: "New Delhi",
    publishedDate: "2026-10-26",
    readTime: "7 min read",
    coverImage:
      "/Images/Blogs/classroom-acoustics/hero-library-acoustic-open-cell-ceiling.webp",
    coverImageAlt:
      "Library aisle between white bookshelves, with a green lounge chair, under a grid of wavy green acoustic ceiling panels",
    ogImage:
      "/Images/Blogs/classroom-acoustics/og-classroom-acoustics.jpg",
    relatedProduct: {
      name: "Acoustic PET Panels",
      path: "/categories/acoustic-tiles",
    },
    faqs: [
      {
        question: "How many acoustic panels does a classroom need?",
        answer:
          "It depends on the room's volume and finishes. A typical classroom with a hard ceiling usually needs absorption over most of the ceiling plus the rear wall to approach the 0.6-second target.",
      },
      {
        question: "Do acoustic panels stop sound from the next classroom?",
        answer:
          "No. Panels only change how sound behaves inside the classroom. Sound passing between classrooms is controlled by the partition wall, the door and any gaps above the ceiling.",
      },
    ],
  },
  {
    id: 14,
    slug: "what-is-greenpro-certification",
    title: "What Is GreenPro Certification? What It Means for Flooring and Acoustic Panels",
    seoTitle: "What Is GreenPro Certification? Flooring and Panels | GAIA",
    metaDescription:
      "GreenPro certification explained: India's CII ecolabel for building products, what it assesses, how to check a certificate, and which GAIA products carry it.",
    excerpt:
      "An independent Indian ecolabel, a named product and plant, and an expiry date. What GreenPro proves, and how to check a certificate.",
    category: "Sustainability",
    cluster: "sustainable-interiors",
    tags: ["Sustainability", "GreenPro", "Acoustic Panels"],
    author: "GAIA by Sanson Floorings",
    location: "New Delhi",
    publishedDate: "2026-10-21",
    readTime: "4 min read",
    coverImage:
      "/Images/Blogs/what-is-greenpro-certification/hero-gaia-acoustic-panel-wall-meeting-room.webp",
    coverImageAlt:
      "Meeting room with a vertically grooved sand-coloured acoustic wall and a carved panel showing Krishna playing the flute above the words GAIA ACOUSTICS",
    ogImage:
      "/Images/Blogs/what-is-greenpro-certification/og-what-is-greenpro-certification.jpg",
    relatedProduct: {
      name: "Acoustic PET Panels",
      path: "/categories/acoustic-tiles",
    },
    faqs: [
      {
        question: "Is GreenPro certification mandatory in India?",
        answer:
          "No. It is voluntary. Manufacturers apply for it, and buyers or project teams choose whether to require it.",
      },
      {
        question: "How long is a GreenPro certificate valid?",
        answer:
          "Each certificate states its own expiry date, so check it against your supply date using the checklist above.",
      },
    ],
  },
  {
    id: 13,
    slug: "carpet-tiles-vs-broadloom",
    title: "Carpet Tiles vs Broadloom Carpet: Which Is Better for Offices and Hotels?",
    seoTitle: "Carpet Tiles vs Broadloom: Offices and Hotels | GAIA",
    metaDescription:
      "Carpet tiles vs broadloom carpet: how they differ on installation, repairs, looks and cost over time, with a four-question chooser and a room-by-room list.",
    excerpt:
      "One is a kit of modular pieces, the other a wide roll laid wall to wall. Four questions settle most rooms.",
    category: "Carpet Tiles",
    cluster: "flooring-choices",
    tags: ["Carpet Tiles", "Broadloom", "Hotels"],
    author: "GAIA by Sanson Floorings",
    location: "New Delhi",
    publishedDate: "2026-10-21",
    readTime: "4 min read",
    coverImage:
      "/Images/Blogs/carpet-tiles-vs-broadloom/hero-broadloom-and-carpet-tile-office.webp",
    coverImageAlt:
      "Corner workstation with a grey chair on a charcoal broadloom carpet with a dotted swirl pattern, beside a plant",
    ogImage:
      "/Images/Blogs/carpet-tiles-vs-broadloom/og-carpet-tiles-vs-broadloom.jpg",
    relatedProduct: {
      name: "Broadloom Carpets",
      path: "/categories/broadloom-carpets",
    },
    faqs: [
      {
        question: "Can carpet tiles and broadloom be used in the same building?",
        answer:
          "Yes, and it is common. A hotel might use broadloom in corridors and guest rooms with carpet tiles in back-of-house offices; an office might use tiles on the floor plate and broadloom in the boardroom.",
      },
      {
        question: "Can broadloom be laid on a raised access floor?",
        answer:
          "It is rarely a good idea, because the carpet would have to be cut or lifted to reach the panels beneath. Carpet tiles are the usual choice there.",
      },
    ],
  },
  {
    id: 12,
    slug: "broadloom-carpet-for-hotels",
    title: "Broadloom Carpet for Hotels: Corridors, Guest Rooms and Banquet Halls",
    seoTitle: "Broadloom Carpet for Hotels: Corridors and Rooms | GAIA",
    metaDescription:
      "Broadloom carpet for hotels: what works in corridors, guest rooms and banquet halls, how to brief a custom design, and how to keep it looking new.",
    excerpt:
      "Corridors, guest rooms and ballrooms each ask something different of a carpet. A brief that settles pattern, colour and cleaning before sampling.",
    category: "Broadloom Carpets",
    cluster: "hospitality-spaces",
    tags: ["Broadloom Carpets", "Hotel Flooring", "Hospitality"],
    author: "GAIA by Sanson Floorings",
    location: "New Delhi",
    publishedDate: "2026-10-21",
    readTime: "5 min read",
    coverImage:
      "/Images/Blogs/broadloom-carpet-for-hotels/hero-grey-broadloom-carpet-lounge-chair.webp",
    coverImageAlt:
      "Grey curved armchair and small side table on a gold and olive broadloom carpet with a fine geometric line pattern",
    ogImage:
      "/Images/Blogs/broadloom-carpet-for-hotels/og-broadloom-carpet-for-hotels.jpg",
    relatedProduct: {
      name: "Broadloom Carpets",
      path: "/categories/broadloom-carpets",
    },
    faqs: [
      {
        question: "Can broadloom carpet be used on hotel stairs?",
        answer:
          "Yes. Broadloom can be cut and fitted to stair treads and risers, so a staircase can continue the corridor design. Fitting details depend on the stair, and we agree them at survey.",
      },
      {
        question: "Can a hotel carpet be made in our brand colours?",
        answer:
          "Yes. GAIA broadloom is made to order, so colour, pattern, texture and fibre can follow the brand palette and be approved on a sample before production.",
      },
      {
        question: "Who should sign off a hotel carpet design?",
        answer:
          "The design team, the operator and housekeeping. Design approves pattern and colour, the operator checks it against brand standards, and housekeeping confirms it suits the cleaning routine.",
      },
    ],
  },
  {
    id: 11,
    slug: "artificial-grass-vs-real-grass",
    title: "Artificial Grass vs Real Grass in India: Water, Upkeep and Where Each Works",
    seoTitle: "Artificial Grass vs Real Grass in India | GAIA",
    metaDescription:
      "Artificial grass vs real grass in India: water, maintenance, heat and cost over time compared, with a zone-by-zone guide to where each works best.",
    excerpt:
      "A lawn needs sun, soil, water and weekly care; artificial grass needs none of them but brings its own trade-offs. Decide zone by zone.",
    category: "Artificial Grass",
    cluster: "outdoor-living",
    tags: ["Artificial Grass", "Landscape Grass", "Gardens"],
    author: "GAIA by Sanson Floorings",
    location: "New Delhi",
    publishedDate: "2026-10-21",
    readTime: "6 min read",
    coverImage:
      "/Images/Blogs/artificial-grass-vs-real-grass/hero-artificial-grass-cafe-lawn.webp",
    coverImageAlt:
      "Outdoor café tables and chairs on a bright green artificial lawn in a glazed rooftop space",
    ogImage:
      "/Images/Blogs/artificial-grass-vs-real-grass/og-artificial-grass-vs-real-grass.jpg",
    relatedProduct: {
      name: "Landscape Grass",
      path: "/artificial-grass/landscape-grass",
    },
    faqs: [
      {
        question: "Is artificial grass eco-friendly?",
        answer:
          "It saves water, fertiliser and mowing, but it is a plastic product that does not cool or absorb rain the way a living lawn does. It is the greener choice where a lawn would need heavy watering or would not survive, and the less green one where real grass grows easily.",
      },
      {
        question: "Can I mix real and artificial grass in one garden?",
        answer:
          "Yes. Many gardens keep a real lawn in the sunny open area and use artificial grass under trees, along paths and on the terrace, with an edging strip where the two meet.",
      },
      {
        question: "Can artificial grass be laid on soil?",
        answer:
          "Yes, on a properly prepared base. The soil is levelled and compacted, a free-draining sub-base is added and the grass is fixed at the edges. We advise on the base for your site.",
      },
    ],
  },
  {
    id: 10,
    slug: "how-many-carpet-tiles-do-i-need",
    title: "How Many Carpet Tiles Do I Need? Quantity and Wastage Guide",
    seoTitle: "How Many Carpet Tiles Do I Need? Quantity Guide | GAIA",
    metaDescription:
      "How many carpet tiles do you need? Count tiles across and along the room, add 5% spares, and divide by 20 per box. Worked example and layout allowances.",
    excerpt:
      "Count tiles, not square metres, add spare stock, and order everything in one batch. A worked example for a 6.2 × 4.3 m room.",
    category: "Carpet Tiles",
    cluster: "flooring-choices",
    tags: ["Carpet Tiles", "Carpet Planks", "Installation"],
    author: "GAIA by Sanson Floorings",
    location: "New Delhi",
    publishedDate: "2026-10-21",
    readTime: "6 min read",
    coverImage:
      "/Images/Blogs/how-many-carpet-tiles-do-i-need/hero-carpet-tiles-restaurant-floor.webp",
    coverImageAlt:
      "Restaurant with pink upholstered chairs, round tables and framed pictures on a light grey carpet tile floor",
    ogImage:
      "/Images/Blogs/how-many-carpet-tiles-do-i-need/og-how-many-carpet-tiles-do-i-need.jpg",
    relatedProduct: {
      name: "Carpet Tiles",
      path: "/categories/carpet-tiles",
    },
    faqs: [
      {
        question: "How many tiles does a long corridor need?",
        answer:
          "Count it like any other rectangle. A corridor 1.6 m wide and 20 m long takes 4 tiles across and 40 along, or 160 tiles. With spares, that is nine boxes.",
      },
      {
        question: "How many carpet tiles do I need for a 10 × 10 ft room?",
        answer:
          "A 10 × 10 ft room is about 3.05 × 3.05 m, which takes 7 tiles each way, or 49 tiles. With a few spares, that is three boxes.",
      },
    ],
  },
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
    publishedDate: "2026-10-21",
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
    publishedDate: "2026-10-21",
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
    publishedDate: "2026-10-21",
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
    publishedDate: "2026-10-21",
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
    publishedDate: "2026-10-21",
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
