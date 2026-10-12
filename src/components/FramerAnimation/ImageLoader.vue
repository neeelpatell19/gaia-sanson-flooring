<template>
  <div class="image-loader">
    <img
      ref="imageRef"
      :src="src"
      :alt="alt"
      :class="[imageClass, { 'is-loading': loading }]"
      :style="imageStyle"
      class="loaded-image"
      v-bind="$attrs"
      @load="loading = false"
      @error="loading = false"
    />

    <transition name="placeholder-fade">
      <div
        v-if="loading"
        class="image-placeholder"
      >
        <div class="placeholder-content">
          <!-- <div class="placeholder-icon"><img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/CarpetIcon.png" alt=""></div> -->
          <div class="placeholder-icon spinning"><img src="/Images/GAIA Loading.svg" alt=""></div>

          <div class="placeholder-text">Loading...</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  },
  imageClass: {
    type: String,
    default: ''
  },
  imageStyle: {
    type: Object,
    default: () => ({})
  }
})

// The <img> is always in the HTML, so search engines and visitors without
// JavaScript get the picture. The loading placeholder is a browser-only
// extra: it shows only if the file is still downloading once the page is
// interactive, and the image fades in when it arrives.
const imageRef = ref(null)
const loading = ref(false)

onMounted(() => {
  if (imageRef.value && !imageRef.value.complete) loading.value = true
})
</script>

<style scoped>
.image-loader {
  position: relative;
  display: inline-block;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.loaded-image {
  display: block;
  max-width: 100%;
  height: auto;
  will-change: filter, opacity, transform;
  transition: all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
}

.loaded-image.is-loading {
  opacity: 0;
  filter: blur(15px);
  transform: scale(1.02);
}

.image-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  backdrop-filter: blur(5px);
}

.placeholder-content {
  text-align: center;
  color: #64748b;
}

.placeholder-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  opacity: 0.7;
}
.placeholder-icon img{
  width: 50px;
  height: 50px;
}

.placeholder-icon.spinning{
  animation: spin 1.5s linear infinite;
  display: inline-block;
  transform-origin: center center ;
  
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.placeholder-text {
  font-size: 0.875rem;
  font-weight: 500;
  opacity: 1;
}

/* Placeholder Fade Transition */
.placeholder-fade-enter-active,
.placeholder-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
}

.placeholder-fade-enter-from {
  opacity: 0;
  transform: scale(0.95);
}

.placeholder-fade-leave-to {
  opacity: 0;
  transform: scale(1.05);
}

.placeholder-fade-enter-to,
.placeholder-fade-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style> 