<template>
  <div>
    <nav class="relative  left-0 top-5  md:block hidden z-30">
      <ul class="pl-5 mt-5 w-full h-full relative flex flex-col list-none">
        <li
        
          :class="[item.active ? 'bg-gray-200 hover:bg-white' : 'notActive hover:bg-yellow-200']"
          class="list-style relative flex items-center"
          v-for="item in li"
          :key="item.icon"
          @click="
            removeAllActive(item.id);
          "
        >
          <i :class="item.icon" class="mr-1"></i>
          <span class="md:absolute md:top-0 md:hidden  md:left-12 xmd:left-0 xmd:block md:hover:block rounded md:p-2 xmd:p-0 md:text-white md:bg-black xmd:relative xmd:text-black xmd:bg-transparent">{{ item.name }}</span>
        </li>
      </ul>
    </nav>
    <aside v-if="$store.state.mobileScreenOpened" class="  absolute top-0 left-0 bg-yellow-500 z-50 h-full">

    </aside>
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
      this.$store.state.completeDonations = true
      this.$store.state.profile = false  },
  data() {
    return {
      mobile:false,
      li: [
        {
          name: "Home",
          icon: "fas fa-home",
          methods: "home",
          id:1,
          active: false,
        },
        {
          name: "Profile",
          icon: "fas fa-user",
          methods: "profile",
          id:5,
          active: false,
        },
        {
          name: "Complete Donations",
          icon: "fa-solid fa-money-check-dollar",
          methods: "showPayment",
          id:2,
          active: true,
        },
       
        {
          name: "Settings",
          icon: "fas fa-gear",
          methods: "EditProfile",
          id:6,
          active: false,
        },
        {
          name: "Gallery",
          icon: "fa-regular fas fa-photo-film",
          methods: "Gallery",
          id:3,
          active: false,
        },
        {
          name: "Contact",
          icon: "fas fa-phone",
          methods: "contactUs",
          id:4,
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
    if(id == 1){
      idSearch(this.li, 1)
    this.$router.push('/')
    }
    else  if(id == 2){
      this.$store.state.profile = false
      this.$store.state.settings = false
      this.$store.state.completeDonations = true
      idSearch(this.li, 2)
    }  else  if(id == 3){
      idSearch(this.li, 3)
      this.$router.push('/gallery')
    }  else  if(id == 4){
      idSearch(this.li, 4)
      this.$router.push('/contact')

    }  else  if(id == 5){
      this.$store.state.settings = false
      this.$store.state.completeDonations = false
      this.$store.state.profile = true

      idSearch(this.li, 5)
    }  else  if(id == 6){
      this.$store.state.settings = true
      this.$store.state.completeDonations = false
      this.$store.state.profile = false
      idSearch(this.li, 6)
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
  cursor: pointer;
  &.active {
    background: #fff;

    &:hover {
      background: #fff;
    }
  }}
li:hover span{
  display: block;
  @media(max-width:1000px){
    width: 200px;
  }
}
aside{
  @media(max-width:850px){
    width:300px;
  }

}
</style>