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
            Contact <span class="text-amber-500">Us</span>
          </h1>
          <p class="mt-6 text-lg text-gray-300">
            Reach out for bookings, inquiries, or just to say hello. We're here
            to help!
          </p>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="py-16">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div class="bg-white rounded-xl shadow-md p-6 sm:p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h2>

            <form @submit.prevent="sendWhatsAppMessage" class="space-y-6">
              <div>
                <label
                  for="name"
                  class="block text-sm font-medium text-gray-700 mb-1"
                  >Your Name</label
                >
                <input
                  type="text"
                  id="name"
                  v-model="form.name"
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
                  v-model="form.phone"
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
                  v-model="form.email"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  for="subject"
                  class="block text-sm font-medium text-gray-700 mb-1"
                  >Subject</label
                >
                <select
                  id="subject"
                  v-model="form.subject"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                >
                  <option value="" disabled selected>Select a subject</option>
                  <option value="Booking Inquiry">Booking Inquiry</option>
                  <option value="Service Question">Service Question</option>
                  <option value="Feedback">Feedback</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label
                  for="message"
                  class="block text-sm font-medium text-gray-700 mb-1"
                  >Your Message</label
                >
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="4"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                  placeholder="Type your message here..."
                ></textarea>
              </div>

              <div class="flex items-center">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  v-model="form.consent"
                  required
                  class="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                />
                <label for="consent" class="ml-2 block text-sm text-gray-700">
                  I agree to have my information used to contact me
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  class="w-full flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
                >
                  <svg
                    class="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-6.29-3.51c.174.38.512.723.929.943.415.22.894.309 1.366.25.472-.057.914-.263 1.265-.592.35-.328.59-.763.685-1.24a2.238 2.238 0 00-.153-1.413 2.21 2.21 0 00-.921-1.075 2.292 2.292 0 00-1.357-.258c-.472.06-.912.267-1.262.597-.35.328-.588.763-.681 1.238-.093.476-.041.966.135 1.35"
                    />
                    <path
                      d="M12 2a10 10 0 100 20 10 10 0 000-20m0 18a8 8 0 110-16 8 8 0 010 16"
                    />
                  </svg>
                  Send via WhatsApp
                </button>
              </div>
            </form>
          </div>

          <!-- Contact Info -->
          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-6">
              Our Information
            </h2>

            <div class="space-y-6">
              <!-- Address -->
              <div class="flex items-start">
                <div class="flex-shrink-0 bg-amber-100 p-3 rounded-lg">
                  <svg
                    class="w-6 h-6 text-amber-600"
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
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-medium text-gray-900">
                    Our Location
                  </h3>
                  <p class="mt-1 text-gray-600">123 Barber Street, Westlands</p>
                  <p class="text-gray-600">Nairobi, Kenya</p>
                  <a
                    href="https://maps.google.com?q=123+Barber+Street,+Westlands,+Nairobi"
                    target="_blank"
                    class="mt-2 inline-flex items-center text-amber-600 hover:text-amber-500"
                  >
                    View on Google Maps
                    <svg
                      class="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <!-- Phone -->
              <div class="flex items-start">
                <div class="flex-shrink-0 bg-amber-100 p-3 rounded-lg">
                  <svg
                    class="w-6 h-6 text-amber-600"
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
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-medium text-gray-900">
                    Phone Numbers
                  </h3>
                  <p class="mt-1 text-gray-600">
                    Main:
                    <a href="tel:+254712345678" class="hover:text-amber-600"
                      >+254 712 345 678</a
                    >
                  </p>
                  <p class="text-gray-600">
                    Bookings:
                    <a href="tel:+254712345679" class="hover:text-amber-600"
                      >+254 712 345 679</a
                    >
                  </p>
                  <a
                    href="https://wa.me/254702387039"
                    target="_blank"
                    class="mt-2 inline-flex items-center text-green-600 hover:text-green-500"
                  >
                    Chat on WhatsApp
                    <svg
                      class="w-4 h-4 ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-6.29-3.51c.174.38.512.723.929.943.415.22.894.309 1.366.25.472-.057.914-.263 1.265-.592.35-.328.59-.763.685-1.24a2.238 2.238 0 00-.153-1.413 2.21 2.21 0 00-.921-1.075 2.292 2.292 0 00-1.357-.258c-.472.06-.912.267-1.262.597-.35.328-.588.763-.681 1.238-.093.476-.041.966.135 1.35"
                      />
                      <path
                        d="M12 2a10 10 0 100 20 10 10 0 000-20m0 18a8 8 0 110-16 8 8 0 010 16"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <!-- Hours -->
              <div class="flex items-start">
                <div class="flex-shrink-0 bg-amber-100 p-3 rounded-lg">
                  <svg
                    class="w-6 h-6 text-amber-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-medium text-gray-900">
                    Opening Hours
                  </h3>
                  <ul class="mt-1 space-y-1 text-gray-600">
                    <li class="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 7:00 PM</span>
                    </li>
                    <li class="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 5:00 PM</span>
                    </li>
                    <li class="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Map -->
              <div class="rounded-xl overflow-hidden shadow-md h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.808477395885!2d36.80821541575393!3d-1.2928355359833456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d664f5a9a7%3A0x1d5d6b5d5d5d5d5d!2sWestlands%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske"
                  width="100%"
                  height="100%"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
  data() {
    return {
      form: {
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
        consent: false,
      },
    };
  },
  methods: {
    sendWhatsAppMessage() {
      if (!this.form.consent) {
        alert("Please agree to the consent terms");
        return;
      }

      // Format the message
      const message = `New Contact Form Submission\n\n
      Name: ${this.form.name}\n
      Phone: ${this.form.phone}\n
      Email: ${this.form.email || "Not provided"}\n
      Subject: ${this.form.subject}\n\n
      Message:\n${this.form.message}`;

      // Encode the message for URL
      const encodedMessage = encodeURIComponent(message);

      // Replace with your actual WhatsApp number
      const whatsappNumber = "254702387039";

      // Open WhatsApp with the message
      window.open(
        `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
        "_blank"
      );

      // Reset form
      this.form = {
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
        consent: false,
      };

      // Show confirmation (optional)
      alert(
        "You will now be redirected to WhatsApp to send your message. Thank you!"
      );
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
