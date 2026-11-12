<script>
import "./HomeProducts.css"
import HomeProductsData from "./HomeProductsData"
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import ImageLoader from '../../FramerAnimation/ImageLoader.vue'

export default {
    components: {
        Swiper,
        SwiperSlide,
        ImageLoader,
    },
    props: {
        title: {
            type: String,
            default: "OUR PRODUCT RANGE"
        },
        // subtitle: {
        //     type: String,
        //     default: "Discover our comprehensive collection of premium flooring solutions"
        // }
    },
    data() {
        return {
            productsData: HomeProductsData,
            swiperInstance: null,
        };
    },
    setup() {
        return {
            modules: [Autoplay, Pagination, Navigation],
        };
    },
    methods: {
        onSwiper(swiper) {
            this.swiperInstance = swiper;
        },
        goToPrevSlide() {
            if (this.swiperInstance) {
                this.swiperInstance.slidePrev();
            }
        },
        goToNextSlide() {
            if (this.swiperInstance) {
                this.swiperInstance.slideNext();
            }
        },
        navigateToProduct(link) {
            this.$router.push(link);
        }
    }
};
</script>

<template>
    <div class="HomeProductParentContainer">
        <div class="Container paddingTop80 paddingBottom80 ">
            <div class="HomeProductsContainer">
                <!-- Header Section -->
                <div class="products-header" data-aos="fade-down" data-aos-duration="800"
                    data-aos-delay="100">
                    <h2 class="products-title">{{ title }}</h2>
                    <!-- <p class="products-subtitle">{{ subtitle }}</p> -->
                </div>

                <!-- Swiper Container -->
                <div class="products-swiper-container paddingTop60" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                    <swiper @swiper="onSwiper" :slidesPerView="1":spaceBetween="30" :loop="true" :speed="800"
                        :modules="modules":autoplay="{
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }"  class="products-swiper" :breakpoints="{
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            }
                        }">
                        <swiper-slide v-for="product in productsData" :key="product.id">
                            <router-link :to="product.link" class="product-card" :style="{ backgroundColor: product.bgColor }">
                                <!-- Top Section - Description -->
                                <div class="card-top-section">
                                    <p class="card-description" :style="{ color: product.textColor }">
                                        {{ product.description }}
                                    </p>
                                </div>

                                <!-- Middle Section - Image -->
                                <div class="card-image-section">
                                    <div class="image-wrapper">
                                        <ImageLoader :src="product.image" :alt="product.title" class="product-image" />
                                        <div class="image-overlay"></div>
                                    </div>
                                </div>

                                <!-- Bottom Section - Title and Arrow -->
                                <div class="card-bottom-section">
                                    <div class="card-title-section">
                                        <h4 class="card-title" :style="{ color: product.textColor }">
                                            {{ product.title }}
                                        </h4>
                                        <div class="card-arrow">
                                            <span class="arrow-icon">→</span>
                                        </div>
                                    </div>
                                </div>
                            </router-link>
                        </swiper-slide>
                    </swiper>

                    <!-- Navigation Buttons -->
                    <div class="products-navigation" data-aos="fade-up" data-aos-duration="600" data-aos-delay="400">
                        <button @click="goToPrevSlide" class="nav-btn prev-btn">
                            <span>‹</span>
                        </button>
                        <button @click="goToNextSlide" class="nav-btn next-btn">
                            <span>›</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped></style>