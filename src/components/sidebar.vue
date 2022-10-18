<template>
  <div>
    <nav class="relative  left-0 top-5  md:block hidden z-30">
      <ul class="pl-5 mt-5 w-full h-full relative flex flex-col list-none">
        <li
        
          :class="[item.active ? 'bg-gray-200 hover:bg-gray-200 text-black' : 'text-white notActive hover:bg-gray-200']"
          class="list-style relative  flex items-center"
          v-for="item in li"
          :key="item.icon"
          @click="
            removeAllActive(item.id);
          "
        >
          <i :class="item.icon" class="mr-1"></i>
          <span 
          :class="[item.active ? 'text-black' : 'text-white']"
          class="md:absolute  md:top-0 md:hidden  md:left-12 xmd:left-0 xmd:block md:hover:block rounded md:p-2 xmd:p-0  xmd:relative xmd:bg-transparent">{{ item.name }}</span>
        </li>
      </ul>
    </nav>
      <transition name="mobile-nav"  >
        <div
            v-if="$store.state.mobileScreenOpened"
            class="
              mobileNav
              bg-gray-300 z-50
              h-full
              flex flex-col
         
              left-0
              top-0
              fixed
              shadow
            "
          >
          <ul class=" mt-5 w-full h-full relative flex flex-col list-none">
        <li
        
          :class="[item.active ? 'bg-gray-300 hover:bg-gray-300 active' : 'notActive hover:bg-gray-200']"
          class="pl-5 w-full list-style relative flex items-center"
          v-for="item in li"
          :key="item.icon"
          @click="
            removeAllActive(item.id);
          $store.state.mobileScreenOpened = !$store.state.mobileScreenOpened" 
        >
          <i :class="item.icon" class="mr-1"></i>
          <span class="rounded relative text-black">{{ item.name }}</span>
        </li>
      </ul>
        </div>
      </transition>
  </div>
</template>

<script>
  function idSearch(array,id){
let item = array.find(item => item.id === id)
item.active = true;
  }
export default {
  created(){
idSearch(this.li,2)
this.$store.state.settings = false
this.$store.state.contactUs = false

      this.$store.state.completeDonations = false
      this.$store.state.profile = true  },
  data() {
    return {
      mobile:false,
      li: [
        {
          name: "Dashboard",
          icon: "fas fa-user",
          methods: "profile",
          id:1,
          active: false,
        },
        {
          name: " Give",
          icon: "fa-solid fa-money-check-dollar",
          methods: "showPayment",
          id:2,
          active: false,
        },
       
        {
          name: "Settings",
          icon: "fas fa-gear",
          methods: "EditProfile",
          id:3,
          active: false,
        },
    
        {
          name: "Feedback",
          icon: "fas fa-phone",
          methods: "contactUs",
          id:4,
          active: false,
        },
        {
          name: "Logout",
          icon: "fas fa-user",
          methods: "Logout",
          id:5,
          active: false,
        },
       
       
      ],
    };
  },
  methods: {
    removeAllActive(id) {
      this.li.forEach((item) => {
        item.active = false;
      });
 
    if(id == 2){
      this.$store.state.profile = false
      this.$store.state.settings = false
      this.$store.state.completeDonations = true
      this.$store.state.contactUs = false
     idSearch(this.li, 2)
    }  else  if(id == 4){
      idSearch(this.li, 4)
      this.$store.state.profile = false
      this.$store.state.settings = false
      this.$store.state.completeDonations = false,
      this.$store.state.contactUs = true
      
    }  else  if(id == 1){
      //write a code to check if user is registered and if he is, show give not not complete give
      this.$store.state.settings = false
      this.$store.state.completeDonations = false
      this.$store.state.profile = true
            this.$store.state.contactUs = false

      idSearch(this.li, 1)
    }  else  if(id == 3){
      this.$store.state.settings = true
      this.$store.state.completeDonations = false
      this.$store.state.profile = false
            this.$store.state.contactUs = false

      idSearch(this.li, 3)
    }
    else  if(id == 5){
      this.$store.state.settings = false
      this.$store.state.completeDonations = false
      this.$store.state.profile = false
            this.$store.state.contactUs = false
this.$store.commit('logout')
      idSearch(this.li, 5)
    }
    },

  },
};
</script>

<style scoped lang="scss">
.list-style {
  padding: 8px 1rem;
  transition: ease-in 0.3s;
  margin-bottom: 2rem;
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
  position: relative;
  cursor: pointer;

  &::before {
     
     content: "";
 position: absolute;
 background-color: transparent;
 bottom: -50px;
 right: 0;
 height: 50px;
 width: 25px;
 border-top-right-radius: 25px;
 box-shadow: 0 -25px 0 0 rgb(229 231 235);
 @media(max-width:1000px){
  width: 10px;
 border-top-right-radius: 10px;
 box-shadow: 0 -10px 0 0 rgb(229 231 235);
 }
 @media(max-width:850px){
  width: 25px;
 border-top-right-radius: 25px;
 box-shadow: 0 -25px 0 0 rgb(229 231 235);
}
}
&.notActive::before{
  display: none;

 }
 
}
li:hover span{
  display: block;
  @media(max-width:1000px){
    width: 200px;
  }
}

.mobileNav {
  width: 300px;
  overflow-x: hidden;
  transition: all 1s ease;

}

.mobile-nav-enter {
  transform: translateX(0px);
}
.mobile-nav-enter-to {
  transform: translateX(-30px);
}
.mobile-nav-leave-to {
  transform: translateX(-300px);
}


</style>