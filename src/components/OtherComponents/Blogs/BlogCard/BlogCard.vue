<template>
  <router-link
    :to="`/blogs/${blog.slug}`"
    class="blog-card"
    :class="{ 'blog-card--featured': featured }"
    :aria-label="`Read article: ${blog.title}`"
  >
    <div class="blog-card-image-section">
      <div class="blog-card-image-wrapper">
        <ImageLoader
          :src="blog.coverImage"
          :alt="blog.coverImageAlt || blog.title"
          class="blog-card-image"
        />
        <div class="blog-card-image-overlay"></div>
      </div>
      <span class="blog-card-category">{{ blog.category }}</span>
    </div>

    <div class="blog-card-content">
      <p class="blog-card-meta">
        <span>{{ formatBlogDate(blog.publishedDate) }}</span>
        <span class="blog-card-meta-dot"></span>
        <span>{{ blog.readTime }}</span>
      </p>

      <h3 class="blog-card-title">{{ blog.title }}</h3>
      <p class="blog-card-excerpt">{{ blog.excerpt }}</p>

      <div class="blog-card-footer">
        <span class="blog-card-read">Read Article</span>
        <div class="blog-card-arrow">
          <span class="arrow-icon">→</span>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script setup>
import ImageLoader from "../../../FramerAnimation/ImageLoader.vue";
import { formatBlogDate } from "../BlogsData.js";
import "./BlogCard.css";

defineProps({
  blog: {
    type: Object,
    required: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
});
</script>
