<template>
  <div class="NotFoundPage">
    <CommonTopLayout
      heading="Page Not Found"
      imageSrc="/Images/AboutUsBannerImage.webp"
      imageAlt="Open-plan office with desks on grey GAIA carpet tiles"
    />

    <div class="NotFoundContent Container paddingTop80 marginBottom80">
      <h2 class="NotFoundTitle">We could not find that page</h2>
      <p class="NotFoundText">
        The link may be out of date or the address may have a typing mistake.
        These pages may help:
      </p>
      <ul class="NotFoundLinks">
        <li><router-link to="/">Home</router-link></li>
        <li>
          <router-link to="/carpet-tiles">Carpet tiles</router-link>
        </li>
        <li>
          <router-link to="/acoustic-pet-panels"
            >Acoustic PET panels</router-link
          >
        </li>
        <li>
          <router-link to="/artificial-grass"
            >Artificial grass and multiturf</router-link
          >
        </li>
        <li><router-link to="/blogs">Blogs</router-link></li>
        <li><router-link to="/about-us">About us</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import CommonTopLayout from "../Categories/CommonTopLayout/CommonTopLayout.vue";
</script>

<style scoped>
.NotFoundContent {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.NotFoundText {
  color: #2c3e50;
}

.NotFoundLinks {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 24px;
  padding: 0;
  margin: 8px 0 0;
}

.NotFoundLinks a {
  color: #2f394a;
  font-family: "Work Sans", sans-serif;
  font-size: 18px;
  text-decoration: underline;
}
</style>
