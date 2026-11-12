<template>
  <div class="width100 DesignPage">
    <!-- Hero: the design, its facts and the two actions -->
    <section class="DesignHeroSection">
      <div class="Container DesignHero">
        <div class="DesignVisual" data-aos="zoom-in" data-aos-duration="800">
          <div class="DesignRing"></div>
          <div class="DesignImageFrame">
            <img
              :src="design.image"
              :alt="designAlt(design)"
              class="DesignImage"
              width="340"
              height="340"
            />
          </div>
          <span class="DesignBadge">{{ design.name }}</span>
        </div>

        <div class="DesignSummary" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
          <div class="DesignChips">
            <span class="DesignChip gold">{{ design.collection }} collection</span>
            <span class="DesignChip">Modular carpet tiles</span>
          </div>
          <h1>{{ design.name }} Carpet Tiles</h1>
          <span class="DesignRule"></span>
          <p class="DesignIntro">{{ description }}</p>

          <dl class="DesignFacts">
            <div v-for="fact in facts" :key="fact.label" class="DesignFact">
              <dt>{{ fact.label }}</dt>
              <dd>{{ fact.value }}</dd>
            </div>
          </dl>

          <div class="DesignActions">
            <a
              v-if="hasPdf(design)"
              :href="design.pdf"
              class="common-btn primary"
              target="_blank"
              rel="noopener"
              download
            >
              Download brochure (PDF)
              <span class="btn-arrow">↓</span>
            </a>
            <a :href="sampleHref" class="common-btn">
              Request a sample
              <span class="btn-arrow">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Spec table: only rows with a confirmed value are shown. -->
    <section v-if="specs.length" class="DesignBand white">
      <div class="Container">
        <h2 class="DesignHeading">Specifications</h2>
        <div class="DesignSpecsCard">
          <table class="DesignSpecs">
            <tbody>
              <tr v-for="row in specs" :key="row.label">
                <th scope="row">{{ row.label }}</th>
                <td>{{ row.value }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Certifications -->
    <section class="DesignBand white">
      <div class="Container">
        <div class="DesignHeadingRow">
          <h2 class="DesignHeading" data-aos="fade-down" data-aos-duration="800">Certifications</h2>
          <router-link to="/carpet-tiles" class="DesignTextLink">
            All carpet tile properties <span aria-hidden="true">→</span>
          </router-link>
        </div>
        <div class="DesignCerts">
          <div
            v-for="(cert, index) in certifications"
            :key="cert.name"
            class="DesignCert"
            data-aos="fade-up"
            data-aos-duration="600"
            :data-aos-delay="100 + index * 100"
          >
            <div class="DesignCertLogo">
              <img :src="cert.logo" :alt="cert.alt" loading="lazy" />
            </div>
            <p class="DesignCertName">{{ cert.name }}</p>
            <p class="DesignCertNote">{{ cert.note }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Related designs -->
    <section v-if="related.length" class="DesignBand cream">
      <div class="Container">
        <div class="DesignHeadingRow">
          <h2 class="DesignHeading" data-aos="fade-down" data-aos-duration="800">
            More from the {{ design.collection }} collection
          </h2>
          <router-link to="/carpet-tiles" class="DesignTextLink">
            View all designs <span aria-hidden="true">→</span>
          </router-link>
        </div>
        <div class="DesignRelated">
          <router-link
            v-for="(item, index) in related"
            :key="item.slug"
            :to="designPath(item)"
            class="DesignRelatedCard"
            data-aos="fade-up"
            data-aos-duration="600"
            :data-aos-delay="80 * index"
          >
            <span class="DesignRelatedImage">
              <img :src="item.image" :alt="designAlt(item)" loading="lazy" width="132" height="132" />
            </span>
            <span class="DesignRelatedName">{{ item.name }}</span>
            <span class="DesignRelatedMeta">{{ item.collection }} collection</span>
          </router-link>
        </div>
      </div>
    </section>

    <GetInTouch
      title="Get In Touch!"
      :subtitle="`Interested in ${design.name} carpet tiles?`"
      description="Tell us about your project and we will send pricing, lead times and samples. Custom backing, pile height, stitch density and yarn options are available (MOQ applies)."
    />
  </div>
</template>

<script setup>
import { computed } from "vue";
import {
  designAlt,
  designBySlug,
  designPath,
  filledSpecs,
  hasPdf,
  relatedDesigns,
} from "./designSwatches.js";
import { designDescription } from "../../../../../seo/pages.js";
import GetInTouch from "../../../GetInTouch/GetInTouch.vue";

// design: the slug from /carpet-tiles/:design (checked by the router guard).
const props = defineProps({ design: { type: String, required: true } });

const design = computed(() => designBySlug(props.design));
const description = computed(() => designDescription(design.value));
const specs = computed(() => filledSpecs(design.value));
const related = computed(() => relatedDesigns(design.value));

const facts = computed(() => [
  { label: "Design", value: design.value.name },
  { label: "Collection", value: design.value.collection },
  { label: "Product type", value: "Modular carpet tiles" },
  { label: "Made in", value: "India" },
]);

// The labels shown on the carpet tiles page for the whole range.
const certifications = [
  {
    name: "GreenPro",
    note: "Ecolabelled carpet tiles",
    logo: "/Images/site/greenpro-certified-logo.webp",
    alt: "GreenPro certified logo",
  },
  {
    name: "CRI Green Label Plus",
    note: "Indoor air quality",
    logo: "/Images/CRI%20Greenlabel.png",
    alt: "CRI Green Label Plus logo",
  },
  {
    name: "EPD",
    note: "Environmental Product Declaration",
    logo: "/Images/epd-logo.png",
    alt: "International EPD System logo",
  },
];

const sampleHref = computed(
  () =>
    `mailto:contact@sansonfloorings.com?subject=${encodeURIComponent(
      `Sample request: ${design.value.name} carpet tiles`
    )}`
);
</script>

<style scoped>
.DesignPage {
  color: #2c3e50;
}

/* ---------- hero ---------- */
.DesignHeroSection {
  background:
    radial-gradient(circle at 15% 20%, rgba(212, 165, 116, 0.16), transparent 45%),
    linear-gradient(180deg, #fffaf2 0%, #f8f1e4 100%);
  padding: 72px 0 88px;
  overflow: hidden;
}
.DesignHero {
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 6fr);
  gap: 72px;
  align-items: center;
}
.DesignHero > * {
  min-width: 0;
}

.DesignVisual {
  position: relative;
  width: 100%;
  /* The swatch images are 100-300px; a larger circle would blur them. */
  max-width: 340px;
  aspect-ratio: 1;
  margin: 0 auto;
}
.DesignRing {
  position: absolute;
  inset: -18px;
  border-radius: 50%;
  border: 2px solid rgba(212, 165, 116, 0.55);
}
/* A soft gold glow, centred behind the swatch. */
.DesignRing::after {
  content: "";
  position: absolute;
  inset: -36px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 165, 116, 0.22) 55%, transparent 72%);
  z-index: -1;
}
.DesignImageFrame {
  position: relative;
  box-sizing: border-box; /* the white border sits inside, so the photo stays centred in the ring */
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  border: 8px solid #ffffff;
  box-shadow: 0 24px 60px rgba(44, 62, 80, 0.22);
}
.DesignImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.8s ease;
}
.DesignVisual:hover .DesignImage {
  transform: scale(1.06);
}
.DesignBadge {
  position: absolute;
  left: 50%;
  bottom: -14px;
  transform: translateX(-50%);
  background: #2c3e50;
  color: #ffffff;
  font-size: 0.75rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  padding: 8px 18px;
  border-radius: 20px;
  white-space: nowrap;
  box-shadow: 0 6px 16px rgba(44, 62, 80, 0.25);
}

.DesignChips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 18px;
}
.DesignChip {
  font-size: 0.75rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 6px 14px;
  border-radius: 20px;
  border: 1px solid #c9ced3;
  color: #5a6c7d;
  background: rgba(255, 255, 255, 0.7);
}
.DesignChip.gold {
  border-color: #d4a574;
  color: #9a6b33;
  background: rgba(212, 165, 116, 0.12);
}

/* The global h1 is white (it sits on banner images); this one is on a light page. */
.DesignSummary h1 {
  color: #2c3e50;
  font-size: 3.2rem;
  font-weight: 500;
  line-height: 1.08;
  margin: 0;
}
.DesignRule {
  display: block;
  width: 64px;
  height: 3px;
  border-radius: 2px;
  background: #d4a574;
  margin: 22px 0;
}
.DesignIntro {
  font-size: 1.05rem;
  line-height: 1.75;
  color: #4a5a6a;
  margin: 0 0 28px;
  max-width: 560px;
}

.DesignFacts {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin: 0 0 32px;
  max-width: 560px;
}
.DesignFact {
  background: #ffffff;
  border: 1px solid #e4d8c8;
  border-left: 3px solid #d4a574;
  border-radius: 8px;
  padding: 12px 16px;
}
.DesignFact dt {
  font-size: 0.72rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #8a96a3;
}
.DesignFact dd {
  margin: 4px 0 0;
  font-weight: 600;
  color: #2c3e50;
}

.DesignActions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}
.DesignActions .common-btn {
  text-decoration: none;
  gap: 8px;
  padding: 14px 26px;
}

/* ---------- sections ---------- */
.DesignBand {
  padding: 80px 0;
}
.DesignBand.white {
  background: #ffffff;
}
.DesignBand.cream {
  background: #fffaf2;
}
.DesignHeadingRow {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 36px;
}
.DesignHeading {
  margin: 0;
}
.DesignBand > .Container > .DesignHeading {
  margin-bottom: 36px;
}
.DesignTextLink {
  color: #9a6b33;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-decoration: none;
  white-space: nowrap;
}
.DesignTextLink span {
  display: inline-block;
  transition: transform 0.3s ease;
}
.DesignTextLink:hover span {
  transform: translateX(4px);
}

/* specs */
.DesignSpecsCard {
  background: #ffffff;
  border: 1px solid #e4d8c8;
  border-radius: 12px;
  overflow: hidden;
  max-width: 760px;
}
.DesignSpecs {
  width: 100%;
  border-collapse: collapse;
}
.DesignSpecs th,
.DesignSpecs td {
  text-align: left;
  padding: 14px 20px;
  border-bottom: 1px solid #f0e8dc;
}
.DesignSpecs tr:nth-child(odd) {
  background: #fffaf2;
}
.DesignSpecs tr:last-child th,
.DesignSpecs tr:last-child td {
  border-bottom: none;
}
.DesignSpecs th {
  width: 40%;
  font-weight: 500;
  color: #6b7785;
}

/* certifications */
.DesignCerts {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}
.DesignCert {
  background: #ffffff;
  border: 2px solid #e4d8c8;
  border-radius: 12px;
  padding: 28px 16px 24px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}
.DesignCert:hover {
  transform: translateY(-4px);
  border-color: #d4a574;
  box-shadow: 0 12px 28px rgba(212, 165, 116, 0.2);
}
.DesignCertLogo {
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
}
.DesignCertLogo img {
  max-height: 72px;
  max-width: 100%;
  object-fit: contain;
}
.DesignCertName {
  font-family: "Ubuntu", sans-serif;
  font-size: 1.1rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0 0 6px;
  color: #2c3e50;
}
.DesignCertNote {
  margin: 0;
  color: #6b7785;
  font-size: 0.9rem;
}

/* related designs */
.DesignRelated {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 20px;
}
.DesignRelatedCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 6px;
  padding: 22px 12px 18px;
  background: #ffffff;
  border: 1px solid #ecdfcd;
  border-radius: 12px;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.DesignRelatedCard:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(44, 62, 80, 0.12);
}
.DesignRelatedImage {
  width: 112px;
  height: 112px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid #ffffff;
  box-shadow: 0 0 0 2px #e4d8c8, 0 6px 16px rgba(0, 0, 0, 0.12);
  margin-bottom: 10px;
  transition: box-shadow 0.3s ease;
}
.DesignRelatedCard:hover .DesignRelatedImage {
  box-shadow: 0 0 0 2px #d4a574, 0 8px 20px rgba(0, 0, 0, 0.16);
}
.DesignRelatedImage img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.DesignRelatedName {
  font-family: "Ubuntu", sans-serif;
  font-weight: 500;
  color: #2c3e50;
  font-size: 1.02rem;
}
.DesignRelatedMeta {
  font-size: 0.78rem;
  color: #8a96a3;
  letter-spacing: 0.5px;
}

/* ---------- responsive ---------- */
@media (max-width: 1024px) {
  .DesignHero {
    gap: 48px;
  }
  .DesignSummary h1 {
    font-size: 2.6rem;
  }
  .DesignRelated {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
@media (max-width: 768px) {
  .DesignHeroSection {
    padding: 48px 0 64px;
  }
  .DesignHero {
    grid-template-columns: minmax(0, 1fr);
    gap: 56px;
  }
  .DesignVisual {
    max-width: 280px;
  }
  .DesignSummary {
    text-align: center;
  }
  .DesignChips,
  .DesignActions {
    justify-content: center;
  }
  .DesignRule {
    margin: 18px auto;
  }
  .DesignIntro,
  .DesignFacts {
    margin-left: auto;
    margin-right: auto;
  }
  .DesignFact {
    text-align: left;
  }
  .DesignSummary h1 {
    font-size: 2rem;
  }
  .DesignBand {
    padding: 56px 0;
  }
  .DesignCerts {
    grid-template-columns: minmax(0, 1fr);
  }
  .DesignRelated {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
  }
}
</style>
