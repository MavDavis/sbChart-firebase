<template>
    <section>
  
      <!-- <header class="header" v-if="!$store.state.scrolled">
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
  </header>  -->
  <div class="card-div py-10">
    <div  class="card relative" v-for="card in $store.state.gallery" :key="card.id" >
  <router-link class="relative w-full h-full" :to="'/galleryDetails/' + card.id">
  <img class="relative w-full h-full" :src="card.img" alt=""/>
  </router-link>
  </div>
  </div>
</section>

  </template>
  <script>
    import cardTwo from '@/components/cardTwo.vue';
  export default {
  components:{cardTwo},
 data(){
  return{
 id:this.$route.params.id,
  }
 },
 methods:{

 }
  }
  </script>
  
  <style lang="scss" scoped>
    .card{
    border:
    1px #eeeeee solid;
    height: 400px;
 transition: all .2s ease-in;
    &:hover{
      cursor: pointer;
        transform: rotate(7deg);
    }
}
    section{
      min-height:100vh;
  background: rgba(0, 0, 0,0.9);
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
      .card-div{
      margin: 0 auto;
        
        max-width: 1170px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        grid-column-gap: 1.5rem;
        grid-row-gap: 2rem;
    }
  
  </style>
  