<template>
    <div class="bg-gray-800    min-h-screen h-full py-5 md:pl-0 pl-5 pr-5 flex flex-col justify-center">
      <div @click="$store.state.mobileScreenOpened = !$store.state.mobileScreenOpened" v-if="$store.state.mobileScreen" class="flex justify-end items-center  h-9 w-full p-5">
        <i class="fas fa-bars text-2xl cursor-pointer" v-if="!$store.state.mobileScreenOpened"></i>

        <i v-else class="fas fa-times cursor-pointer text-2xl"></i>
      </div>
      <div class="flex min-h-screen h-full relative" >
        <div class="md:w-16 xmd:w-56 fixed z-30  left-0 top-0 bg-gray-800 h-full flex-none">
          <Sidebar />
        </div>
        <div class="body h-full md:left-16 xmd:left-56 bg-gray-200 rounded-3xl relative py-7 px-5">
<main>
<UserRoutes/>
</main>        
</div>
      </div>
      <!-- <div class="w-full flex" style="height: 2vh">
      </div> -->
    </div>
  </template>
  
  <script>
  import Sidebar from "@/components/sidebar.vue";
  import UserRoutes from "../components/UserRoute.vue";
  export default {
    name: "Home",
    methods:{
      changeUserView(id){
        console.log(id);
      }
    },
    components: { Sidebar, UserRoutes },
  };
  </script>
  
  <style lang="scss">
  * {
    transition: ease 0.6s;
  }
  .body{
    width:100%;
    @media(min-width:850px){
  width:calc(100% - 5rem)
}
@media(min-width:1000px){
  width:calc(100% - 16rem)
}

  }
  </style>