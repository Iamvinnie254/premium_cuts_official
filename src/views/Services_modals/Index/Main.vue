<template>
  <div class="bg-white">
    <!-- Main Content -->
    <div class="py-16">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Service Filters -->

        <!-- Package Deals -->
        <div
          v-if="activeCategory === 'All' || activeCategory === 'Packages'"
          class="mb-16"
        >
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
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
            Package Deals
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              v-for="package1 in packages"
              :key="package1.name"
              class="border-2 border-amber-500 rounded-xl overflow-hidden"
            >
              <div class="bg-amber-50 p-4">
                <div class="flex justify-between items-start">
                  <h3 class="text-xl font-bold text-gray-900">
                    {{ package1.name }}
                  </h3>
                  <span
                    class="bg-amber-500 text-white py-1 px-3 rounded-full text-sm font-medium"
                  >
                    Save KSh {{ package1.savings }}
                  </span>
                </div>
                <p class="text-gray-600 mt-2">{{ package1.description }}</p>
              </div>
              <div class="p-4 bg-white">
                <ul class="space-y-2 mb-4">
                  <li
                    v-for="service in package1.includes"
                    :key="service"
                    class="flex items-center"
                  >
                    <svg
                      class="w-5 h-5 text-amber-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {{ service }}
                  </li>
                </ul>
                <div class="flex items-end justify-between">
                  <div>
                    <p class="text-sm text-gray-500 line-through">
                      KSh {{ package1.originalPrice }}
                    </p>
                    <p class="text-2xl font-bold text-gray-900">
                      KSh {{ package1.price }}
                    </p>
                  </div>
                  <button
                    @click="bookPackage(package1)"
                    class="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors"
                  >
                    Book Package
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Services Grid -->

        <!-- Comparison Table -->
        <div v-if="showComparisonTable" class="mb-16">
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
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            Service Comparison
          </h2>
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Service
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Best For
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Duration
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  ></th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="service in comparisonServices" :key="service.name">
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-10 w-10">
                        <img
                          class="h-10 w-10 rounded-full"
                          :src="service.image"
                          :alt="service.name"
                        />
                      </div>
                      <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">
                          {{ service.name }}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ service.bestFor }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ service.duration }} mins
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  >
                    KSh {{ service.price }}
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
                  >
                    <button
                      @click="openModal(service)"
                      class="text-amber-600 hover:text-amber-900 mr-4"
                    >
                      Details
                    </button>
                    <button
                      @click="bookService(service)"
                      class="text-white bg-amber-600 hover:bg-amber-700 px-3 py-1 rounded text-sm"
                    >
                      Book
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Gift Cards -->
        <div
          class="bg-gradient-to-r from-amber-50 to-gray-50 rounded-xl p-8 mb-16"
        >
          <div class="md:flex items-center">
            <div class="md:w-1/2 mb-6 md:mb-0">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">
                Give the Gift of Grooming
              </h2>
              <p class="text-gray-600 mb-6">
                Perfect for birthdays, holidays, or just because. Our gift cards
                never expire and can be used for any service.
              </p>
              <div class="flex flex-col sm:flex-row gap-4">
                <button
                  @click="openGiftCardModal"
                  class="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors"
                >
                  Purchase Gift Card
                </button>
                <router-link
                  to="/gift-cards"
                  class="px-6 py-3 bg-white border border-gray-300 hover:border-amber-500 text-gray-700 font-medium rounded-lg transition-colors text-center"
                >
                  Learn More
                </router-link>
              </div>
            </div>
            <div class="md:w-1/2 flex justify-center">
              <div
                class="relative w-64 h-40 bg-amber-600 rounded-lg shadow-lg transform rotate-3"
              >
                <div
                  class="absolute inset-0 border-2 border-white border-dashed rounded-lg m-2"
                ></div>
                <div class="absolute inset-0 p-4 flex flex-col justify-between">
                  <div class="flex justify-between items-start">
                    <span class="text-white font-bold text-lg"
                      >PremiumCuts</span
                    >
                    <svg
                      class="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  </div>
                  <div class="text-center">
                    <p class="text-white text-sm mb-1">GIFT CARD</p>
                    <p class="text-white font-bold text-xl">KSh 2,000</p>
                  </div>
                  <div class="text-right">
                    <p class="text-white text-xs">Redeem at any location</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- No Results -->
        <div
          v-if="filteredServices.length === 0 && activeCategory !== 'Packages'"
          class="text-center py-12"
        >
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

    <!-- Service Detail Modal -->
    <div v-if="selectedService" class="fixed inset-0 z-50 overflow-y-auto">
      <div
        class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div
            class="absolute inset-0 bg-gray-900/70 opacity-75"
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
          <div class="bg-black/90 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mt-3 text-center sm:mt-0 sm:text-left w-full">
                <div class="flex justify-between items-start">
                  <h3 class="text-2xl leading-6 font-bold text-white mb-4">
                    {{ selectedService.name }}
                  </h3>
                  <button
                    @click="closeModal"
                    class="text-gray-400 hover:text-gray-500 cursor-pointer"
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
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <img
                      :src="selectedService.image"
                      :alt="selectedService.name"
                      class="w-full h-64 object-cover rounded-lg"
                    />
                    <div class="mt-4 flex justify-between items-center">
                      <div>
                        <span class="text-2xl font-bold text-gray-100"
                          >KSh {{ selectedService.price }}</span
                        >
                        <span class="ml-2 text-gray-500"
                          >{{ selectedService.duration }} minutes</span
                        >
                      </div>
                      <span
                        v-if="selectedService.popular"
                        class="flex items-center text-amber-600"
                      >
                        <svg
                          class="w-5 h-5 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                        Popular Choice
                      </span>
                    </div>
                  </div>
                  <div>
                    <h4 class="font-medium text-gray-100 mb-2">
                      Service Details
                    </h4>
                    <p class="text-gray-200 mb-4">
                      {{
                        selectedService.longDescription ||
                        selectedService.description
                      }}
                    </p>

                    <h4 class="font-medium text-gray-200 mt-4 mb-2">
                      What's Included
                    </h4>
                    <ul class="space-y-2 mb-6">
                      <li
                        v-for="item in selectedService.includes"
                        :key="item"
                        class="flex items-start"
                      >
                        <svg
                          class="flex-shrink-0 h-5 w-5 text-amber-500 mt-0.5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span class="text-gray-100">{{ item }}</span>
                      </li>
                    </ul>

                    <button
                      @click="bookService(selectedService)"
                      class="w-full py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors cursor-pointer"
                    >
                      Book This Service
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Gift Card Modal -->
    <div v-if="showGiftCardModal" class="fixed inset-0 z-50 overflow-y-auto">
      <div
        class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div
            class="absolute inset-0 bg-gray-900/70 opacity-75"
            @click="closeGiftCardModal"
          ></div>
        </div>
        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >
        <div
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        >
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mt-3 text-center sm:mt-0 sm:text-left w-full">
                <div class="flex justify-between items-start">
                  <h3 class="text-2xl leading-6 font-bold text-gray-900 mb-4">
                    Purchase Gift Card
                  </h3>
                  <button
                    @click="closeGiftCardModal"
                    class="text-gray-400 hover:text-gray-500 cursor-pointer"
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
                <div class="space-y-6">
                  <div>
                    <label
                      for="amount"
                      class="block text-sm font-medium text-gray-700 mb-1"
                      >Amount</label
                    >
                    <div class="grid grid-cols-3 gap-3">
                      <button
                        v-for="amount in giftCardAmounts"
                        :key="amount"
                        @click="selectedGiftCardAmount = amount"
                        :class="[
                          'py-2 px-4 border rounded-md text-sm font-medium',
                          selectedGiftCardAmount === amount
                            ? 'bg-amber-100 border-amber-500 text-amber-700'
                            : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50',
                        ]"
                      >
                        KSh {{ amount }}
                      </button>
                    </div>
                    <div class="mt-3">
                      <label
                        for="custom-amount"
                        class="block text-sm font-medium text-gray-700 mb-1"
                        >Custom Amount</label
                      >
                      <input
                        type="number"
                        id="custom-amount"
                        v-model="customGiftCardAmount"
                        placeholder="Enter amount"
                        class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      for="recipient"
                      class="block text-sm font-medium text-gray-700 mb-1"
                      >Recipient Email</label
                    >
                    <input
                      type="email"
                      id="recipient"
                      v-model="giftCardRecipient"
                      placeholder="Enter recipient's email"
                      class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
                    />
                  </div>

                  <div>
                    <label
                      for="message"
                      class="block text-sm font-medium text-gray-700 mb-1"
                      >Personal Message (Optional)</label
                    >
                    <textarea
                      id="message"
                      v-model="giftCardMessage"
                      rows="3"
                      class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
                      placeholder="Add a personal message..."
                    ></textarea>
                  </div>

                  <div class="flex items-center">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      v-model="agreeTerms"
                      class="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                    />
                    <label for="terms" class="ml-2 block text-sm text-gray-700">
                      I agree to the
                      <a href="#" class="text-amber-600 hover:text-amber-500"
                        >terms and conditions</a
                      >
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              @click="purchaseGiftCard"
              class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-amber-600 text-base font-medium text-white hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Purchase Gift Card
            </button>
            <button
              type="button"
              @click="closeGiftCardModal"
              class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Cancel
            </button>
          </div>
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
      serviceCategories: [
        "All",
        "Haircuts",
        "Beards",
        "Treatments",
        "Kids",
        "Packages",
      ],
      selectedService: null,
      showGiftCardModal: false,
      showComparisonTable: true,
      selectedGiftCardAmount: 2000,
      customGiftCardAmount: null,
      giftCardRecipient: "",
      giftCardMessage: "",
      agreeTerms: false,
      giftCardAmounts: [1000, 2000, 3000, 5000, 10000],
      packages: [
        {
          name: "Executive Package",
          description:
            "Everything a modern gentleman needs for a polished look",
          price: 1800,
          originalPrice: 2200,
          savings: 400,
          includes: [
            "Classic Haircut",
            "Beard Trim & Shape",
            "Hot Towel Treatment",
            "Hair Styling",
          ],
        },
        {
          name: "Grooming Essentials",
          description:
            "Perfect for maintaining your look between full services",
          price: 1200,
          originalPrice: 1500,
          savings: 300,
          includes: [
            "Beard Trim & Shape",
            "Hot Towel Treatment",
            "Moisturizing Treatment",
          ],
        },
      ],
      services: [
        {
          name: "Classic Haircut",
          description:
            "Precision haircut with scissors and clippers for a clean, timeless look.",
          longDescription:
            "Our signature haircut service includes consultation, precision cutting with both scissors and clippers, shampoo, and styling. Perfect for those who want a classic, clean look that never goes out of style.",
          price: 600,
          duration: 30,
          category: "Haircuts",
          popular: true,
          bestFor: "Classic, timeless styles",
          includes: [
            "Consultation with barber",
            "Precision haircut",
            "Shampoo & rinse",
            "Professional styling",
            "Neck shave cleanup",
          ],
          image: Classic,
        },
        {
          name: "Skin Fade",
          description:
            "Ultra-sharp fade that blends from skin to your desired length.",
          longDescription:
            "Our expert barbers will create a seamless skin fade that transitions perfectly from bare skin to your desired length on top. Includes detailed work around the ears and neckline for a crisp finish.",
          price: 800,
          duration: 45,
          category: "Haircuts",
          popular: true,
          bestFor: "Modern, sharp looks",
          includes: [
            "Detailed consultation",
            "Precision fading",
            "Shampoo & rinse",
            "Hot towel treatment",
            "Styling product application",
          ],
          image: Shave,
        },
        {
          name: "Beard Trim & Shape",
          description: "Professional beard grooming with precise shaping.",
          longDescription:
            "More than just a trim, this service includes detailed shaping to enhance your facial structure, hot towel treatment to soften hair, and moisturizing to keep your beard healthy and itch-free.",
          price: 450,
          duration: 25,
          category: "Beards",
          bestFor: "Beard maintenance",
          includes: [
            "Beard consultation",
            "Detailed trimming",
            "Precision shaping",
            "Hot towel treatment",
            "Beard oil application",
          ],
          image: Beard,
        },
        {
          name: "Royal Shave",
          description: "Traditional straight razor shave with hot towels.",
          longDescription:
            "Experience the art of traditional wet shaving with our Royal Shave service. Includes multiple hot towel applications, pre-shave oil, luxurious shaving cream, and a soothing post-shave balm for the closest, most comfortable shave possible.",
          price: 700,
          duration: 40,
          category: "Beards",
          bestFor: "Close, comfortable shaves",
          includes: [
            "Hot towel treatment",
            "Pre-shave oil",
            "Luxury shaving cream",
            "Straight razor shave",
            "Post-shave balm",
          ],
          image: Royal,
        },
        {
          name: "Hot Towel Treatment",
          description:
            "Relaxing hot towel treatment to open pores and soothe skin.",
          longDescription:
            "Our hot towel treatment uses steamed towels to open pores, soften hair, and relax facial muscles. Perfect as an add-on to any service or as a standalone treatment to refresh your skin.",
          price: 300,
          duration: 15,
          category: "Treatments",
          bestFor: "Skin preparation & relaxation",
          includes: [
            "Steamed towel application",
            "Pore cleansing",
            "Muscle relaxation",
            "Skin refreshment",
          ],
          image: Hot,
        },
        {
          name: "Kids Cut (Under 12)",
          description:
            "Specialized haircut for young gentlemen in a child-friendly environment.",
          longDescription:
            "We make haircuts fun for kids! Our child-friendly approach includes toys, entertainment, and plenty of patience to ensure a positive experience. Includes a simple style parents will love.",
          price: 500,
          duration: 25,
          category: "Kids",
          bestFor: "Children's haircuts",
          includes: [
            "Child-friendly approach",
            "Gentle cutting techniques",
            "Fun environment",
            "Simple styling",
            "Sticker reward",
          ],
          image: Kids,
        },
      ],
    };
  },
  computed: {
    filteredServices() {
      if (this.activeCategory === "All") return this.services;
      if (this.activeCategory === "Packages") return [];
      return this.services.filter(
        (service) => service.category === this.activeCategory
      );
    },
    comparisonServices() {
      return this.services.filter(
        (service) =>
          this.activeCategory === "All" ||
          service.category === this.activeCategory
      );
    },
    finalGiftCardAmount() {
      return this.customGiftCardAmount || this.selectedGiftCardAmount;
    },
  },
  methods: {
    openModal(service) {
      this.selectedService = service;
    },
    closeModal() {
      this.selectedService = null;
    },
    openGiftCardModal() {
      this.showGiftCardModal = true;
    },
    closeGiftCardModal() {
      this.showGiftCardModal = false;
    },
    bookService(service) {
      this.$router.push({
        path: "/booking",
        query: { service: service.name },
      });
    },
    bookPackage(pkg) {
      this.$router.push({
        path: "/booking",
        query: { package1: pkg.name },
      });
    },
    purchaseGiftCard() {
      if (!this.agreeTerms) {
        alert("Please agree to the terms and conditions");
        return;
      }
      if (!this.giftCardRecipient) {
        alert("Please enter recipient email");
        return;
      }

      // In a real app, you would process payment here
      console.log("Purchasing gift card:", {
        amount: this.finalGiftCardAmount,
        recipient: this.giftCardRecipient,
        message: this.giftCardMessage,
      });

      // Show confirmation and reset form
      alert(
        "Gift card purchase successful! KSh ${this.finalGiftCardAmount} gift card will be sent to ${this.giftCardRecipient}"
      );
      this.closeGiftCardModal();
      this.resetGiftCardForm();
    },
    resetGiftCardForm() {
      this.selectedGiftCardAmount = 2000;
      this.customGiftCardAmount = null;
      this.giftCardRecipient = "";
      this.giftCardMessage = "";
      this.agreeTerms = false;
    },
  },
};
</script>
