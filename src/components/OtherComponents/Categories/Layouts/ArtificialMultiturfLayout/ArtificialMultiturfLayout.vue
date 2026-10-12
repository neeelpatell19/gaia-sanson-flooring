<template>
  <div class="width100">
    <!-- <CommonTopLayout heading="Premium Artificial Grass for Every Space"
            imageSrc="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Acoustic Solutions Image.png"
            imageAlt="Artificial & Multiturf" /> -->

    <CommonTopLayout
      heading="Artificial Grass & Multiturf "
      imageSrc="/Images/ArtificialGrassImage.webp"
      imageAlt="Artificial grass background image"
    />
    <div class="paddingTop80" style="background-color: white !important">
      <MakeInIndia
        description="1st Time in India, International Standard UNE 14836 certified grass yarn from Bellinturf."
      />
    </div>
    <div
      class="ArtificialMultiturfLayoutContainer paddingTop80 paddingBottom80 Container"
    >
      <h2 data-aos="fade-down" data-aos-duration="800" data-aos-delay="100">
        Explore our Artificial Grass collection
      </h2>
      <div class="ArtificialMultiturfGrid paddingTop60">
        <div class="ArtificialMultiturfGridItem">
          <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
            <img
              src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/LandScapeMainImage.jpg"
              alt="Landscape artificial grass"
            />
            <div class="ArtificialMultiturfGridItemText">
              <h3>Landscape Grass</h3>
              <router-link to="/artificial-grass/landscape-grass">
                <button>View More</button>
              </router-link>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="400">
            <img src="/Images/products/sports-grass1.jpg" alt="Sports artificial grass" />
            <div class="ArtificialMultiturfGridItemText">
              <h3>Sports Grass</h3>
              <router-link to="/artificial-grass/sports-grass">
                <button>View More</button>
              </router-link>
            </div>
          </div>
        </div>
        <div class="ArtificialMultiturfGridItem">
          <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
            <img src="/Images/products/multiturf2.jpg" alt="MultiTurf artificial grass" />
            <div class="ArtificialMultiturfGridItemText">
              <h3>MultiTurf</h3>
              <router-link to="/artificial-grass/multisports-grass">
                <button>View More</button>
              </router-link>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="500">
            <img
              src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/curly Grass.jpg"
              alt="Curly artificial grass"
            />
            <div class="ArtificialMultiturfGridItemText">
              <h3>Curly Grass</h3>
              <router-link to="/artificial-grass/curly-grass">
                <button>View More</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="width100 WhyChooseArtificialMultiturf paddingTop80 paddingBottom80"
    >
      <div class="why-choose-section Container">
        <h2 data-aos="fade-down" data-aos-duration="800" data-aos-delay="100">
          Why Choose Our Artificial Grass?
        </h2>
        <div class="features-grid paddingTop60">
          <div
            class="feature-card"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="200"
          >
            <div class="feature-icon">
              <img
                src="/Images/WhyChooseIcons/UV-Stabilized.svg"
                alt="UV-Stabilized"
              />
            </div>
            <h3>UV-Stabilized</h3>
            <p>Engineered for lasting color</p>
          </div>

          <div
            class="feature-card"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="300"
          >
            <div class="feature-icon">
              <img
                src="/Images/WhyChooseIcons/Eco-Conscious.svg"
                alt="Eco-Conscious"
              />
            </div>
            <h3>Eco-Conscious</h3>
            <p>Less water, no fertilizers, low maintenance</p>
          </div>

          <div
            class="feature-card"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="400"
          >
            <div class="feature-icon">
              <img
                src="/Images/WhyChooseIcons/Pet & Child-Friendly.svg"
                alt="Pet & Child-Friendly"
              />
            </div>
            <h3>Pet & Child-Friendly</h3>
            <p>Safe for pets and children, 100% Lead Free</p>
          </div>

          <div
            class="feature-card"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="350"
          >
            <div class="feature-icon">
              <img
                src="/Images/WhyChooseIcons/Weatherproof.svg"
                alt="Weatherproof & Drainage-Ready"
              />
            </div>
            <h3>Weatherproof & Drainage-Ready</h3>
            <p>Engineered to withstand every climate</p>
          </div>

          <div
            class="feature-card"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="450"
          >
            <div class="feature-icon">
              <img
                src="/Images/WhyChooseIcons/Custom Cuts.svg"
                alt="Custom Cuts & Install Support"
              />
            </div>
            <h3>Custom Cuts & Install Support</h3>
            <p>Scalable solutions for large projects</p>
          </div>
        </div>
      </div>
    </div>
    <div class="width100 BroadloomCarpetsLayoutContainer">
      <!-- <div class="BackgroundColorContainer">
                <div>

                </div>
                <div>

                </div>
            </div> -->
      <div class="CommonHeader paddingTop80 paddingBottom80 Container">
        <div class="width100">
          <div class="max-width-800">
            <h2
              class="text-center"
              style="justify-content: center"
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              Designed for Every Space
            </h2>
            <br />
            <p
              class="text-center"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="200"
            >
              Versatile solutions that enhance every environment.
            </p>
          </div>
          <div
            class="paddingTop80"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            <swiper
              @swiper="onSwiper"
              :slidesPerView="3"
              :spaceBetween="50"
              :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }"
              :loop="true"
              :speed="700"
              :modules="[SwiperNavigation, Autoplay, Pagination]"
              :breakpoints="{
                320: { slidesPerView: 1, spaceBetween: 15 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 2, spaceBetween: 30 },
                1200: { slidesPerView: 3, spaceBetween: 100 },
              }"
              :navigation="{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }"
              :pagination="{
                el: '.swiper-pagination-custom',
                clickable: true,
                dynamicBullets: true,
              }"
            >
              <swiper-slide
                v-for="(design, index) in DesignedData"
                :key="index"
                class="DesignSlide"
              >
                <div class="DesignedContainer">
                  <div class="DesignedImage">
                    <img :src="design.image" :alt="design.alt" />
                  </div>
                  <div class="DesignedText">
                    <h3 class="text-center" v-html="design.title"></h3>
                    <p class="text-center" style="color: #525252">
                      {{ design.description }}
                    </p>
                  </div>
                </div>
              </swiper-slide>
            </swiper>

            <!-- Pagination dots -->
            <div class="swiper-pagination-custom"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <GetInTouch
    title="Get In Touch!"
    subtitle="Partner with Us for Tailored Solutions"
    description="Get in touch with us to design and customize your perfect artificial grass space, tailored to your needs."
  />
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import {
  Navigation as SwiperNavigation,
  Autoplay,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CommonTopLayout from "../../CommonTopLayout/CommonTopLayout.vue";
import GetInTouch from "../../../GetInTouch/GetInTouch.vue";
import MakeInIndia from "../MakeInIndia/MakeInIndia.vue";
const swiperInstance = ref(null);

const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
};

const DesignedData = [
  {
    image:
      "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Kids at Play.png",
    alt: "Child-friendly play lounge with artificial grass",
    title: "Child-Friendly<br>Play Lounge",
    description: "Soft, safe, and always green – perfect turf for endless fun.",
  },
  {
    image:
      "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Indoor Play Zone.png",
    alt: "Indoor play zone with artificial grass",
    title: "Indoor<br>Play Zone",
    description: "Bring the playground indoors with vibrant, cushioned grass.",
  },
  {
    image:
      "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Colorful Outdoor Playground.png",
    alt: "Colorful outdoor playground with artificial grass",
    title: "Colorful Outdoor<br>Playground",
    description:
      "A splash of color and comfort for big adventures under the sun.",
  },
];
</script>

<style scoped>
@import "./ArtificialMultiturfLayout.css";
</style>
