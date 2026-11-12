// ===========================================
// CARPET TILE DESIGNS
// One entry per design. Each design has its own page at /carpet-tiles/<slug>
// (CarpetTileDesign.vue) and a swatch on /carpet-tiles. src/seo/pages.js
// reads this list for the pre-render, the sitemap and the structured data.
//
// name:       the design's name, shown on the page and used in alt text.
// collection: "Heritage" (the original range) or "GAIA" (the newer range).
// pdf:        the brochure, a /pdfs/GAIA_*.pdf path on our own domain
//             (vercel.json and vite.config.js proxy it from the file bucket),
//             or "" when there is none yet.
// specs:      spec table rows, { label: value }. Only filled rows are shown;
//             the client supplies the values (see SPEC_FIELDS below).
// ===========================================

// The spec table fields for carpet tiles and planks, in display order.
export const SPEC_FIELDS = [
  "Size",
  "Construction",
  "Yarn type",
  "Pile height",
  "Pile weight",
  "Total thickness",
  "Backing",
  "Fire rating",
  "VOC certification",
  "Static",
  "Warranty",
  "Packing",
  "MOQ",
];

const heritage = (name, slug, image, pdf = "") => ({ name, slug, collection: "Heritage", image, pdf, specs: {} });
const gaia = (name, slug, image, pdf = "") => ({ name, slug, collection: "GAIA", image, pdf, specs: {} });

const designs = [
  heritage("Aangan", "aangan", "/Images/CarpetCircleImages/Aangan.png", "/pdfs/GAIA_AANGAN.pdf"),
  heritage("Alankrit", "alankrit", "/Images/CarpetCircleImages/Alankrit.png", "/pdfs/GAIA_ALANKRIT.pdf"),
  heritage("ArchiBrown", "archibrown", "/Images/CarpetCircleImages/Archibrown.png"),
  heritage("Bloxx", "bloxx", "/Images/CarpetCircleImages/bloxx.png"),
  heritage("Dalaan", "dalaan", "/Images/CarpetCircleImages/Dalaan.png", "/pdfs/GAIA_DALAAN.pdf"),
  heritage("Drip", "drip", "/Images/CarpetCircleImages/Drip.png", "/pdfs/GAIA_DRIP.pdf"),
  heritage("Grid Work", "grid-work", "/Images/CarpetCircleImages/Gridwork.png", "/pdfs/GAIA_GRIDWORK.pdf"),
  heritage("Majesty", "majesty", "/Images/CarpetCircleImages/Majesty.png", "/pdfs/GAIA_MAJESTY.pdf"),
  heritage("Miami", "miami", "/Images/Miami.png", "/pdfs/GAIA_MIAMI.pdf"),
  heritage("Naqsh", "naqsh", "/Images/CarpetCircleImages/Naqsh.png", "/pdfs/GAIA_NAQSH.pdf"),
  heritage("Nevada", "nevada", "/Images/CarpetCircleImages/Nevada.png"),
  heritage("Paramount", "paramount", "/Images/CarpetCircleImages/Paramount.png", "/pdfs/GAIA_PARAMOUNT.pdf"),
  heritage("Pinnacle", "pinnacle", "/Images/CarpetCircleImages/Pinnacle.png", "/pdfs/GAIA_PINNACLE.pdf"),
  heritage("Plateau", "plateau", "/Images/CarpetCircleImages/Plateau.png", "/pdfs/GAIA_PLATEAU.pdf"),
  heritage("Salt", "salt", "/Images/Salt.png"),
  heritage("SBT", "sbt", "/Images/SBT.png"),
  heritage("ShiningGlow", "shining-glow", "/Images/CarpetCircleImages/Shining_Glow.png", "/pdfs/GAIA_SHINING+GLOW.pdf"),
  heritage("Signature", "signature", "/Images/CarpetCircleImages/Signature.png", "/pdfs/GAIA_SIGNATURE.pdf"),
  gaia("Ascend", "ascend", "/Images/CarpetCircleImages/new_added/ascend.png", "/pdfs/GAIA_ASCEND.pdf"),
  gaia("Chromatic", "chromatic", "/Images/CarpetCircleImages/new_added/chromatic.png", "/pdfs/GAIA_CHROMATIC.pdf"),
  gaia("Cobble", "cobble", "/Images/CarpetCircleImages/Cobble.png", "/pdfs/GAIA_COBBLE.pdf"),
  gaia("Elite", "elite", "/Images/CarpetCircleImages/new_added/ellite.png", "/pdfs/GAIA_ELITE.pdf"),
  gaia("Eminence", "eminence", "/Images/CarpetCircleImages/new_added/eminence.png", "/pdfs/GAIA_EMINENCE.pdf"),
  gaia("Grandeur", "grandeur", "/Images/CarpetCircleImages/new_added/grandeur.png", "/pdfs/GAIA_GRANDEUR.pdf"),
  gaia("Legacy", "legacy", "/Images/CarpetCircleImages/new_added/legacy.png", "/pdfs/GAIA_LEGACY.pdf"),
  gaia("Nova", "nova", "/Images/CarpetCircleImages/new_added/nova.png", "/pdfs/GAIA_NOVA.pdf"),
  gaia("Opulence", "opulence", "/Images/CarpetCircleImages/new_added/Opulence.png", "/pdfs/GAIA_OPULENCE.pdf"),
  gaia("Sovereign", "sovereign", "/Images/CarpetCircleImages/new_added/sovereign.png", "/pdfs/GAIA_SOVEREIGN.pdf"),
  gaia("Stairway", "stairway", "/Images/CarpetCircleImages/new_added/stairway.png", "/pdfs/GAIA_STAIRWAY.pdf"),
  gaia("Sterling", "sterling", "/Images/CarpetCircleImages/new_added/sterling.png", "/pdfs/GAIA_STERLING.pdf"),
  gaia("Street", "street", "/Images/CarpetCircleImages/new_added/street.png", "/pdfs/GAIA_STREET.pdf"),
  gaia("Virtue", "virtue", "/Images/CarpetCircleImages/new_added/Virtue.png", "/pdfs/GAIA_VIRTUE.pdf"),
  gaia("Zara", "zara", "/Images/CarpetCircleImages/new_added/zara-carpet-tiles.png", "/pdfs/GAIA_ZARA.pdf"),
  gaia("Zenith", "zenith", "/Images/CarpetCircleImages/new_added/zenith.png", "/pdfs/GAIA_ZENITH.pdf"),
];

export default designs;

export const designPath = (design) => `/carpet-tiles/${design.slug}`;
export const designBySlug = (slug) => designs.find((d) => d.slug === slug);
export const hasPdf = (design) => Boolean(design.pdf && design.pdf.trim() !== "");
export const designAlt = (design) => `${design.name} carpet tile design, ${design.collection} collection by GAIA`;

// Spec rows that have a value, in SPEC_FIELDS order. No empty rows are shown.
export const filledSpecs = (design) =>
  SPEC_FIELDS.filter((label) => design.specs[label]).map((label) => ({ label, value: design.specs[label] }));

// Other designs from the same collection, for the "related designs" block.
export const relatedDesigns = (design, count = 6) =>
  designs.filter((d) => d.collection === design.collection && d.slug !== design.slug).slice(0, count);
