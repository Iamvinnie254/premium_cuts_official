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
            Meet Our <span class="text-amber-500">Team</span>
          </h1>
          <p class="mt-6 text-lg text-gray-300">
            Skilled professionals dedicated to giving you the perfect grooming
            experience.
          </p>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="py-16">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Barbers Section -->
        <div class="mb-20">
          <h2 class="text-2xl font-bold text-gray-900 mb-8 flex items-center">
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
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Master Barbers
          </h2>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            <div
              v-for="barber in barbers"
              :key="barber.id"
              class="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
              @click="openModal(barber)"
            >
              <div class="h-64 overflow-hidden">
                <img
                  :src="barber.image"
                  :alt="barber.name"
                  class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 mb-1">
                  {{ barber.name }}
                </h3>
                <p class="text-amber-600 font-medium mb-3">
                  {{ barber.title }}
                </p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span
                    v-for="specialty in barber.topSpecialties"
                    :key="specialty"
                    class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
                  >
                    {{ specialty }}
                  </span>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <svg
                      class="w-5 h-5 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <span class="ml-1 text-gray-700">{{ barber.rating }}</span>
                  </div>
                  <button
                    @click.stop="bookBarber(barber)"
                    class="text-sm bg-amber-600 hover:bg-amber-700 text-white px-3 py-1 rounded transition-colors"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Management Team Section -->
        <div>
          <h2 class="text-2xl font-bold text-gray-900 mb-8 flex items-center">
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
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
            Management Team
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="member in managementTeam"
              :key="member.id"
              class="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
              @click="openModal(member)"
            >
              <div class="h-64 overflow-hidden">
                <img
                  :src="member.image"
                  :alt="member.name"
                  class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 mb-1">
                  {{ member.name }}
                </h3>
                <p class="text-amber-600 font-medium mb-3">
                  {{ member.title }}
                </p>
                <p class="text-gray-600 text-sm mb-4 line-clamp-2">
                  {{ member.bio }}
                </p>
                <div class="flex items-center space-x-4">
                  <a
                    v-if="member.email"
                    :href="'mailto:' + member.email"
                    @click.stop
                    class="text-gray-500 hover:text-amber-600 transition-colors"
                  >
                    <svg
                      class="w-5 h-5"
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
                  </a>
                  <a
                    v-if="member.phone"
                    :href="'tel:' + member.phone"
                    @click.stop
                    class="text-gray-500 hover:text-amber-600 transition-colors"
                  >
                    <svg
                      class="w-5 h-5"
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
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Barber/Staff Modal -->
    <div v-if="selectedMember" class="fixed inset-0 z-50 overflow-y-auto">
      <div
        class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div
            class="absolute inset-0 bg-gray-500 opacity-75"
            @click="closeModal"
          ></div>
        </div>
        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >
        <div
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full"
        >
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mt-3 text-center sm:mt-0 sm:text-left w-full">
                <div class="flex justify-between items-start">
                  <h3 class="text-2xl leading-6 font-bold text-gray-900 mb-2">
                    {{ selectedMember.name }}
                  </h3>
                  <button
                    @click="closeModal"
                    class="text-gray-400 hover:text-gray-500"
                  >
                    <svg
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <p class="text-amber-600 font-medium mb-6">
                  {{ selectedMember.title }}
                </p>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <!-- Profile Image -->
                  <div class="md:col-span-1">
                    <img
                      :src="selectedMember.image"
                      :alt="selectedMember.name"
                      class="w-full h-64 object-cover rounded-lg"
                    />
                    <div v-if="isBarber(selectedMember)" class="mt-4">
                      <button
                        @click="bookBarber(selectedMember)"
                        class="w-full py-2 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors"
                      >
                        Book Appointment
                      </button>
                    </div>
                  </div>

                  <!-- Details -->
                  <div class="md:col-span-2">
                    <!-- Bio -->
                    <div class="mb-6">
                      <h4 class="font-medium text-gray-900 mb-2">About</h4>
                      <p class="text-gray-600">{{ selectedMember.bio }}</p>
                    </div>

                    <!-- Barbers Only: Specialties -->
                    <div v-if="isBarber(selectedMember)" class="mb-6">
                      <h4 class="font-medium text-gray-900 mb-2">
                        Specialties
                      </h4>
                      <div class="flex flex-wrap gap-2">
                        <span
                          v-for="specialty in selectedMember.specialties"
                          :key="specialty"
                          class="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                        >
                          {{ specialty }}
                        </span>
                      </div>
                    </div>

                    <!-- Experience -->
                    <div class="mb-6">
                      <h4 class="font-medium text-gray-900 mb-2">Experience</h4>
                      <p class="text-gray-600">
                        {{ selectedMember.experience }} years in the industry
                      </p>
                    </div>

                    <!-- Barbers Only: Stats -->
                    <div
                      v-if="isBarber(selectedMember)"
                      class="grid grid-cols-2 gap-4 mb-6"
                    >
                      <div>
                        <p class="text-3xl font-bold text-amber-600">
                          {{ selectedMember.rating }}
                        </p>
                        <p class="text-gray-500 text-sm">Customer Rating</p>
                      </div>
                      <div>
                        <p class="text-3xl font-bold text-amber-600">
                          {{ selectedMember.clients }}+
                        </p>
                        <p class="text-gray-500 text-sm">Happy Clients</p>
                      </div>
                    </div>

                    <!-- Contact Info -->
                    <div>
                      <h4 class="font-medium text-gray-900 mb-2">Contact</h4>
                      <div class="space-y-2">
                        <div
                          v-if="selectedMember.email"
                          class="flex items-center"
                        >
                          <svg
                            class="w-5 h-5 text-gray-500 mr-2"
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
                            :href="'mailto:' + selectedMember.email"
                            class="text-gray-600 hover:text-amber-600"
                            >{{ selectedMember.email }}</a
                          >
                        </div>
                        <div
                          v-if="selectedMember.phone"
                          class="flex items-center"
                        >
                          <svg
                            class="w-5 h-5 text-gray-500 mr-2"
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
                            :href="'tel:' + selectedMember.phone"
                            class="text-gray-600 hover:text-amber-600"
                            >{{ selectedMember.phone }}</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
import James from "../../../assets/images/Barbers/James.jpeg";
import David from "../../../assets/images/Barbers/David.jpeg";
import Samuel from "../../../assets/images/Barbers/Samuel.jpeg";
import Michael from "../../../assets/images/Barbers/Michael.jpeg";
import Sarah from "../../../assets/images/Barbers/Sarah.png";
import Brian from "../../../assets/images/Barbers/Brian.jpeg";
import Grace from "../../../assets/images/Barbers/Grace.png";

export default {
  name: "BarbersPage",
  data() {
    return {
      selectedMember: null,
      barbers: [
        {
          id: 1,
          name: "James Mwangi",
          title: "Master Barber",
          image: James,
          bio: "With over 15 years of experience, James specializes in classic and modern haircuts. His precision with clippers and attention to detail make him one of our most requested barbers.",
          specialties: [
            "Skin Fades",
            "Classic Cuts",
            "Beard Sculpting",
            "Hot Towel Shaves",
          ],
          topSpecialties: ["Skin Fades", "Beard Sculpting"],
          experience: 15,
          rating: "4.9",
          clients: 1200,
          email: "james@premiumcuts.com",
          phone: "+254712345678",
        },
        {
          id: 2,
          name: "David Ochieng",
          title: "Senior Barber",
          image: David,
          bio: "David brings creativity and artistry to every cut. Specializing in trendy styles and hair designs, he stays updated with the latest techniques through international training.",
          specialties: [
            "Trendy Styles",
            "Hair Designs",
            "Color Treatments",
            "Kids Cuts",
          ],
          topSpecialties: ["Trendy Styles", "Hair Designs"],
          experience: 8,
          rating: "4.8",
          clients: 900,
          email: "david@premiumcuts.com",
          phone: "+254712345679",
        },
        {
          id: 3,
          name: "Michael Kamau",
          title: "Beard Specialist",
          image: Michael,
          bio: "Michael is our go-to expert for all things beard related. From maintenance to complete transformations, he understands facial hair like no one else.",
          specialties: [
            "Beard Grooming",
            "Mustache Styling",
            "Straight Razor Shaves",
            "Beard Coloring",
          ],
          topSpecialties: ["Beard Grooming", "Straight Razor Shaves"],
          experience: 10,
          rating: "4.9",
          clients: 750,
          email: "michael@premiumcuts.com",
          phone: "+254712345680",
        },
        {
          id: 4,
          name: "Samuel Kiptoo",
          title: "Master Barber",
          image: Samuel,
          bio: "Samuel combines traditional barbering techniques with modern styles. His calming presence makes him especially good with first-time clients and children.",
          specialties: [
            "Traditional Cuts",
            "Scissor Work",
            "Kids Cuts",
            "Hair Treatments",
          ],
          topSpecialties: ["Traditional Cuts", "Scissor Work"],
          experience: 12,
          rating: "4.7",
          clients: 1100,
          email: "samuel@premiumcuts.com",
          phone: "+254712345681",
        },
      ],
      managementTeam: [
        {
          id: 5,
          name: "Sarah Wanjiku",
          title: "Owner & Founder",
          image: Sarah,
          bio: "Sarah founded PremiumCuts with a vision to create a premium grooming experience for men. With a background in business and a passion for style, she oversees all operations.",
          experience: 8,
          email: "sarah@premiumcuts.com",
          phone: "+254712345682",
        },
        {
          id: 6,
          name: "Brian Maina",
          title: "Operations Manager",
          image: Brian,
          bio: "Brian ensures everything runs smoothly at PremiumCuts. From scheduling to customer service, he's the backbone of our daily operations.",
          experience: 6,
          email: "brian@premiumcuts.com",
          phone: "+254712345683",
        },
        {
          id: 7,
          name: "Grace Akinyi",
          title: "Customer Experience Director",
          image: Grace,
          bio: "Grace focuses on making every client's experience exceptional. She handles feedback, special requests, and ensures our service standards remain high.",
          experience: 5,
          email: "grace@premiumcuts.com",
          phone: "+254712345684",
        },
      ],
    };
  },
  methods: {
    openModal(member) {
      this.selectedMember = member;
      document.body.style.overflow = "hidden";
    },
    closeModal() {
      this.selectedMember = null;
      document.body.style.overflow = "";
    },
    isBarber(member) {
      return this.barbers.some((b) => b.id === member.id);
    },
    bookBarber(barber) {
      this.$router.push({
        path: "/booking",
        query: { barber: barber.name },
      });
    },
  },
};
</script>

<style scoped>
/* Custom line-clamp for bio preview */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
