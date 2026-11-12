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

      <!-- Pagination. With "All" selected each page is a plain link to its own
           URL (/blogs, /blogs/page/2 ...), so crawlers reach every post; with a
           category selected the pages switch in place, as before. -->
      <div v-if="totalPages > 1" class="blogs-pagination paddingTop60">
        <component
          :is="pageLinkTag(currentPage - 1)"
          v-bind="pageLinkProps(currentPage - 1)"
          class="blogs-page-btn"
          aria-label="Previous page"
          @click="goToPage(currentPage - 1)"
        >
          ‹
        </component>
        <component
          :is="pageLinkTag(page)"
          v-for="page in totalPages"
          :key="page"
          v-bind="pageLinkProps(page)"
          class="blogs-page-btn"
          :class="{ active: currentPage === page }"
          @click="goToPage(page)"
        >
          {{ page }}
        </component>
        <component
          :is="pageLinkTag(currentPage + 1)"
          v-bind="pageLinkProps(currentPage + 1)"
          class="blogs-page-btn"
          aria-label="Next page"
          @click="goToPage(currentPage + 1)"
        >
          ›
        </component>
      </div>

      <p v-if="!filteredBlogs.length" class="blogs-empty paddingTop60">
        New articles are on their way. Check back soon.
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, resolveComponent } from "vue";
import { BLOG_PAGE_SIZE, blogIndexPageCount, blogIndexPath } from "./BlogSeo.js";
import CommonTopLayout from "../Categories/CommonTopLayout/CommonTopLayout.vue";
import BlogCard from "./BlogCard/BlogCard.vue";
import BlogsData from "./BlogsData.js";
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

// page: the page number from /blogs/page/:page (none on /blogs itself).
const props = defineProps({ page: { type: String, default: "1" } });

// Latest article is featured; the rest are paged in a 3-column grid
const PAGE_SIZE = BLOG_PAGE_SIZE;
// With a category selected, the page is kept here; with "All", in the URL.
const categoryPage = ref(1);
const isAll = computed(() => activeCategory.value === "All");
const currentPage = computed(() =>
  isAll.value ? Number(props.page) || 1 : categoryPage.value
);

const featuredBlog = computed(() => filteredBlogs.value[0] || null);
const totalPages = computed(() =>
  isAll.value
    ? blogIndexPageCount(filteredBlogs.value.length)
    : Math.max(1, Math.ceil((filteredBlogs.value.length - 1) / PAGE_SIZE))
);
const remainingBlogs = computed(() => {
  const start = 1 + (currentPage.value - 1) * PAGE_SIZE;
  return filteredBlogs.value.slice(start, start + PAGE_SIZE);
});

const RouterLink = resolveComponent("RouterLink");
const inRange = (page) => page >= 1 && page <= totalPages.value;
// A link for another page of "All"; otherwise a button (disabled at the ends).
const pageLinkTag = (page) =>
  isAll.value && inRange(page) && page !== currentPage.value ? RouterLink : "button";
const pageLinkProps = (page) =>
  pageLinkTag(page) === RouterLink
    ? { to: blogIndexPath(page) }
    : { type: "button", disabled: !inRange(page) };

const scrollToList = () => {
  const grid = document.querySelector(".BlogsListingContainer .blogs-featured");
  if (grid) {
    window.scrollTo({
      top: grid.getBoundingClientRect().top + window.scrollY - 110,
      behavior: "smooth",
    });
  }
};

const selectCategory = (category) => {
  activeCategory.value = category;
  categoryPage.value = 1;
};

const goToPage = (page) => {
  if (!inRange(page)) return;
  if (!isAll.value) categoryPage.value = page;
  scrollToList();
};
</script>

<style scoped>
@import "./Blogs.css";
</style>
