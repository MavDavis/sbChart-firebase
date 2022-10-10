<template>
  <section  data-aos="zoom-out"
        data-aos-duration="2000"
        data-aos-ease="ease">
    <div class="flex">
      <div class="text">
        <h4 class="font-bold">Who we are</h4>
        <div class="absolute-hr"><hr></div>

        <h1>We are The Embassy of Heaven. We Live To <span>Win,</span> <span> Equip</span>, <span>Deploy</span>  supernatural believers everywhere taking over every sphere..</h1>
        <div class="p">
        <p>As a revival movement of people, we have heard the cry of a world that waits to know Jesus and are determined to answer it with His presence. We believe that this is the hour for the Church to arise and shine.
</p>

        <p>Now is the time—time to arise and build for the purposes of our God as people united who are equipped and empowered to impact communities, cities, and nations for Him, bringing His manifest presence into the darkest corners of the earth.</p>
        <p>We believe that as we join together as one, we’ll reach those who are “drawn to the brightness of our rising” (Isaiah 60), so that the world that waits to know Jesus is revived through the transformational hope that He alone can bring—as people encounter the power of the living God.</p></div>
        <div class="btn mt-5">
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
     width:100vw;
    min-height: calc(100vh + 200px);
    background: #fff;
  height: fit-content;
  margin: 4rem 0;

@media(max-width: 850px){
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
    position: relative;
  top: 0;
  left: 0;
  width: 50%;
  height: 60px;
  display: flex;
align-items: center;
justify-content: center; 
color: var(--dark);
@media(max-width:500PX){
width:100%;
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
    margin-bottom:2rem;

  }
p:nth-child(3){
  margin-bottom:0;
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
.text{
  min-height: 100vh;
  height: fit-content;
  margin-bottom: 2rem;
}
.img{
  min-height: 100vh;
  height: 100vh;
}
}
    }
}
</style>