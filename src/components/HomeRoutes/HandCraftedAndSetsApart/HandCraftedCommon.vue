<script>
import "./HandCraftedCommon.css";

export default {
  data() {
    return {
      handcraftedData: {
        title: "Handcrafted with pride in India",
        description:
          "Our carpets, made from locally sourced materials, reflect India's craftsmanship and commitment to sustainability. By choosing them, you support the Make in India movement, strengthening the local economy and empowering artisans.",
        image:
          "/Images/site/handcrafted-carpet-tiles.webp",
      },
      setsApartData: {
        subtitle: "WHAT SETS US APART?",
        title:
          "India's first startup offering integrated solutions in floorings and acoustic panels for high-performance interiors.",
        image:
          "/Images/site/what-sets-gaia-apart.webp",
      },
    };
  },
};
</script>

<template>
  <div class="merged-sections-container">
    <!-- First Section: Handcrafted with Pride -->
    <div class="paddingTop80 paddingBottom80 HandCraftedCommonContainerParent">
      <div class="HandCraftedCommonContainer">
        <!-- Left Side - Manufacturing Image -->
        <div
          class="handcrafted-image-container"
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          <div class="image-wrapper">
            <img
              :src="handcraftedData.image"
              alt="Handcrafted Manufacturing Process"
              class="manufacturing-image"
            />
            <div class="image-overlay"></div>
          </div>
        </div>

        <!-- Right Side - Content -->
        <div
          class="handcrafted-content-container"
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          <div class="content-wrapper">
            <h2
              class="handcrafted-title"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="300"
            >
              <span class="title-script">Manufactured</span> in India
            </h2>

            <p
              class="handcrafted-description"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="400"
            >
              Our carpets, made from locally sourced materials using advanced
              manufacturing processes, reflect India's quality and commitment to
              sustainability. By choosing them, you support the Make in India
              movement and strengthen the local economy.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Second Section: What Sets Us Apart -->
    <div class="paddingTop80 paddingBottom80 SetsApartContainerParent">
      <div class="SetsApartContainer">
        <!-- Left Side - Content -->
        <div
          class="sets-apart-content"
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          <div class="content-wrapper">
            <h3
              class="sets-apart-subtitle"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="200"
            >
              {{ setsApartData.subtitle }}
            </h3>
            <h2
              class="sets-apart-title"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="300"
            >
              {{ setsApartData.title }}
            </h2>
          </div>
        </div>

        <!-- Right Side - Smaller Image -->
        <div
          class="sets-apart-image"
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay="400"
        >
          <div class="image-wrapper">
            <img
              :src="setsApartData.image"
              alt="High-performance interiors"
              class="office-image"
            />
            <div class="image-overlay"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.merged-sections-container {
  background: linear-gradient(180deg, #ecedee 0%, #f8f9fa 50%, #ecedee 100%);
}
</style>
