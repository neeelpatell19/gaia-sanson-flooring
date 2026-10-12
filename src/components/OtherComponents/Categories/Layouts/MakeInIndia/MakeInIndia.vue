<template>
  <div>
    <div class="Container EditContainerContent paddingBottom80">
      <br />
      <div>
        <h2 data-aos="fade-down" data-aos-duration="800" data-aos-delay="100">
          Manufactured in India
        </h2>
        <br />
        <h3 data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
          {{ description }}
        </h3>
      </div>
      <div class="AccousticContainerLogo" style="margin-top: 20px">
        <div class="sets-apart-logos-Container" style="justify-content: start">
          <div class="sets-apart-logos-Container-item">
            <img
              src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/StartUpIndiaImageUpdate.png"
              alt="Startup India"
            />
          </div>
          <div class="sets-apart-logos-Container-item">
            <img
              src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/MakeInIndeaLogoImageNew.png"
              alt="Make in India"
            />
          </div>
          <!-- BellinTurf logo (optional per page) -->
          <div v-if="showBellinTurfLogo" class="sets-apart-logos-Container-item">
            <img src="/Images/bellinturf-logo.webp" alt="Bellinturf" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import "../AcousticTilesLayout/AcousticTilesLayout.css";

defineProps({
  showBellinTurfLogo: {
    type: Boolean,
    default: true,
  },
  description: {
    type: String,
    default:
      "India's first startup offering integrated solutions in floorings and acoustic panels for high-performance interiors.",
  },
});
</script>
