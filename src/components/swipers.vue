<template>
    <swiper
    class="swiper"
      :modules="modules"
      :slides-per-view="1"
      :space-between="50"
      :pagination="{ clickable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :autoplay="true"

    >
    <swiper-slide class="slide slide1">
      <div class="absolute"></div>
        <header class="header" v-if="!$store.state.scrolled">
    <div class="sticky">
        <div class="logo"> <img src="../assets/logo2.png" alt=""> </div>
        
        <nav class="webimenu"> 
          <ul class="ownmenu">
            <li class="active"><router-link to="/">Home </router-link>
           
            </li>
          
            <li><router-link to="/about">About Us</router-link> </li>
			<li><router-link to="/gallery">Gallery</router-link> </li>

            <li><router-link to="/volunteer"> Volunteer </router-link></li>
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
      </swiper-slide>
      <swiper-slide class="slide slide2">
        <div class="absolute"></div>

        <header class="header" v-if="!$store.state.scrolled">

    <div class="sticky">
        <div class="logo"> <img src="../assets/logo2.png" alt=""> </div>
        
        <nav class="webimenu"> 
          <ul class="ownmenu">
            <li class="active"><router-link to="/">Home </router-link>
           
            </li>
          
            <li><router-link to="/about">About Us</router-link> </li>
			<li><router-link to="/gallery">Gallery</router-link> </li>

            <li><router-link to="/volunteer"> Volunteer </router-link></li>
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
  </header></swiper-slide>
      <swiper-slide class="slide slide3">
        <div class="absolute"></div>

        <header class="header" v-if="!$store.state.scrolled">
    <div class="sticky">
        <div class="logo"> <img src="../assets/logo2.png" alt=""> </div>
        
        <nav class="webimenu"> 
          <ul class="ownmenu">
            <li class="active"><router-link to="/">Home </router-link>
           
            </li>
          
            <li><router-link to="/about">About Us</router-link> </li>
			<li><router-link to="/gallery">Gallery</router-link> </li>

            <li><router-link to="/volunteer"> Volunteer </router-link></li>
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
  </header></swiper-slide>
    </swiper>
  </template>
  <script>
    import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';
  import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

  import { Swiper, SwiperSlide } from 'swiper/vue';
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        // console.log(swiper);
      };
      const onSlideChange = () => {
        // console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
      };
    },
  };
</script>
<style lang="scss" scoped>
  
     
      .swiper{
        position:relative;
        top: 0;
        left: 0;
        z-index: 99;
        min-width:100vw;
        min-height:100vh;
    
        .slide{
          position:relative;
          min-width:100vw;
          width: 100vw;
          min-height:100vh;
          z-index: 100;
     .absolute{
height: 100%;
width:100%;
position: absolute;
top: 0;
left: 0;
background: rgba(0, 0, 0, 0.5);
     }
        header {
        position:relative;
        width: 100%;
        z-index: 999;
        left: 0px;
        right: 0px;
        .sticky {
    display: flex;
    padding:4rem  10%  .72rem;
    justify-content: space-between;
    flex-wrap: wrap;
    
        .logo {
            width: 30%;
    max-width: 200px;
    img{
        position: relative;
        width: 100%;
    }
    }
    
    nav{
        width: 60%;
        ul{
            display: flex;
            align-items: center;
            position: relative;
            height: 100%;
            justify-content: space-between;
    
            list-style: none;
            
            li a{
                text-decoration: none;
                color:var(--primary-alt);
                position: relative;
                text-transform: uppercase;
    
    &:after{
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
    }
    
        &.slide1{
          background: url(../assets/slide1.jpg) no-repeat center center ; 
          background-size: cover;   
           }
        &.slide2{
          background: url(../assets/slide2.jpg) no-repeat center center ;     
          background-size: cover; 
         }   
          &.slide3{
            background: url(../assets/slide3.jpg) no-repeat center center ;
            background-size: cover;
          }
        }
      }
 
    </style>