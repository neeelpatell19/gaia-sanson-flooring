<template>
  <div class="width100" :key="route.params.slug">
    <!-- Dynamic Layout Rendering based on Category -->
    <component
      :is="currentLayout"
      v-if="currentLayout"
      :category="category"
      :key="`layout-${route.params.slug}`"
    />

    <!-- Fallback Layout if no specific layout found -->
    <div v-else class="BackgroundImageSet">
      <div class="CategoryDetailContainer">
        <!-- Breadcrumb Navigation -->
        <div class="breadcrumb">
          <router-link to="/categories" class="breadcrumb-link"
            >Categories</router-link
          >
          <span class="breadcrumb-separator">/</span>
          <span class="breadcrumb-current">{{ category?.name }}</span>
        </div>

        <!-- Category Header -->
        <div class="CategoryHeader">
          <h1>{{ category?.name }}</h1>
          <p class="category-description">{{ category?.description }}</p>
        </div>

        <!-- Category Content -->
        <div class="CategoryContent" v-if="category">
          <div class="category-image-section">
            <img
              :src="category.image"
              :alt="category.name"
              class="category-main-image"
            />
          </div>

          <div class="category-info-section">
            <div class="category-details">
              <h2>Product Details</h2>
              <ul class="features-list">
                <li
                  v-for="feature in category.features"
                  :key="feature"
                  class="feature-item"
                >
                  {{ feature }}
                </li>
              </ul>
            </div>

            <div class="category-specs">
              <h3>Specifications</h3>
              <div class="specs-grid">
                <div
                  v-for="spec in category.specifications"
                  :key="spec.name"
                  class="spec-item"
                >
                  <span class="spec-label">{{ spec.name }}:</span>
                  <span class="spec-value">{{ spec.value }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Related Categories -->
        <div class="RelatedCategories">
          <h3>Other Categories</h3>
          <div class="related-categories-grid">
            <router-link
              v-for="relatedCategory in relatedCategories"
              :key="relatedCategory.id"
              :to="`/categories/${relatedCategory.slug}`"
              class="related-category-card"
            >
              <img :src="relatedCategory.image" :alt="relatedCategory.name" />
              <h4>{{ relatedCategory.name }}</h4>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import CategoriesData from "./Categories";

// Import all layout components
import CarpetTilesLayout from "../Layouts/CarpetTilesLayout";
import BroadloomCarpetsLayout from "../Layouts/BroadloomCarpetsLayout";
import AcousticTilesLayout from "../Layouts/AcousticTilesLayout";
import ArtificialMultiturfLayout from "../Layouts/ArtificialMultiturfLayout";

const route = useRoute();

// Find the current category based on the slug parameter
const category = computed(() => {
  const slug = route.params.slug;
  return CategoriesData.find((cat) => cat.slug === slug);
});

// Get related categories (excluding current one)
const relatedCategories = computed(() => {
  if (!category.value) return [];
  return CategoriesData.filter((cat) => cat.id !== category.value.id);
});

// Dynamic layout selection based on category
const currentLayout = computed(() => {
  if (!category.value) return null;

  const layoutMap = {
    "carpet-tiles": CarpetTilesLayout,
    "broadloom-carpets": BroadloomCarpetsLayout,
    "acoustic-tiles": AcousticTilesLayout,
    "artificial-multiturf": ArtificialMultiturfLayout,
  };

  return layoutMap[category.value.slug] || null;
});
</script>

<style scoped>
/* Import the CSS file */
@import "./CategoryDetail.css";
</style>
