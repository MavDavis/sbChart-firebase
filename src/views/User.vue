<template>
    <section>
      <Modal v-if="modal" modalMssg="Changes has been made." @closeModal="closeModal()"/>
   <div class="bg">
    <div class="absolute"></div>
    <header class="header " v-if="!$store.state.scrolled">
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
   </div>
      <div class="profile  relative flex w-full bg-white  my-5 h-screen sm:h-fit  sm:top-10  items-center justify-center">
    <div class="px-5 flex flex-col justify-center sm:mb-10 items-center w-full md:w-1/2 sm:w-3/4 ">
        <h1 class="text-2xl text-dark tracking-wider">
            Account Setting
        </h1>
<div class="bg-gray-200 rounded p-4 mt-4">
    <div class="flex items-center justify-center flex-col">
        <div
            class="
              bg-dark
              text-white
              p-1
              mb-2
              rounded-full
              w-fit
              h-fit
              cursor-pointer
            "
          >
         
          </div>
          <div
            class="
              bg-dark
              text-white
              px-2
              py-1
              mb-2
              rounded
              w-fit
              h-fit
              cursor-pointer
            "
          >
            <h1 class="text-white font-semibold text-sm ">
                <i class="fas fa-user mr-2 text-white text-sm"></i>Admin
            </h1>
          </div>
    </div>
    <div class="flex w-full flex-col items-center justify-center">
        <div class="mb-4 relative">
            <label class="font-light text-sm text-dark tracking-wider" for="firstname">UserName</label>  
            <input
              class="
                bg-gray-100
                appearance-none
                border
                rounded
                w-full
                py-2
                px-2
                text-dark
                leading-tight
                focus:outline-none focus:shadow-outline
              "
              v-model="$store.state.userName"
              type="text"
              required
            
            />
          </div>
       
          <div class="mb-4 relative">
            <label class="font-light text-sm text-dark tracking-wider" for="username">Password</label>
            <input
            disabled
              class="
                bg-gray-100
                appearance-none
                border
                rounded
                relative
                w-full
                py-2
                px-2
                text-dark
                leading-tight
                focus:outline-none focus:shadow-outline
              "
              v-model="$store.state.userPassWord"
              type="text"
              required
            />
          </div>
          <div class="mb-4 relative">
            <label class="font-light text-sm text-dark tracking-wider" for="email">Email</label>
            <input
            disabled
              class="
                bg-gray-100
                appearance-none
                border
                rounded
                w-full
                py-2
                px-2
                text-dark
                leading-tight
                focus:outline-none focus:shadow-outline
              "
              v-model="$store.state.userEmail"
              type="email"
              required
            />
          </div>
          <button @click="changeUserDetails()" class="mb-4 relative text-black hover:tracking-wider  px-6 py-3 bg-white text-xs">
            Save Changes
          </button>
    </div>
</div>
    </div>
  </div>
    </section>
  </template>
  
  <script>
import Modal from '@/components/Modal.vue';
    export default {
        data() {
            return {
             
                modal:false,
            };
        },
        methods:{
            changeUserDetails(){
                this.$store.commit('changeUserDetails')
                this.modal=true
            },
            closeModal(){
              this.modal=false
            }
        },
        components: { Modal },
      created(){
        if(localStorage.getItem('userid') == undefined){
  this.$router.push('/login')
}
      }
    }
    </script>
  
  <style lang="scss" scoped>
    section{
      min-height:100vh;
      .bg{
        min-height:100vh;
        background: url(../assets/slide3.jpg) no-repeat center center ;
            background-size: cover;
position: relative;
            .absolute{
height: 100%;
width:100%;
position: absolute;
top: 0;
left: 0;
background: rgba(0, 0, 0, 0.5);
     }
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
  </style>
  