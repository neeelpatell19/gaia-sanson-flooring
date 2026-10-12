<script>
import "./Footer.css"
</script>
<template>
    <footer class="FooterContainer paddingBottom80">
        <div class="footer-content Container paddingBottom20 paddingTop80 ">
            <!-- Logo and Tagline Section -->
            <div class="footer-section logo-section" data-aos="fade-up" data-aos-delay="100">
                <div class="logo-container">
                    <img src="/Images/GAIA_Logo.png" alt="GAIA by Sanson Floorings">
                    <p class="tagline">EXPERTS IN INNOVATIVE FLOOR FASHION</p>
                </div>
            </div>

            <!-- Contact Us Section -->
            <div class="footer-section contact-section" data-aos="fade-up" data-aos-delay="200">
                <h3 class="section-title">CONTACT US</h3>
                <div class="contact-info">
                    <div class="contact-item">
                        <a href="tel:+919910921119" target="_blank"><i style="color: white;" class="fas fa-phone"></i></a>
                        <a href="tel:+919910921119" class="contact-text phone-link">+91 99109 21119</a>
                    </div>
                    <div class="contact-item">
                        <a href="mailto:contact@sansonfloorings.com" target="_blank"><i style="color: white;" class="fas fa-envelope"></i></a>
                        <a href="mailto:contact@sansonfloorings.com"
                            class="contact-text email-link">contact@sansonfloorings.com</a>
                    </div>
                    <div class="contact-item">
                       <a href="https://www.sansonfloorings.com" target="_blank"><i style="color: white;" class="fas fa-globe"></i></a>
                        <a href="https://www.sansonfloorings.com" target="_blank"
                            class="contact-text website-link">www.sansonfloorings.com</a>
                    </div>
                    <div class="contact-item">
                         <a href="https://www.linkedin.com/company/gaia-by-sanson-floorings/" target="_blank">
                            <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path
                                d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0zM7.06 20.452H3.56V9h3.5v11.452zM5.31 7.433a2.03 2.03 0 1 1 .001-4.06 2.03 2.03 0 0 1-.001 4.06zM20.452 20.452h-3.5v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.5V9h3.36v1.561h.049c.468-.885 1.613-1.852 3.319-1.852 3.546 0 4.26 2.337 4.26 5.377v6.366z" />
                        </svg>
                         </a>
                        <a class="contact-text webiste-link li-links" href="https://www.linkedin.com/company/gaia-by-sanson-floorings/" target="_blank">
                            Gaia by Sanson Floorings
                        </a>
                    </div>
                </div>
            </div>

            <!-- Navigation Section -->
            <div class="footer-section navigation-section" data-aos="fade-up" data-aos-delay="300">
                <h3 class="section-title">NAVIGATION</h3>
                <nav class="footer-nav">
                    <div v-for="navItem in navigationData" :key="navItem.name" class="nav-group">
                        <router-link :to="navItem.path" class="nav-link main-link">{{ navItem.name }}</router-link>
                        <div v-if="navItem.hasDropdown && navItem.dropdownItems" class="sub-links">
                            <router-link v-for="subItem in navItem.dropdownItems" :key="subItem.name" :to="subItem.path"
                                class="nav-link sub-link">
                                {{ subItem.name }}
                            </router-link>
                        </div>
                    </div>
                </nav>
            </div>

            <!-- Address Section -->
            <div class="footer-section address-section" data-aos="fade-up" data-aos-delay="400">
                <h3 class="section-title">ADDRESS</h3>
                <div class="address-info">
                    <div class="address-item">
                        <h4 class="address-subtitle">Corporate Office:</h4>
                        <p class="address-text">B-5B, Plot No. 70, 1st Floor, Rama Road Industrial Area, New Delhi -
                            110015</p>
                    </div>
                    <div class="address-item">
                        <h4 class="address-subtitle">Manufacturing Unit:</h4>
                        <!-- <p class="address-text">D-9, Flatted Factory Complex, Jhandewalan, New Delhi - 110055</p> -->
                        <p class="address-text">SY No. 7/P and 8/P,
                            Kodicherla Village, Kothur Mandal,
                            Ranga Reddy District,
                            Hyderabad, Telangana - 509228, India</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Bottom Footer Section -->
        <div class="footer-bottom Container">
            <div class="footer-bottom-content">
                <div class="legal-links">
                    <a href="#" class="legal-link">Terms & Services</a>
                    <a href="#" class="legal-link">Privacy Policy</a>
                </div>
                <div class="copyright">
                    <p>© 2021 All Rights Reserved</p>
                </div>
                <div class="social-links">
                    <!-- <a href="https://www.linkedin.com/company/gaia-by-sanson-floorings/" target="_blank"
                        class="social-link">
                        <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path
                                d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0zM7.06 20.452H3.56V9h3.5v11.452zM5.31 7.433a2.03 2.03 0 1 1 .001-4.06 2.03 2.03 0 0 1-.001 4.06zM20.452 20.452h-3.5v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.5V9h3.36v1.561h.049c.468-.885 1.613-1.852 3.319-1.852 3.546 0 4.26 2.337 4.26 5.377v6.366z" />
                        </svg>
                    </a> -->
                    <!-- <a href="https://www.instagram.com/sansonfloorings/" target="_blank" class="social-link">
                        <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path
                                d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 2.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13zm0 2A4.5 4.5 0 1 0 16.5 13 4.5 4.5 0 0 0 12 8.5zM18 5.25a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 18 5.25z" />
                        </svg>
                    </a> -->
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import navigationBarData from '../NavigationBar/NavigationBarData.js';

// Use the navigation data in the footer
const navigationData = navigationBarData;
</script>

<style scoped>
/* Import the CSS file */
@import './Footer.css';
</style>