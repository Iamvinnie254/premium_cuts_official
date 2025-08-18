<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <div class="relative bg-gray-900 py-24 sm:py-32">
      <div class="absolute inset-0 bg-black/50"></div>
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="max-w-3xl mx-auto text-center">
          <h1
            class="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            Our <span class="text-amber-500">Services</span>
          </h1>
          <p class="mt-6 text-lg text-gray-300">
            Premium grooming services tailored for every gentleman's needs.
            Browse our menu and book your perfect look.
          </p>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="py-16">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Service Filters -->
        <div class="flex flex-wrap justify-center gap-3 mb-12">
          <button
            v-for="category in serviceCategories"
            :key="category"
            @click="activeCategory = category"
            :class="[
              'px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer',
              activeCategory === category
                ? 'bg-amber-600 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200',
            ]"
          >
            {{ category }}
          </button>
        </div>

        <!-- Services Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Service Card -->
          <div
            v-for="service in filteredServices"
            :key="service.name"
            class="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            <!-- Service Image -->
            <div class="h-48 overflow-hidden">
              <img
                :src="service.image"
                :alt="service.name"
                class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <!-- Service Details -->
            <div class="p-6">
              <div class="flex justify-between items-start mb-4">
                <h3 class="text-xl font-bold text-gray-900">
                  {{ service.name }}
                </h3>
                <span
                  class="bg-amber-100 text-amber-800 py-1 px-3 rounded-full text-sm font-medium"
                >
                  KSh {{ service.price }}
                </span>
              </div>

              <p class="text-gray-600 mb-6">{{ service.description }}</p>

              <div
                class="flex justify-between items-center text-sm text-gray-500"
              >
                <span>{{ service.duration }} minutes</span>
                <span
                  v-if="service.popular"
                  class="flex items-center text-amber-600"
                >
                  <svg
                    class="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  Popular
                </span>
              </div>

              <button
                @click="bookService(service)"
                class="mt-6 w-full py-3 bg-gray-900 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>

        <!-- No Results -->
        <div v-if="filteredServices.length === 0" class="text-center py-12">
          <svg
            class="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 class="mt-2 text-lg font-medium text-gray-900">
            No services found
          </h3>
          <p class="mt-1 text-gray-500">Try selecting a different category</p>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="bg-gray-50 py-16">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">
          Ready for Your Transformation?
        </h2>
        <p class="max-w-2xl mx-auto text-gray-600 mb-8">
          Our barbers are standing by to give you the perfect look. Walk-ins
          welcome, but appointments recommended.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <router-link
            to="/booking"
            class="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors"
          >
            Book Appointment
          </router-link>
          <a
            href="tel:+254712345678"
            class="px-6 py-3 bg-white border border-gray-300 hover:border-amber-500 text-gray-700 font-medium rounded-lg transition-colors"
          >
            Call Now
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Beard from "../../../assets/images/Services/beardshave.jpeg";
import Classic from "../../../assets/images/Services/classic.jpeg";
import Shave from "../../../assets/images/Services/shave.jpeg";
import Royal from "../../../assets/images/Services/Royal.jpeg";
import Hot from "../../../assets/images/Services/hot.jpeg";
import Kids from "../../../assets/images/Services/kids.jpeg";
export default {
  name: "ServicesPage",
  data() {
    return {
      activeCategory: "All",
      serviceCategories: ["All", "Haircuts", "Beards", "Treatments", "Kids"],
      services: [
        {
          name: "Classic Haircut",
          description:
            "Precision haircut with scissors and clippers for a clean, timeless look. Includes shampoo and style.",
          price: 600,
          duration: 30,
          category: "Haircuts",
          popular: true,
          image: Classic,
        },
        {
          name: "Skin Fade",
          description:
            "Ultra-sharp fade that blends from skin to your desired length. Perfect for a modern, clean look.",
          price: 800,
          duration: 45,
          category: "Haircuts",
          popular: true,
          image: Shave,
        },
        {
          name: "Beard Trim & Shape",
          description:
            "Professional beard grooming with precise shaping. Includes hot towel treatment and moisturizer.",
          price: 450,
          duration: 25,
          category: "Beards",
          image: Beard,
        },
        {
          name: "Royal Shave",
          description:
            "Traditional straight razor shave with hot towels, pre-shave oil, and post-shave balm.",
          price: 700,
          duration: 40,
          category: "Beards",
          image: Royal,
        },
        {
          name: "Hot Towel Treatment",
          description:
            "Relaxing hot towel treatment to open pores, soothe skin, and prepare for shaving or grooming.",
          price: 300,
          duration: 15,
          category: "Treatments",
          image: Hot,
        },
        {
          name: "Kids Cut (Under 12)",
          description:
            "Specialized haircut for young gentlemen in a child-friendly environment.",
          price: 500,
          duration: 25,
          category: "Kids",
          image: Kids,
        },
      ],
    };
  },
  computed: {
    filteredServices() {
      if (this.activeCategory === "All") return this.services;
      return this.services.filter(
        (service) => service.category === this.activeCategory
      );
    },
  },
  methods: {
    bookService(service) {
      this.$router.push({
        path: "/booking",
        query: { service: service.name },
      });
    },
  },
};
</script>
