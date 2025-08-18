<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <span
          class="inline-block py-1 px-3 bg-gray-100 text-gray-800 rounded-full text-sm font-semibold mb-4"
        >
          OUR WORK
        </span>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Transformations <span class="text-amber-600">That Speak</span>
        </h2>
        <p class="max-w-2xl mx-auto text-gray-600">
          See the difference our precision cuts and grooming make.
        </p>
      </div>

      <!-- Gallery Filters -->
      <div class="flex flex-wrap justify-center gap-3 mb-8">
        <button
          v-for="filter in filters"
          :key="filter"
          @click="activeFilter = filter"
          :class="[
            'px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer',
            activeFilter === filter
              ? 'bg-amber-600 text-white'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200',
          ]"
        >
          {{ filter }}
        </button>
      </div>

      <!-- Gallery Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Before/After Slider -->
        <div
          v-for="(item, index) in filteredItems"
          :key="index"
          class="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <!-- Image Container -->
          <div class="relative h-72 w-full">
            <img
              :src="item.before"
              :alt="'Before: ' + item.description"
              class="w-full h-full object-cover"
            />
            <img
              :src="item.after"
              :alt="'After: ' + item.description"
              class="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />

            <!-- Comparison Slider Handle (Visible on Hover) -->
            <div
              class="absolute inset-y-0 left-1/2 w-1 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-ew-resize"
            >
              <div
                class="absolute -left-3 -top-3 bg-white rounded-full p-2 shadow-md"
              >
                <svg
                  class="w-5 h-5 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                  />
                </svg>
              </div>
            </div>
          </div>

          <!-- Image Info -->
          <div
            class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent"
          >
            <p class="text-white font-medium">{{ item.description }}</p>
            <p class="text-amber-400 text-sm">{{ item.service }}</p>
          </div>
        </div>
      </div>

      <!-- Instagram CTA -->
      <div class="mt-16 text-center bg-gray-50 rounded-xl p-8">
        <div class="max-w-2xl mx-auto">
          <svg
            class="w-10 h-10 mx-auto text-pink-600 mb-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
            />
          </svg>
          <h3 class="text-2xl font-bold text-gray-900 mb-2">
            More on Instagram
          </h3>
          <p class="text-gray-600 mb-6">
            Follow us
            <span class="text-amber-600 font-medium">@PremiumCuts</span> for
            daily transformations and styling tips.
          </p>
          <a
            href="https://instagram.com/PremiumCuts"
            target="_blank"
            class="inline-block py-3 px-6 bg-gradient-to-r from-pink-600 to-amber-500 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
          >
            Follow Us
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import fade1 from "../../../assets/images/Gallery/fade1.jpeg";
import fade2 from "../../../assets/images/Gallery/fade2.jpeg";
import beard1 from "../../../assets/images/Gallery/beard1.jpeg";
import beard2 from "../../../assets/images/Gallery/beard2.jpeg";
import pompadour1 from "../../../assets/images/Gallery/pompadour1.jpeg";
import pompadour2 from "../../../assets/images/Gallery/pompadour2.jpeg";
export default {
  name: "GallerySection",
  data() {
    return {
      activeFilter: "All",
      filters: ["All", "Haircuts", "Beards", "Styling"],
      galleryItems: [
        {
          before: fade1,
          after: fade2,
          description: "Fade Transformation",
          service: "Skin Fade + Beard Trim",
          category: "Haircuts",
        },
        {
          before: beard1,
          after: beard2,
          description: "Beard Reshape",
          service: "Full Beard Grooming",
          category: "Beards",
        },
        {
          before: pompadour1,
          after: pompadour2,
          description: "Modern Pompadour",
          service: "Haircut + Styling",
          category: "Styling",
        },
        // Add more items...
      ],
    };
  },
  computed: {
    filteredItems() {
      if (this.activeFilter === "All") return this.galleryItems;
      return this.galleryItems.filter(
        (item) => item.category === this.activeFilter
      );
    },
  },
};
</script>
