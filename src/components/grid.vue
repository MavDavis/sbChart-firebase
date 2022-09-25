<template>
  <section>
    <div class="flex flex1">
    <div class="col-5 item1 item">
      <Card />
    </div>
    <div class="col-4 item2 item"><Card heading="" p="" Details="" img=""/></div>
  </div>
 
  </section>
</template>

<script>
import Card from "./card.vue";
export default {
  components: { Card },
};
</script>

<style scoped lang="scss">
section {
  min-height: 100vh;
  height: fit-content;
  width: 100vw;
	background: rgb(255, 208, 120);

  

.flex{
  display: flex;
  justify-content: space-between;
  padding: 0 10%;
  position: relative;
  @media(min-width:850px){

  }
  .item{

  }
  &.flex1{
   min-height:  500px;
  }
.col-5{
width:35%;
height:700px;
position: absolute;
top: -200px;
@media(max-width:850px){
position: relative;
top: 0;
width: 100%;
}
}


.col-4{
height:500px;
width:33%;

&.item2{
  width:40%;

position: absolute;
right: 10%;
margin-left: 1rem;
@media(max-width:850px){
position: relative;
width:100%;
margin-left: 0;
right: 0;
}
}
}

}
@media(max-width:850px){
  .flex{
    min-height: fit-content;
flex-direction: column;
position: relative;
align-items: center;
    .item{
      width: 100%;
      position: relative;
      height:500px;

    }
  }
}

@media(max-width:500px){
  .flex{
  
    .item{
      height: 300px;
      
    }
  }
}
}
</style>