<template>
  <section
    class="relative h-[90vh] flex items-center justify-center overflow-hidden"
  >
    <div class="absolute inset-0 z-0">
      <!-- Background Image -->
      <img
        src="../../../assets/images/Hero/customer1.jpg"
        alt="Barber working on client"
        class="w-full h-full object-cover"
      />
      <!-- Dark Overlay -->
      <div class="absolute inset-0 bg-black/90 bg-opacity-50"></div>
    </div>
    <div
      class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
    >
      <div class="max-w-3xl mx-auto">
        <p class="text-amber-400 font-medium mb-2 text-sm sm:text-base">
          PRECISION GROOMING FOR THE MODERN MAN
        </p>

        <h1
          class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"
        >
          Crafting <span class="text-amber-500">Confidence</span> One Cut At A
          Time
        </h1>

        <p class="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Experience premium barber services in a modern, comfortable
          environment. Our skilled barbers are dedicated to giving you the
          perfect look.
        </p>

        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <router-link
            to="/booking"
            class="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Book Now
          </router-link>
          <router-link
            to="/services"
            class="bg-transparent hover:bg-gray-800 text-white font-bold py-3 px-8 border-2 border-white rounded-full text-lg transition-all duration-300 transform hover:scale-105"
          >
            Our Services
          </router-link>
        </div>

        <div class="mt-12 hidden sm:flex items-center justify-center space-x-6">
          <div class="flex items-center space-x-2">
            <div class="flex -space-x-2">
              <img
                v-for="(img, index) in customerImages"
                :key="index"
                :src="img"
                class="w-10 h-10 rounded-full border-2 border-amber-500"
                :alt="'Happy customer ' + (index + 1)"
              />
            </div>
            <div class="text-left">
              <p class="text-white font-medium">2000+ Happy Clients</p>
              <div class="flex items-center">
                <svg
                  v-for="star in 5"
                  :key="star"
                  class="w-4 h-4 text-amber-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <span class="text-white ml-1">5.0 (300+ reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator (Mobile: Hidden) -->
    <div
      class="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
    >
      <div class="animate-bounce">
        <svg
          class="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          ></path>
        </svg>
      </div>
    </div>
  </section>
</template>

<script>
import Barber from "../../../assets/images/Hero/customer1.jpg";
import Barber2 from "../../../assets/images/Hero/customer1.jpg";
import Barber3 from "../../../assets/images/Hero/customer1.jpg";
import Barber4 from "../../../assets/images/Hero/customer1.jpg";
export default {
  name: "HeroSection",
  data() {
    return {
      customerImages: [Barber, Barber2, Barber3, Barber4],
    };
  },
};
</script>
