<template>
  <div class="HomeGalleryParentContainer">
    <div class="Container paddingTop60 paddingBottom80">
      <div class="HomeGalleryContainer">
        <!-- Header Section -->
        <div
          class="gallery-header"
          data-aos="fade-down"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          <h2>Gallery</h2>
        </div>

        <!-- Desktop Parallax Gallery Container -->
        <div
          v-if="!isMobile"
          class="parallax-gallery-container"
          ref="parallaxContainer"
        >
          <div
            v-for="(image, index) in galleryImages"
            :key="index"
            class="parallax-image-item"
            :class="`image-${index + 1}`"
            :ref="`imageItem${index}`"
            :style="image.style"
            tabindex="0"
            role="img"
            :aria-label="image.alt"
            @click="onImageClick(index)"
            @keydown.enter="onImageClick(index)"
            @keydown.space="onImageClick(index)"
            @mouseenter="onImageHover(index, true)"
            @mouseleave="onImageHover(index, false)"
          >
            <a-image
              :src="image.src"
              :alt="image.alt"
              :preview="{
                src: image.src,
                mask: 'Click to view full screen'
              }"
              class="parallax-image"
              @load="onImageLoad(index)"
              draggable="false"
            />
          </div>
        </div>

        <!-- Mobile Swiper Gallery Container -->
        <div v-if="isMobile" class="mobile-gallery-container">
          <swiper
            :modules="modules"
            :slides-per-view="1.2"
            :space-between="20"
            :centered-slides="true"
            :loop="true"
            :autoplay="{
              delay: 3000,
              disableOnInteraction: false,
            }"
            :pagination="{
              clickable: true,
              dynamicBullets: true,
            }"
            :navigation="false"
            :breakpoints="{
              480: {
                slidesPerView: 1.4,
                spaceBetween: 25,
              },
              640: {
                slidesPerView: 1.8,
                spaceBetween: 30,
              },
            }"
            class="gallery-swiper"
          >
            <swiper-slide
              v-for="(image, index) in galleryImages"
              :key="index"
              class="mobile-gallery-slide"
            >
              <div class="mobile-image-container">
                <a-image
                  :src="image.src"
                  :alt="image.alt"
                  :preview="{
                    src: image.src,
                    mask: 'Click to view full screen'
                  }"
                  class="mobile-gallery-image"
                />
                <!-- <div class="mobile-image-overlay">
                                    <h3>{{ image.caption }}</h3>
                                    <p>{{ image.description }}</p>
                                </div> -->
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./HomeGallery.css";
import { Image as AImage } from 'ant-design-vue';
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default {
  components: {
    Swiper,
    SwiperSlide,
    AImage,
  },
  data() {
    return {
      observer: null,
      parallaxElements: [],
      isMobile: false,
      modules: [Autoplay, Pagination, Navigation],
      galleryImages: [
        {
          src: "/Images/GalleryImages/Gallery1.png",
          alt: "Professional Flooring Installation",
          caption: "Premium Installation",
          description:
            "High-quality flooring installation showcasing our commitment to excellence and attention to detail.",
          parallaxSpeed: 1.2, // Increased speed for this image
          style: {
            position: "absolute",
            top: "5%",
            left: "5%",
            width: "350px",
            height: "250px",
            zIndex: 1,
          },
        },
        // {
        //     src: '/Images/GalleryImages/Gallery2.png',
        //     alt: 'Modern Interior Design',
        //     caption: 'Contemporary Design',
        //     description: 'Modern interior flooring solutions that blend functionality with sophisticated aesthetics.',
        //     parallaxSpeed: 0.6, // Normal speed
        //     style: {
        //         position: 'absolute',
        //         top: '35%',
        //         right: '5%',
        //         width: '380px',
        //         height: '290px',
        //         zIndex: 2
        //     }
        // },
        {
          src: "/Images/accoustic-full.webp",
          alt: "Commercial Flooring Project",
          caption: "Commercial Excellence",
          description:
            "Durable commercial flooring installations designed for high-traffic environments and lasting performance.",
          parallaxSpeed: 1.5, // Increased speed for this image
          style: {
            position: "absolute",
            top: "15%",
            left: "45%",
            width: "300px",
            height: "200px",
            zIndex: 3,
          },
        },
        {
          src: "/Images/GalleryImages/Gallery4.png",
          alt: "Residential Flooring Solution",
          caption: "Residential Beauty",
          description:
            "Elegant residential flooring that transforms living spaces with comfort and style.",
          parallaxSpeed: 0.8, // Normal speed
          style: {
            position: "absolute",
            top: "60%",
            left: "8%",
            width: "340px",
            height: "220px",
            zIndex: 4,
          },
        },
        {
          src: "/Images/gallery5.png",
          alt: "Innovative Flooring Design",
          caption: "Innovation & Quality",
          description:
            "Cutting-edge flooring solutions that push the boundaries of design and functionality.",
          parallaxSpeed: 0.5, // Slower speed
          style: {
            position: "absolute",
            top: "60%",
            right: "38%",
            // width: '280px',
            height: "280px",
            zIndex: 5,
          },
        },
        {
          src: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/GrassImage1.jpg",
          alt: "Innovative Flooring Design",
          caption: "Innovation & Quality",
          description:
            "Cutting-edge flooring solutions that push the boundaries of design and functionality.",
          parallaxSpeed: 0.5, // Slower speed
          style: {
            position: "absolute",
            top: "70%",
            right: "5%",
            width: "280px",
            height: "180px",
            zIndex: 5,
          },
        },
        {
          src: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/GalleryImage2.jpeg",
          alt: "Innovative Flooring Design",
          caption: "Innovation & Quality",
          description:
            "Cutting-edge flooring solutions that push the boundaries of design and functionality.",
          parallaxSpeed: 0.5, // Slower speed
          style: {
            position: "absolute",
            top: "40%",
            left: "30%",
            width: "280px",
            height: "180px",
            zIndex: 5,
          },
        },
      ],
    };
  },
  mounted() {
    this.checkMobileDevice();
    if (!this.isMobile) {
      this.initIntersectionObserver();
      this.initParallaxEffect();
      window.addEventListener("scroll", this.handleScroll);
    }
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    checkMobileDevice() {
      this.isMobile =
        window.innerWidth <= 768 ||
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );
    },

    handleResize() {
      const wasMobile = this.isMobile;
      this.checkMobileDevice();

      // If device type changed, reinitialize appropriate functionality
      if (wasMobile !== this.isMobile) {
        if (this.isMobile) {
          // Switched to mobile - clean up desktop functionality
          if (this.observer) {
            this.observer.disconnect();
          }
          window.removeEventListener("scroll", this.handleScroll);
          this.parallaxElements = [];
        } else {
          // Switched to desktop - initialize desktop functionality
          this.initIntersectionObserver();
          this.initParallaxEffect();
          window.addEventListener("scroll", this.handleScroll);
        }
      }
    },

    initIntersectionObserver() {
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      };

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const element = entry.target;
          const intersectionRatio = entry.intersectionRatio;

          if (entry.isIntersecting) {
            element.classList.add("in-view");
            // Apply parallax based on intersection ratio
            this.applyParallaxTransform(element, intersectionRatio);
          } else {
            element.classList.remove("in-view");
          }
        });
      }, options);

      // Observe all image elements and collect them for parallax
      this.$nextTick(() => {
        this.galleryImages.forEach((_, index) => {
          const elementRef = this.$refs[`imageItem${index}`];
          if (elementRef) {
            // Handle both single element and array refs
            const element = Array.isArray(elementRef)
              ? elementRef[0]
              : elementRef;
            if (element) {
              this.observer.observe(element);
              this.parallaxElements.push(element);
            }
          }
        });
      });
    },

    initParallaxEffect() {
      // Initialize parallax transforms with individual speeds
      this.$nextTick(() => {
        this.parallaxElements.forEach((element, index) => {
          // Use the parallaxSpeed from each image's configuration
          const speed = this.galleryImages[index]?.parallaxSpeed || 0.5;
          element.dataset.speed = speed;
          element.dataset.index = index;
        });
      });
    },

    handleScroll() {
      if (!this.$refs.parallaxContainer) return;

      const scrolled = window.pageYOffset;
      const containerRect =
        this.$refs.parallaxContainer.getBoundingClientRect();
      const containerTop = containerRect.top + scrolled;
      const windowHeight = window.innerHeight;

      // Only apply parallax when container is in view
      if (containerRect.bottom >= 0 && containerRect.top <= windowHeight) {
        this.parallaxElements.forEach((element, index) => {
          const speed = parseFloat(element.dataset.speed) || 0.5;
          const imageIndex = parseInt(element.dataset.index) || index;

          // Enhanced parallax calculation with individual speeds
          // Higher speed values create more dramatic movement
          const parallaxMultiplier = 0.3; // Base multiplier for all images
          const yPos = -(scrolled - containerTop) * speed * parallaxMultiplier;

          // Apply smooth transform with the calculated position
          element.style.transform = `translateY(${yPos}px)`;
        });
      }
    },

    applyParallaxTransform(element, ratio) {
      const opacity = ratio;
      element.style.opacity = opacity;
    },

    onImageLoad(index) {
      // Image loaded callback - can be used for additional animations
      const element = this.$refs[`imageItem${index}`];
      if (element) {
        const targetElement = Array.isArray(element) ? element[0] : element;
        if (targetElement) {
          targetElement.classList.add("loaded");
        }
      }
    },

    onImageClick(index) {
      // Handle image click - can be used for lightbox or navigation
      const image = this.galleryImages[index];
      console.log("Image clicked:", image.caption);
      // Add your click logic here (lightbox, modal, etc.)
    },

    onImageHover(index, isHovering) {
      // Handle hover state changes
      const element = this.$refs[`imageItem${index}`];
      if (element) {
        const targetElement = Array.isArray(element) ? element[0] : element;
        if (targetElement) {
          if (isHovering) {
            targetElement.classList.add("is-hovering");
            // Optional: Pause parallax during hover for better interaction
            targetElement.style.animationPlayState = "paused";
          } else {
            targetElement.classList.remove("is-hovering");
            targetElement.style.animationPlayState = "running";
          }
        }
      }
    },
  },
};
</script>

<style scoped></style>
