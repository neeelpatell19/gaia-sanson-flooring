<script>
import "./HomeImageComparison.css";

export default {
  data() {
    return {
      comparisonData: {
        title:
          "Showcasing our products in various settings for easy comparison",
        leftImage: {
          src: "/Images/CARPET_TILES.png",
          label: "CARPET TILES",
        },
        rightImage: {
          src: "/Images/site/gaia-carpets-showcase.webp",
          label: "ACOUSTIC PET PANEL",
        },
      },
      dividerPosition: 50,
      isDragging: false,
    };
  },
  mounted() {
    this.addEventListeners();
  },
  beforeUnmount() {
    this.removeEventListeners();
  },
  methods: {
    addEventListeners() {
      document.addEventListener("mousemove", this.handleMouseMove);
      document.addEventListener("mouseup", this.handleMouseUp);
      document.addEventListener("touchmove", this.handleTouchMove);
      document.addEventListener("touchend", this.handleTouchEnd);
    },
    removeEventListeners() {
      document.removeEventListener("mousemove", this.handleMouseMove);
      document.removeEventListener("mouseup", this.handleMouseUp);
      document.removeEventListener("touchmove", this.handleTouchMove);
      document.removeEventListener("touchend", this.handleTouchEnd);
    },
    handleMouseDown(e) {
      this.isDragging = true;
      this.addDraggingClass();
      e.preventDefault();
    },
    handleTouchStart(e) {
      this.isDragging = true;
      this.addDraggingClass();
      e.preventDefault();
    },
    handleMouseMove(e) {
      if (!this.isDragging) return;
      this.updateDividerPosition(e.clientX);
    },
    handleTouchMove(e) {
      if (!this.isDragging) return;
      e.preventDefault();
      const touch = e.touches[0];
      this.updateDividerPosition(touch.clientX);
    },
    handleMouseUp() {
      this.isDragging = false;
      this.removeDraggingClass();
    },
    handleTouchEnd() {
      this.isDragging = false;
      this.removeDraggingClass();
    },
    updateDividerPosition(clientX) {
      const container = this.$refs.comparisonContainer;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const position = ((clientX - rect.left) / rect.width) * 100;

      this.dividerPosition = Math.max(0, Math.min(100, position));
    },
    addDraggingClass() {
      const divider = this.$refs.comparisonDivider;
      const rightImage = this.$refs.rightImage;
      if (divider) {
        divider.classList.add("dragging");
      }
      if (rightImage) {
        rightImage.classList.add("dragging");
      }
    },
    removeDraggingClass() {
      const divider = this.$refs.comparisonDivider;
      const rightImage = this.$refs.rightImage;
      if (divider) {
        divider.classList.remove("dragging");
      }
      if (rightImage) {
        rightImage.classList.remove("dragging");
      }
    },
  },
};
</script>

<template>
  <div class="HomeImageComparisonContainerParent">
    <div class="Container paddingTop60 paddingBottom80">
      <div class="HomeImageComparisonContainer">
        <!-- Header -->
        <div class="comparison-header" data-aos="fade-up" data-aos-delay="200">
          <p class="comparison-title lead-text">{{ comparisonData.title }}</p>
        </div>

        <!-- Image Comparison Container -->
        <div
          class="comparison-wrapper"
          ref="comparisonContainer"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <!-- Left Image (Background) -->
          <div class="image-container left-image">
            <img
              :src="comparisonData.leftImage.src"
              :alt="comparisonData.leftImage.label"
              class="comparison-image"
            />
            <div class="image-label left-label">
              {{ comparisonData.leftImage.label }}
            </div>
          </div>

          <!-- Right Image (Overlay) -->
          <div
            ref="rightImage"
            class="image-container right-image"
            :style="{ clipPath: `inset(0 ${100 - dividerPosition}% 0 0)` }"
          >
            <img
              :src="comparisonData.rightImage.src"
              :alt="comparisonData.rightImage.label"
              class="comparison-image"
            />
            <div class="image-label right-label">
              {{ comparisonData.rightImage.label }}
            </div>
          </div>

          <!-- Draggable Divider -->
          <div
            ref="comparisonDivider"
            class="comparison-divider"
            :style="{ left: `${dividerPosition}%` }"
            @mousedown="handleMouseDown"
            @touchstart="handleTouchStart"
          >
            <div class="divider-line"></div>
            <div class="divider-handle">
              <span class="arrow-left">‹</span>
              <span class="arrow-right">›</span>
            </div>
          </div>

          <!-- Divider Overlay for Better UX -->
          <div
            class="divider-overlay"
            :style="{ left: `${dividerPosition}%` }"
            @mousedown="handleMouseDown"
            @touchstart="handleTouchStart"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
