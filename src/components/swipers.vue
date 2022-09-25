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