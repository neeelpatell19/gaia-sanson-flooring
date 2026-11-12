<template>
  <div class="width100">
    <div class="CategoriesHero">
      <div class="CategoriesContainer">
        <div class="CategoriesHeader">
          <div class="headerContent">
            <h1>Our Product Categories</h1>
            <p>
              Discover our comprehensive range of premium flooring solutions
              designed for every space and style
            </p>
          </div>
        </div>

        <div class="CategoriesContent">
          <router-link
            v-for="category in CategoriesData"
            :key="category.id"
            :to="`/${category.slug}`"
            class="CategoryItem"
          >
            <div class="categoryImage">
              <ImageLoader :src="category.image" :alt="category.name" />
              <div class="imageOverlay">
                <div class="overlayContent">
                  <span class="categoryIcon">🏠</span>
                  <span class="viewDetails">Explore Collection</span>
                </div>
              </div>
            </div>
            <div class="categoryInfo">
              <h2>{{ category.name }}</h2>
              <p class="categoryDescription">
                {{
                  category.description ||
                  "Premium quality flooring solutions for modern spaces"
                }}
              </p>
              <div class="categoryFeatures">
                <span class="feature">Premium Quality</span>
                <span class="feature">Professional Installation</span>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CategoriesData from "./Categories";
import ImageLoader from "../../../FramerAnimation/ImageLoader.vue";
</script>

<style scoped>
/* Import the CSS file */
@import "./Categories.css";
</style>
