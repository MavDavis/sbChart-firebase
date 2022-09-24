<template>
  <Swipers/>
  <absolute/>
  <Grid/>
  <section class="cardTwo">
    <h1>BITS OF OUR GALLERY VIEW</h1>
    <hr>
  <div class="card-div">
    <CardTwo v-for="card in cardInTwo" :key="card" :img="card"/></div>
  </section>
 <HomeDonate/>
</template>

<script>
import Absolute from '@/components/absolute.vue';
import Grid from '@/components/grid.vue';
import Swipers from '@/components/swipers.vue';
import CardTwo from '@/components/cardTwo.vue';
import HomeDonate from '@/components/Home-Donate.vue';
export default {
    components: { Absolute, Grid, Swipers, CardTwo, HomeDonate },
    data(){
      return{
        cardInTwo:["", "", "", ""],
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
</style>