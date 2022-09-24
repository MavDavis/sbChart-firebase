<template>
  <div class="app" >
    <navbar />
    <div @click="changeStateOptions()">
      <router-view />
    </div>

    <Footer />
  </div>
</template>
<script>
function getDocHeight() {
  var D = document;
  return Math.max(
    D.body.scrollHeight,
    D.documentElement.scrollHeight,
    D.body.offsetHeight,
    D.documentElement.offsetHeight,
    D.body.clientHeight,
    D.documentElement.clientHeight
  );
}

let winheight, docheight, trackLength, throttlescroll;

function getmeasurements() {
  winheight =
    window.innerHeight ||
    (document.documentElement || document.body).clientHeight;
  docheight = getDocHeight();
  trackLength = docheight - winheight;
}

function amountscrolled() {
  winheight =
    window.innerHeight ||
    (document.documentElement || document.body).clientHeight;
  docheight = getDocHeight();
  trackLength = docheight - winheight;
  var scrollTop =
    window.pageYOffset ||
    (document.documentElement || document.body.parentNode || document.body)
      .scrollTop;
  var pctScrolled = Math.floor((scrollTop / trackLength) * 100);
  return pctScrolled;
}
getmeasurements();

window.addEventListener(
  "resize",
  function () {
    getmeasurements();
  },
  false
);

import Navbar from "./components/navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  setup() {},
  created() {
    window.addEventListener(
      "scroll",
      ()=> {
        clearTimeout(throttlescroll);
        throttlescroll = setTimeout( () => {
          if (window.innerWidth > 850){
            if (amountscrolled() > 4)  {
            this.$store.commit("changedScrolledTotrue");
          }else{
            this.$store.commit("changedScrolledTofalse");

          }
        
        } else {
            this.$store.commit("changedScrolledTotrue");
          }
        }, 10);
      },
      false
    );
  },
  methods: {
    changeStateOptions(){
      if(this.$store.state.showOptions === true){
        this.$store.commit('changeStateshowOptions')
      }
    }
  },
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss">
.app {
  position: relative;
  min-height: 100vh;
  height: fit-content;
  max-width: 100vw;
  overflow-x: hidden;
}
</style>
