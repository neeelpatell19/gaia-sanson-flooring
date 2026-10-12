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
          "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/HandcraftedWith Image.png",
      },
    };
  },
  mounted() {
    // Initialize AOS if it's available
    if (typeof AOS !== "undefined") {
      AOS.init({
        duration: 800,
        easing: "ease-in-out",
        once: true,
      });
    }
  },
};
</script>

<template>
  <div class="HandCraftedCommonContainerParent">
    <div class="HandCraftedContainer">
      <div class="CompanyDetailsContainer">
        <div class="Container">
          <div class="FlexContainerEdit">
            <div class="Width50">
              <h2 class="whiteColor full-text">Manufactured in India</h2>
              <br />
              <p class="whiteColor">
                GAIA stands as a proud contributor to the Make in India
                initiative. By producing world-class flooring solutions with
                advanced machinery in India, we combine global standards with
                local strength — driving innovation, self-reliance, and progress
                from the ground up.
              </p>
            </div>
            <div class="LogoContainerEdit">
              <div class="LogoContainerEditRow logo-row-top">
                <div>
                  <img
                    src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/StartUpIndiaImageUpdate.png"
                    alt="Startup India"
                  />
                </div>
                <div>
                  <img
                    src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/MakeInIndeaLogoImageNew.png"
                    alt="Make in India"
                  />
                </div>
                <div>
                  <img
                    src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/GreenproLogo.png"
                    alt="GreenPro Certified Logo"
                    class="greenpro-logo-inline-img"
                  />
                </div>
              </div>
              <div class="LogoContainerEditRow logo-row-top">
                <div>
                  <img
                    src="/Images/CRI%20Greenlabel.png"
                    alt="CRI Greenlabel Logo"
                  />
                </div>
                <div>
                  <img
                    src="/Images/arai%20GAIA%20logo.jpeg"
                    alt="ARAI GAIA Logo"
                  />
                </div>
                <div>
                  <img src="/Images/ASTM_logo.png" alt="ASTM Logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Left Side - Manufacturing Image -->
      <!-- <div class="handcrafted-image-container" data-aos="fade-right" data-aos-delay="200">
                <div class="image-wrapper">
                    <img :src="handcraftedData.image" alt="Handcrafted Manufacturing Process" class="manufacturing-image" />
                    <div class="image-overlay"></div>
                </div>
            </div> -->

      <!-- Right Side - Content -->
      <!-- <div class="handcrafted-content-container" data-aos="fade-left" data-aos-delay="400">
                <div class="content-wrapper">
                    <h2 class="handcrafted-title" data-aos="fade-up" data-aos-delay="600">
                        <span class="title-script">Manufactured</span> in India
                    </h2>
                    
                    <p class="handcrafted-description" data-aos="fade-up" data-aos-delay="800">
                        At GAIA, we proudly contribute to the Make in India initiative by producing high-quality flooring solutions with advanced machinery right here in India. Our commitment to local manufacturing ensures we deliver top-tier products that meet global standards, supporting India’s vision for innovation and self-reliance.
                    </p>
                    <div class="sets-apart-logos-Container">
              <div class="sets-apart-logos-Container-item">
                <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/StartUpIndiaImageUpdate.png" alt="Startup India">
              </div>
              <div class="sets-apart-logos-Container-item">
                <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/MakeInIndiaUpaatedLogoImage.webp" alt="Make in India">
              </div>
            </div>
                </div>
            </div>
            <div>
                
            </div> -->
    </div>
  </div>
</template>
<style scoped></style>
