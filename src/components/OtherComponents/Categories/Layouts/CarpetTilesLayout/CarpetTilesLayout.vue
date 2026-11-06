<template>
  <div class="width100">
    <CommonTopLayout
      heading="Carpet Tiles"
      imageSrc="/Images/carpet_tiles.webp"
      imageAlt="Carpet tiles background image"
    />
    <div class="paddingTop80" style="background-color: white !important">
      <!-- <MakeInIndia /> -->
      <div class="AccounticLogoContainer">
        <div class="Container EditContainerContent paddingBottom80">
          <br />
          <div class="FlexContainerEditNew">
            <div>
              <h2
                data-aos="fade-down"
                data-aos-duration="800"
                data-aos-delay="100"
              >
                Proudly Made in India, GreenPro Certified

                <div
                  class="greenpro-logo-inline"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="150"
                >
                  <img
                    src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/GreenproLogo.png"
                    alt="GreenPro Certified Logo"
                    class="greenpro-logo-inline-img"
                  />
                </div>
              </h2>
              <h3
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="200"
              >
                India’s first startup delivering integrated carpet tile
                solutions for high-performance interiors.<br /><br />
                GAIA is one of the proud Indian MSME to earn the GreenPro label
                for Carpet Tiles, highlighting our focus on sustainable
                practices. Made in India with eco-conscious materials and
                advanced manufacturing techniques, our carpet tiles offer
                long-lasting durability, enhanced comfort, and a lower
                environmental footprint while meeting recognized green
                standards.
              </h3>
            </div>
            <div class="AccousticContainerLogo">
              <div
                class="sets-apart-logos-Container"
                style="justify-content: start"
              >
                <div class="sets-apart-logos-Container-item">
                  <img
                    src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/StartUpIndiaImageUpdate.png"
                    alt="Startup India"
                  />
                </div>
                <div class="sets-apart-logos-Container-item">
                  <img
                    src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/MakeInIndeaLogoImageNew.png"
                    alt="Make in India"
                  />
                </div>
                <div class="sets-apart-logos-Container-item">
                  <img src="/Images/CRI%20Greenlabel.png" alt="CRI Green Label certification" />
                </div>
                <div class="sets-apart-logos-Container-item">
                  <img src="/Images/epd-logo.png" alt="EPD Logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ChooseDesignsContainer">
      <div class="Container paddingTop80 paddingBottom80">
        <div class="ChooseDesignsContainer">
          <div class="CommonHeader">
            <h2 class="blackColor marginBottom20">
              Choose a design to preview
            </h2>
            <!-- Desktop Arrows -->
            <!-- <div class="DesktopArrows">
              <button
                class="common-btn secondary mobile-nav-btn left-arrow swiper-button-prev-custom"
              >
                <span>←</span>
              </button>
              <button
                class="common-btn secondary mobile-nav-btn right-arrow swiper-button-next-custom"
              >
                <span>→</span>
              </button>
            </div> -->
          </div>

          <!-- Mobile Navigation -->
          <!-- <div class="SwiperNavigationContainerMobileOnly">
            <div class="SwiperNavigation">
              <button
                class="common-btn secondary mobile-nav-btn swiper-button-prev-custom"
              >
                <span>←</span>
              </button>
              <button
                class="common-btn secondary mobile-nav-btn swiper-button-next-custom"
              >
                <span>→</span>
              </button>
            </div>
          </div> -->

          <div class="DesignGridContainer">
            <!-- A real link (not a click handler) so crawlers can find and index each PDF. -->
            <component
              :is="hasPdf(design) ? 'a' : 'div'"
              v-for="design in designSwatches"
              :key="design.code"
              class="DesignSwatch"
              :class="hasPdf(design) ? 'clickable' : 'non-clickable'"
              v-bind="
                hasPdf(design)
                  ? {
                      href: design.pdf,
                      target: '_blank',
                      rel: 'noopener',
                      title: `GAIA ${design.code} carpet tile brochure (PDF)`,
                    }
                  : {}
              "
            >
              <img :src="design.image" :alt="design.name" class="SwatchImage" />

              <p v-if="isNaN(design.code)" class="SwatchCode">
                {{ design.code }}
              </p>
            </component>
          </div>
        </div>
      </div>
    </div>

    <div style="background-color: white">
      <div class="paddingTop80 Container paddingBottom80">
        <h2 class="blackColor marginBottom20">
          Discover Our Carpet Collection
        </h2>
        <div class="AnimatedImageContainerMainContainer">
          <div class="AnimatedImageContainer">
            <div class="FirstImage"></div>
            <div class="SecondImage"></div>
            <div class="ThirdImage"></div>
            <!-- <div class="FourthImage"> </div> -->
            <div class="FifthImage">
              <!-- <div class="FifthFirstImage">

                            </div>
                            <div class="FifthSecondImage">

                            </div>
                            <div class="FifthThirdImage"></div> -->
            </div>
            <div class="SixthImage"></div>
            <div class="SeventhImage"></div>
            <div class="EighthImage"></div>
            <div class="NinthImage"></div>
          </div>
        </div>
      </div>
    </div>

    <GreenProCertified
      image-src="/Images/GreenProCertified/green-pro-certified-carpet-tile.png"
      video-src="/videos/CarpetTiles.mp4"
    />

    <div class="propertiesLayoutContainer">
      <div class="Container">
        <h2
          class="properties-title"
          data-aos="fade-down"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          Properties
        </h2>
        <div class="properties-grid paddingTop60">
          <div
            v-for="(property, index) in properties"
            :key="property.label"
            class="property-card"
            data-aos="fade-up"
            data-aos-duration="600"
            :data-aos-delay="200 + index * 50"
          >
            <div class="property-icon">
              <img
                v-if="property.icon"
                :src="property.icon"
                :alt="property.label"
              />
            </div>
            <p class="property-label">{{ property.label }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="BackgrounStylesAppling">
      <div class="paddingTop80 Container paddingBottom80">
        <div>
          <h2
            class="blackColor marginBottom20"
            data-aos="fade-down"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            Where Your Vision Meets Our Design Expertise
          </h2>
          <br />
          <p
            style="font-weight: 400"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            If you have a specific product or design in mind, we can develop and
            customize it to match your exact requirements. We offer
            personalization in backing, pile height, stitch density, and yarn
            quality. Please note that a minimum order quantity (MOQ) applies for
            custom orders. We're happy to work with you to create a product that
            fits your needs. Let us know your ideas, and we'll help turn them
            into reality.
          </p>
        </div>
      </div>
    </div>
    <!-- <div class="gridImagesContainer paddingTop80 paddingBottom80">
            <div class="Container">
                <div class="gridImagesContainerText">
                    <h2 class="blackColor" data-aos="fade-down" data-aos-duration="800" data-aos-delay="100">Transform
                        Your Workspace</h2>
                  
                </div>
                <div class="girdImagesContainer paddingTop60">
                    <div data-aos="zoom-in" data-aos-duration="600" data-aos-delay="300">
                        <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/WorKSpace1.jpg" alt="">
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="600" data-aos-delay="400">
                        <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/WorKSpace2.jpg" alt="">
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="600" data-aos-delay="500">
                        <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/WorKSpace3.jpg" alt="">
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="600" data-aos-delay="600">
                        <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/WorKSpace4.jpg" alt="">
                    </div>
                </div>
            </div>
        </div> -->
  </div>
  <GetInTouch
    title="Get In Touch!"
    subtitle="Tell Us What You Need for Your Perfect Carpet"
    description="Connect with our team to discuss premium carpet tile solutions — including fully customizable options to meet your project requirements."
  />
  <BackToTop />
</template>

<script setup>
import { computed, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation as SwiperNavigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import CategoriesData from "../../CategoriesLayout/Categories";
import designSwatchesData, { hasPdf } from "./designSwatches.js";
import CommonTopLayout from "../../CommonTopLayout/CommonTopLayout.vue";
import GetInTouch from "../../../GetInTouch/GetInTouch.vue";
import MakeInIndia from "../MakeInIndia/MakeInIndia.vue";
import BackToTop from "../../../BackToTop/BackToTop.vue";
import GreenProCertified from "../../../About/GreenProCertified/GreenProCertified.vue";
// Scroll animation variables
let animationContainers = [];

// Initialize AOS-style fade-in animations
onMounted(() => {
  // Get all animated containers
  animationContainers = document.querySelectorAll(
    ".AnimatedImageContainer > div",
  );

  // Set initial offsets (responsive based on screen size)
  const isMobile = window.innerWidth <= 768;
  const isSmallMobile = window.innerWidth <= 480;

  const offsets = isMobile
    ? [
        // Mobile offsets - smaller values for compact layout
        { x: -30, y: -20 }, // FirstImage
        { x: 25, y: -35 }, // SecondImage
        { x: -25, y: 20 }, // ThirdImage
        { x: 30, y: 15 }, // FourthImage
        { x: -20, y: -25 }, // FifthImage
        { x: 20, y: 30 }, // SixthImage
        { x: -35, y: -15 }, // SeventhImage
        { x: 25, y: -20 }, // EighthImage
        { x: -20, y: 25 }, // NinthImage
      ]
    : [
        // Desktop offsets - original values
        { x: -50, y: -30 }, // FirstImage
        { x: 40, y: -50 }, // SecondImage
        { x: -45, y: 35 }, // ThirdImage
        { x: 50, y: 25 }, // FourthImage
        { x: -30, y: -40 }, // FifthImage
        { x: 35, y: 50 }, // SixthImage
        { x: -55, y: -25 }, // SeventhImage
        { x: 45, y: -35 }, // EighthImage
        { x: -40, y: 45 }, // NinthImage
      ];

  // Apply initial transforms
  animationContainers.forEach((container, index) => {
    if (offsets[index]) {
      container.style.transform = `translate(${offsets[index].x}px, ${offsets[index].y}px)`;
      container.style.opacity = "0";
      container.style.transition =
        "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    }
  });

  // Create intersection observer for viewport-based animations (AOS style)
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const container = entry.target;
          const index = Array.from(animationContainers).indexOf(container);

          // Animate to final position with delay based on index
          setTimeout(() => {
            container.style.transform = "translate(0px, 0px)";
            container.style.opacity = "1";
          }, index * 100); // Stagger animation by 100ms per container
        }
      });
    },
    {
      threshold: 0.3, // Trigger when 30% of container is visible
      rootMargin: "0px 0px -50px 0px", // Trigger slightly before container enters viewport
    },
  );

  // Observe all containers
  animationContainers.forEach((container) => {
    observer.observe(container);
  });

  // Cleanup function
  return () => {
    observer.disconnect();
  };
});

onUnmounted(() => {
  // Cleanup scroll listeners
  window.removeEventListener("scroll", () => {});
});

const route = useRoute();
const category = computed(() => {
  const slug = route.params.slug;
  return CategoriesData.find((cat) => cat.slug === slug);
});

// Design swatches (data shared with the sitemap)
const designSwatches = computed(() =>
  [...designSwatchesData].sort((a, b) =>
    a.code.localeCompare(b.code, undefined, { sensitivity: "base" }),
  ),
);

const properties = [
  {
    label: "Ozone Depletion",
    icon: "/Images/propertiesImages/ozone-depletion.png",
  },
  {
    label: "Flammability",
    icon: "/Images/propertiesImages/flammability.png",
  },
  {
    label: "Extractable Heavy Metals",
    icon: "/Images/propertiesImages/extractable-heavy-metals.png",
  },
  { label: "VOC", icon: "/Images/propertiesImages/voc.png" },
  {
    label: "Dimensional Stability",
    icon: "/Images/propertiesImages/dimensional-stability.png",
  },
  {
    label: "Tuft withdrawal",
    icon: "/Images/propertiesImages/tuft-withdrawal.png",
  },
  {
    label: "Color Fastness",
    icon: "/Images/propertiesImages/color-fastness.png",
  },
  {
    label: "Electric Resistance",
    icon: "/Images/propertiesImages/electric-resistance.png",
  },
];
</script>

<style scoped>
/* Import the CSS file */
@import "./CarpetTilesLayout.css";
</style>
