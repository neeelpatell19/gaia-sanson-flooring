<template>
  <div class="width100">
    <CommonTopLayout
      heading="Broadloom Carpets"
      imageSrc="/Images/BroadloomCarpetsbannerImage.webp"
      imageAlt="Artificial grass background image"
    />
    <div class="paddingTop80">
      <div class="Container EditContainerContent paddingBottom80">
        <br />
        <div>
          <h2 data-aos="fade-down" data-aos-duration="800" data-aos-delay="100">
            Manufactured in India
          </h2>
          <br />
          <h3 data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
            India's first startup offering integrated solutions in floorings and
            acoustic panels for high-performance interiors.
          </h3>
        </div>
        <div class="AccousticContainerLogo" style="margin-top: 20px">
          <div
            class="sets-apart-logos-Container"
            style="justify-content: start"
          >
            <div class="sets-apart-logos-Container-item">
              <img
                src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/StartUpIndiaImageUpdate.png"
                alt="Startup India"
              />
            </div>
            <div class="sets-apart-logos-Container-item">
              <img
                src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/MakeInIndeaLogoImageNew.png"
                alt="Make in India"
              />
            </div>
            <!-- BellinTurf logo removed for broadloom-carpets -->
          </div>
        </div>
      </div>
    </div>
    <div class="paddingTop80 paddingBottom80 BackGroundColorBroadloom">
      <div class="max-width-800">
        <h2 class="text-center">Engineered Broadloom: Process & Performance</h2>
        <br />
        <p class="text-center">
          We manufacture tufted broadloom carpets in wide rolls for seamless
          wall-to-wall installation. Using advanced tufting machinery, our
          process provides precise control over pile height, density and
          pattern—ensuring both performance and design flexibility. Broadloom
          delivers a continuous surface with fewer seams, enhancing durability
          and aesthetics in large spaces.
        </p>
      </div>
    </div>
    <div class="paddingTop80 Container paddingBottom80">
      <div>
        <div>
          <h2>Discover Our Broadloom Collection</h2>
        </div>
        <!-- <div class="BroadLoomDesignsContainer paddingTop80">
                    <div class="BroadLoomDesignsContainerInner">
                        <div class="LeftSideDesigns">
                            <div>
                                <p>90020115</p>
                                <hr>
                                <br>
                                <div>
                                    <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/90020115.png"
                                        alt="">
                                </div>
                            </div>
                        </div>
                        <div class="RightSideDesigns">
                            <div class="RelativeContainer">
                                <div class="CirclesContainer">
                                    <div>
                                        <img src="/Images/BroadLoomCircleImages/90020115/image 229.png"
                                            alt="90020115 circle 1">
                                    </div>
                                    <div>
                                        <img src="/Images/BroadLoomCircleImages/90020115/image 230.png"
                                            alt="90020115 circle 2">
                                    </div>
                                    <div>
                                        <img src="/Images/BroadLoomCircleImages/90020115/image 231.png"
                                            alt="90020115 circle 3">
                                    </div>
                                    <div>
                                        <img src="/Images/BroadLoomCircleImages/90020115/image 232.png"
                                            alt="90020115 circle 4">
                                    </div>
                                    <div>
                                        <img src="/Images/BroadLoomCircleImages/90020115/image 233.png"
                                            alt="90020115 circle 5">
                                    </div>
                                </div>
                                <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/90020115 broadloom2.png"
                                    alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="BroadLoomDesignsContainer paddingTop80">
                    <div class="BroadLoomDesignsContainerInner">
                        <div class="LeftSideDesigns">
                            <div>
                                <p>90020099</p>
                                <hr>
                                <br>
                                <div>
                                    <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/90020099.png"
                                        alt="">
                                </div>
                            </div>
                        </div>
                        <div class="RightSideDesigns">
                            <div class="RelativeContainer">
                                <div class="CirclesContainer">
                                    <div>
                                        <img src="/Images/BroadLoomCircleImages/90020099/image 223.png"
                                            alt="90020099 circle 1">
                                    </div>
                                    <div>
                                        <img src="/Images/BroadLoomCircleImages/90020099/image 224.png"
                                            alt="90020099 circle 2">
                                    </div>
                                    <div>
                                        <img src="/Images/BroadLoomCircleImages/90020099/image 226.png"
                                            alt="90020099 circle 3">
                                    </div>
                                    <div>
                                        <img src="/Images/BroadLoomCircleImages/90020099/image 227.png"
                                            alt="90020099 circle 4">
                                    </div>
                                    <div>
                                        <img src="/Images/BroadLoomCircleImages/90020099/image 228.png"
                                            alt="90020099 circle 5">
                                    </div>
                                </div>
                                <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/NewBroadLoomImage0099.jpeg"
                                    alt="">
                            </div>
                        </div>
                    </div>
                </div> -->
        <div class="BroadLoomDesignsContainer paddingTop80">
          <div class="BroadLoomDesignsGrid">
            <div
              v-for="item in broadloomProducts"
              :key="item.id"
              class="BroadLoomCard"
            >
              <div class="MainImageWrapper">
                <a-image
                  :src="item.images[selectedImageIndexById[item.id] ?? 0]"
                  :alt="item.name"
                  :preview="{
                    src: item.images[selectedImageIndexById[item.id] ?? 0],
                    mask: 'Click to view full screen',
                  }"
                  class="BroadLoomImage"
                />
              </div>
              <div class="BroadLoomMeta">
                <div class="BroadLoomSku">{{ item.sku }}</div>
              </div>
              <div class="ThumbnailsRow">
                <button
                  v-for="(thumbSrc, tIndex) in item.images"
                  :key="tIndex"
                  type="button"
                  class="ThumbnailButton"
                  :class="{
                    active: (selectedImageIndexById[item.id] ?? 0) === tIndex,
                  }"
                  @click="selectImage(item.id, tIndex)"
                >
                  <img :src="thumbSrc" :alt="item.name + ' ' + (tIndex + 1)" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ImageGridContainer paddingTop80 paddingBottom80">
      <div class="gridContainer Container">
        <div>
          <img
            src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/NewBroadLoomImage0099.jpeg"
            alt=""
            class="FirstImg"
          />
        </div>
        <div>
          <h2 class="text-center">
            Bespoke Carpets — Customised to Your Project
          </h2>
          <p class="text-center">
            From fibre selection and backing options to textures, colours, and
            patterns, we tailor carpets to specific project requirements,
            whether residential, hospitality, or commercial. Every roll is
            engineered for consistency, longevity, and ease of installation.
          </p>
        </div>
        <div class="DoubleImageContainer">
          <img
            src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/broadloom gallery6.png"
            alt=""
          />
          <!-- <img
            src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/broadloom gallery6.png"
            alt=""
          /> -->
        </div>
      </div>
    </div>
    <div class="SwiperSliderContainer paddingTop80 paddingBottom80">
      <div class="Container">
        <div class="swiperHeader">
          <div class="headerLeft">
            <h2 class="swiperTitle">Elevating Interiors with Broadloom</h2>
          </div>
          <div class="headerRight">
            <p class="swiperDescription">
              Discover broadloom carpet collections crafted for durability,
              design, and seamless elegance.
            </p>
          </div>
        </div>

        <div class="swiperCarousel paddingTop80">
          <swiper
            @swiper="onSwiper"
            :slidesPerView="4"
            :spaceBetween="10"
            :autoplay="{
              delay: 2500,
              disableOnInteraction: false,
              // pauseOnMouseEnter: true,
            }"
            :loop="true"
            :speed="700"
            :modules="[SwiperNavigation, Autoplay]"
            :breakpoints="{
              320: { slidesPerView: 1, spaceBetween: 10 },
              768: { slidesPerView: 2, spaceBetween: 10 },
              1024: { slidesPerView: 3, spaceBetween: 10 },
              1200: { slidesPerView: 3, spaceBetween: 10 },
            }"
          >
            <swiper-slide
              v-for="(image, index) in broadloomImages"
              :key="index"
              class="swiperSlide"
            >
              <div class="swiperImageContainer">
                <a-image 
                  :src="image.src" 
                  :alt="image.alt"
                  :preview="{
                    src: image.src,
                    mask: 'Click to view full screen'
                  }"
                />
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
  <GetInTouch
    title="Get In Touch!"
    subtitle="Partner with Us for Tailored Solutions"
    description="Bring your vision to life. Let us help you customize broadloom carpets in fibre, pattern, and colour for your space."
  />
  <BackToTop />
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
import { Image as AImage } from "ant-design-vue";
import CommonTopLayout from "../../CommonTopLayout/CommonTopLayout.vue";
import GetInTouch from "../../../GetInTouch/GetInTouch.vue";
import "./BroadloomCarpetsLayout.css";
import "../AcousticTilesLayout/AcousticTilesLayout.css";
import BackToTop from "../../../BackToTop/BackToTop.vue";

const swiperInstance = ref(null);

const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
};

// Broadloom images data
const broadloomImages = [
  {
    src: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/BroadLoomGallery2.png",
    alt: "Hospitality Broadloom Solution",
  },
  {
    src: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/BroadLoomGallery1.png",
    alt: "Premium Broadloom Carpet - Residential",
  },
  // {
  //     src: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/broadloom gallery3.png',
  //     alt: 'Commercial Broadloom Installation'
  // },
  {
    src: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/BroadLoomGallery3.png",
    alt: "Luxury Broadloom Design",
  },
  {
    src: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/90020115 broadloom2 (1).png",
    alt: "Modern Broadloom Pattern",
  },
  {
    src: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/BroadLoomgalleryImage3.png",
    alt: "Luxury Broadloom Design",
  },
  {
    src: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/BroadLoomgalleryImage4.png",
    alt: "Luxury Broadloom Design",
  },
  // {
  //     src: 'https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/broadloom gallery5.png',
  //     alt: 'Executive Office Broadloom'
  // },
];

// Product grid using images from public/Images/BroadLoomImages/<sku>/<n>.png
const broadloomProducts = [
  // {
  //     id: 90020087, name: 'Design 90020087', sku: '90020087', collection: 'Broadloom', images: [
  //         '/Images/BroadLoomImages/90020087/1.png',
  //         '/Images/BroadLoomImages/90020087/2.png',
  //         '/Images/BroadLoomImages/90020087/3.png',
  //         '/Images/BroadLoomImages/90020087/4.png',
  //         '/Images/BroadLoomImages/90020087/5.png',
  //         '/Images/BroadLoomImages/90020087/6.png',
  //         '/Images/BroadLoomImages/90020087/7.png',
  //     ]
  // },
  {
    id: 90020115,
    name: "Design 90020115",
    sku: "90020115",
    collection: "Broadloom",
    images: [
      "/Images/BroadLoomImages/90020115/1.png",
      "/Images/BroadLoomImages/90020115/2.png",
      "/Images/BroadLoomImages/90020115/3.png",
      "/Images/BroadLoomImages/90020115/4.png",
      "/Images/BroadLoomImages/90020115/5.png",
      "/Images/BroadLoomImages/90020115/6.png",
      "/Images/BroadLoomImages/90020115/7.png",
    ],
  },
  {
    id: 90020083,
    name: "Design 90020083",
    sku: "90020083",
    collection: "Broadloom",
    images: [
      "/Images/BroadLoomImages/90020083/1.png",
      "/Images/BroadLoomImages/90020083/2.png",
      "/Images/BroadLoomImages/90020083/3.png",
      "/Images/BroadLoomImages/90020083/4.png",
      "/Images/BroadLoomImages/90020083/5.png",
      "/Images/BroadLoomImages/90020083/6.png",
      "/Images/BroadLoomImages/90020083/7.png",
    ],
  },
  // {
  //     id: 90020082, name: 'Design 90020082', sku: '90020082', collection: 'Broadloom', images: [
  //         '/Images/BroadLoomImages/90020082/1.png',
  //         '/Images/BroadLoomImages/90020082/2.png',
  //         '/Images/BroadLoomImages/90020082/3.png',
  //         '/Images/BroadLoomImages/90020082/4.png',
  //         '/Images/BroadLoomImages/90020082/5.png',
  //         '/Images/BroadLoomImages/90020082/6.png',
  //         '/Images/BroadLoomImages/90020082/7.png',
  //     ]
  // },
  // {
  //     id: 90020086, name: 'Design 90020086', sku: '90020086', collection: 'Broadloom', images: [
  //         '/Images/BroadLoomImages/90020086/1.png',
  //     ]
  // },
  {
    id: 90020088,
    name: "Design 90020088",
    sku: "90020088",
    collection: "Broadloom",
    images: [
      "/Images/BroadLoomImages/90020088/1.png",
      "/Images/BroadLoomImages/90020088/2.png",
      "/Images/BroadLoomImages/90020088/3.png",
      "/Images/BroadLoomImages/90020088/4.png",
      "/Images/BroadLoomImages/90020088/5.png",
      "/Images/BroadLoomImages/90020088/6.png",
      "/Images/BroadLoomImages/90020088/7.png",
    ],
  },
  // {
  //     id: 90020089, name: 'Design 90020089', sku: '90020089', collection: 'Broadloom', images: [
  //         '/Images/BroadLoomImages/90020089/1.png',
  //         '/Images/BroadLoomImages/90020089/2.png',
  //         '/Images/BroadLoomImages/90020089/3.png',
  //         '/Images/BroadLoomImages/90020089/4.png',
  //         '/Images/BroadLoomImages/90020089/5.png',
  //         '/Images/BroadLoomImages/90020089/6.png',
  //         '/Images/BroadLoomImages/90020089/7.png',
  //     ]
  // },
  {
    id: 90020090,
    name: "Design 90020090",
    sku: "90020090",
    collection: "Broadloom",
    images: [
      "/Images/BroadLoomImages/90020090/1.png",
      "/Images/BroadLoomImages/90020090/2.png",
      "/Images/BroadLoomImages/90020090/3.png",
      "/Images/BroadLoomImages/90020090/4.png",
      "/Images/BroadLoomImages/90020090/5.png",
      "/Images/BroadLoomImages/90020090/6.png",
      "/Images/BroadLoomImages/90020090/7.png",
    ],
  },
  // {
  //     id: 90020071, name: 'Design 90020071', sku: '90020071', collection: 'Broadloom', images: [
  //         '/Images/BroadLoomImages/90020071/1.png',
  //         '/Images/BroadLoomImages/90020071/2.png',
  //         '/Images/BroadLoomImages/90020071/3.png',
  //         '/Images/BroadLoomImages/90020071/4.png',
  //         '/Images/BroadLoomImages/90020071/5.png',
  //         '/Images/BroadLoomImages/90020071/6.png',
  //     ]
  // },
  {
    id: 90020093,
    name: "Design 90020093",
    sku: "90020093",
    collection: "Broadloom",
    images: [
      "/Images/BroadLoomImages/90020093/1.png",
      "/Images/BroadLoomImages/90020093/2.png",
      "/Images/BroadLoomImages/90020093/3.png",
      "/Images/BroadLoomImages/90020093/4.png",
      "/Images/BroadLoomImages/90020093/5.png",
      "/Images/BroadLoomImages/90020093/6.png",
    ],
  },
  {
    id: 90020099,
    name: "Design 90020099",
    sku: "90020099",
    collection: "Broadloom",
    images: [
      "/Images/BroadLoomImages/90020099/1.png",
      "/Images/BroadLoomImages/90020099/2.png",
      "/Images/BroadLoomImages/90020099/3.png",
      "/Images/BroadLoomImages/90020099/4.png",
      "/Images/BroadLoomImages/90020099/5.png",
      "/Images/BroadLoomImages/90020099/6.png",
      "/Images/BroadLoomImages/90020099/7.png",
    ],
  },
  // {
  //     id: 90020104, name: 'Design 90020104', sku: '90020104', collection: 'Broadloom', images: [
  //         '/Images/BroadLoomImages/90020104/1.png',
  //         '/Images/BroadLoomImages/90020104/2.png',
  //         '/Images/BroadLoomImages/90020104/3.png',
  //         '/Images/BroadLoomImages/90020104/4.png',
  //         '/Images/BroadLoomImages/90020104/5.png',
  //         '/Images/BroadLoomImages/90020104/6.png',
  //     ]
  // },
  // {
  //   id: 90020107,
  //   name: "Design 90020107",
  //   sku: "90020107",
  //   collection: "Broadloom",
  //   images: [
  //     "/Images/BroadLoomImages/90020107/1.png",
  //     "/Images/BroadLoomImages/90020107/2.png",
  //     "/Images/BroadLoomImages/90020107/3.png",
  //     "/Images/BroadLoomImages/90020107/4.png",
  //     "/Images/BroadLoomImages/90020107/5.png",
  //     "/Images/BroadLoomImages/90020107/6.png",
  //     "/Images/BroadLoomImages/90020107/7.png",
  //   ],
  // },
  // {
  //   id: 90020106,
  //   name: "Design 90020106",
  //   sku: "90020106",
  //   collection: "Broadloom",
  //   images: [
  //     "/Images/BroadLoomImages/90020106/1.png",
  //     "/Images/BroadLoomImages/90020106/2.png",
  //     "/Images/BroadLoomImages/90020106/3.png",
  //     "/Images/BroadLoomImages/90020106/4.png",
  //     "/Images/BroadLoomImages/90020106/5.png",
  //     "/Images/BroadLoomImages/90020106/6.png",
  //     "/Images/BroadLoomImages/90020106/7.png",
  //   ],
  // },
  // {
  //   id: 90020069,
  //   name: "Design 90020069",
  //   sku: "90020069",
  //   collection: "Broadloom",
  //   images: [
  //     "/Images/BroadLoomImages/90020069/1.png",
  //     "/Images/BroadLoomImages/90020069/2.png",
  //     "/Images/BroadLoomImages/90020069/3.png",
  //     "/Images/BroadLoomImages/90020069/4.png",
  //     "/Images/BroadLoomImages/90020069/5.png",
  //     "/Images/BroadLoomImages/90020069/6.png",
  //     "/Images/BroadLoomImages/90020069/7.png",
  //   ],
  // },
  // {
  //   id: 90020066,
  //   name: "Design 90020066",
  //   sku: "90020066",
  //   collection: "Broadloom",
  //   images: [
  //     "/Images/BroadLoomImages/90020066/1.png",
  //     "/Images/BroadLoomImages/90020066/2.png",
  //     "/Images/BroadLoomImages/90020066/3.png",
  //     "/Images/BroadLoomImages/90020066/4.png",
  //     "/Images/BroadLoomImages/90020066/5.png",
  //     "/Images/BroadLoomImages/90020066/6.png",
  //     "/Images/BroadLoomImages/90020066/7.png",
  //   ],
  // },
  // {
  //     id: 90020085, name: 'Design 90020085', sku: '90020085', collection: 'Broadloom', images: [
  //         '/Images/BroadLoomImages/90020085/1.png',
  //         '/Images/BroadLoomImages/90020085/2.png',
  //         '/Images/BroadLoomImages/90020085/3.png',
  //         '/Images/BroadLoomImages/90020085/4.png',
  //         '/Images/BroadLoomImages/90020085/5.png',
  //         '/Images/BroadLoomImages/90020085/6.png',
  //         '/Images/BroadLoomImages/90020085/7.png',
  //     ]
  // },
  {
    id: 90020084,
    name: "Design 90020084",
    sku: "90020084",
    collection: "Broadloom",
    images: [
      "/Images/BroadLoomImages/90020084/1.png",
      "/Images/BroadLoomImages/90020084/2.png",
      "/Images/BroadLoomImages/90020084/3.png",
      "/Images/BroadLoomImages/90020084/4.png",
      "/Images/BroadLoomImages/90020084/5.png",
      "/Images/BroadLoomImages/90020084/6.png",
      "/Images/BroadLoomImages/90020084/7.png",
    ],
  },
  {
    id: 90020104,
    name: "Design 90020104",
    sku: "90020104",
    collection: "Broadloom",
    images: [
      "/Images/BroadLoomImages/90020104-new/1.png",
      "/Images/BroadLoomImages/90020104-new/2.png",
      "/Images/BroadLoomImages/90020104-new/3.png",
      "/Images/BroadLoomImages/90020104-new/4.png",
      "/Images/BroadLoomImages/90020104-new/5.png",
      "/Images/BroadLoomImages/90020104-new/6.png",
    ],
  },
];

// Ensure products render in ascending order by id/sku
// Note: must run AFTER array is defined
broadloomProducts.sort((a, b) => {
  const aid = Number(a.id || a.sku);
  const bid = Number(b.id || b.sku);
  return aid - bid;
});

// selection state by product id -> active image index
const selectedImageIndexById = ref({});

const selectImage = (productId, index) => {
  selectedImageIndexById.value = {
    ...selectedImageIndexById.value,
    [productId]: index,
  };
};
</script>

<style scoped>
@import "./BroadloomCarpetsLayout.css";
</style>
