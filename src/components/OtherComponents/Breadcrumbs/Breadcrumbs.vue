<template>
  <!-- The visible trail matches the BreadcrumbList structured data, since
       both come from resolveBreadcrumb() in src/seo/pages.js. -->
  <nav v-if="crumbs.length" class="SiteBreadcrumbs" aria-label="Breadcrumb">
    <ol class="Container">
      <li v-for="(crumb, index) in crumbs" :key="crumb.path">
        <router-link v-if="index < crumbs.length - 1" :to="crumb.path">{{ crumb.name }}</router-link>
        <span v-else aria-current="page">{{ crumb.name }}</span>
      </li>
    </ol>
  </nav>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { resolveBreadcrumb } from "../../../seo/pages.js";

// Blog posts show their own breadcrumb inside the article header.
const OWN_BREADCRUMB = ["BlogDetail"];

const route = useRoute();
const crumbs = computed(() =>
  OWN_BREADCRUMB.includes(route.name) ? [] : resolveBreadcrumb(route)
);
</script>

<style scoped>
.SiteBreadcrumbs {
  background: #faf7f2;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  font-size: 0.9rem;
}
.SiteBreadcrumbs ol {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  margin: 0 auto;
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
}
.SiteBreadcrumbs li {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  color: #6b7785;
}
.SiteBreadcrumbs li + li::before {
  content: "/";
  margin-right: 0.25rem;
  color: #b9b2a6;
}
.SiteBreadcrumbs a {
  color: #2c3e50;
  text-decoration: none;
}
.SiteBreadcrumbs a:hover {
  text-decoration: underline;
}
/* Below 480px the navigation bar is fixed and overlaps the top of the page. */
@media (max-width: 480px) {
  .SiteBreadcrumbs {
    padding-top: 70px;
  }
}
</style>
