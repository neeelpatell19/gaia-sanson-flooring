<template>
  <div v-if="blog" class="blogDetailPage">
    <CommonTopLayout
      :heading="blog.title"
      :imageSrc="blog.coverImage"
      :imageAlt="blog.coverImageAlt"
    />

    <!-- Article Header -->
    <div class="BlogDetailHero Container paddingTop80">
      <nav class="blog-breadcrumb" aria-label="Breadcrumb">
        <router-link to="/">Home</router-link>
        <span class="blog-breadcrumb-sep">/</span>
        <router-link to="/blogs">Blogs</router-link>
        <span class="blog-breadcrumb-sep">/</span>
        <span class="blog-breadcrumb-current">{{ blog.title }}</span>
      </nav>

      <div
        class="BlogDetailHeroText"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200"
      >
        <div class="blog-category-badge">
          <span v-for="(tag, index) in blog.tags" :key="tag">
            {{ tag }}<span v-if="index < blog.tags.length - 1" class="blog-badge-dot">·</span>
          </span>
        </div>

        <p class="blog-detail-deck">{{ blog.excerpt }}</p>

        <div class="blog-detail-meta">
          <div class="blog-detail-meta-row">
            <span class="blog-detail-author">{{ blog.author }}</span>
            <span>{{ blog.location }}</span>
          </div>
          <div class="blog-detail-meta-row">
            <span>{{ formatBlogDate(blog.publishedDate) }}</span>
            <span v-if="blog.updatedDate">
              Updated {{ formatBlogDate(blog.updatedDate) }}
            </span>
            <span>{{ blog.readTime }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Article Body + Sidebar -->
    <div class="BlogDetailBodyContainer Container marginBottom80">
      <div class="BlogDetailBodyInner">
        <article
          class="BlogArticleBody"
          v-html="blogContent"
          @click="handleArticleClick"
        ></article>

        <aside class="BlogDetailSidebar">
          <div class="blog-sidebar-sticky">
            <div v-if="tableOfContents.length" class="blog-toc">
              <p class="blog-sidebar-title">In This Article</p>
              <ul class="blog-toc-list">
                <li v-for="item in tableOfContents" :key="item.id">
                  <a
                    :href="`#${item.id}`"
                    class="blog-toc-link"
                    :class="{ active: activeHeading === item.id }"
                    @click.prevent="scrollToHeading(item.id)"
                  >
                    {{ item.text }}
                  </a>
                </li>
              </ul>
            </div>

            <div class="blog-share">
              <p class="blog-sidebar-title">Connect</p>
              <div class="blog-share-links">
                <a
                  href="https://www.linkedin.com/company/gaia-by-sanson-floorings/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="blog-share-link"
                  aria-label="GAIA by Sanson Floorings on LinkedIn"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="https://wa.me/919910921119"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="blog-share-link"
                  aria-label="Chat with GAIA on WhatsApp"
                >
                  <i class="fab fa-whatsapp"></i>
                </a>
                <button
                  type="button"
                  class="blog-share-link"
                  :aria-label="copied ? 'Link copied' : 'Copy link'"
                  @click="copyLink"
                >
                  <i :class="copied ? 'fas fa-check' : 'fas fa-link'"></i>
                </button>
              </div>
            </div>

            <router-link
              v-if="blog.relatedProduct"
              :to="blog.relatedProduct.path"
              class="blog-sidebar-product"
            >
              <span class="blog-sidebar-product-label">Explore the range</span>
              <span class="blog-sidebar-product-name">
                {{ blog.relatedProduct.name }}
                <span class="arrow-icon">→</span>
              </span>
            </router-link>
          </div>
        </aside>
      </div>

      <div class="blog-detail-back">
        <router-link to="/blogs" class="common-btn">
          <span class="btn-arrow">←</span> All Blogs
        </router-link>
      </div>
    </div>

    <!-- More Articles -->
    <div v-if="relatedBlogs.length" class="BlogRelatedParent">
      <div class="Container paddingTop80 paddingBottom80">
        <div class="blog-related-header">
          <h2>More From Our Blog</h2>
        </div>
        <div class="blog-related-grid paddingTop60">
          <BlogCard v-for="item in relatedBlogs" :key="item.id" :blog="item" />
        </div>
      </div>
    </div>

    <HomeProducts title="EXPLORE OUR PRODUCT RANGE" />
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import CommonTopLayout from "../../Categories/CommonTopLayout/CommonTopLayout.vue";
import HomeProducts from "../../../HomeRoutes/HomeProducts/HomeProducts.vue";
import BlogCard from "../BlogCard/BlogCard.vue";
import BlogsData, { formatBlogDate, getBlogBySlug } from "../BlogsData.js";
import { SITE_URL } from "../BlogSeo.js";
import { addHeadingIds } from "../articleHeadings.js";
import "./BlogDetail.css";

// Article bodies live in ../BlogPosts/<slug>.html
const blogPosts = import.meta.glob("../BlogPosts/*.html", {
  query: "?raw",
  import: "default",
  eager: true,
});

const props = defineProps({
  slug: {
    type: String,
    required: true,
  },
});

const router = useRouter();

const blog = getBlogBySlug(props.slug);
const articleSource = blog ? blogPosts[`../BlogPosts/${blog.slug}.html`] || "" : "";
// Heading ids and the table of contents are made here rather than in the
// browser, so they are also present in the static HTML.
const { html: blogContent, toc: tableOfContents } = addHeadingIds(articleSource);

const relatedBlogs = computed(() =>
  blog
    ? [...BlogsData]
        .filter((item) => item.slug !== blog.slug)
        // Same topic cluster first, then same category, then newest.
        .sort(
          (a, b) =>
            Number(b.cluster === blog.cluster) -
              Number(a.cluster === blog.cluster) ||
            Number(b.category === blog.category) -
              Number(a.category === blog.category) ||
            b.publishedDate.localeCompare(a.publishedDate)
        )
        .slice(0, 3)
    : []
);

const pageUrl = blog ? `${SITE_URL}/blogs/${blog.slug}` : SITE_URL;

const activeHeading = ref(tableOfContents[0]?.id ?? "");
const copied = ref(false);

let headingObserver = null;

// Highlights the table-of-contents entry of the section being read.
const observeHeadings = () => {
  headingObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) activeHeading.value = entry.target.id;
      });
    },
    { rootMargin: "-100px 0px -65% 0px" }
  );
  tableOfContents.forEach(({ id }) => {
    const heading = document.getElementById(id);
    if (heading) headingObserver.observe(heading);
  });
};

const scrollToHeading = (id) => {
  const target = document.getElementById(id);
  if (!target) return;
  const top = target.getBoundingClientRect().top + window.scrollY - 110;
  window.scrollTo({ top, behavior: "smooth" });
  activeHeading.value = id;
};

// Keep internal links inside the article on the client-side router
const handleArticleClick = (event) => {
  const link = event.target.closest("a");
  if (!link) return;
  const href = link.getAttribute("href");
  if (href && href.startsWith("/") && !link.target) {
    event.preventDefault();
    router.push(href);
  }
};

const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(pageUrl);
    copied.value = true;
    setTimeout(() => (copied.value = false), 2000);
  } catch (error) {
    window.prompt("Copy this link:", pageUrl);
  }
};

onMounted(() => {
  if (tableOfContents.length) observeHeadings();
});

onBeforeUnmount(() => {
  if (headingObserver) headingObserver.disconnect();
});
</script>
