<template>
  <div class="LegalPage Container paddingTop80 paddingBottom80">
    <h1>{{ content.title }}</h1>
    <p class="LegalUpdated">
      Last updated: <time :datetime="content.lastUpdated">{{ updatedLabel }}</time>
    </p>
    <p>{{ content.intro }}</p>
    <section v-for="section in content.sections" :key="section.heading">
      <h2>{{ section.heading }}</h2>
      <p v-for="(paragraph, i) in section.paragraphs" :key="i">{{ paragraph }}</p>
    </section>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { LEGAL_PAGES } from "./legalContent.js";

// page: "terms" or "privacy" (set by the route).
const props = defineProps({ page: { type: String, required: true } });
const content = computed(() => LEGAL_PAGES[props.page]);

// Formatted by hand so the pre-rendered HTML and the browser always agree.
const MONTHS = ["January", "February", "March", "April", "May", "June", "July",
  "August", "September", "October", "November", "December"];
const updatedLabel = computed(() => {
  const [year, month, day] = content.value.lastUpdated.split("-").map(Number);
  return `${day} ${MONTHS[month - 1]} ${year}`;
});
</script>

<style scoped>
.LegalPage {
  max-width: 820px;
  line-height: 1.7;
  color: #2c3e50;
}
/* The global h1 is white (it sits on banner images); this one is on a light page. */
.LegalPage h1 {
  font-size: 2.4rem;
  margin-bottom: 0.5rem;
  color: #1a1a2e;
}
.LegalPage h2 {
  font-size: 1.3rem;
  margin: 2rem 0 0.5rem;
}
.LegalPage p {
  margin: 0 0 1rem;
}
.LegalUpdated {
  color: #6b7785;
  font-size: 0.95rem;
}
</style>
