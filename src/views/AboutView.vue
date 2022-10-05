<template>
  <section class="head">
    <div class="absolute"></div>
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

  </section>
  <section class="text ">
        <h4 class="font-bold">Who we are</h4>
        <div class="absolute-hr"><hr class="w-10 font-bold bg-gray-700 my-4 hover:w-16"></div>

        <h1>We are The Embassy of Heaven. We Live To <span>Win,</span> <span> Equip</span>, <span>Deploy</span>  supernatural believers everywhere taking over every sphere..</h1>
        <div class="p flex flex-col justify-center items-center">
        <p>As a revival movement of people, we have heard the cry of a world that waits to know Jesus and are determined to answer it with His presence. We believe that this is the hour for the Church to arise and shine.
</p>

        <p>Now is the time—time to arise and build for the purposes of our God as people united who are equipped and empowered to impact communities, cities, and nations for Him, bringing His manifest presence into the darkest corners of the earth.</p>
        <p>We believe that as we join together as one, we’ll reach those who are “drawn to the brightness of our rising” (Isaiah 60), so that the world that waits to know Jesus is revived through the transformational hope that He alone can bring—as people encounter the power of the living God.</p></div>
      
      </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  section.head{
    position: relative;
    min-height:100vh;
    background: url(../assets/bible.jpg) no-repeat center center ; 
          background-size: cover;   

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
  }
  .text{
  position: relative;
  width: 60%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding:1rem 10%;
  @media(max-width:1000px)
{
  width: 85%;;
}
  @media(max-width:500px)
{
  width: 100%;;
}  .btn{
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
</style>
