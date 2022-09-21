<template>
 <navbar/>
  <router-view/>
  <Footer/>
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



</style>
