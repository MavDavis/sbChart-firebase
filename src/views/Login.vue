<template>
    <!-- <Loading v-if="loading"/> -->
      <div class="py-7 login flex justify-center sm:justify-between items-center min-h-screen relative z-50">
          <div class=" w-full md:w-1/2">
    <p class="text-sm text-dark text-center">
      Don't have an account?
      <router-link
        class="text-lg ml-1 font-semibold underline hover:tracking-wider"
        :to="{ name: 'Register' }"
        >Register</router-link
      >
    </p>
    <div class="w-full">
      <h1 class="font-semibold tracking-wider text-xl text-center">Login </h1>
      <form class="bg-white px-5 pt-6 pb-8 mb-4">
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
          <div class="mb-4 relative ">
          <i class="fas fa-envelope absolute top-3 left-3 text-dark z-10"></i>        <input
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
        <div class="mb-4 relative ">
          <i class="fas fa-lock absolute top-3 left-3 text-dark z-10"></i>     
          <input
                type="checkbox"
                @click="toggledInputField"
                class="absolute top-3 right-3 z-10"
              />
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
          @click="Login()"
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
          >
            Sign In
          </button>
          <router-link
            :to="{ name: 'ForgotPassword' }"
            class="
              mb-5
              inline-block
              align-baseline
              font-bold
              text-sm text-dark
              hover:tracking-wider
            "
          >
            Forgot Password?
          </router-link>
        </div>
      </form>
    </div>
    </div>
    <div class="hidden sm:block w-1/2 bg-img">
      <div class=" w-full h-full relative"></div>
    </div>
  </div>
  </template>
  
  <script>

//   import Loading from "@/components/Loading.vue";
  export default {
      data() {
          return {
            
              inputField:'password'
          };
      },
      methods: {
        toggledInputField() {
              if (this.inputField == "password") {
                  this.inputField = "text";
              }
              else {
                  this.inputField = "password";
              }},
         Login() {
           
              this.loading = true;
             this.$store.commit('Login')
             if(this.$store.state.loggedIn){
              this.loading = false
              this.$router.push('/')
             }
              
          
             
             
      },
    },
  }
  </script>
  
  <style lang="scss" scoped>
     .bg-img{
        //   background: url('../assets/background.jpg');
        background-size: cover;
  background-position: center;    
        height: 100%;
        width: 100%;
        opacity: 1;
        z-index: 100;
      
      }
  </style>