<template>
    <div class='light x1'></div>
  <div class='light x2'></div>
  <div class='light x3'></div>
  <div class='light x4'></div>
  <div class='light x5'></div>
  <div class='light x6'></div>
  <div class='light x7'></div>
  <div class='light x8'></div>
  <div class='light x9'></div>


  <!-- <div class="absolute  top-0 left-0 w-full h-full">
    <div class="absolute-two  top-0 left-0 w-full h-full"></div></div> -->
    <Loading v-if="$store.state.loading"/>
    <div
      class="  py-7
      login
      flex
      justify-center
      sm:justify-between
      items-center
      min-h-screen
      relative
      z-50"
    >
      <div class="w-full md:w-1/2">
        <p class="text-sm text-white text-center">
          Already have an account?
          <router-link
            class="text-lg ml-1 z-50 text-white font-semibold underline hover:tracking-wider"
            :to="{ name: 'Login' }"
            >Login
          </router-link>
        </p>
        <h1 class="font-semibold text-white tracking-wider text-xl text-center">
          Sign up
        </h1>
        <div class="w-full">
          <form class="px-5 pt-6 pb-8 mb-4">
            <p
              v-if="$store.state.error"
              class="
                error
                text-center
                mb-2
                text-red-300 text-sm
                tracking-wide
                font-semibold

              "
            >
              {{ $store.state.errMssg }}
            </p>
            <div class="mb-4 relative">
              <i class="fas fa-user absolute top-3 left-3 text-dark z-10"></i>
              <input
                class="
                  appearance-none
                  border
                  rounded
                  w-full
                  py-2
                  px-8
                  text-dark
                  leading-tight
                  focus:outline-none focus:shadow-outline
                "
                v-model="$store.state.userName"
                type="text"
                required
                placeholder="Enter Legal Name"
              />
            </div>
            <div class="mb-4 relative">
              <i class="fas fa-user absolute top-3 left-3 text-dark z-10"></i>
          
            </div>
           
            <div class="mb-4 relative">
              <i class="fas fa-envelope absolute top-3 left-3 text-dark z-10"></i>
              <input
                class="
                  bg-gray-100
                  appearance-none
                  border
                  rounded
                  w-full
                  py-2
                  px-8
                  text-dark
                  leading-tight
                  focus:outline-none focus:shadow-outline
                "
                v-model="$store.state.userEmail"
                type="email"
                required
                placeholder="Email"
              />
            </div>
            <div class="mb-4 relative">
              <input
                type="checkbox"
                @click="toggledInputField"
                class="absolute top-3 right-3 z-10"
              />
  
              <i class="fas fa-lock absolute top-3 left-3 text-dark z-10"></i>
              <input
                class="
                  appearance-none
                  bg-gray-100
                  rounded
                  w-full
                  py-2
                  px-8
                  text-dark
                  mb-3
                  leading-tight
                  focus:outline-none focus:shadow-outline
                "
                v-model="$store.state.userPassWord"
                :type="inputField"
                placeholder="Password"
              />
            </div>
            <div class="flex flex-col items-center justify-between">
             
              <button
                class="
                  bg-black
                  hover:tracking-wider
                  text-white
                  font-bold
                  py-2
                  px-4
                  rounded-full
                  focus:outline-none focus:shadow-outline
                "
                type="button"
                @click="Submit()"
              >
               Create account
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="hidden sm:block w-1/2 bg-img">
        <div class="w-full h-full relative"></div>
      </div>
    </div>
  </template>
  
  <script>

  import Loading from "../components/Loading.vue";
  export default {
      data() {
          return {
          
              inputField: "password",
             
              loading:false
          };
      },
      methods: {
          toggledInputField() {
              if (this.inputField == "password") {
                  this.inputField = "text";
              }
              else {
                  this.inputField = "password";
              }
          },
     
      Submit() {
       this.$store.commit('Submit')
      },
    },
      components: { Loading },
      created(){
if(localStorage.getItem('userid') != undefined){
}
      },

  }
  </script>
  
  <style lang="scss" scoped>
  .bg-img {
    // background: url("../assets/background.jpg");
    background-size: cover;
    background-position: center;
    height: 100%;
    width: 100%;
    opacity: 1;
    z-index: 100;
  }
  .z-50{
    z-index: 999999999;
  }
  </style>