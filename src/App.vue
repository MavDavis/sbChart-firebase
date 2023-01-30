<template>
  <div class="app">
    <div v-show="!navigation"></div>
    <div @click="changeStateOptions()">
      <router-view />
    </div>

    <div v-show="!navigation"></div>
  </div>
</template>
<script>
import { firebaseAuth } from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  data() {
    return {
      navigation: null,
    };
  },
  setup() {},

  created() {
    if (window.innerWidth < 850) {
      this.$store.state.mobileScreen = true;
    } else {
      this.$store.state.mobileScreen = false;
    }
    this.checkRoute();
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        this.$store.commit("getUserData");
      }
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth < 850) {
        this.$store.state.mobileScreen = true;
      } else {
        this.$store.state.mobileScreen = false;
      }
    });
  },

  methods: {
    changeStateOptions() {
      if (this.$store.state.showOptions === true) {
        this.$store.commit("changeStateshowOptions");
      }
    },
    checkRoute() {
      // if (
      //   this.$route.name === "Login" ||
      //   this.$route.name === "ForgotPassword" ||
      //   this.$route.name === "User" ||
      //   this.$route.name === "Register"
      // ) {
      //   this.navigation = true;
      //   return;
      // }
      // this.navigation = false;
  
    },
  },
  watch: {
    $route() {
      this.checkRoute();
    },
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
li {
}
</style>
