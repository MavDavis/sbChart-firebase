<template>
  <section>
    <swiper class="swiper"
      :slides-per-view="1"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :autoplay="true"
    >
      <swiper-slide class="slide slide1">
        <header class="header" v-if="!$store.state.scrolled">
    <div class="sticky">
        <div class="logo"> <img src="../assets/logo.png" alt=""> </div>
        
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
      <swiper-slide class="slide slide2"><header class="header" v-if="!$store.state.scrolled">
    <div class="sticky">
        <div class="logo"> <img src="../assets/logo.png" alt=""> </div>
        
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
      <swiper-slide class="slide slide3"><header class="header" v-if="!$store.state.scrolled">
    <div class="sticky">
        <div class="logo"> <img src="../assets/logo.png" alt=""> </div>
        
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
      ...
    </swiper>
  </section>
  </template>
  <script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { A11y, Autoplay } from "swiper";

    // Import Swiper styles
    import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";  
    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        const onSwiper = (swiper) => {
          console.log(swiper);
        };
        const onSlideChange = () => {
          console.log('slide change');
        };
        return {
          onSwiper,
          onSlideChange,
          modules: [A11y, Autoplay],

        };
      },
 
    };
  </script>

<style lang="scss" scoped>
section{
  min-height:100vh;
  background: #fff;
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
  min-height:100vh;

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
      background: orange;
    }
    &.slide2{
      background: red;
    }   &.slide3{
      background: grey;
    }
    }
  }
}
</style>