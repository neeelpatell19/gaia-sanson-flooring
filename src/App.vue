<script setup>
import { useRoute } from "vue-router";
import { useHead } from "@unhead/vue";
import "./style.css";
import Footer from "./components/OtherComponents/Footer/Footer.vue";
import NavigationBar from "./components/OtherComponents/NavigationBar/NavigationBar.vue";
import PageTransition from "./components/FramerAnimation/PageTransition.vue";
import WhatsappBtn from "./components/OtherComponents/WhatsappBtn/WhatsappBtn.vue";
import BackToTop from "./components/OtherComponents/BackToTop/BackToTop.vue";
import "primeicons/primeicons.css";
import Breadcrumbs from "./components/OtherComponents/Breadcrumbs/Breadcrumbs.vue";
import { resolvePageSeo } from "./seo/pages.js";
import { buildHead } from "./seo/head.js";
import { loadAnalytics, trackLinkClicks } from "./analytics.js";
import { onMounted } from "vue";

// Title, description, canonical, Open Graph and JSON-LD for the current page.
// Written into the HTML while pre-rendering, and kept up to date when the
// visitor navigates.
const route = useRoute();
useHead(() => buildHead(resolvePageSeo(route)));

// GA4 (once its ID is set in analytics.js) and phone / WhatsApp / e-mail /
// brochure click tracking.
onMounted(() => {
  loadAnalytics();
  trackLinkClicks();
});
</script>

<template>
  <NavigationBar />
  <Breadcrumbs />
  <PageTransition>
    <router-view />
  </PageTransition>
  <Footer />
  <WhatsappBtn />
  <BackToTop />
</template>

<style scoped></style>
