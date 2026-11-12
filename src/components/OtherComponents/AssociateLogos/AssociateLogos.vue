<template>
    <div class="AssociateLogosContainer paddingBottom80">
        <div class="Container">
            <div class="associateLogosHeader">
                <h2>Our Associated Groups</h2>
                <p>A Unified Network of Specialized Groups Delivering Excellence Across Industries</p>
            </div>

            <div class="AssociateLogosGrid">
                <div class="AssociateLogoItem" v-for="logo in associateLogos" :key="logo.id">
                    <div class="logoBox">
                        <img :src="logo.image" :alt="logo.name" />
                        <!-- <div class="logoInfo">
                            <h3>{{ logo.name }}</h3>
                            <p v-if="logo.tagline">{{ logo.tagline }}</p>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import "./AssociateLogos.css";

// Associate logos data - placeholder images that can be replaced later
const associateLogos = [
    {
        id: 1,
        name: 'SEEDO TOYS',
        tagline: 'Innovative Play Solutions',
        image: '/Images/site/seedo-toys-logo.webp'
    },
    {
        id: 2,
        name: 'SanFit',
        tagline: 'Enhancing Safety',
        image: '/Images/site/sanfit-logo.webp'
    },
    {
        id: 3,
        name: 'Sanson Promo Innovations LLP',
        tagline: 'Creative Promotional Solutions',
        image: '/Images/site/sanson-logo.webp'
    },
    {
        id: 4,
        name: 'Make in India',
        tagline: 'Manufacturing Excellence',
        image: '/Images/site/make-in-india-logo-associate.webp'
    },
    {
        id: 5,
        name: 'GAIA',
        tagline: 'Flooring Fashion',
        image: '/Images/GAIA_Logo.png'
    }
];
</script>

<style scoped>
@import './AssociateLogos.css';
</style>
