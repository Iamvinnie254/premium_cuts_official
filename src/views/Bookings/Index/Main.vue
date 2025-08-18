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
            Book Your <span class="text-amber-500">Appointment</span>
          </h1>
          <p class="mt-6 text-lg text-gray-300">
            Reserve your slot with our expert barbers for a premium grooming
            experience.
          </p>
        </div>
      </div>
    </div>

    <!-- Booking Steps -->
    <div class="py-16">
      <div class="container mx-auto px-2 sm:px-6 lg:px-8 max-w-4xl">
        <!-- Progress Steps -->
        <div class="mb-12">
          <nav
            class="flex items-center md:justify-center overflow-auto"
            aria-label="Progress"
          >
            <ol class="flex items-center space-x-8">
              <li v-for="(step, index) in steps" :key="step.id">
                <div class="flex items-center">
                  <span
                    :class="[
                      'flex items-center justify-center w-10 h-10 rounded-full',
                      currentStep >= index
                        ? 'bg-amber-600 text-white'
                        : 'bg-gray-200 text-gray-600',
                    ]"
                  >
                    {{ index + 1 }}
                  </span>
                  <span
                    :class="[
                      'ml-3 text-sm font-medium',
                      currentStep >= index ? 'text-amber-600' : 'text-gray-500',
                    ]"
                  >
                    {{ step.name }}
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        <!-- Step 1: Booking Type -->
        <div
          v-if="currentStep === 0"
          class="bg-white shadow rounded-lg p-6 sm:p-8"
        >
          <h2 class="text-2xl font-bold text-gray-900 mb-6">
            How would you like to book?
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              v-for="option in bookingOptions"
              :key="option.id"
              @click="selectBookingType(option.id)"
              :class="[
                'border-2 rounded-xl p-6 cursor-pointer transition-all',
                bookingType === option.id
                  ? 'border-amber-500 bg-amber-50'
                  : 'border-gray-200 hover:border-amber-300',
              ]"
            >
              <div class="flex items-center">
                <div
                  :class="[
                    'flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg',
                    bookingType === option.id ? 'bg-amber-600' : 'bg-gray-200',
                  ]"
                >
                  <svg
                    class="h-6 w-6"
                    :class="
                      bookingType === option.id ? 'text-white' : 'text-gray-600'
                    "
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      :d="option.icon"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-medium text-gray-900">
                    {{ option.title }}
                  </h3>
                  <p class="mt-1 text-sm text-gray-600">
                    {{ option.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-8 flex justify-end">
            <button
              @click="nextStep"
              :disabled="!bookingType"
              :class="[
                'px-6 py-3 rounded-lg font-medium transition-colors',
                bookingType
                  ? 'bg-amber-600 hover:bg-amber-700 text-white'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed',
              ]"
            >
              Continue
            </button>
          </div>
        </div>

        <!-- Step 2: Service/Barber Selection -->
        <div
          v-if="currentStep === 1"
          class="bg-white shadow rounded-lg p-6 sm:p-8"
        >
          <h2 class="text-2xl font-bold text-gray-900 mb-6">
            {{
              bookingType === "service"
                ? "Select Your Service"
                : "Choose Your Barber"
            }}
          </h2>

          <!-- Service Selection -->
          <div v-if="bookingType === 'service'" class="space-y-4">
            <div
              v-for="service in services"
              :key="service.id"
              @click="selectedService = service"
              :class="[
                'border rounded-lg p-4 cursor-pointer transition-all',
                selectedService?.id === service.id
                  ? 'border-amber-500 bg-amber-50'
                  : 'border-gray-200 hover:border-amber-300',
              ]"
            >
              <div class="flex justify-between">
                <div>
                  <h3 class="font-medium text-gray-900">{{ service.name }}</h3>
                  <p class="text-sm text-gray-600">{{ service.description }}</p>
                </div>
                <div class="text-right">
                  <p class="font-medium text-gray-900">
                    KSh {{ service.price }}
                  </p>
                  <p class="text-xs text-gray-500">
                    {{ service.duration }} minutes
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Barber Selection -->
          <div
            v-if="bookingType === 'barber'"
            class="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div
              v-for="barber in barbers"
              :key="barber.id"
              @click="selectedBarber = barber"
              :class="[
                'border rounded-lg p-4 cursor-pointer transition-all',
                selectedBarber?.id === barber.id
                  ? 'border-amber-500 bg-amber-50'
                  : 'border-gray-200 hover:border-amber-300',
              ]"
            >
              <div class="flex items-center">
                <img
                  :src="barber.image"
                  :alt="barber.name"
                  class="w-12 h-12 rounded-full object-cover mr-3"
                />
                <div>
                  <h3 class="font-medium text-gray-900">{{ barber.name }}</h3>
                  <p class="text-sm text-gray-600">{{ barber.specialty }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Package Selection -->
          <div v-if="bookingType === 'package'" class="space-y-4">
            <div
              v-for="pkg in packages"
              :key="pkg.id"
              @click="selectedPackage = pkg"
              :class="[
                'border rounded-lg p-4 cursor-pointer transition-all',
                selectedPackage?.id === pkg.id
                  ? 'border-amber-500 bg-amber-50'
                  : 'border-gray-200 hover:border-amber-300',
              ]"
            >
              <div>
                <h3 class="font-medium text-gray-900">{{ pkg.name }}</h3>
                <p class="text-sm text-gray-600 mb-2">{{ pkg.description }}</p>
                <ul class="text-sm text-gray-600 mb-2">
                  <li
                    v-for="item in pkg.includes"
                    :key="item"
                    class="flex items-center"
                  >
                    <svg
                      class="w-4 h-4 mr-1 text-amber-500"
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
                    {{ item }}
                  </li>
                </ul>
                <div class="flex justify-between items-center">
                  <div>
                    <span class="text-sm text-gray-500 line-through mr-2"
                      >KSh {{ pkg.originalPrice }}</span
                    >
                    <span class="font-medium text-gray-900"
                      >KSh {{ pkg.price }}</span
                    >
                  </div>
                  <span
                    class="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full"
                  >
                    Save KSh {{ pkg.originalPrice - pkg.price }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-8 flex justify-between">
            <button
              @click="prevStep"
              class="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg font-medium transition-colors"
            >
              Back
            </button>
            <button
              @click="nextStep"
              :disabled="!isStep2Valid"
              :class="[
                'px-6 py-3 rounded-lg font-medium transition-colors',
                isStep2Valid
                  ? 'bg-amber-600 hover:bg-amber-700 text-white'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed',
              ]"
            >
              Continue
            </button>
          </div>
        </div>

        <!-- Step 3: Date & Time Selection -->
        <div
          v-if="currentStep === 2"
          class="bg-white shadow rounded-lg p-6 sm:p-8"
        >
          <h2 class="text-2xl font-bold text-gray-900 mb-6">
            Select Date & Time
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Calendar -->
            <div>
              <div class="flex justify-between items-center mb-4">
                <h3 class="font-medium text-gray-900">Select a Date</h3>
                <div class="flex space-x-2">
                  <button
                    @click="prevMonth"
                    class="p-1 rounded-full hover:bg-gray-100"
                  >
                    <svg
                      class="w-5 h-5 text-gray-600"
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
                    @click="nextMonth"
                    class="p-1 rounded-full hover:bg-gray-100"
                  >
                    <svg
                      class="w-5 h-5 text-gray-600"
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
                </div>
              </div>

              <div class="grid grid-cols-7 gap-1 mb-2">
                <div
                  v-for="day in ['S', 'M', 'T', 'W', 'T', 'F', 'S']"
                  :key="day"
                  class="text-center text-sm font-medium text-gray-500"
                >
                  {{ day }}
                </div>
              </div>

              <div class="grid grid-cols-7 gap-1">
                <div
                  v-for="day in calendarDays"
                  :key="day.date"
                  @click="selectDate(day)"
                  :class="[
                    'py-2 text-center rounded-full cursor-pointer',
                    day.isCurrentMonth ? '' : 'text-gray-300',
                    day.isSelected ? 'bg-amber-600 text-white' : '',
                    day.isToday ? 'font-bold' : '',
                    day.isAvailable && !day.isSelected && day.isCurrentMonth
                      ? 'hover:bg-amber-100'
                      : 'cursor-default',
                  ]"
                  :disabled="!day.isAvailable"
                >
                  {{ day.date.getDate() }}
                  <span
                    v-if="day.isToday && !day.isSelected"
                    class="block w-1 h-1 mx-auto rounded-full bg-amber-600"
                  ></span>
                </div>
              </div>
            </div>

            <!-- Time Slots -->
            <div>
              <h3 class="font-medium text-gray-900 mb-4">
                Available Time Slots
              </h3>
              <div v-if="selectedDate" class="space-y-2">
                <div v-for="slot in availableTimeSlots" :key="slot">
                  <button
                    @click="selectedTime = slot"
                    :class="[
                      'w-full py-2 px-4 rounded-lg text-left transition-colors',
                      selectedTime === slot
                        ? 'bg-amber-600 text-white'
                        : 'bg-gray-100 hover:bg-gray-200',
                    ]"
                  >
                    {{ slot }}
                  </button>
                </div>
              </div>
              <div v-else class="text-gray-500">Please select a date first</div>
            </div>
          </div>

          <div class="mt-8 flex justify-between">
            <button
              @click="prevStep"
              class="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg font-medium transition-colors"
            >
              Back
            </button>
            <button
              @click="nextStep"
              :disabled="!selectedDate || !selectedTime"
              :class="[
                'px-6 py-3 rounded-lg font-medium transition-colors',
                selectedDate && selectedTime
                  ? 'bg-amber-600 hover:bg-amber-700 text-white'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed',
              ]"
            >
              Continue
            </button>
          </div>
        </div>

        <!-- Step 4: Customer Details -->
        <div
          v-if="currentStep === 3"
          class="bg-white shadow rounded-lg p-6 sm:p-8"
        >
          <h2 class="text-2xl font-bold text-gray-900 mb-6">
            Your Information
          </h2>

          <div class="space-y-4">
            <div>
              <label
                for="name"
                class="block text-sm font-medium text-gray-700 mb-1"
                >Full Name</label
              >
              <input
                type="text"
                id="name"
                v-model="customer.name"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label
                for="phone"
                class="block text-sm font-medium text-gray-700 mb-1"
                >Phone Number</label
              >
              <input
                type="tel"
                id="phone"
                v-model="customer.phone"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                placeholder="+254 712 345 678"
              />
            </div>

            <div>
              <label
                for="email"
                class="block text-sm font-medium text-gray-700 mb-1"
                >Email (Optional)</label
              >
              <input
                type="email"
                id="email"
                v-model="customer.email"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label
                for="notes"
                class="block text-sm font-medium text-gray-700 mb-1"
                >Special Requests</label
              >
              <textarea
                id="notes"
                v-model="customer.notes"
                rows="3"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                placeholder="Any specific styling instructions or notes for your barber..."
              ></textarea>
            </div>
          </div>

          <div class="mt-8 flex justify-between">
            <button
              @click="prevStep"
              class="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg font-medium transition-colors"
            >
              Back
            </button>
            <button
              @click="nextStep"
              :disabled="!customer.name || !customer.phone"
              :class="[
                'px-6 py-3 rounded-lg font-medium transition-colors',
                customer.name && customer.phone
                  ? 'bg-amber-600 hover:bg-amber-700 text-white'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed',
              ]"
            >
              Continue
            </button>
          </div>
        </div>

        <!-- Step 5: Confirmation -->
        <div
          v-if="currentStep === 4"
          class="bg-white shadow rounded-lg p-6 sm:p-8"
        >
          <h2 class="text-2xl font-bold text-gray-900 mb-6">
            Confirm Your Booking
          </h2>

          <div class="space-y-6">
            <!-- Booking Summary -->
            <div class="border-b border-gray-200 pb-6">
              <h3 class="text-lg font-medium text-gray-900 mb-4">
                Appointment Details
              </h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p class="text-sm text-gray-500">Service</p>
                  <p class="font-medium text-gray-900">
                    {{
                      bookingType === "service"
                        ? selectedService?.name
                        : bookingType === "barber"
                        ? "Cut with " + selectedBarber?.name
                        : selectedPackage?.name
                    }}
                  </p>
                </div>
                <div>
                  <p class="text-sm text-gray-500">Date & Time</p>
                  <p class="font-medium text-gray-900">
                    {{ formattedDate }} at {{ selectedTime }}
                  </p>
                </div>
                <div v-if="bookingType === 'service'">
                  <p class="text-sm text-gray-500">Duration</p>
                  <p class="font-medium text-gray-900">
                    {{ selectedService?.duration }} minutes
                  </p>
                </div>
                <div>
                  <p class="text-sm text-gray-500">Price</p>
                  <p class="font-medium text-gray-900">
                    KSh
                    {{
                      bookingType === "service"
                        ? selectedService?.price
                        : bookingType === "package"
                        ? selectedPackage?.price
                        : "Varies by service"
                    }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Customer Details -->
            <div class="border-b border-gray-200 pb-6">
              <h3 class="text-lg font-medium text-gray-900 mb-4">
                Your Information
              </h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p class="text-sm text-gray-500">Name</p>
                  <p class="font-medium text-gray-900">{{ customer.name }}</p>
                </div>
                <div>
                  <p class="text-sm text-gray-500">Phone</p>
                  <p class="font-medium text-gray-900">{{ customer.phone }}</p>
                </div>
                <div v-if="customer.email">
                  <p class="text-sm text-gray-500">Email</p>
                  <p class="font-medium text-gray-900">{{ customer.email }}</p>
                </div>
                <div v-if="customer.notes">
                  <p class="text-sm text-gray-500">Special Requests</p>
                  <p class="font-medium text-gray-900">{{ customer.notes }}</p>
                </div>
              </div>
            </div>

            <!-- Payment Method -->
            <div>
              <h3 class="text-lg font-medium text-gray-900 mb-4">
                Payment Method
              </h3>
              <div class="space-y-3">
                <div
                  v-for="method in paymentMethods"
                  :key="method.id"
                  @click="selectedPayment = method.id"
                  :class="[
                    'border-2 rounded-lg p-4 cursor-pointer transition-all',
                    selectedPayment === method.id
                      ? 'border-amber-500 bg-amber-50'
                      : 'border-gray-200 hover:border-amber-300',
                  ]"
                >
                  <div class="flex items-center">
                    <div class="flex-shrink-0">
                      <img :src="method.icon" :alt="method.name" class="h-8" />
                    </div>
                    <div class="ml-4">
                      <h3 class="font-medium text-gray-900">
                        {{ method.name }}
                      </h3>
                      <p class="text-sm text-gray-600">
                        {{ method.description }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-8 flex justify-between">
            <button
              @click="prevStep"
              class="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg font-medium transition-colors"
            >
              Back
            </button>
            <button
              @click="completeBooking"
              :disabled="!selectedPayment"
              :class="[
                'px-6 py-3 rounded-lg font-medium transition-colors',
                selectedPayment
                  ? 'bg-amber-600 hover:bg-amber-700 text-white'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed',
              ]"
            >
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Success Modal -->
    <div v-if="showSuccessModal" class="fixed inset-0 z-50 overflow-y-auto">
      <div
        class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div
            class="absolute inset-0 bg-gray-700/50 opacity-300"
            @click="showSuccessModal = false"
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
              <div
                class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10"
              >
                <svg
                  class="h-6 w-6 text-green-600"
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
              </div>
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Booking Confirmed!
                </h3>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">
                    Your appointment with
                    <span v-if="bookingType === 'barber'">{{
                      selectedBarber?.name
                    }}</span>
                    <span v-else>our barber</span>
                    is confirmed for {{ formattedDate }} at {{ selectedTime }}.
                  </p>
                  <p class="text-sm text-gray-500 mt-2">
                    We've sent the details to {{ customer.phone }}.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              @click="showSuccessModal = false"
              class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-amber-600 text-base font-medium text-white hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Done
            </button>
            <button
              type="button"
              @click="addToCalendar"
              class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Add to Calendar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cash from "../../../assets/images/Bookings/cash.jpeg";
import debit from "../../../assets/images/Bookings/debit.png";
import mpesa from "../../../assets/images/Bookings/mpesa.png";
import James from "../../../assets/images/Barbers/James.jpeg";
import David from "../../../assets/images/Barbers/David.jpeg";
import Samuel from "../../../assets/images/Barbers/Samuel.jpeg";
import Michael from "../../../assets/images/Barbers/Michael.jpeg";

export default {
  name: "BookingPage",
  data() {
    return {
      currentStep: 0,
      steps: [
        { id: 1, name: "Booking Type" },
        { id: 2, name: "Selection" },
        { id: 3, name: "Date & Time" },
        { id: 4, name: "Your Details" },
        { id: 5, name: "Confirmation" },
      ],
      bookingType: null,
      bookingOptions: [
        {
          id: "service",
          title: "Book by Service",
          description: "Choose from our menu of services",
          icon: "M13 10V3L4 14h7v7l9-11h-7z",
        },
        {
          id: "barber",
          title: "Book by Barber",
          description: "Select your preferred barber",
          icon: "M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z",
        },
        {
          id: "package",
          title: "Book a Package",
          description: "Save with bundled services",
          icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
        },
      ],
      services: [
        {
          id: 1,
          name: "Classic Haircut",
          description: "Precision haircut with scissors and clippers",
          price: 600,
          duration: 30,
        },
        {
          id: 2,
          name: "Skin Fade",
          description:
            "Ultra-sharp fade that blends from skin to your desired length",
          price: 800,
          duration: 45,
        },
        {
          id: 3,
          name: "Beard Trim & Shape",
          description: "Professional beard grooming with precise shaping",
          price: 450,
          duration: 25,
        },
        {
          id: 4,
          name: "Royal Shave",
          description: "Traditional straight razor shave with hot towels",
          price: 700,
          duration: 40,
        },
      ],
      barbers: [
        {
          id: 1,
          name: "James Mwangi",
          specialty: "Skin Fades & Classic Cuts",
          image: James,
        },
        {
          id: 2,
          name: "David Ochieng",
          specialty: "Trendy Styles & Hair Designs",
          image: David,
        },
        {
          id: 3,
          name: "Michael Kamau",
          specialty: "Beard Grooming & Styling",
          image: Michael,
        },
        {
          id: 4,
          name: "Samuel Kiptoo",
          specialty: "Traditional Barbering",
          image: Samuel,
        },
      ],
      packages: [
        {
          id: 1,
          name: "Executive Package",
          description:
            "Everything a modern gentleman needs for a polished look",
          includes: [
            "Classic Haircut",
            "Beard Trim & Shape",
            "Hot Towel Treatment",
            "Hair Styling",
          ],
          price: 1800,
          originalPrice: 2200,
        },
        {
          id: 2,
          name: "Grooming Essentials",
          description:
            "Perfect for maintaining your look between full services",
          includes: [
            "Beard Trim & Shape",
            "Hot Towel Treatment",
            "Moisturizing Treatment",
          ],
          price: 1200,
          originalPrice: 1500,
        },
      ],
      selectedService: null,
      selectedBarber: null,
      selectedPackage: null,
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      selectedDate: null,
      selectedTime: null,
      availableTimeSlots: [
        "9:00 AM",
        "10:00 AM",
        "11:00 AM",
        "12:00 PM",
        "1:00 PM",
        "2:00 PM",
        "3:00 PM",
        "4:00 PM",
        "5:00 PM",
      ],
      customer: {
        name: "",
        phone: "",
        email: "",
        notes: "",
      },
      paymentMethods: [
        {
          id: "mpesa",
          name: "M-Pesa",
          description: "Pay via M-Pesa on arrival",
          icon: mpesa,
        },
        {
          id: "cash",
          name: "Cash",
          description: "Pay in cash at the barbershop",
          icon: cash,
        },
        {
          id: "card",
          name: "Credit/Debit Card",
          description: "Pay now with your card",
          icon: debit,
        },
      ],
      selectedPayment: null,
      showSuccessModal: false,
    };
  },
  computed: {
    isStep2Valid() {
      if (this.bookingType === "service") return this.selectedService;
      if (this.bookingType === "barber") return this.selectedBarber;
      if (this.bookingType === "package") return this.selectedPackage;
      return false;
    },
    calendarDays() {
      const firstDay = new Date(
        this.currentYear,
        this.currentMonth,
        1
      ).getDay();
      const daysInMonth = new Date(
        this.currentYear,
        this.currentMonth + 1,
        0
      ).getDate();
      const daysInLastMonth = new Date(
        this.currentYear,
        this.currentMonth,
        0
      ).getDate();

      const days = [];

      // Days from previous month
      for (let i = 0; i < firstDay; i++) {
        days.push({
          date: new Date(
            this.currentYear,
            this.currentMonth - 1,
            daysInLastMonth - i
          ),
          isCurrentMonth: false,
          isToday: false,
          isSelected: false,
          isAvailable: false,
        });
      }
      days.reverse();

      // Current month days
      const today = new Date();
      for (let i = 1; i <= daysInMonth; i++) {
        const date = new Date(this.currentYear, this.currentMonth, i);
        const isToday =
          date.getDate() === today.getDate() &&
          date.getMonth() === today.getMonth() &&
          date.getFullYear() === today.getFullYear();
        const isSelected =
          this.selectedDate &&
          date.getDate() === this.selectedDate.getDate() &&
          date.getMonth() === this.selectedDate.getMonth() &&
          date.getFullYear() === this.selectedDate.getFullYear();

        // Simple availability logic - in a real app, this would check against actual availability
        const isAvailable = date >= today && date.getDay() !== 0; // Not Sunday

        days.push({
          date,
          isCurrentMonth: true,
          isToday,
          isSelected,
          isAvailable,
        });
      }

      // Days from next month
      const totalCells = days.length < 35 ? 35 : 42;
      const nextMonthDays = totalCells - days.length;
      for (let i = 1; i <= nextMonthDays; i++) {
        days.push({
          date: new Date(this.currentYear, this.currentMonth + 1, i),
          isCurrentMonth: false,
          isToday: false,
          isSelected: false,
          isAvailable: false,
        });
      }

      return days;
    },
    formattedDate() {
      if (!this.selectedDate) return "";
      return this.selectedDate.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
      });
    },
  },
  methods: {
    nextStep() {
      if (this.currentStep < this.steps.length - 1) {
        this.currentStep++;
      }
    },
    prevStep() {
      if (this.currentStep > 0) {
        this.currentStep--;
      }
    },
    selectBookingType(type) {
      this.bookingType = type;
      // Reset selections when changing booking type
      this.selectedService = null;
      this.selectedBarber = null;
      this.selectedPackage = null;
    },
    prevMonth() {
      if (this.currentMonth === 0) {
        this.currentMonth = 11;
        this.currentYear--;
      } else {
        this.currentMonth--;
      }
    },
    nextMonth() {
      if (this.currentMonth === 11) {
        this.currentMonth = 0;
        this.currentYear++;
      } else {
        this.currentMonth++;
      }
    },
    selectDate(day) {
      if (day.isAvailable && day.isCurrentMonth) {
        this.selectedDate = day.date;
        // Reset selected time when changing date
        this.selectedTime = null;
      }
    },
    completeBooking() {
      // In a real app, you would send this data to your backend
      const bookingData = {
        type: this.bookingType,
        service: this.selectedService,
        barber: this.selectedBarber,
        package: this.selectedPackage,
        date: this.selectedDate,
        time: this.selectedTime,
        customer: this.customer,
        payment: this.selectedPayment,
      };

      console.log("Booking submitted:", bookingData);

      // Show success modal
      this.showSuccessModal = true;

      // Reset form after booking (optional)
      // this.resetForm();
    },
    addToCalendar() {
      // In a real app, this would generate a calendar event
      alert("Added to calendar!");
      this.showSuccessModal = false;
      this.$router.push("/");
    },
    resetForm() {
      this.currentStep = 0;
      this.bookingType = null;
      this.selectedService = null;
      this.selectedBarber = null;
      this.selectedPackage = null;
      this.selectedDate = null;
      this.selectedTime = null;
      this.customer = {
        name: "",
        phone: "",
        email: "",
        notes: "",
      };
      this.selectedPayment = null;
    },
  },
};
</script>

<style scoped>
/* Custom styling for select dropdown arrow */
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1em;
}
</style>
