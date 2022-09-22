<template>
<div class="app">
  <navbar/>
  <router-view/>
  <Footer/>
</div>
</template>
<script>

import Navbar from './components/navbar.vue'
import Footer from './components/Footer.vue';
export default {
  setup() {
    
  },
components:{
    Navbar,
    Footer
}
}
</script>

<style lang="scss">
.app{
  position: relative;
}


</style>
