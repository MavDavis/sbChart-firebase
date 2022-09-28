<template>
  <div class="navbar" v-if="$store.state.scrolled">
    <header class="header">
      <div class="sticky">
        <div class="logo"><img src="../assets/logo.png" alt="" /></div>

        <nav class="webimenu">
          <div
            @click="toggleMobileScreenOpened"
            v-if="mobileScreen"
            class="menu-toggle"
          >
            <i class="fas fa-bars  cursor-pointer"></i>
          </div>
          <ul class="ownmenu" v-else>
            <li class="active"><router-link to="/">Home </router-link></li>

            <li><router-link to="/about">About Us</router-link></li>
            <li><router-link to="/gallery">Gallery</router-link></li>

            <li><router-link to="/volunteer"> Donate </router-link></li>
            <li><router-link to="/contact"> Contact</router-link></li>
            <li class="relative">
                <i class="fas fa-user text-white text-2xl cursor-pointer" @click="$store.commit('changeStateshowOptions')"></i>
 
          <div
            v-if="$store.state.showOptions"
            class="
              absolute
              top-10
              right-1
              bg-black
              w-96
              h-fit
              flex flex-col
              items-center
              shadow
              justify-center
            "
          >
            <div class="flex items-center border-y p-3 w-full border-white">
              <div
                class="
                  flex
                  items-center
                  justify-center
                  p-1
                  bg-white
                  rounded-full
                "
              >
                <h1
                  class="
                    text-dark
                    font-semibold
                    text-2xl
                    flex
                    justify-center
                    items-center
                  "
                >
                  {{ $store.state.UserInitials }}
                </h1>
              </div>
              <div
                class="info flex flex-col justify-start items-start ml-5 w-3/4"
              >
            
                <p class="sm text-white flex w-full items-center justify-start">
                  <i class="mr-2 fas fa-envelope text-sm text-white"></i
                  >
                  {{ $store.state.userEmail }}
                </p>
                <p class="sm text-white flex w-full items-center justify-start">
                  <i class="mr-2 fas fa-user text-sm text-white"></i
                  >
                  {{ $store.state.userName }}
                </p>
              </div>
            </div>
            <div class="flex p-3 flex-col justify-center items-start w-full">
              <div
              @click="$store.commit('changeStateshowOptions')"
                class="option text-white mb-2 w-full"
              >
                <router-link to="/user">
                  <i class="fas text-white  fa-user mr-2"></i>view profile
                </router-link>
              </div>
           
              <div class="option text-white mb-2 w-full">
                <button v-if="!$store.state.loggedOut" @click="$store.commit('logout')" to="/">
                  <i class="fas text-white mr-2 fa"></i>SignOUt
                </button>
                <button v-if="$store.state.loggedOut" ><router-link to="/login">
                  <i class="fas text-white mr-2 fa"></i>Login
                </router-link>

                </button>
              </div>
            </div>
          </div>

            </li>
          </ul>
        </nav>
      </div>
    </header>
    <div class="mobile-links" v-if="mobileScreenOpened">
      <nav class="fixed w-full mobile-nav z-30">
        <ul class="mt-5 w-full h-full relative">
          <li @click="toggleMobileScreenOpened" class="active">
            <router-link to="/">Home </router-link>
          </li>
          <li @click="toggleMobileScreenOpened">
            <router-link to="/about">About Us</router-link>
          </li>
          <li @click="toggleMobileScreenOpened">
            <router-link to="/gallery">Gallery</router-link>
          </li>

          <li @click="toggleMobileScreenOpened">
            <router-link to="/volunteer"> Donate </router-link>
          </li>
          <li @click="toggleMobileScreenOpened">
            <router-link to="/contact"> Contact</router-link>
          </li>
          <li @click="toggleMobileScreenOpened">
            <router-link to="/user"> Profile</router-link>
          </li>
          <li class="uppercase text-white" @click="$store.commit('logout'); toggleMobileScreenOpened(); ">
logout
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobileScreen: null,
      mobileScreenOpened: false,
    };
  },

  created() {
    window.addEventListener("DOMContentLoaded", () => {
      if (window.innerWidth < 850) {
        this.$store.commit('changedScrolledTotrue')
        this.mobileScreen = true
        console.log(this.mobileScreen);
      } else {
        this.mobileScreen = false;
      }
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth < 850) {
        this.mobileScreen = true;
        this.$store.commit("changedScrolledTotrue");
      } else {
        this.mobileScreen = false;
        this.$store.commit("changedScrolledTofalse");
      }
    });
  },
  methods: {
    toggleMobileScreenOpened() {
      this.mobileScreenOpened = !this.mobileScreenOpened;
    },
  },
};
</script>

<style scoped lang="scss">
.navbar {
  background-color: rgba(0, 0, 0, 0.75);
  position: relative;
  width: 100%;
  height: fit-content;

  header {
    background-color: rgba(0, 0, 0, 0.85);
    position: fixed;
    width: 100%;
    z-index: 9000099;
    left: 0px;
    right: 0px;
    .sticky {
      display: flex;
      padding: 0.72rem 10%;
      justify-content: space-between;
      flex-wrap: wrap;

      .logo {
        width: 30%;
        max-width: 200px;
        img {
          position: relative;
          width: 100%;
        }
      }

      nav {
        width: 60%;

        ul {
          display: flex;
          align-items: center;
          position: relative;
          height: 100%;
          justify-content: space-between;

          list-style: none;

          li a {
            text-decoration: none;
            color: var(--primary-alt);
            position: relative;
            text-transform: uppercase;

            &:after {
              display: block;

              position: absolute;
              left: 0;
              bottom: -5px;
              width: 0;
              height: 2px;
              background-color: #fff;
              content: "";
              -webkit-transition: all 0.2s;
              -moz-transition: all 0.2s;
              -o-transition: all 0.2s;
              transition: all 0.2s;
            }
            &:hover:after {
              width: 15px;
            }

           &.router-link-active:after{
   
              display: block;

              position: absolute;
              left: 0;
              bottom: -5px;
              width: 15px;
              height: 2px;
              background-color: #fff;
              content: "";
              -webkit-transition: all 0.2s;
              -moz-transition: all 0.2s;
              -o-transition: all 0.2s;
              transition: all 0.2s;
            }
           
  

          }
        }
        .menu-toggle {
          background: #000;
          width: 30px;
          height: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          border-radius: 10px;
          justify-self: flex-end;
          float: right;
          @media (min-width: 500px) {
            width: 40px;
            height: 40px;
          }
          .fas {
            color: var(--primary-alt);
            &:hover{
              transform:translateY(-5px)
            }
          }
        }
      }
    }
  }

  .mobile-links {

    display: inline-block;
    width: 100%;
    z-index: 999;
    left: 0px;
    position: relative;
    top: 0;
    right: 0px;

    ul {
      background-color: rgba(0, 0, 0, 0.75);
top: 2rem;
@media(max-width:600px){
top:1.5rem;
}
      list-style: none;
      min-height: calc(70vh);
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 0.72rem 10%;

      li a {
        text-decoration: none;
        text-transform: uppercase;
        color: var(--primary-alt);

        &:after {
          display: block;

          position: absolute;
          left: 0;
          bottom: -5px;
          width: 0;
          height: 2px;
          background-color: #fff;
          content: "";
          -webkit-transition: all 0.2s;
          -moz-transition: all 0.2s;
          -o-transition: all 0.2s;
          transition: all 0.2s;
        }
        &:hover:after {
          width: 15px;
        }
      }
    }
  }
}
</style>