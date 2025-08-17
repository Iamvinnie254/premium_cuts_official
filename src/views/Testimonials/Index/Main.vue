<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <span
          class="inline-block py-1 px-3 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold mb-4"
        >
          CLIENT REVIEWS
        </span>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Trusted by <span class="text-amber-600">Our Clients</span>
        </h2>
        <p class="max-w-2xl mx-auto text-gray-600">
          Hear what our satisfied customers say about their experience.
        </p>
      </div>

      <!-- Testimonials Container -->
      <div class="relative">
        <!-- Desktop: Centered Grid -->
        <div class="hidden md:grid md:grid-cols-3 gap-6">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div class="flex mb-4">
              <svg
                v-for="star in 5"
                :key="star"
                class="w-5 h-5"
                :class="
                  star <= testimonial.rating
                    ? 'text-amber-400'
                    : 'text-gray-300'
                "
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            </div>
            <p class="text-gray-600 italic mb-6">"{{ testimonial.text }}"</p>
            <div class="flex items-center">
              <img
                :src="testimonial.avatar"
                :alt="testimonial.name"
                class="w-10 h-10 rounded-full object-cover mr-3"
              />
              <div>
                <h4 class="font-bold text-gray-900">{{ testimonial.name }}</h4>
                <p class="text-sm text-gray-500">{{ testimonial.service }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile: Horizontal Scroll -->
        <div
          class="md:hidden flex overflow-x-auto pb-4 -mx-4 px-4 scroll-smooth snap-x"
          ref="mobileScroll"
        >
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="flex-shrink-0 w-5/6 sm:w-2/3 px-2 snap-center"
          >
            <div class="bg-white p-6 rounded-xl shadow-sm h-full">
              <div class="flex mb-4">
                <svg
                  v-for="star in 5"
                  :key="star"
                  class="w-5 h-5"
                  :class="
                    star <= testimonial.rating
                      ? 'text-amber-400'
                      : 'text-gray-300'
                  "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              </div>
              <p class="text-gray-600 italic mb-6">"{{ testimonial.text }}"</p>
              <div class="flex items-center">
                <img
                  :src="testimonial.avatar"
                  :alt="testimonial.name"
                  class="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <h4 class="font-bold text-gray-900">
                    {{ testimonial.name }}
                  </h4>
                  <p class="text-sm text-gray-500">{{ testimonial.service }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile Scroll Indicators -->
        <div class="md:hidden flex justify-center mt-4 space-x-2">
          <div
            v-for="(dot, index) in testimonials.length"
            :key="index"
            class="w-2 h-2 rounded-full bg-gray-300 transition-all"
            :class="{ 'bg-amber-600 w-4': activeMobileIndex === index }"
          ></div>
        </div>
      </div>

      <!-- Google Reviews CTA -->
      <div class="mt-16 text-center">
        <a
          href="https://g.page/PremiumCuts/review"
          target="_blank"
          class="inline-flex items-center justify-center bg-white border border-gray-200 hover:border-amber-400 px-6 py-3 rounded-lg hover:shadow-sm transition-all"
        >
          <svg
            class="w-5 h-5 mr-2 text-gray-700"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-9c-.83 0-1.5-.67-1.5-1.5S5.67 8 6.5 8s1.5.67 1.5 1.5S7.33 11 6.5 11zm3-4C8.67 7 8 7.67 8 8.5S8.67 10 9.5 10s1.5-.67 1.5-1.5S10.33 7 9.5 7zm3 4c-.83 0-1.5-.67-1.5-1.5S11.67 8 12.5 8s1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm3-4c-.83 0-1.5-.67-1.5-1.5S14.67 5 15.5 5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm-6 8c-2.33 0-4.32 1.45-5.12 3.5h10.24c-.8-2.05-2.79-3.5-5.12-3.5z"
            />
          </svg>
          <span class="font-medium text-gray-700">Read More Reviews</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import Barber from "../../../assets/images/Hero/customer1.jpg";

export default {
  name: "TestimonialsSection",
  data() {
    return {
      activeMobileIndex: 0,
      testimonials: [
        {
          name: "James Mwangi",
          text: "Best fade I've ever gotten! The barber took time to understand exactly what I wanted and delivered beyond expectations.",
          rating: 5,
          service: "Skin Fade + Beard Trim",
          avatar: Barber,
        },
        {
          name: "David Ochieng",
          text: "Consistently great service. I've been coming here for 2 years and never had a bad cut. The hot towel treatment is heavenly.",
          rating: 5,
          service: "Executive Cut",
          avatar: Barber,
        },
        {
          name: "Samuel Kiptoo",
          text: "Professional environment with skilled barbers. My beard has never looked better after their grooming service.",
          rating: 4,
          service: "Beard Grooming",
          avatar: Barber,
        },
        // Add more as needed...
      ],
    };
  },
  mounted() {
    const scrollContainer = this.$refs.mobileScroll;
    if (scrollContainer) {
      scrollContainer.addEventListener(
        "scroll",
        this.updateMobileScrollPosition
      );
    }
  },
  beforeDestroy() {
    const scrollContainer = this.$refs.mobileScroll;
    if (scrollContainer) {
      scrollContainer.removeEventListener(
        "scroll",
        this.updateMobileScrollPosition
      );
    }
  },
  methods: {
    updateMobileScrollPosition() {
      const scrollContainer = this.$refs.mobileScroll;
      if (!scrollContainer) return;

      const scrollPosition = scrollContainer.scrollLeft;
      const cardWidth = scrollContainer.firstChild?.clientWidth || 0;
      this.activeMobileIndex = Math.round(scrollPosition / (cardWidth + 16)); // 16px for gap
    },
  },
};
</script>

<style>
/* Custom scrollbar for mobile */
.scroll-smooth {
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}
.scroll-smooth::-webkit-scrollbar {
  height: 4px;
}
.scroll-smooth::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.scroll-smooth::-webkit-scrollbar-thumb {
  background: #d1d5db;
  border-radius: 4px;
}
.scroll-smooth::-webkit-scrollbar-thumb:hover {
  background: #9ca3af;
}
</style>
