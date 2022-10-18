<template>
<div class="app overflow-hidden h-full w-full relative bg-gray-800
">
  <div
    class="
      h-full
      relative
      py-5
      md:pl-0
      pl-5
      pr-5
      flex flex-col
      justify-center
    "
  >
    <div
      @click="
        $store.state.mobileScreenOpened = !$store.state.mobileScreenOpened
      "
      v-if="$store.state.mobileScreen"
      class="flex justify-end items-center h-9 w-full p-5"
    >
      <i
        class="fas fa-bars text-2xl cursor-pointer"
        v-if="!$store.state.mobileScreenOpened"
      ></i>

      <i v-else class="fas fa-times cursor-pointer text-2xl"></i>
    </div>
    <div class="flex  min-h-fit h-full relative">
      <div
        class="
          md:w-16
          xmd:w-56
          fixed
          z-30
          left-0
          top-0
          bg-gray-800
          h-screen
          flex-none
        "
      >
        <Sidebar />
      </div>
      <main
        class="
          body
          h-full
          md:left-16
          xmd:left-56
          bg-gray-200
          rounded-3xl
          relative
          py-7
          px-5
        "
      >
        <UserRoutes />
      </main>
    </div>
   
  </div>
</div>
</template>
  
  <script>
import Sidebar from "@/components/sidebar.vue";
import UserRoutes from "../components/UserRoute.vue";
export default {
  name: "Home",
  methods: {
    changeUserView(id) {
      console.log(id);
    },
  },
  created(){
if(localStorage.getItem('userid') == undefined){
this.$router.push('/')
}
    },
  components: { Sidebar, UserRoutes },
};
</script>
  
  <style lang="scss">
* {
  transition: ease 0.6s;
}
.body {
  width: 100%;
  overflow-y: visible;
  @media (min-width: 850px) {
    width: calc(100% - 5rem);
  }
  @media (min-width: 1000px) {
    width: calc(100% - 16rem);
  }
}
</style>