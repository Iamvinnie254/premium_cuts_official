<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <div class="relative bg-gray-900 py-24 sm:py-32">
      <div class="absolute inset-0 bg-black/60"></div>
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="max-w-3xl mx-auto text-center">
          <h1
            class="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            Our <span class="text-amber-500">Gallery</span>
          </h1>
          <p class="mt-6 text-lg text-gray-300">
            Step inside our world of precision cuts and premium grooming
            experiences.
          </p>
        </div>
      </div>
    </div>

    <!-- Main Gallery -->
    <div class="py-16">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Gallery Filters -->
        <div class="flex flex-wrap justify-center gap-3 mb-12">
          <button
            v-for="filter in filters"
            :key="filter.id"
            @click="activeFilter = filter.id"
            :class="[
              'px-4 py-2 rounded-full text-sm font-medium transition-colors',
              activeFilter === filter.id
                ? 'bg-amber-600 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200',
            ]"
          >
            {{ filter.name }}
          </button>
        </div>

        <!-- Before/After Comparison Section -->
        <div v-if="activeFilter === 'transformations'" class="mb-16">
          <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <svg
              class="w-6 h-6 text-amber-500 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
            Hair Transformations
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              v-for="(item, index) in beforeAfterItems"
              :key="index"
              class="relative group overflow-hidden rounded-xl shadow-lg h-96 cursor-pointer"
              @click="openLightbox('beforeAfter', index)"
            >
              <!-- Before Image -->
              <img
                :src="item.before"
                :alt="'Before: ' + item.description"
                class="absolute inset-0 w-full h-full object-cover"
              />
              <!-- After Image (revealed on hover) -->
              <img
                :src="item.after"
                :alt="'After: ' + item.description"
                class="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <!-- Comparison Slider Handle -->
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
              <!-- Image Info -->
              <div
                class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent"
              >
                <p class="text-white font-medium">{{ item.description }}</p>
                <p class="text-amber-400 text-sm">{{ item.service }}</p>
              </div>
              <div
                class="absolute top-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs"
              >
                Hover to see After
              </div>
            </div>
          </div>
        </div>

        <!-- Masonry Gallery Grid -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          v-if="activeFilter !== 'transformations'"
        >
          <div
            v-for="(image, index) in filteredGallery"
            :key="index"
            class="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
            :class="{
              'h-64': image.orientation === 'landscape',
              'h-96': image.orientation === 'portrait',
            }"
            @click="openLightbox('gallery', index)"
          >
            <img
              :src="image.src"
              :alt="image.caption"
              class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div
              class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
            >
              <div
                class="translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
              >
                <p class="text-white font-medium">{{ image.caption }}</p>
                <p v-if="image.barber" class="text-amber-300 text-sm">
                  By {{ image.barber }}
                </p>
              </div>
            </div>
            <div
              v-if="image.type === 'video'"
              class="absolute inset-0 flex items-center justify-center"
            >
              <div class="bg-black/30 rounded-full p-4">
                <svg
                  class="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
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
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
              />
            </svg>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">
              Follow Our Daily Work
            </h3>
            <p class="text-gray-600 mb-6">
              See more transformations, behind-the-scenes, and styling tips on
              our Instagram.
            </p>
            <a
              href="https://instagram.com/PremiumCuts"
              target="_blank"
              class="inline-block py-3 px-6 bg-gradient-to-r from-pink-600 to-amber-500 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
            >
              @PremiumCuts
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <div v-if="lightbox.active" class="fixed inset-0 z-50 overflow-y-auto">
      <div
        class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div
            class="absolute inset-0 bg-black/90"
            @click="closeLightbox"
          ></div>
        </div>
        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >
        <div
          class="inline-block align-bottom rounded-lg text-left overflow-hidden transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full"
        >
          <div class="relative">
            <button
              @click="closeLightbox"
              class="absolute -right-2 -top-2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
            >
              <svg
                class="w-6 h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <button
              v-if="lightbox.type === 'gallery' && lightbox.index > 0"
              @click.stop="navigateLightbox(-1)"
              class="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-colors"
            >
              <svg
                class="w-6 h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              v-if="
                lightbox.type === 'gallery' &&
                lightbox.index < filteredGallery.length - 1
              "
              @click.stop="navigateLightbox(1)"
              class="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-colors"
            >
              <svg
                class="w-6 h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            <!-- Before/After Lightbox Content -->
            <div
              v-if="lightbox.type === 'beforeAfter'"
              class="relative h-screen max-h-[80vh]"
            >
              <div class="absolute inset-0 flex items-center justify-center">
                <img
                  :src="beforeAfterItems[lightbox.index].before"
                  :alt="
                    'Before: ' + beforeAfterItems[lightbox.index].description
                  "
                  class="max-w-full max-h-full object-contain"
                />
              </div>
              <div class="absolute inset-0 flex items-center justify-center">
                <img
                  :src="beforeAfterItems[lightbox.index].after"
                  :alt="
                    'After: ' + beforeAfterItems[lightbox.index].description
                  "
                  class="max-w-full max-h-full object-contain"
                  :style="{
                    clipPath:
                      'inset(0 ' + (100 - lightbox.sliderPosition) + '% 0 0)',
                  }"
                />
              </div>
              <div
                class="absolute inset-y-0 left-0 z-10 w-full cursor-ew-resize"
                @mousemove="handleSliderMove"
                @mouseup="lightbox.dragging = false"
                @mouseleave="lightbox.dragging = false"
              >
                <div
                  class="absolute top-1/2 -translate-y-1/2 h-full w-1 bg-white"
                  :style="{ left: lightbox.sliderPosition + '%' }"
                >
                  <div
                    class="absolute -left-3 -top-3 bg-white rounded-full p-2 shadow-md"
                  >
                    <svg
                      class="w-6 h-6 text-gray-800"
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
              <div class="absolute bottom-4 left-0 right-0 text-center">
                <div
                  class="inline-flex bg-black/70 text-white px-4 py-2 rounded-full"
                >
                  <span class="mr-4">← Before</span>
                  <span>After →</span>
                </div>
              </div>
            </div>

            <!-- Regular Gallery Lightbox Content -->
            <div v-else class="relative h-screen max-h-[80vh]">
              <div class="absolute inset-0 flex items-center justify-center">
                <img
                  v-if="filteredGallery[lightbox.index].type === 'image'"
                  :src="filteredGallery[lightbox.index].src"
                  :alt="filteredGallery[lightbox.index].caption"
                  class="max-w-full max-h-full object-contain"
                />
                <video v-else controls autoplay class="max-w-full max-h-full">
                  <source
                    :src="filteredGallery[lightbox.index].src"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div
                class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent"
              >
                <p class="text-white font-medium text-center">
                  {{ filteredGallery[lightbox.index].caption }}
                </p>
                <p
                  v-if="filteredGallery[lightbox.index].barber"
                  class="text-amber-300 text-sm text-center"
                >
                  By {{ filteredGallery[lightbox.index].barber }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Barber from "../../../assets/images/Hero/customer1.jpg";
import Beard from "../../../assets/images/Services/beardshave.jpeg";
import Classic from "../../../assets/images/Services/classic.jpeg";
import Shave from "../../../assets/images/Services/shave.jpeg";
import Royal from "../../../assets/images/Services/Royal.jpeg";
import Hot from "../../../assets/images/Services/hot.jpeg";
import Kids from "../../../assets/images/Services/kids.jpeg";
import fade1 from "../../../assets/images/Gallery/fade1.jpeg";
import fade2 from "../../../assets/images/Gallery/fade2.jpeg";
import beard1 from "../../../assets/images/Gallery/beard1.jpeg";
import beard2 from "../../../assets/images/Gallery/beard2.jpeg";
import pompadour1 from "../../../assets/images/Gallery/pompadour1.jpeg";
import pompadour2 from "../../../assets/images/Gallery/pompadour2.jpeg";
import James from "../../../assets/images/Barbers/James.jpeg";
import David from "../../../assets/images/Barbers/David.jpeg";
import Samuel from "../../../assets/images/Barbers/Samuel.jpeg";
import Interior from "../../../assets/images/Gallery/interior.jpeg";
import Razor from "../../../assets/images/Gallery/razor.jpeg";
import Waiting from "../../../assets/images/Gallery/waitingarea.jpeg";

export default {
  name: "GalleryPage",
  data() {
    return {
      activeFilter: "all",
      lightbox: {
        active: false,
        type: null,
        index: 0,
        sliderPosition: 50,
        dragging: false,
      },
      filters: [
        { id: "all", name: "All" },
        { id: "transformations", name: "Transformations" },
        { id: "barbers", name: "Barbers in Action" },
        { id: "shop", name: "Shop Interior" },
        { id: "videos", name: "Videos" },
      ],
      beforeAfterItems: [
        {
          before: fade1,
          after: fade2,
          description: "Fade Transformation",
          service: "Skin Fade + Beard Trim",
        },
        {
          before: beard1,
          after: beard2,
          description: "Beard Reshape",
          service: "Full Beard Grooming",
        },
        {
          before: pompadour1,
          after: pompadour2,
          description: "Modern Pompadour",
          service: "Haircut + Styling",
        },
      ],
      galleryItems: [
        {
          src: James,
          caption: "Precision scissor work on classic cut",
          barber: "James",
          type: "image",
          orientation: "portrait",
          category: "barbers",
        },
        {
          src: Interior,
          caption: "Our premium barber chairs",
          type: "image",
          orientation: "landscape",
          category: "shop",
        },
        {
          src: Razor,
          caption: "Straight razor beard detailing",
          barber: "Mike",
          type: "image",
          orientation: "portrait",
          category: "barbers",
        },
        {
          src: Waiting,
          caption: "Waiting area with refreshments",
          type: "image",
          orientation: "landscape",
          category: "shop",
        },
        {
          src: Barber,
          caption: "Behind the scenes: Creating a skin fade",
          barber: "David",
          type: "video",
          orientation: "portrait",
          category: "videos",
        },
        {
          src: Hot,
          caption: "Hot towel treatment for ultimate relaxation",
          type: "image",
          orientation: "landscape",
          category: "barbers",
        },
      ],
    };
  },
  computed: {
    filteredGallery() {
      if (this.activeFilter === "all") return this.galleryItems;
      return this.galleryItems.filter(
        (item) => item.category === this.activeFilter
      );
    },
  },
  methods: {
    openLightbox(type, index) {
      this.lightbox = {
        active: true,
        type,
        index,
        sliderPosition: 50,
        dragging: false,
      };
      document.body.style.overflow = "hidden";
    },
    closeLightbox() {
      this.lightbox.active = false;
      document.body.style.overflow = "";
    },
    navigateLightbox(direction) {
      const newIndex = this.lightbox.index + direction;
      if (newIndex >= 0 && newIndex < this.filteredGallery.length) {
        this.lightbox.index = newIndex;
      }
    },
    handleSliderMove(e) {
      if (!this.lightbox.dragging && e.type !== "click") return;

      const container = e.currentTarget;
      const rect = container.getBoundingClientRect();
      let position = ((e.clientX - rect.left) / rect.width) * 100;
      position = Math.max(0, Math.min(100, position));
      this.lightbox.sliderPosition = position;
    },
    startDragging() {
      this.lightbox.dragging = true;
    },
  },
  mounted() {
    // In a real app, you might load gallery items from an API here
  },
};
</script>

<style>
/* Smooth transitions for lightbox */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
