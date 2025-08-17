<template>
  <nav class="bg-gray-900 text-white shadow-lg fixed w-full z-50">
    <!-- Main Nav Container -->
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <!-- Logo/Brand -->
        <router-link to="/" class="flex items-center space-x-2">
          <svg
            class="w-8 h-8 text-amber-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            ></path>
          </svg>
          <span class="text-xl font-bold"
            >Premium<span class="text-amber-500">Cuts</span></span
          >
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link
            v-for="item in navItems"
            :key="item.name"
            :to="item.path"
            class="hover:text-amber-500 transition-colors duration-300"
            active-class="text-amber-500 font-semibold"
          >
            {{ item.name }}
          </router-link>
          <button
            class="bg-amber-600 hover:bg-amber-700 px-4 py-2 rounded-md font-medium transition-colors duration-300 cursor-pointer"
          >
            Book Now
          </button>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button
            @click="toggleMenu"
            class="outline-none mobile-menu-button"
            aria-label="Toggle menu"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                :d="isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu (Dropdown from top) -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-full"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-full"
    >
      <div
        v-show="isOpen"
        class="md:hidden bg-gray-800 w-full absolute top-16 left-0 right-0 shadow-lg"
      >
        <div class="container mx-auto px-4 py-2">
          <router-link
            v-for="item in navItems"
            :key="item.name"
            :to="item.path"
            @click="closeMenu"
            class="block py-3 px-2 text-sm hover:bg-gray-700 rounded transition-colors duration-300"
            active-class="text-amber-500 font-semibold"
          >
            {{ item.name }}
          </router-link>
          <button
            class="w-full my-2 bg-amber-600 hover:bg-amber-700 px-4 py-2 rounded-md font-medium transition-colors duration-300 cursor-pointer"
          >
            Book Now
          </button>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      isOpen: false,
      navItems: [
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Gallery", path: "/gallery" },
        { name: "Barbers", path: "/barbers" },
        { name: "Contact", path: "/contact" },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    closeMenu() {
      this.isOpen = false;
    },
  },
  watch: {
    $route() {
      this.closeMenu();
    },
  },
};
</script>

<style scoped>
/* Smooth transition for navbar */
nav {
  transition: all 0.3s ease;
}
</style>
