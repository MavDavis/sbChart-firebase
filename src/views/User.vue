
  
  <!-- <script>
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
  </style> -->

   <template>
    <div class="bg-yellow-500    min-h-screen h-full py-5 md:pl-0 pl-5 pr-5">
      <div @click="$store.state.mobileScreenOpened = !$store.state.mobileScreenOpened" v-if="$store.state.mobileScreen" class="flex justify-end items-center  h-9 w-full p-5">
        <i class="fas fa-bars text-2xl cursor-pointer" v-if="!$store.state.mobileScreenOpened"></i>

        <i v-else class="fas fa-times cursor-pointer text-2xl"></i>
      </div>
      <div class="flex min-h-screen h-full relative" >
        <div class="md:w-16 xmd:w-56 fixed z-30  left-0 top-0 bg-yellow-500 h-full flex-none">
          <Sidebar />
        </div>
        <div class="body h-full md:left-16 xmd:left-56 bg-gray-200 rounded-3xl relative py-7 px-5">
<main>
<UserRoutes/>
</main>        
</div>
      </div>
      <!-- <div class="w-full flex" style="height: 2vh">
      </div> -->
    </div>
  </template>
  
  <script>
  import Sidebar from "@/components/sidebar.vue";
  import navbar from "@/components/navbar.vue";
  import Footer from "@/components/Footer.vue";
  import UserRoutes from "../components/UserRoute.vue";
  export default {
    name: "Home",
    methods:{
      changeUserView(id){
        console.log(id);
      }
    },
    components: { Sidebar, Footer, navbar, UserRoutes },
  };
  </script>
  
  <style lang="scss">
  * {
    transition: ease 0.6s;
  }
  .body{
    width:100%;
    @media(min-width:850px){
  width:calc(100% - 5rem)
}
@media(min-width:1000px){
  width:calc(100% - 16rem)
}

  }
  </style>