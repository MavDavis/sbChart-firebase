<template>
 <div  v-if="$store.state.contactUs"
    class="flex items-center w-full min-h-screen bg-gray-50 dark:bg-gray-900"
  >
    <div class="container mx-auto">
      <div
        class="md:w-3/4 w-full mx-auto my-10 bg-white p-5 rounded-md shadow-sm"
      >
        <div class="text-center">
          <h1
            class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200"
          >
            Reviews
          </h1>
          <p class="text-gray-400 dark:text-gray-400">
            Fill up the form below to send us a feedback.
          </p>
        </div>
        <div class="m-7">
          <form>
            <div class="mb-6">
              <label
                for="name"
                class="block mb-1 text-sm text-gray-600 dark:text-gray-400"
                >Full Name</label
              >
              <input
                type="text"
                name="name"
                id="name"
                placeholder="John Doe"
                required
                class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
              />
            </div>
            <div class="mb-6">
              <label
                for="email"
                class="block mb-1 text-sm text-gray-600 dark:text-gray-400"
                >Email Address</label
              >
              <input
                type="email"
                name="email"
                id="email"
                placeholder="you@email.com"
                required
                class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
              />
            </div>
            <div class="mb-6">
              <label
                for="subject"
                class="block mb-1 text-sm text-gray-600 dark:text-gray-400"
                >Subject</label
              >
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Your Subject"
                required
                class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
              />
            </div>
            <div class="mb-6">
              <label
                for="message"
                class="block mb-1 text-sm text-gray-600 dark:text-gray-400"
                >Your Message</label
              >
              <textarea
                rows="5"
                name="message"
                id="message"
                placeholder="Your Message"
                class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                required
              ></textarea>
            </div>
            <div class="mb-6">
              <button
                type="submit"
                class="w-full px-3 py-4 text-white rounded-md focus:outline-none"
              >
                Send Message
              </button>
            </div>
            <p class="text-base text-center text-gray-400" id="result"></p>
          </form>
        </div>
      </div>
      <div class="m-7 flex justify-center items-center flex-col">
        <div class="mt-5 flex">
          <i
            class="fa-brands md:text-2xl text-lg hover:translate-y-2 fa-facebook mr-5"
          ></i>
          <i
            class="fa-brands md:text-2xl text-lg hover:translate-y-2 fa-instagram mr-5"
          ></i>
          <i
            class="fa-brands md:text-2xl text-lg hover:translate-y-2 fa-twitter"
          ></i>
        </div>
      </div>
    </div>
  </div>
  </template>
  <script>
export default{
    name:'ContactUs'
}</script>