<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <span
          class="inline-block py-1 px-3 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold mb-4"
        >
          OUR SERVICES
        </span>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Premium <span class="text-amber-600">Grooming</span> Services
        </h2>
        <p class="max-w-2xl mx-auto text-gray-600">
          We offer precision cuts, beard styling, and luxury treatments tailored
          for the modern man.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Service Card (Repeats for each service) -->
        <div
          v-for="service in services"
          :key="service.name"
          class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <!-- Service Image -->
          <div class="h-48 overflow-hidden">
            <img
              :src="service.image"
              :alt="service.name"
              class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>

          <!-- Service Details -->
          <div class="p-6">
            <!-- Icon + Title -->
            <div class="flex items-center mb-4">
              <div class="p-2 bg-amber-100 rounded-lg mr-4">
                <svg
                  class="w-6 h-6 text-amber-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    :d="service.icon"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-800">
                {{ service.name }}
              </h3>
            </div>

            <!-- Description -->
            <p class="text-gray-600 mb-4">{{ service.description }}</p>

            <!-- Price & Duration -->
            <div class="flex justify-between items-center">
              <span class="text-amber-600 font-bold text-lg"
                >KSh {{ service.price }}</span
              >
              <span class="text-gray-500 text-sm"
                >{{ service.duration }} mins</span
              >
            </div>

            <!-- CTA Button -->
            <button
              @click="bookService(service.name)"
              class="mt-4 w-full py-2 bg-gray-900 hover:bg-amber-700 text-white rounded-lg transition-colors duration-300"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

      <!-- View All Button (Centered) -->
      <div class="text-center mt-12">
        <router-link
          to="/services"
          class="inline-block py-3 px-8 bg-transparent border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white rounded-full font-medium transition-colors duration-300"
        >
          View All Services
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import Beard from "../../../assets/images/Services/beardshave.jpeg";
import Classic from "../../../assets/images/Services/classic.jpeg";
import Shave from "../../../assets/images/Services/shave.jpeg";
export default {
  name: "ServicesSection",
  data() {
    return {
      services: [
        {
          name: "Classic Haircut",
          description:
            "A precision haircut with scissors & clippers for a clean, timeless look.",
          price: 600,
          duration: 30,
          icon: "M12 4V2M12 4a2 2 0 100 4M12 4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
          image: Classic,
        },
        {
          name: "Beard Trim & Shape",
          description:
            "Professional beard grooming with hot towel treatment for a sharp finish.",
          price: 450,
          duration: 25,
          icon: "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2",
          image: Beard,
        },
        {
          name: "Haircut & Shave",
          description:
            "Full haircut with straight razor shave for the ultimate grooming experience.",
          price: 900,
          duration: 45,
          icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
          image: Shave,
        },
      ],
    };
  },
  methods: {
    bookService(serviceName) {
      // Redirect to booking page with service pre-selected
      this.$router.push({ path: "/booking", query: { service: serviceName } });
    },
  },
};
</script>
