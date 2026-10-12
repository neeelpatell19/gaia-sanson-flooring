<script>
import "./SetsAPart.css";

export default {
  data() {
    return {
      setsApartData: {
        subtitle: "WHAT SETS US APART?",
        title:
          "India's first startup offering integrated solutions in floorings and acoustic panels for high-performance interiors.",
        image:
          "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/WhatsSeAPart.png",
      },
      parallaxOffset: 0,
      scrollHandler: null,
    };
  },
  mounted() {
    this.initParallax();
  },
  beforeUnmount() {
    // Clean up scroll listener when component is destroyed
    if (this.scrollHandler) {
      window.removeEventListener("scroll", this.scrollHandler);
    }
  },
  methods: {
    initParallax() {
      const backgroundImage = this.$el.querySelector(
        ".BackgoundOverlayImage img",
      );
      if (!backgroundImage) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.startParallax(backgroundImage);
            } else {
              this.stopParallax();
            }
          });
        },
        {
          threshold: 0,
          rootMargin: "0px 0px -100px 0px",
        },
      );

      observer.observe(this.$el);
    },
    startParallax(element) {
      // Store reference to the scroll handler for cleanup
      this.scrollHandler = () => {
        const rect = this.$el.getBoundingClientRect();
        const elementTop = rect.top;
        const elementHeight = rect.height;
        const windowHeight = window.innerHeight;

        // Calculate how much of the element is visible in the viewport
        const visibleTop = Math.max(0, windowHeight - elementTop);
        const visibleBottom = Math.min(
          elementHeight,
          windowHeight - elementTop + elementHeight,
        );
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);

        // Calculate scroll progress (0 to 1) based on element visibility
        const scrollProgress = visibleHeight / elementHeight;

        // Apply parallax effect with 100px to 0px range (reverse direction)
        this.parallaxOffset = (1 - scrollProgress) * 100;
        element.style.transform = `translateY(${this.parallaxOffset}px)`;
      };

      // Add scroll listener
      window.addEventListener("scroll", this.scrollHandler);

      // Set initial position to 0px (no offset)
      this.parallaxOffset = 0;
      element.style.transform = `translateY(0px)`;
    },
    stopParallax() {
      if (this.scrollHandler) {
        window.removeEventListener("scroll", this.scrollHandler);
        this.scrollHandler = null;
      }
    },
  },
};
</script>

<template>
  <div class="paddingTop60 paddingBottom80 SetsApartContainerParent">
    <div class="BackgoundOverlayImage">
      <img
        src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/BackgroundCarpet.png"
        alt=""
      />
    </div>
    <div class="SetsApartContainer">
      <!-- Left Side - Content -->
      <div
        class="sets-apart-content"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        <div class="content-wrapper">
          <h3
            class="sets-apart-subtitle text-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {{ setsApartData.subtitle }}
          </h3>
          <h2
            class="sets-apart-title text-center"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            {{ setsApartData.title }}
          </h2>
        </div>
      </div>
      <!-- <div class="sets-apart-logos-Container">
                <div class="sets-apart-logos-Container-item">
                    <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/StartUpIndiaImageUpdate.png"
                        alt="Startup India">
                </div>
                <div class="sets-apart-logos-Container-item">
                    <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/MakeInIndeaLogoImageNew.png"
                        alt="Make in India">
                </div>
            </div> -->

      <!-- Right Side - Smaller Image -->
      <!-- <div class="sets-apart-image" data-aos="fade-left" data-aos-delay="300">
                <div class="image-wrapper">
                    <img :src="setsApartData.image" alt="High-performance interiors" class="office-image" />
                    <div class="image-overlay"></div>
                </div>
            </div> -->
    </div>
  </div>
</template>
<style scoped></style>
