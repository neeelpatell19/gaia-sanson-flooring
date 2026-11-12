<template>
  <div class="get-in-touch-section">
    <div class="vertical-line"></div>
    <div class="container">
      <div class="content-wrapper">
        <!-- Left Section - Contact Form -->
        <div class="contact-form-section">
          <h2 class="get-in-touch-title" style="color: black">{{ title }}</h2>
          <p class="subtitle">{{ subtitle }}</p>
          <div
            class="description-section mobile-description"
            style="margin-bottom: 24px"
          >
            <p class="lead-text">
              {{ description }}
            </p>
          </div>
          <!-- Opens an e-mail to the sales team that records the page it was
               sent from, and reports a GA4 "generate_lead" conversion. -->
          <form class="input-group" @submit.prevent="sendEnquiry">
            <label class="visually-hidden" :for="inputId">Your email address</label>
            <input
              :id="inputId"
              v-model="email"
              type="email"
              placeholder="Your email address"
              class="email-input"
            />
            <button class="submit-button" type="submit" aria-label="Send enquiry">
              <span class="arrow-icon">↗</span>
            </button>
          </form>
        </div>

        <!-- Right Section - Dynamic Descriptive Text -->
        <div class="description-section desktop-description">
          <p class="lead-text">
            {{ description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, useId } from "vue";
import { useRoute } from "vue-router";
import { track } from "../../../analytics.js";

// Define props for dynamic content
const props = defineProps({
  title: {
    type: String,
    default: "Get In Touch!",
  },
  subtitle: {
    type: String,
    default: "Tell Us What You Need for Your Perfect Carpet",
  },
  description: {
    type: String,
    default:
      "We customize carpets — including artificial grass — to your size, color, and design. Tell us your idea, we'll make it real.",
  },
});

const CONTACT_EMAIL = "contact@sansonfloorings.com";
const route = useRoute();
const email = ref("");
const inputId = useId();

const mailtoHref = computed(
  () =>
    `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      `Website enquiry from ${route.path}`
    )}`
);

function sendEnquiry() {
  track("generate_lead", { form: "get_in_touch", source_page: route.path });
  const body = `Hello GAIA team,

Please contact me about: ${props.subtitle}

My email: ${email.value}
Sent from: https://sansonfloorings.com${route.path}`;
  window.location.href = `${mailtoHref.value}&body=${encodeURIComponent(body)}`;
}
</script>

<style scoped>
@import "./GetInTouch.css";

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}
</style>
