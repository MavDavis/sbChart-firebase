<template>
 <div class="navbar" v-if="$store.state.scrolled">
	<header class="header">
    <div class="sticky">
        <div class="logo"> <img src="../assets/logo.png" alt=""> </div>
        
        <nav class="webimenu"> 
          <div @click="toggleMobileScreenOpened" v-if="mobileScreen" class="menu-toggle"><i class="fas fa-bars"></i> </div>
          <ul class="ownmenu" v-else>
            <li class="active"><router-link to="/">Home </router-link>
           
            </li>
          
            <li><router-link to="/about">About Us</router-link> </li>
			<li><router-link to="/gallery">Gallery</router-link> </li>

            <li><router-link to="/volunteer"> Donate </router-link></li>
            <li><router-link to="/contact"> Contact</router-link></li>
          </ul>
        </nav>
      </div>
  </header>
  <div class="mobile-links" v-if="mobileScreenOpened">      
	<nav class=""> 
          <ul class="" >
            <li  @click="toggleMobileScreenOpened" class="active"><router-link to="/">Home </router-link>
            </li>
            <li @click="toggleMobileScreenOpened" ><router-link to="/about">About Us</router-link> </li>
			<li @click="toggleMobileScreenOpened"><router-link to="gallery">Gallery</router-link> </li>

            <li @click="toggleMobileScreenOpened" ><router-link to="volunteer"> Donate </router-link></li>
            <li @click="toggleMobileScreenOpened" ><router-link to="contact"> Contact</router-link></li>
          </ul>
        </nav>
  </div>
 </div>
</template>

<script>
export default {
data(){
	return{
		mobileScreen:false,
		mobileScreenOpened:false,
	}
},

  created() {
window.addEventListener('DOMContentLoaded', ()=>{
	if (window.innerWidth < 850) {
        this.mobileScreen = true;
      } else {
        this.mobileScreen = false;

      }
})
    window.addEventListener("resize", () =>{
      if (window.innerWidth < 850) {
        this.mobileScreen = true;
		this.$store.commit('changedScrolledTotrue')
      } else {
        this.mobileScreen = false;
		this.$store.commit('changedScrolledTofalse')

      }
    }
	)
  },
  methods: {
    toggleMobileScreenOpened() {
      this.mobileScreenOpened = !this.mobileScreenOpened;
    },
  
}
}
</script>

<style scoped lang="scss">
	.navbar{
		background-color: rgba(0, 0, 0, 0.75);
position:relative;
width: 100%;
height: fit-content;

header {
	background-color: rgba(0, 0, 0, 0.85);
	position:fixed;
	width: 100%;
	z-index: 999;
	left: 0px;
	right: 0px;
	.sticky {
display: flex;
padding:.72rem  10%;
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
	.menu-toggle{
		background: #000;
		width:30px;
		height:30px;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		border-radius: 10px;
		justify-self: flex-end;
		float: right;
	@media(min-width: 500px){
		width:40px;
		height:40px;
	}	
.fas{
	color:var(--primary-alt)
}
	}
}
}
}


.mobile-links{
	display: inline-block;
	width: 100%;
	z-index: 999;
	left: 0px;
	position: relative;
	top: 0;
	right: 0px;

	ul{
	list-style: none;
	min-height: calc(70vh);
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	padding:.72rem  10%;

	
	li a{
		text-decoration: none;
		text-transform: uppercase;
		color:var(--primary-alt);

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
}	}

</style>