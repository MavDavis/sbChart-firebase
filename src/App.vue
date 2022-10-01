<template>
  <div class="app" >
    <div v-show="!navigation">
        <Navbar />
      </div>    <div @click="changeStateOptions()">
      <router-view />
    </div>

    <div v-show="!navigation">
        <Footer />
      </div>  </div>
</template>
<script>

  import { firebaseAuth } from "./firebase"
    import { getAuth, onAuthStateChanged } from "firebase/auth";


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



import Navbar from "./components/navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  data(){
    return{
      navigation: null,
    }
  },
  setup() {},
  created() {
    if (window.innerWidth < 850) {
  this.$store.state.mobileScreen = true
      } else {
        this.$store.state.mobileScreen = false

      }
    this.checkRoute();
    onAuthStateChanged(firebaseAuth, (user) => {
      if(user){
        this.$store.commit('getUserData')
      }
  }
)
window.addEventListener("resize", () => {
      if (window.innerWidth < 850) {
  this.$store.state.mobileScreen = true
      } else {
        this.$store.state.mobileScreen = false

      }
    })

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
    },
    checkRoute() {
      if (
        this.$route.name === "Login" ||
        this.$route.name === "ForgotPassword" ||
        this.$route.name === "User" ||
        this.$route.name === "Register"
      ) {
        this.navigation = true;
        return;
      } 
        this.navigation = false;
      
    },
  },
  watch: {
    $route() {
      this.checkRoute();
    },
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
li{

}
</style>

