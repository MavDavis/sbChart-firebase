<template>
  <section>
    <div class="flex">
      <div class="text">
        <h4 class="font-bold">Who we are</h4>
        <div class="absolute-hr"><hr></div>

        <h1>We are The Embassy of Heaven. We Live To <span>Equip</span>, <span>Dominate</span> and <span>Whatever</span>.</h1>
        <div class="p">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo fuga saepe labore reiciendis animi culpa. Eligendi aut illum quos explicabo repellat sapiente id nihil assumenda. Laborum voluptate nulla consectetur quibusdam?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat sequi totam deleniti officia? Veniam, blanditiis?</p></div>
        <div class="btn">
          <router-link to="/about">More About</router-link>
        <div class="btn-absolute"><router-link to="/about">More About</router-link></div>
      </div>
      </div>
      <div class="img">
        <img src="" alt="">
      </div>
    </div>
    <h1>
    </h1>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
section{
    left: 0;
    min-height: 100vh !important;
    width:100vw;
    padding: 1rem 0;
    height: calc(100vh + 200px);
    background: #fff;
@media(max-width: 850px){
  height: fit-content;
}
    .flex{
display: flex;
position: relative;
justify-content: space-between;
flex-wrap: wrap;
height: 100%;
padding: 0 10%;
.text{
  position: relative;
  width: 46%;
  height: calc(95vh);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .btn{
    border: 1px solid #000;
    width: 50%;
display: flex;
align-items: center;
justify-content: center;
color: var(--dark);
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
h1{
  font-weight: normal;
  span{
    font-weight: bold;
  }
}
  .p{
    display: flex;
  flex-direction: column;
  p{
    line-height: 1.7rem;
  }
p:nth-child(1){
  margin-bottom: 2rem;
}
}
}
.img{
  height: 100%;
  position: relative;
  width: 50%;

  img{
    position: relative;
    height: 100%;
    width: 100%;
  }
}
@media(max-width: 850px){
flex-direction: column;
.text, .img{
  width: 100%;
}
}
    }
}
</style>