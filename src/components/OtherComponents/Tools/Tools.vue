<template>
  <div class="toolsPage">
    <CommonTopLayout
      heading="Tools"
      imageSrc="/Images/CARPET_TILES.png"
      imageAlt="Lounge with armchairs on grey GAIA carpet tiles"
    />

    <div class="toolsContainer Container paddingTop80">
      <div class="toolsContainerInner">
        <Row :gutter="30">
          <Col :span="24" :md="12" :lg="12">
            <div
              class="toolsImageContainer"
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <div class="toolsPlaceholder">
                <div class="placeholderIcon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="80"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <path d="M21 15l-5-5L5 21"></path>
                  </svg>
                </div>
                <p class="placeholderText">Visualizer Coming Soon</p>
              </div>
            </div>
          </Col>
          <Col :span="24" :md="12" :lg="12">
            <div
              class="toolsContentContainer"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="300"
            >
              <div class="contentWrapper">
                <h2

                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="400"
                >
                  TilesView Web Tool
                </h2>
                <br />
                <p
                  class="introText"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="500"
                >
                  Experience our products in your own space before making a
                  decision. The TilesView Web Tool is an innovative
                  visualization platform that allows you to see how our premium
                  flooring solutions will look in your actual room setting.
                </p>
                <br />
                <p
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="600"
                >
                  Simply upload a photograph of your room, office space, or any
                  area where you're considering our flooring products. Our
                  advanced visualization technology will seamlessly integrate
                  our carpet tiles, artificial grass, acoustic panels, or
                  broadloom carpets into your space, giving you a realistic
                  preview of how the final result will appear.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>

    <!-- How It Works Section -->
    <div class="howItWorksSection Container paddingTop80 paddingBottom80">
      <div
        class="sectionHeader"
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="200"
      >
        <h2 style="display: block !important">How It Works</h2>
        <p>Transform your space visualization in three simple steps</p>
      </div>

      <div class="stepsGrid">
        <div
          class="stepCard"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="300"
        >
          <div class="stepNumber">1</div>
          <div class="stepContent">
            <h3>Upload Your Room Photo</h3>
            <p>
              Take or upload a clear photograph of the space where you want to
              visualize our flooring products. The tool works best with well-lit
              images that show the floor area clearly.
            </p>
          </div>
        </div>

        <div
          class="stepCard"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="450"
        >
          <div class="stepNumber">2</div>
          <div class="stepContent">
            <h3>Select Your Product</h3>
            <p>
              Browse through our extensive catalog of carpet tiles, artificial
              grass, acoustic panels, and broadloom carpets. Choose the product,
              color, and pattern that matches your vision.
            </p>
          </div>
        </div>

        <div
          class="stepCard"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="600"
        >
          <div class="stepNumber">3</div>
          <div class="stepContent">
            <h3>Visualize & Reimagine</h3>
            <p>
              Watch as our advanced technology seamlessly places the selected
              product into your space. See how different options transform your
              room and make an informed decision with confidence.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Benefits Section -->
    <div class="benefitsSection Container paddingTop80 paddingBottom80">
      <div
        class="sectionHeader"
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="200"
      >
        <h2 style="display: block !important">Why Use TilesView?</h2>
        <p>Make confident decisions with realistic visualizations</p>
      </div>

      <div class="benefitsGrid">
        <div
          class="benefitCard"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="300"
        >
          <div class="benefitIcon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </div>
          <div class="benefitContent">
            <h3>See Before You Buy</h3>
            <p>
              Eliminate guesswork by seeing exactly how our products will look
              in your specific space before making a purchase decision.
            </p>
          </div>
        </div>

        <div
          class="benefitCard"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="450"
        >
          <div class="benefitIcon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
              ></path>
            </svg>
          </div>
          <div class="benefitContent">
            <h3>Save Time & Money</h3>
            <p>
              Compare multiple product options instantly without the need for
              physical samples or multiple site visits.
            </p>
          </div>
        </div>

        <div
          class="benefitCard"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="600"
        >
          <div class="benefitIcon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
              ></polygon>
            </svg>
          </div>
          <div class="benefitContent">
            <h3>Perfect Match</h3>
            <p>
              Ensure your chosen flooring complements your existing décor,
              lighting, and overall aesthetic perfectly.
            </p>
          </div>
        </div>

        <div
          class="benefitCard"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="750"
        >
          <div class="benefitIcon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <div class="benefitContent">
            <h3>Easy to Use</h3>
            <p>
              Our intuitive interface makes it simple for anyone to use,
              regardless of technical expertise. No special software or training
              required.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Visualizer Placeholder Section -->
    <div
      class="visualizerPlaceholderSection Container paddingTop80 paddingBottom80"
    >
      <div
        class="visualizerContainer"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200"
      >
        <div class="visualizerHeader">
          <h2 style="display: block !important">Try TilesView Now</h2>
          <p>Experience the future of flooring visualization</p>
        </div>
        <div class="visualizerBox">
          <div class="visualizerContent">
            <div class="visualizerIcon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <path d="M21 15l-5-5L5 21"></path>
              </svg>
            </div>
            <h3>Visualizer Integration Coming Soon</h3>
            <p>
              We're working hard to bring you the TilesView Web Tool. This space
              will soon feature our interactive visualizer where you can upload
              your room photos and see our products in your space.
            </p>
            <p class="comingSoonNote">
              Stay tuned for updates on when the visualizer will be available!
            </p>
          </div>
        </div>
      </div>
    </div>

    <GetInTouch
      title="Have Questions About Our Tools?"
      subtitle="We're Here to Help"
      description="If you have any questions about the TilesView Web Tool or need assistance with product visualization, our team is ready to assist you. Get in touch with us today."
    />
  </div>
</template>

<script setup>
import CommonTopLayout from "../Categories/CommonTopLayout/CommonTopLayout.vue";
import GetInTouch from "../GetInTouch/GetInTouch.vue";
import { Row, Col } from "ant-design-vue";
import "./Tools.css";
</script>

<style scoped>
@import "./Tools.css";
</style>
