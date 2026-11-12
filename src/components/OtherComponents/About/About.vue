<template>
  <div class="aboutPage">
    <CommonTopLayout
      heading="About Us"
      imageSrc="/Images/AboutUsBannerImage.webp"
      imageAlt="Open-plan office with desks on grey GAIA carpet tiles"
    />

    <div class="SansonAboutContainer Container paddingTop80">
      <div class="SansonAboutContainerInner">
        <Row :gutter="30">
          <Col :span="24" :md="12" :lg="12">
            <div
              class="LeftSideImageContainer"
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <div
                class="SansonLogoContainer"
                data-aos="zoom-in"
                data-aos-duration="600"
                data-aos-delay="400"
              >
                <img
                  src="/Images/site/sanson-group-logo.webp"
                  alt="Sanson Group Logo"
                />
              </div>
              <img
                src="/Images/site/gaia-sanson-floorings-about.webp"
                alt="Sanson Group Manufacturing Facility"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="600"
              />
            </div>
          </Col>
          <Col :span="24" :md="12" :lg="12">
            <div
              class="RightSideContentContainer"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="300"
            >
              <div class="contentWrapper">
                <div
                  class="yearsBadge"
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-delay="300"
                >
                  <span style="color: white">40+</span>
                  <span class="yearsText">Years of Excellence</span>
                </div>

                <h2
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="400"
                >
                  Building Trust Since 1982
                </h2>
                <br />
                <p
                  class="introText"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="500"
                >
                  Sanson group, India is a major player in many ventures. Since
                  our inception in 1982, we are continually improving our
                  quality and serving our clients over 40 years.
                </p>
                <p style="color: #2c3e50">
                  <b style="font-weight: 500"
                    >GreenPro Certified for Environmental Sustainability
                  </b>
                </p>
                <br />
                <p style="color: rgb(44, 62, 80)">
                  GAIA is the first Indian MSME to earn GreenPro label for both Acoustic PET Panels and Carpet Tiles - under one roof. This recognition reflects our focus on responsible manufacturing, sustainable materials, and high-performance solutions that reduce environmental impact without compromising quality.
                </p>
                <br />
                <p style="color: #2c3e50">
                  <b style="font-weight: 500"
                    >Ethical Standards & Global Compliance</b
                  >
                </p>
                <br />
                <p style="color: rgb(44, 62, 80)">
                  We uphold the highest ethical standards, serving clients
                  across industries with integrity. With SEDEX and QIMA audits,
                  we ensure full compliance with global sustainability and
                  ethical practices.
                </p>
                <div
                  class="BrandGridContainerDetails"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="600"
                >
                  <h3>Our Brands From Our Group</h3>
                  <div class="brandGrid">
                    <!-- <div class="brandCard">
                                    <div class="brandLogo">
                                        <img src="/Images/GAIA_Logo.png"
                                            alt="GAIA Logo">
                                    </div>
                                    <h4>GAIA</h4>
                                    <p>FLOORING & ACOUSTIC SOLUTION</p>
                                </div> -->

                    <div class="brandCard">
                      <div class="brandLogo">
                        <img
                          src="/Images/site/seedo-logo.webp"
                          alt="Seedo Logo"
                        />
                      </div>
                      <h4>SEEDO</h4>
                      <!-- <p>INNOVATION & TECHNOLOGY</p> -->
                    </div>

                    <div class="brandCard">
                      <div class="brandLogo">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWFuHBtCr1cRvsEIqZjC6HlSTka0C4uXgSxA&s"
                          alt="Customer Service Logo"
                        />
                      </div>
                      <h4>Sanfit</h4>
                      <!-- <p>EXCELLENCE & SUPPORT</p> -->
                    </div>
                  </div>
                </div>
                <!-- <div class="closingStatement" data-aos="fade-up" data-aos-duration="600" data-aos-delay="600">
                            <blockquote>
                                We don't just deliver products and services — we build relationships based on
                                reliability and innovation.
                            </blockquote>
                        </div> -->
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>

    <!-- Quality Features Grid Section -->
    <!-- <div class="qualityFeaturesSection Container paddingTop80 paddingBottom80">
            <div class="qualityFeaturesHeader" data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
                <h2>Why Choose Sanson Group</h2>
                <p>Our commitment to excellence drives everything we do</p>
            </div>
            <div class="qualityFeaturesGrid">
                <div class="qualityFeatureCard" data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
                    <div class="qualityFeatureIcon">
                        <i class="checkmark">✓</i>
                    </div>
                    <div class="qualityFeatureContent">
                        <h3>Quality-first mindset</h3>
                        <p>Uncompromising standards in every product we manufacture and deliver</p>
                    </div>
                </div>

                <div class="qualityFeatureCard" data-aos="fade-up" data-aos-duration="600" data-aos-delay="450">
                    <div class="qualityFeatureIcon">
                        <i class="checkmark">✓</i>
                    </div>
                    <div class="qualityFeatureContent">
                        <h3>Value-for-money solutions</h3>
                        <p>Premium quality products at competitive prices for maximum value</p>
                    </div>
                </div>

                <div class="qualityFeatureCard" data-aos="fade-up" data-aos-duration="600" data-aos-delay="600">
                    <div class="qualityFeatureIcon">
                        <i class="checkmark">✓</i>
                    </div>
                    <div class="qualityFeatureContent">
                        <h3>Complete customer satisfaction</h3>
                        <p>Building lasting relationships through excellence and reliable service</p>
                    </div>
                </div>
            </div>
        </div> -->
    <!-- <div class="marginTop80 paddingTop80 paddingBottom80 CategoriesClientContainers">
            <div class="expertSolutionsSection Container
                <div class="expertSolutionsHeader">
                    <h2>Expert Solutions for Every Need</h2>
                    <p>From start to finish, our expert team delivers personalized solutions with a commitment to
                        excellence,
                        ensuring your success and satisfaction.</p>
                </div>
                <div class="expertSolutionsGrid">
                    <div class="expertSolutionCard" data-aos="fade-up" data-aos-delay="200">
                        <div class="expertSolutionCardContent">
                            <div class="expertSolutionLogo">
                                <img src="/Images/GAIA_Logo.png"
                                    alt="Quality Assurance">
                            </div>
                            <h3 class="expertSolutionTitle">GAIA</h3>
                            <p class="expertSolutionTagline">FLOORING &
                                ACOUSTIC SOLUTION</p>
                        </div>
                    </div>

                    <div class="expertSolutionCard" data-aos="fade-up" data-aos-delay="400">
                        <div class="expertSolutionCardContent">
                            <div class="expertSolutionLogo">
                                <img src="/Images/site/seedo-logo.webp"
                                    alt="Innovation">
                            </div>
                            <h3 class="expertSolutionTitle">SEEDO</h3>
                            <p class="expertSolutionTagline">Break The Limit</p>
                        </div>
                    </div>

                    <div class="expertSolutionCard" data-aos="fade-up" data-aos-delay="600">
                        <div class="expertSolutionCardContent">
                            <div class="expertSolutionLogo">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWFuHBtCr1cRvsEIqZjC6HlSTka0C4uXgSxA&s"
                                    alt="Customer Service">
                            </div>
                            <h3 class="expertSolutionTitle">SANFIT</h3>
                            <p class="expertSolutionTagline">Sanfit — Safety Solutions for Better Healthcare.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
    <div class="marginTop80 paddingTop80 AboutGaiaContainer paddingBottom80">
      <div class="Container">
        <div class="AboutGaiaContainer">
          <div
            class="AboutGaiaLeftSide"
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <h2 data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
              GAIA: The New World of Flooring Fashion
            </h2>
            <br />
            <p data-aos="fade-up" data-aos-duration="600" data-aos-delay="400">
              From Gaia, the Greek goddess — Mother Earth, origin of life — to
              Prithvi, the vast and grounding force in Indian tradition.
            </p>
            <br />
            <p data-aos="fade-up" data-aos-duration="600" data-aos-delay="500">
              Across cultures, Earth has always been revered as the ultimate
              source of creation and balance.
            </p>
            <br />
            <p data-aos="fade-up" data-aos-duration="600" data-aos-delay="600">
              At Sanson Group, we honor this legacy by combining innovation with
              purpose. Today, we're proud to unveil our newest label: GAIA – The
              New World of Flooring Fashion.
            </p>
            <br />
            <p data-aos="fade-up" data-aos-duration="600" data-aos-delay="700">
              GAIA is more than just flooring — it's a movement toward
              planet-positive design and timeless craftsmanship, brought to life
              with the precision and quality Sanson is known for.
            </p>
            <!-- <br> -->
            <!-- <p>As early adopters in the industry, we are now redefining what flooring can be: natural,
                            elegant, and future-ready solutions that meet the evolving needs of modern spaces.</p> -->
          </div>
          <div
            class="AboutGaiaRightSide"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            <img
              src="/Images/site/sanson-group-about.webp"
              alt="GAIA Flooring Fashion"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="600"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- GAIA Features Grid Section -->
    <div class="qualityFeaturesSection Container paddingTop80 paddingBottom80">
      <div
        class="qualityFeaturesHeader"
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="200"
      >
        <h2>GAIA Excellence</h2>
        <p style="text-align: start">
          Discover what makes GAIA the future of flooring fashion
        </p>
      </div>
      <div class="qualityFeaturesGrid">
        <div
          class="qualityFeatureCard"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="300"
        >
          <div class="qualityFeatureIcon">
            <i class="checkmark">✓</i>
          </div>
          <div class="qualityFeatureContent">
            <h3>Endless Design and Colour Possibilities</h3>
            <!-- <p>Creative freedom with unlimited design options for every space</p> -->
          </div>
        </div>

        <div
          class="qualityFeatureCard"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="450"
        >
          <div class="qualityFeatureIcon">
            <i class="checkmark">✓</i>
          </div>
          <div class="qualityFeatureContent">
            <h3>Test Certified and Stabilized</h3>
            <!-- <p>Superior materials and craftsmanship in every product</p> -->
          </div>
        </div>

        <div
          class="qualityFeatureCard"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="600"
        >
          <div class="qualityFeatureIcon">
            <i class="checkmark">✓</i>
          </div>
          <div class="qualityFeatureContent">
            <h3>Multiple Sizes and Cutting Options</h3>
            <!-- <p>Trendsetting designs that define the future of flooring</p> -->
          </div>
        </div>
      </div>
    </div>
    <!-- <SansonTeam /> -->
    <YearsOfExperience />
    <GreenProCertified 
      image-src="/Images/GreenProCertified/green-pro-certified-about-us.png" 
      video-key="about" 
    />
    <Certification />
    <OurVision />
    <ImageGallery />

    <HomeProducts
      title="What we make"
      subtitle="Discover our comprehensive collection of premium flooring solutions"
    />
    <!-- <div class=" paddingTop80 paddingBottom80 CategoriesClientContainers">
            <div class="expertSolutionsSection Container">
                <div class="expertSolutionsHeader" data-aos="fade-down" data-aos-duration="800" data-aos-delay="100">
                    <h2>Our Brands From Our Group</h2>
                    <p>Our Group has a diverse range of brands that cater to different industries and needs.
                    </p>
                </div>
                <div class="expertSolutionsGrid">
                    <div class="expertSolutionCard" data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
                        <div class="expertSolutionCardContent">
                            <div class="expertSolutionLogo">
                                <img src="/Images/GAIA_Logo.png"
                                    alt="Quality Assurance">
                            </div>
                            <h3 class="expertSolutionTitle">GAIA</h3>
                            <p class="expertSolutionTagline">FLOORING &
                                ACOUSTIC SOLUTION</p>
                        </div>
                    </div>

                    <div class="expertSolutionCard" data-aos="fade-up" data-aos-duration="600" data-aos-delay="400">
                        <div class="expertSolutionCardContent">
                            <div class="expertSolutionLogo">
                                <img src="/Images/site/seedo-logo.webp"
                                    alt="Innovation">
                            </div>
                            <h3 class="expertSolutionTitle">SEEDO</h3>
                            <p class="expertSolutionTagline">Break The Limit</p>
                        </div>
                    </div>

                    <div class="expertSolutionCard" data-aos="fade-up" data-aos-duration="600" data-aos-delay="600">
                        <div class="expertSolutionCardContent">
                            <div class="expertSolutionLogo">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWFuHBtCr1cRvsEIqZjC6HlSTka0C4uXgSxA&s"
                                    alt="Customer Service">
                            </div>
                            <h3 class="expertSolutionTitle">SANFIT</h3>
                            <p class="expertSolutionTagline">Sanfit — Safety Solutions for Better Healthcare.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
    <!-- <WhatWeMake /> -->
  </div>
  <GetInTouch
    title="Get In Touch!"
    subtitle="Tell Us Your Needs, We'll Tailor the Solution"
    description="Whether you're a potential partner, client or collaborator - we’d love to explore how we can grow together. Drop us a message to learn more."
  />
</template>

<script setup>
import CommonTopLayout from "../../OtherComponents/Categories/CommonTopLayout/CommonTopLayout.vue";
import SansonTeam from "../SansonTeam/SansonTeam.vue";
import HomeProducts from "../../HomeRoutes/HomeProducts/HomeProducts.vue";
import YearsOfExperience from "./YearsOfExperience/YearsOfExperience.vue";
import Certification from "./Certification/Certification.vue";
import OurVision from "../OurVision/OurVision.vue";
import ImageGallery from "../ImageGallery/ImageGallery.vue";
import GetInTouch from "../GetInTouch/GetInTouch.vue";
import GreenProCertified from "./GreenProCertified/GreenProCertified.vue";
import { Row, Col } from "ant-design-vue";
import "./About.css";
</script>

<style scoped>
@import "./About.css";
</style>
