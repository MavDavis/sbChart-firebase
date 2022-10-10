<template>
  <Swipers/>
  <absolute/>
  <Grid/>
  <section class="cardTwo">
    <h1>BITS OF OUR GALLERY VIEW</h1>
    <hr> <div class="card-div px-5">
    <div  class="card relative" v-for="card in Imgs" :key="card.id" data-aos="slide-up"
        data-aos-duration="1500"
        data-aos-ease="ease" >
<router-link class="relative w-full h-full" :to="'/galleryDetails/' + card.id">
  <img class="relative w-full h-full" :src="card.img" alt=""/>
</router-link>

  </div>
</div>
<div class="gallery-btn px-5 flex justify-center my-5">

  <div class="btn mt-5">
          <router-link to="/gallery">All Gallery</router-link>
        <div class="btn-absolute"><router-link to="/gallery">All Gallery</router-link></div>
      </div>
</div>
  </section>
  <div v-if="$store.state.loggedOut">
    <div id="home-donate">
      <HomeDonate />
    </div>
  </div>
</template>

<script>
import Absolute from '@/components/absolute.vue';
import Grid from '@/components/grid.vue';
import Swipers from '@/components/swipers.vue';
import CardTwo from '@/components/cardTwo.vue';
import HomeDonate from '@/components/Home-Donate.vue';
import {nextTick} from 'vue' 
export default {
    components: { Absolute, Grid, Swipers, CardTwo, HomeDonate },
  async mounted(){

  
 },
    data(){
      return{
        cardInTwo:["", "", "","", "", "","", ""],
        lastPath: null ,  
        item:null   
      }
    },

    computed:{
      Imgs(){
        return this.$store.state.gallery.slice(0,4)
      }
    }
}
</script>

<style lang="scss" scoped>
  .cardTwo{
h1{
  text-align: center;
  margin: 2rem auto 0;
}
hr{
  margin:5px auto 2rem;
  width: 60px;
}
    .card-div{
      margin: 0 auto;
        position: relative;
        width: 100%;
        max-width: 1170px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        grid-column-gap: 1.5rem;
        grid-row-gap: 2rem;

        @media(max-width:500px){
          padding: 0 10%;

        }

      }
   .gallery-btn{

    @media(max-width:500px){
          padding: 0 10%;

        }
    .btn{
      border: 1px solid #000;
      position: relative;
    top: 0;
    left: 0;
    width: 350px;
    height: 60px;
    display: flex;
  align-items: center;
  justify-content: center; 
  color: var(--dark);
  @media(max-width:500PX){
  width:90%;
  }
  a{
    color: var(--dark);
    display: flex;
  align-items: center;
  justify-content: center; 
    width: 100%;
    height: 100%;
    text-decoration: none;
  }
  .btn-absolute{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scaleX(0);
    transform-origin: bottom right; 
    display: flex;
  align-items: center;
  justify-content: center; 
    color: var(--light);
    background: var(--dark);
  a{
    color: var(--light);
    display: flex;
  align-items: center;
  justify-content: center; 
    width: 100%;
    height: 100%;
    text-decoration: none;
    
  }}
  
  &:hover .btn-absolute{
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  @media(max-width: 500px){
  width: 100%}
    }
   }

  }
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
</style>