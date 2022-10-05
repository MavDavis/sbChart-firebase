<template>
  <Swipers/>
  <absolute/>
  <Grid/>
  <section class="cardTwo">
    <h1>BITS OF OUR GALLERY VIEW</h1>
    <hr> <div class="card-div">
    <div  class="card relative" v-for="card in Imgs" :key="card.id" >
<router-link class="relative w-full h-full" :to="'/galleryDetails/' + card.id">
  <img class="relative w-full h-full" :src="card.img" alt=""/>
</router-link>
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
        
        max-width: 1170px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        grid-column-gap: 1.5rem;
        grid-row-gap: 2rem;
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