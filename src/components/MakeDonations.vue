<template>
       <div
      v-if="this.$store.state.makeDonations"
      class="card-div flex w-full justify-between h-1/2"
    >
      <div
        class="profile relative flex w-full bg-white h-fit sm:items-center items-start justify-center pb-6"
      >
        <div
          class="px-5 flex flex-col justify-center items-center w-full md:w-3/4"
        >
          <h1
            class="md:text-2xl sm:text-xl text-sm text-dark tracking-wider flex justify-center mt-3"
          >
            Give
          </h1>
          <div class="bg-gray-200 rounded p-4 mt-4 w-full relative">
            <div class="flex items-center justify-center flex-col"></div>
            <div
              class="flex w-full relative flex-col items-center justify-center"
            >
              <div
                class="mb-4 relative flex w-full md:flex-row flex-col items-center justify-between"
              >
                <div class="left w-full md:w-1/2">
                  <label
                    class="font-light sm:text-sm text-xs text-dark tracking-wider"
                    for="username"
                    >Username</label
                  >
                  <input
                    class="bg-gray-100 appearance-none border rounded relative w-full py-2 px-2 text-dark leading-tight focus:outline-none focus:shadow-outline"
                    v-model="this.$store.state.User.userName"
                    type="text"
                  />
                </div>
                <div class="right w-full md:w-1/2">
                  <label
                    class="font-light sm:text-sm text-xs text-dark tracking-wider"
                    for="username"
                    >Phone number</label
                  >
                  <input
                    class="bg-gray-100 appearance-none border rounded relative w-full py-2 px-2 text-dark leading-tight focus:outline-none focus:shadow-outline"
                    type="number"
                    v-model ="this.$store.state.User.phoneNumber"
                  />
                </div>
              </div>

              <div
                class="mb-4 relative flex w-full md:flex-row flex-col items-center justify-between"
              >
                <div class="left w-full md:w-1/2">
                  <label
                    class="font-light sm:text-sm text-xs text-dark tracking-wider"
                    for="username"
                    >Email</label
                  >
                  <input
                    class="bg-gray-100 appearance-none border rounded relative w-full py-2 px-2 text-dark leading-tight focus:outline-none focus:shadow-outline"
                    v-model="this.$store.state.User.userEmail"
                    type="text"
                  />
                </div>
                <div class="right w-full md:w-1/2">
                  <label
                    class="font-light sm:text-sm text-xs text-dark tracking-wider"
                    for="username"
                    >Amount</label
                  >
                  <input
                    class="bg-gray-100 appearance-none border rounded relative w-full py-2 px-2 text-dark leading-tight focus:outline-none focus:shadow-outline"
                    type="number"
                  />
                </div>
              </div>

              <button
                class="mb-4 relative uppercase text-white hover:tracking-wider px-3 sm:px-6 sm:py-3 py-2 bg-black text-xs"
              >
                Make Payments
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>