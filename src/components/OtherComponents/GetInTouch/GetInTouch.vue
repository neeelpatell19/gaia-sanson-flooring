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
            <h3>
              {{ description }}
            </h3>
          </div>
          <div class="input-group">
            <input
              type="email"
              placeholder="Your email address"
              class="email-input"
            />
            <button class="submit-button" type="submit">
              <span class="arrow-icon">↗</span>
            </button>
          </div>
        </div>

        <!-- Right Section - Dynamic Descriptive Text -->
        <div class="description-section desktop-description">
          <h3>
            {{ description }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Define props for dynamic content
defineProps({
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
</script>

<style scoped>
@import "./GetInTouch.css";
</style>
