<template>
  <div>
    <CommonTopLayout
      :heading="grassData.heading"
      :imageSrc="grassData.imageSrc"
      :imageAlt="grassData.imageAlt"
    />

    <div class="Container paddingTop80 paddingBottom80">
      <div class="grassDetailLayout">
        <!-- Left Side - Main Image with Amazon-style Zoom -->
        <div class="grassImageSection">
          <div
            class="mainImageContainer"
            ref="mainImageContainer"
            @mouseenter="onEnter"
            @mouseleave="onLeave"
            @mousemove="onMove"
            @touchstart.prevent="onEnter"
            @touchend.prevent="onLeave"
            @touchmove.prevent="onTouchMove"
          >
            <img
              :src="grassData.mainImage"
              :alt="grassData.title"
              class="mainImage"
              ref="mainImage"
              @load="onImageReady"
            />

            <!-- Lens -->
            <div
              class="zoomLens"
              :class="{ active: isHovering }"
              :style="lensStyle"
            ></div>

            <!-- External zoom window -->
            <div
              class="zoomResult"
              :class="{ active: isHovering }"
              :style="resultStyle"
            ></div>
          </div>
        </div>

        <!-- Right Side - Content Sections -->
        <div class="grassContentSection">
          <!-- Overview Section -->
          <div class="contentSection">
            <h3 class="sectionTitle">Overview</h3>
            <p class="sectionContent">{{ grassData.overview }}</p>
          </div>

          <!-- Ideal For Section -->
          <div class="contentSection">
            <h3 class="sectionTitle">Ideal For</h3>
            <div class="idealForTags">
              <div
                v-for="application in grassData.idealFor"
                :key="application"
                class="tag"
              >
                {{ application }}
              </div>
            </div>
          </div>

          <!-- Specifications Section -->
          <div class="contentSection">
            <h3 class="sectionTitle">Specifications</h3>
            <ul class="specificationsList">
              <li
                v-for="spec in grassData.specifications"
                :key="spec"
                class="specItem"
              >
                <span class="checkmark">✓</span>
                {{ spec }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Second Container - Designed for Every Landscape -->
    <div class="Container paddingTop40 paddingBottom80">
      <div class="landscapeHeader">
        <div class="headerLeft">
          <h2 class="landscapeTitle">{{ grassData.landscapeTitle }}</h2>
        </div>
        <div class="headerRight">
          <p class="landscapeDescription">
            {{ grassData.landscapeDescription }}
          </p>
        </div>
      </div>

      <!-- Option 1: Swiper with Pagination Dots -->
      <div class="landscapeCarousel paddingTop40" v-if="showSwiper">
        <swiper
          @swiper="onSwiper"
          :slides-per-view="4"
          :space-between="10"
          :autoplay="{ delay: 2500, disableOnInteraction: false }"
          :loop="true"
          :speed="700"
          :modules="[SwiperNavigation, Autoplay, Pagination]"
          :pagination="{
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 3,
          }"
          :breakpoints="{
            320: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 10 },
            1024: { slidesPerView: 3, spaceBetween: 10 },
            1200: { slidesPerView: 4, spaceBetween: 10 },
          }"
        >
          <swiper-slide
            v-for="(image, index) in landscapeImages"
            :key="index"
            class="landscapeSlide"
          >
            <div class="landscapeImageContainer">
              <AImage 
                :src="image.src" 
                :alt="image.alt"
                :preview="{
                  src: image.src,
                  mask: 'Click to view full screen'
                }"
              />
            </div>
          </swiper-slide>
        </swiper>
      </div>

      <!-- Option 2: 2x2 Grid Layout -->
      <div class="landscapeGrid paddingTop40" v-if="!showSwiper">
        <div class="landscapeGridContainer">
          <div
            v-for="(image, index) in landscapeImages.slice(0, 4)"
            :key="index"
            class="landscapeGridItem"
          >
            <div class="landscapeImageContainer">
              <img :src="image.src" :alt="image.alt" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <BackToTop />
</template>

<script setup>
import { computed, ref, reactive } from "vue";
import { useRoute } from "vue-router";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Image as AImage } from "ant-design-vue";
import {
  Navigation as SwiperNavigation,
  Autoplay,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CommonTopLayout from "../../CommonTopLayout/CommonTopLayout.vue";
import BackToTop from "../../../BackToTop/BackToTop.vue";
import { grassTypesData } from "./grassTypesData.js";

const route = useRoute();
const swiperInstance = ref(null);
const showSwiper = ref(true); // Set to false to show 2x2 grid instead

const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
};

// ---- Amazon-style zoom state ----
const mainImageContainer = ref(null);
const mainImage = ref(null);
const isHovering = ref(false);

// Measurements
const metrics = reactive({
  renderedW: 0,
  renderedH: 0,
});

// Lens + result configuration (tweak to taste)
const lensSize = 120; // square lens px
const resultW = 500; // zoom window width
const resultH = 500; // zoom window height
const resultOffset = 24; // gap from image container (px)

// cx, cy: how much the background is scaled relative to rendered image
// Classic Amazon formula uses renderedW*cx, renderedH*cy for background-size.
const cx = computed(() => resultW / lensSize);
const cy = computed(() => resultH / lensSize);

// Lens position (top-left) relative to image
const lensPos = reactive({ x: 0, y: 0 });

const clamp = (val, min, max) => Math.max(min, Math.min(max, val));

const setFromMouse = (clientX, clientY) => {
  const rect = mainImageContainer.value.getBoundingClientRect();

  // mouse relative to the image container
  const x = clientX - rect.left;
  const y = clientY - rect.top;

  // place lens centered on cursor, then clamp inside image
  const lx = clamp(x - lensSize / 2, 0, rect.width - lensSize);
  const ly = clamp(y - lensSize / 2, 0, rect.height - lensSize);

  lensPos.x = lx;
  lensPos.y = ly;
};

const onEnter = () => {
  if (!mainImage.value || !mainImageContainer.value) return;
  // capture current rendered size (responsive safe)
  metrics.renderedW = mainImage.value.clientWidth;
  metrics.renderedH = mainImage.value.clientHeight;
  isHovering.value = true;
};

const onLeave = () => {
  isHovering.value = false;
};

const onMove = (e) => {
  if (!isHovering.value) return;
  setFromMouse(e.clientX, e.clientY);
};

const onTouchMove = (e) => {
  if (!isHovering.value) return;
  const t = e.touches[0];
  setFromMouse(t.clientX, t.clientY);
};

const onImageReady = () => {
  if (!mainImage.value) return;
  metrics.renderedW = mainImage.value.clientWidth;
  metrics.renderedH = mainImage.value.clientHeight;
};

// Computed styles
const lensStyle = computed(() => ({
  width: `${lensSize}px`,
  height: `${lensSize}px`,
  transform: `translate(${lensPos.x}px, ${lensPos.y}px)`,
}));

const resultStyle = computed(() => {
  if (!mainImage.value || !mainImageContainer.value) return {};

  const rect = mainImageContainer.value.getBoundingClientRect();
  // Background-size is rendered size * cx/cy (classic Amazon behavior)
  const bgW = metrics.renderedW * cx.value;
  const bgH = metrics.renderedH * cy.value;

  // Background-position is the lens offset times the same multipliers (negated)
  const bgPosX = -(lensPos.x * cx.value);
  const bgPosY = -(lensPos.y * cy.value);

  return {
    width: `${resultW}px`,
    height: `${resultH}px`,
    left: `${rect.right + resultOffset}px`,
    top: `${rect.top + rect.height / 2 - resultH / 2}px`,
    backgroundImage: `url('${grassData.value.mainImage}')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: `${bgW}px ${bgH}px`,
    backgroundPosition: `${bgPosX}px ${bgPosY}px`,
  };
});


const grassData = computed(() => {
  const grassType = route.params.grassType || "landscape-grass";
  return grassTypesData[grassType] || grassTypesData["landscape-grass"];
});
const landscapeImages = computed(() => grassData.value.images || []);
</script>

<style scoped>
@import "./DynamicArtificialPage.css";

/* Layout */
.grassDetailLayout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: start;
}

/* Image Section */
.grassImageSection {
  position: relative;
  height: 100%;
}

.mainImageContainer {
  position: relative;
  width: 100%;
  height: 600px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  max-height: 700px;
  cursor: crosshair;
}

.mainImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
  user-select: none;
  -webkit-user-drag: none;
}

/* Lens */
.zoomLens {
  position: absolute;
  pointer-events: none;
  opacity: 0;
  width: 120px;
  /* JS will keep in sync via inline style */
  height: 120px;
  border: 2px solid rgba(0, 0, 0, 0.25);
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.18);
  border-radius: 10px;
  transition: opacity 0.15s ease;
}

.zoomLens.active {
  opacity: 1;
}

/* Zoom result window */
.zoomResult {
  position: fixed;
  z-index: 20;
  display: block;
  opacity: 0;
  visibility: hidden;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.18);
  background-color: #fff;
  background-position: 0 0;
  /* JS updates */
  background-repeat: no-repeat;
  transition: opacity 0.15s ease;
}

.zoomResult.active {
  opacity: 1;
  visibility: visible;
}

/* Right content */
.grassContentSection {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.contentSection {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.sectionContent {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;
  margin: 0;
}

/* Ideal For */
.idealForTags {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.tag::before {
  content: "";
  height: 5px;
  width: 5px;
  background-color: black;
  display: flex;
  border-radius: 50%;
}

.tag {
  background: transparent;
  padding: 8px 16px;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  border: 1px solid rgba(0, 0, 0, 0.279);
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
}

.tag:hover {
  color: black;
  transform: translateY(-2px);
}

/* Specs */
.specificationsList {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.specItem {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  font-size: 1rem;
  line-height: 1.5;
  color: #555;
}

.checkmark {
  color: #28a745;
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 2px;
  flex-shrink: 0;
}

/* Landscape Section */
.landscapeHeader {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 60px;
}

.landscapeDescription {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;
  margin: 0;
}

.landscapeCarousel {
  width: 100%;
}

.landscapeImageContainer {
  width: 100%;
  height: 300px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.landscapeImageContainer:hover {
  transform: translateY(-5px);
}

.landscapeImageContainer img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.landscapeImageContainer :deep(.ant-image),
.landscapeImageContainer :deep(.ant-image-img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Swiper */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: #1e3a8a;
  background: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

:deep(.swiper-button-next:hover),
:deep(.swiper-button-prev:hover) {
  background: #1e3a8a;
  color: white;
}

:deep(.swiper-button-next::after),
:deep(.swiper-button-prev::after) {
  font-size: 16px;
  font-weight: bold;
}

/* Responsive */
@media (max-width: 1024px) {
  .grassDetailLayout {
    grid-template-columns: 1fr;
    gap: 50px;
  }

  .mainImageContainer {
    height: 500px;
  }
}

@media (max-width: 768px) {
  .mainImageContainer {
    height: 400px;
  }

  .sectionTitle {
    font-size: 1.5rem;
  }

  .sectionContent {
    font-size: 1rem;
  }

  .tag {
    font-size: 0.8rem;
    padding: 6px 12px;
  }

  .specItem {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .mainImageContainer {
    height: 300px;
  }

  .grassContentSection {
    gap: 30px;
  }
}
</style>
