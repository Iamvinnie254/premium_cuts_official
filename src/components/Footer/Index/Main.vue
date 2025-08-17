<template>
  <footer class="bg-gray-900 text-white pt-16 pb-8">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Main Footer Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-12">
        <!-- Logo & About -->
        <div class="lg:col-span-2">
          <div class="flex items-center mb-4">
            <svg
              class="w-8 h-8 text-amber-500 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4V2M12 4a2 2 0 100 4M12 4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
            <span class="text-2xl font-bold"
              >Premium<span class="text-amber-500">Cuts</span></span
            >
          </div>
          <p class="text-gray-400 mb-6">
            Modern barbering with traditional craftsmanship. We specialize in
            precision cuts, beard grooming, and luxury shaves for the
            contemporary gentleman.
          </p>
          <div class="flex space-x-4">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              target="_blank"
              class="text-gray-400 hover:text-amber-500 transition-colors"
            >
              <span class="sr-only">{{ social.name }}</span>
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path :d="social.icon" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.name">
              <router-link
                :to="link.path"
                class="text-gray-400 hover:text-amber-500 transition-colors"
              >
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-lg font-semibold mb-4 text-white">Contact Us</h3>
          <ul class="space-y-3 text-gray-400">
            <li class="flex items-start">
              <svg
                class="w-5 h-5 mt-0.5 mr-3 text-amber-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>123 Barber Street<br />Nairobi, Kenya</span>
            </li>
            <li class="flex items-center">
              <svg
                class="w-5 h-5 mr-3 text-amber-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <a
                href="tel:+254712345678"
                class="hover:text-amber-500 transition-colors"
                >+254 712 345 678</a
              >
            </li>
            <li class="flex items-center">
              <svg
                class="w-5 h-5 mr-3 text-amber-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <a
                href="mailto:hello@premiumcuts.com"
                class="hover:text-amber-500 transition-colors"
                >hello@premiumcuts.com</a
              >
            </li>
          </ul>
        </div>

        <!-- Opening Hours -->
        <div>
          <h3 class="text-lg font-semibold mb-4 text-white">Opening Hours</h3>
          <ul class="space-y-3 text-gray-400">
            <li
              v-for="day in openingHours"
              :key="day.name"
              class="flex justify-between"
            >
              <span>{{ day.name }}</span>
              <span :class="{ 'text-amber-500': day.isToday }">{{
                day.hours
              }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright & Legal -->
      <div
        class="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
      >
        <p class="text-gray-500 text-sm mb-4 md:mb-0">
          &copy; {{ new Date().getFullYear() }} PremiumCuts. All rights
          reserved.
        </p>
        <div class="flex space-x-6">
          <router-link
            v-for="legal in legalLinks"
            :key="legal.name"
            :to="legal.path"
            class="text-gray-500 hover:text-amber-500 text-sm transition-colors"
          >
            {{ legal.name }}
          </router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterSection",
  data() {
    return {
      socialLinks: [
        {
          name: "Facebook",
          url: "https://facebook.com/PremiumCuts",
          icon: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
        },
        {
          name: "Instagram",
          url: "https://instagram.com/PremiumCuts",
          icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
        },
        {
          name: "Twitter",
          url: "https://twitter.com/PremiumCuts",
          icon: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84",
        },
      ],
      quickLinks: [
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Gallery", path: "/gallery" },
        { name: "Barbers", path: "/barbers" },
        { name: "Book Online", path: "/booking" },
      ],
      openingHours: [
        { name: "Monday", hours: "9:00 AM - 6:00 PM", isToday: false },
        { name: "Tuesday", hours: "9:00 AM - 6:00 PM", isToday: false },
        { name: "Wednesday", hours: "9:00 AM - 6:00 PM", isToday: false },
        { name: "Thursday", hours: "9:00 AM - 8:00 PM", isToday: false },
        { name: "Friday", hours: "9:00 AM - 8:00 PM", isToday: false },
        { name: "Saturday", hours: "10:00 AM - 4:00 PM", isToday: false },
        { name: "Sunday", hours: "Closed", isToday: false },
      ],
      legalLinks: [
        { name: "Privacy Policy", path: "/#" },
        { name: "Terms of Service", path: "/#" },
        { name: "Cookie Policy", path: "/#" },
      ],
    };
  },
  created() {
    this.highlightToday();
  },
  methods: {
    highlightToday() {
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const today = new Date().getDay();
      this.openingHours.forEach((day) => {
        day.isToday = day.name === days[today];
      });
    },
  },
};
</script>
