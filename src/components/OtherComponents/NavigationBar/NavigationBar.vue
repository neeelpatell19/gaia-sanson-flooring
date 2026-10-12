<template>
    <nav class="navigation-bar" :class="{ 'mobile-menu-open': isMobileMenuOpen }">
        <div class="nav-container">
            <div class="logo-section">
                <router-link to="/" class="logo-link">
                    <div class="logo">
                        <img src="/Images/GAIA_Logo.png" alt="GAIA by Sanson Floorings">
                    </div>
                </router-link>
            </div>

            <!-- Desktop Navigation -->
            <div class="desktop-nav">
                <ul class="nav-links">
                    <li v-for="item in navigationData" :key="item.name" class="nav-item">
                        <router-link v-if="!item.hasDropdown" :to="item.path" class="nav-link" @click="closeMobileMenu">
                            {{ item.name }}
                        </router-link>

                        <div v-else class="dropdown-container">
                            <button class="nav-link dropdown-trigger" @click="toggleDropdown(item.name)">
                                {{ item.name }}
                                <svg class="chevron-icon" :class="{ 'rotated': openDropdown === item.name }"
                                    viewBox="0 0 24 24">
                                    <path d="M7 10l5 5 5-5z" fill="currentColor" />
                                </svg>
                            </button>

                            <div class="dropdown-menu" :class="{ 'show': openDropdown === item.name }">
                                <div class="dropdown-content">
                                    <div v-for="dropdownItem in item.dropdownItems" :key="dropdownItem.name"
                                        class="dropdown-item">
                                        <router-link :to="dropdownItem.path" class="dropdown-link"
                                            @click="closeDropdown">
                                            <div class="dropdown-item-content">
                                                <h4 class="dropdown-title">{{ dropdownItem.name }}</h4>
                                                <p class="dropdown-description">{{ dropdownItem.description }}</p>
                                            </div>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <!-- Search Bar -->
            <!-- <div class="search-section">
                <div class="search-container">
                    <svg class="search-icon" viewBox="0 0 24 24">
                        <path
                            d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                            fill="currentColor" />
                    </svg>
                    <input type="text" class="search-input" placeholder="Search Products..." v-model="searchQuery">
                </div>
            </div> -->

            <!-- Mobile Menu Button -->
            <button class="mobile-menu-btn" @click="toggleMobileMenu" aria-label="Toggle mobile menu">
                <span class="hamburger-line" :class="{ 'active': isMobileMenuOpen }"></span>
                <span class="hamburger-line" :class="{ 'active': isMobileMenuOpen }"></span>
                <span class="hamburger-line" :class="{ 'active': isMobileMenuOpen }"></span>
            </button>
        </div>

        <!-- Mobile Navigation -->
        <div class="mobile-nav" :class="{ 'show': isMobileMenuOpen }">
            <ul class="mobile-nav-links">
                <li v-for="item in navigationData" :key="item.name" class="mobile-nav-item">
                    <router-link v-if="!item.hasDropdown" :to="item.path" class="mobile-nav-link"
                        @click="closeMobileMenu">
                        {{ item.name }}
                    </router-link>

                    <div v-else class="mobile-dropdown">
                        <button class="mobile-dropdown-trigger" @click="toggleMobileDropdown(item.name)">
                            {{ item.name }}
                            <svg class="mobile-chevron" :class="{ 'rotated': openMobileDropdown === item.name }"
                                viewBox="0 0 24 24">
                                <path d="M7 10l5 5 5-5z" fill="currentColor" />
                            </svg>
                        </button>

                        <div class="mobile-dropdown-content" :class="{ 'show': openMobileDropdown === item.name }">
                            <router-link v-for="dropdownItem in item.dropdownItems" :key="dropdownItem.name"
                                :to="dropdownItem.path" class="mobile-dropdown-link" @click="closeMobileMenu">
                                {{ dropdownItem.name }}
                            </router-link>
                        </div>
                    </div>
                </li>
            </ul>

        </div>
    </nav>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import navigationBarData from './NavigationBarData.js'
import "./NavigationBar.css"
export default {
    name: 'NavigationBar',
    setup() {
        const isMobileMenuOpen = ref(false)
        const openDropdown = ref(null)
        const openMobileDropdown = ref(null)
        const searchQuery = ref('')

        const toggleMobileMenu = () => {
            isMobileMenuOpen.value = !isMobileMenuOpen.value
            if (isMobileMenuOpen.value) {
                document.body.style.overflow = 'hidden'
            } else {
                document.body.style.overflow = 'unset'
            }
        }

        const closeMobileMenu = () => {
            isMobileMenuOpen.value = false
            openMobileDropdown.value = null
            document.body.style.overflow = 'unset'
        }

        const toggleDropdown = (name) => {
            openDropdown.value = openDropdown.value === name ? null : name
        }

        const closeDropdown = () => {
            openDropdown.value = null
        }

        const toggleMobileDropdown = (name) => {
            openMobileDropdown.value = openMobileDropdown.value === name ? null : name
        }

        const handleClickOutside = (event) => {
            if (!event.target.closest('.dropdown-container')) {
                closeDropdown()
            }
        }

        const handleResize = () => {
            if (window.innerWidth > 768) {
                closeMobileMenu()
            }
        }

        onMounted(() => {
            document.addEventListener('click', handleClickOutside)
            window.addEventListener('resize', handleResize)
        })

        onUnmounted(() => {
            document.removeEventListener('click', handleClickOutside)
            window.removeEventListener('resize', handleResize)
        })

        return {
            navigationData: navigationBarData,
            isMobileMenuOpen,
            openDropdown,
            openMobileDropdown,
            searchQuery,
            toggleMobileMenu,
            closeMobileMenu,
            toggleDropdown,
            closeDropdown,
            toggleMobileDropdown
        }
    }
}
</script>

<style scoped></style>
