<template>
    <!-- <Modal v-if="modal" :modalMssg="modalMssg" @closeModal="closeModal()"/> -->
    <!-- <Loading v-if="loading"/> -->
    <div class=" login flex justify-center sm:justify-between items-center h-screen ">
        <div class=" w-full md:w-1/2">
  
  <div class="w-full">
    <h1 class="px-5 font-semibold tracking-wider text-xl text-center">Reset Password</h1>
    <p class="text-sm text-dark text-center">
Back to
    <router-link
      class="text-lg ml-1 font-semibold underline hover:tracking-wider"
      :to="{ name: 'Login' }"
      >Login</router-link
    >
  </p>
    <p class="text-sm text-dark text-center px-5">
 Forgot your password? Enter your email to reset it
</p>
    <form class="bg-white px-5 pt-6 pb-8 mb-4">
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
          v-model="email"
          type="email"
          required
          placeholder="Email"
        />
      </div>
     
      <div class="flex flex-col items-center justify-between">
  
        <button
        @click="resetPassword()"
          class="
            bg-dark
            hover:tracking-wider
            text-white
            font-bold
            py-2
            px-4
            uppercase
            rounded-full
            focus:outline-none focus:shadow-outline
          "
          type="button"
        >
Reset        </button>
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
// import Modal from '@/components/Modal.vue';
// import Loading from '../components/Loading.vue';
// import { getAuth, sendPasswordResetEmail } from "firebase/auth";
export default {
    data() {
        return {
            email: "",
            modal:false,
            loading:false,
            modalMssg:''
        };
    },
    // components: { Modal,Loading },
    methods:{
//         closeModal(){
//             this.modal = false
//         },
//         resetPassword(){
//           this.loading = true
// const auth = getAuth();
// sendPasswordResetEmail(auth, this.email)
//   .then(() => {
//     this.loading=false
//    this.modal =true
//    this.modalMssg ='A password reset has been sent to you if your account exist'
//    this.email = ''
//   })
//   .catch((error) => {
//     this.loading=false
//     const errorCode = error.code;
//     this.modal =true
//    this.modalMssg = error.message;
//     // ..
//   });
//         }
    }
};
</script>

<style lang="scss" scoped>
   .bg-img{
        // background: url('../assets/background.jpg');
      background-size: cover;
background-position: center;    
      height: 100%;
      width: 100%;
      opacity: 1;
      z-index: 1;
    
   }</style>