<template>
  <div class="blogsPage">
    <CommonTopLayout
      heading="Blogs"
      imageSrc="/Images/Blogs/BlogsBannerImage.webp"
      imageAlt="Workspace with GAIA carpet flooring"
    />

    <div class="BlogsListingContainer Container paddingTop80 marginBottom80">
      <!-- Header Section -->
      <div
        class="blogs-header"
        data-aos="fade-down"
        data-aos-duration="800"
        data-aos-delay="100"
      >
        <p class="blogs-subtitle">Ideas, Insights &amp; Trends</p>
        <h2 class="blogs-title">What Makes a Space Work?</h2>
        <p class="blogs-intro">
          Practical guidance from the GAIA team on flooring, acoustics and
          interiors — from specifying the right product to planning how it
          looks and performs once the room is finished.
        </p>
      </div>

      <!-- Category Filters -->
      <div
        v-if="categories.length > 1"
        class="blogs-filters paddingTop60"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="150"
      >
        <button
          v-for="category in ['All', ...categories]"
          :key="category"
          type="button"
          class="blogs-filter-btn"
          :class="{ active: activeCategory === category }"
          @click="selectCategory(category)"
        >
          {{ category }}
        </button>
      </div>

      <!-- Featured (Latest) Article -->
      <div
        v-if="featuredBlog"
        class="blogs-featured paddingTop60"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200"
      >
        <BlogCard :blog="featuredBlog" featured />
      </div>

      <!-- Articles Grid -->
      <div v-if="remainingBlogs.length" class="blogs-grid paddingTop60">
        <div
          v-for="(blog, index) in remainingBlogs"
          :key="blog.id"
          class="blogs-grid-item"
          data-aos="fade-up"
          data-aos-duration="800"
          :data-aos-delay="100 + (index % 3) * 100"
        >
          <BlogCard :blog="blog" />
        </div>
      </div>

      <!-- Pagination -->
      <div v-if="totalPages > 1" class="blogs-pagination paddingTop60">
        <button
          type="button"
          class="blogs-page-btn"
          :disabled="currentPage === 1"
          aria-label="Previous page"
          @click="goToPage(currentPage - 1)"
        >
          ‹
        </button>
        <button
          v-for="page in totalPages"
          :key="page"
          type="button"
          class="blogs-page-btn"
          :class="{ active: currentPage === page }"
          @click="goToPage(page)"
        >
          {{ page }}
        </button>
        <button
          type="button"
          class="blogs-page-btn"
          :disabled="currentPage === totalPages"
          aria-label="Next page"
          @click="goToPage(currentPage + 1)"
        >
          ›
        </button>
      </div>

      <p v-if="!filteredBlogs.length" class="blogs-empty paddingTop60">
        New articles are on their way. Check back soon.
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onBeforeUnmount } from "vue";
import CommonTopLayout from "../Categories/CommonTopLayout/CommonTopLayout.vue";
import BlogCard from "./BlogCard/BlogCard.vue";
import BlogsData from "./BlogsData.js";
import { applyBlogSeo, buildBlogListingSeo } from "./BlogSeo.js";
import "./Blogs.css";

const sortedBlogs = [...BlogsData].sort((a, b) =>
  b.publishedDate.localeCompare(a.publishedDate)
);

const categories = [...new Set(sortedBlogs.map((blog) => blog.category))];
const activeCategory = ref("All");

const filteredBlogs = computed(() =>
  activeCategory.value === "All"
    ? sortedBlogs
    : sortedBlogs.filter((blog) => blog.category === activeCategory.value)
);

// Latest article is featured; the rest are paged in a 3-column grid
const PAGE_SIZE = 9;
const currentPage = ref(1);

const featuredBlog = computed(() => filteredBlogs.value[0] || null);
const totalPages = computed(() =>
  Math.max(1, Math.ceil((filteredBlogs.value.length - 1) / PAGE_SIZE))
);
const remainingBlogs = computed(() => {
  const start = 1 + (currentPage.value - 1) * PAGE_SIZE;
  return filteredBlogs.value.slice(start, start + PAGE_SIZE);
});

const selectCategory = (category) => {
  activeCategory.value = category;
  currentPage.value = 1;
};

const goToPage = (page) => {
  currentPage.value = page;
  const grid = document.querySelector(".BlogsListingContainer .blogs-featured");
  if (grid) {
    window.scrollTo({
      top: grid.getBoundingClientRect().top + window.scrollY - 110,
      behavior: "smooth",
    });
  }
};

let restoreSeo = null;

onMounted(() => {
  restoreSeo = applyBlogSeo(buildBlogListingSeo(BlogsData));
});

onBeforeUnmount(() => {
  if (restoreSeo) restoreSeo();
});
</script>

<style scoped>
@import "./Blogs.css";
</style>
