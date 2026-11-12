<script>
import "./BottomCards.css"
import BottomCardsData from "./BottomCardsData"

export default {
    data() {
        return {
            cardsData: BottomCardsData
        }
    }
}
</script>

<template>
    <!-- Common Parent Container Class for Reusability -->
    <div class="Container CommonLayoutContainer paddingBottom80">
        <div class="BottomCardsContainer">
            <!-- Grid Container -->
            <div class="cards-grid">
                <div v-for="card in cardsData" :key="card.id" class="card-item">
                    <!-- Image Placeholder (for future use) -->
                    <div class="card-image-placeholder">
                        <!-- Image will be added later -->
                        <img :src="card.image" alt="" aria-hidden="true" />
                    </div>

                    <!-- Card Content -->
                    <div class="card-content">
                        <h3 class="card-title whiteColor  text-center ">{{ card.title }}</h3>
                        <p class="card-description whiteColor text-center">{{ card.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>