<template>
  <div class="GreenProCertifiedContainer paddingTop80 paddingBottom80">
    <div class="Container">
      <div class="grid">
        <div class="grid-item">
          <div class="greenProCertifiedImageContainer">
            <img
              :src="imageSrc"
              alt="GreenPro certified ecolabel"
              class="greenProCertifiedImage"
              loading="lazy"
            />
          </div>
        </div>

        <div class="grid-item">
          <div class="circleContainer">
            <div class="circleWrapper">
              <div class="outlineCircle">
                <div class="innerCircle"></div>
              </div>
            </div>

            <div class="videoContainer">
              <!-- The poster shows until the video scrolls into view; only then
                   is the MP4 downloaded (it is muted and has no sound). -->
              <video
                ref="videoRef"
                loop
                muted
                playsinline
                preload="none"
                :poster="video.poster"
                :aria-label="video.name"
                class="video"
              >
                <source v-if="inView" :src="video.src" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
      <!-- Text for the video (T12): crawlers and screen readers cannot watch it. -->
      <figure class="greenProVideoText">
        <figcaption>
          <strong>{{ video.name }}.</strong> {{ video.description }}
        </figcaption>
      </figure>
    </div>
  </div>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from "vue";
import { GREENPRO_VIDEOS } from "./greenProVideos.js";
import "./GreenProCertified.css";

const props = defineProps({
  imageSrc: {
    type: String,
    required: true,
  },
  // A key of GREENPRO_VIDEOS: "about", "carpetTiles" or "acousticPanels".
  videoKey: {
    type: String,
    required: true,
  },
});

const video = computed(() => GREENPRO_VIDEOS[props.videoKey]);
const videoRef = ref(null);
const inView = ref(false);
let observer = null;

const play = async () => {
  inView.value = true;
  await nextTick();
  const el = videoRef.value;
  if (!el) return;
  el.load();
  el.play()?.catch(() => {
    document.addEventListener("touchstart", () => el.play(), { once: true });
  });
};

onMounted(() => {
  const el = videoRef.value;
  if (!el) return;
  if (!("IntersectionObserver" in window)) return play();
  observer = new IntersectionObserver(
    (entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        observer.disconnect();
        play();
      }
    },
    { rootMargin: "200px" }
  );
  observer.observe(el);
});

onBeforeUnmount(() => observer?.disconnect());
</script>

<style scoped>
@import "./GreenProCertified.css";

.greenProVideoText {
  margin: 2rem auto 0;
  max-width: 760px;
  text-align: center;
  color: #5a6c7d;
  font-size: 0.95rem;
  line-height: 1.6;
}
</style>
