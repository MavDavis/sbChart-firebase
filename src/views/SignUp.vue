<template>
    <!-- <Loading v-if="loading"/> -->
    <div
      class="login flex justify-center sm:justify-between items-center h-screen"
    >
      <div class="w-full md:w-1/2">
        <p class="text-sm text-dark text-center">
          Already have an account?
          <router-link
            class="text-lg ml-1 font-semibold underline hover:tracking-wider"
            :to="{ name: 'Login' }"
            >Login
          </router-link>
        </p>
        <div class="w-full">
          <h1 class="font-semibold tracking-wider text-xl text-center">
            Sign up
          </h1>
          <form class="bg-white px-5 pt-6 pb-8 mb-4">
            <p
              v-if="error"
              class="
                error
                text-center
                mb-2
                text-red-300 text-sm
                tracking-wide
                font-semibold
              "
            >
              {{ errMssg }}
            </p>
            <div class="mb-4 relative">
              <i class="fas fa-user absolute top-3 left-3 text-dark z-10"></i>
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
                v-model="firstname"
                type="text"
                required
                placeholder="Firstname"
              />
            </div>
            <div class="mb-4 relative">
              <i class="fas fa-user absolute top-3 left-3 text-dark z-10"></i>
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
                v-model="lastname"
                type="text"
                required
                placeholder="Lastname"
              />
            </div>
            <div class="mb-4 relative">
              <i class="fas fa-user absolute top-3 left-3 text-dark z-10"></i>
              <input
                class="
                  bg-gray-100
                  appearance-none
                  border
                  rounded
                  relative
                  w-full
                  py-2
                  px-8
                  text-dark
                  leading-tight
                  focus:outline-none focus:shadow-outline
                "
                v-model="Username"
                type="text"
                required
                placeholder="Username"
              />
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
                v-model="email"
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
                v-model="password"
                :type="inputField"
                placeholder="Password"
              />
            </div>
            <div class="flex flex-col items-center justify-between">
             
              <button
                class="
                  bg-dark
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
//   import { collection, onSnapshot } from "firebase/firestore";
//   import { db } from "../firebase/firebaseInit";
//   import { doc, setDoc, addDoc } from "firebase/firestore";
//   import { createUserWithEmailAndPassword } from "firebase/auth";
//   import { firebaseAuth } from "../firebase/firebaseInit";
//   import Loading from "@/components/Loading.vue";
  export default {
      data() {
          return {
              email: "",
              password: "",
              firstname: "",
              lastname: "",
              Username: "",
              inputField: "password",
              errMssg: "",
              error: false,
              id: "",
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
        //   async Submit() {
        //       if (this.email === "" ||
        //           this.Username === "" ||
        //           this.password === "" ||
        //           this.firstname === "" ||
        //           this.lastname === "") {
        //           this.error = true;
        //           this.errMssg = "Please, fill all details.";
        //           setTimeout(() => {
        //               this.error = false;
        //               this.errMssg = "";
        //           }, 5000);
        //       }
        //       else if (this.password.length < 7) {
        //           this.error = true;
        //           this.errMssg = "Password must be minimum of eight characters";
        //           setTimeout(() => {
        //               this.error = false;
        //               this.errMssg = "";
        //           }, 5000);
        //       }
        //       else if (!this.email.includes("@") || !this.email.includes(".")) {
        //           this.error = true;
        //           this.errMssg = "Enter a valid Email";
        //           setTimeout(() => {
        //               this.error = false;
        //               this.errMssg = "";
        //           }, 5000);
        //       }
        //       else {
        //         this.loading = true
        //           createUserWithEmailAndPassword(firebaseAuth, this.email, this.password)
        //               .then((userCredential) => {
        //               this.id = userCredential.user.reloadUserInfo.localId;
        //           })
        //               .catch((err) => {
        //                 this.loading = false
        //               this.error = true;
        //               this.errMssg = err.message;
        //               setTimeout(() => {
        //                   this.error = false;
        //                   this.errMssg = "";
        //               }, 10000);
        //           })
        //               .then(() => {
        //               setDoc(doc(db, "Users", this.id), {
        //                   Firstname: this.firstname,
        //                   Email: this.email,
        //                   password: this.password,
        //                   Lastname: this.lastname,
        //                   Username: this.Username,
        //               });
        //               this.$router.push('/')
        //           });
        //       }
        //   },
      },
      components: {  }
  };
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
  </style>