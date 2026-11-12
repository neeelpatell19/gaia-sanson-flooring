<template>
    <div class="ImageGalleryContainer paddingTop60">
        <div class="Container">
            <div class="galleryHeader">
                <h2>Gallery</h2>
                <!-- <p>Explore our diverse range of interior applications and design solutions</p> -->
            </div>

            <div class="ImageGalleryGrid paddingBottom80">
                <!-- First Row - 3 Images -->
                <div class="galleryRow firstRow">
                    <div class="galleryItem" v-for="image in firstRowImages" :key="image.id">
                        <a-image :src="image.src" :alt="image.alt" :preview="{
                            src: image.src,
                            mask: 'Click to view full screen'
                        }" class="galleryImage" />
                    </div>
                </div>

                <!-- Second Row - 4 Images -->
                <div class="galleryRow secondRow">
                    <div class="galleryItem" v-for="image in secondRowImages" :key="image.id">
                        <a-image :src="image.src" :alt="image.alt" :preview="{
                            src: image.src,
                            mask: 'Click to view full screen'
                        }" class="galleryImage" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Image as AImage } from 'ant-design-vue';
import "./ImageGallery.css";

// Gallery data - First row with 3 images
const firstRowImages = [
    {
        id: 1,
        src: '/Images/site/gaia-carpet-project-gallery-6.webp',
        alt: 'Modern Office Workspace with Carpet Tiles'
    },
    {
        id: 2,
        src: '/Images/site/gaia-carpet-project-gallery-7.webp',
        alt: 'Hexagonal Acoustic Wall Panels'
    },
    {
        id: 3,
        src: '/Images/site/gaia-carpet-project-gallery-2.webp',
        alt: 'Collaborative Desk Area with Privacy Screens'
    }
];

// Gallery data - Second row with 4 images
const secondRowImages = [
    {
        id: 7,
        src: '/Images/site/gaia-carpet-project-gallery-8.webp',
        alt: 'Modern Interior with Premium Flooring'
    },
    {
        id: 4,
        src: '/Images/site/gaia-carpet-project-gallery-4.webp',
        alt: 'Children\'s Playroom with Colorful Design'
    },
    {
        id: 5,
        src: '/Images/site/gaia-carpet-project-gallery-1.webp',
        alt: 'Conference Room and Dining Area'
    },
    {
        id: 6,
        src: '/Images/site/gaia-carpet-project-gallery-5.webp',
        alt: 'Music Studio with Acoustic Panels'
    },
];
</script>

<style scoped>
@import './ImageGallery.css';
</style>
