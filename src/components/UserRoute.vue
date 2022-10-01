<template>
    <section class="h-full w-full relative flex flex-col items-center justify-center md:py-0 py-11">
<div  class="rounded  h-fit  w-full relative px-5 py-4 bg-white mb-16 flex big-div xmd:flex-row flex-col  items-center">
    <div class="rounded-full relative h-full  flex justify-center items-start w-fit md:mr-5">
        <div class=" relative w-40 h-40 bg-gray-200 rounded-full flex justify-center items-center">
            <i class="fas fa-user relative text-white text-8xl"></i>
            <i class="fas fa absolute fa-camera bg-yellow-500 text-white px-2 py-1 cursor-pointer text-xl rounded-full right-3 bottom-0"></i>
        </div>

        <div class=" relative h-40 flex justify-center ml-4 items-start flex-col">
<h4>David Marvelous</h4>
<p class=" text-xs font-bold">User</p>
        </div>
    </div>
    <div class=" xmd:border-x border-x-0 border-y xmd:border-y-0  h-full relative profile-detail  flex py-5 xmd:py-0 px-4 mt-4 xmd:mt-0 flex-col justify-center">
        <p class=" text-xs mb-5"><span><i class="fas fa-envelope text-black mr-3"></i> </span> ekwesimarvelous@gmail.com</p>
        <p @click="edit()" class="cursor-pointer text-xs mb-5"><span><i class="fas fa-phone text-black mr-3"></i> </span> Enter a phone number</p>
        <p class=" text-xs mb-5"><span><i class="fas fa-user text-black mr-3"></i> </span> User Account</p>
        <p @click="edit()" class="cursor-pointer hover:tracking-wider text-xs mb-5"><span><i class=" fas fa-light fa-gear text-black mr-3"></i> </span> Edit Profile</p>

    </div>

    <div class="  h-full relative">
<div class="w-56"></div>
    </div>
</div>
<div v-if="$store.state.profile" class="mt-9 card-div flex md:flex-row flex-col  w-full justify-between h-1/2">
    <div class="card rounded w-full xmd:mb-0 mb-5 md:w-1/2 mr-4">
    </div>
    <div class="card rounded w-full md:w-1/2 mr-4">
    </div>
</div>
<div v-if="$store.state.settings" class="card-div flex w-full justify-between h-1/2">
    <div class="profile  relative flex w-full bg-white  h-screen sm:h-fit  items-center justify-center">
    <div class="px-5 flex flex-col justify-center sm:mb-10 items-center w-full md:w-3/4 ">
        <h1 class="text-2xl text-dark tracking-wider flex justify-center mt-3">
            Account Setting
        </h1>
<div class="bg-gray-200 rounded p-4 mt-4 w-full relative">
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
                <i class="fas fa-user mr-2 text-white text-sm"></i>User
            </h1>
          </div>
    </div>
    <div class="flex w-full relative flex-col items-center justify-center">
        <div class="mb-4 relative flex w-full sm:flex-row flex-col items-center justify-between">
          <div class="left w-full sm:w-1/2">  <label class="font-light text-sm text-dark tracking-wider" for="username">Username</label>
            <input
            
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
              v-model="$store.state.userName"
              type="text"
            /></div>
            <div class="right w-full sm:w-1/2">
                <label class="font-light text-sm text-dark tracking-wider" for="username">Phone number</label>
            <input
            
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
              v-model="number"
              type="number"
              
            />
            </div>
          </div>
       
          <div class="mb-4 relative flex w-full sm:flex-row flex-col items-center justify-between">
          <div class="left w-full sm:w-1/2">  <label class="font-light text-sm text-dark tracking-wider" for="username">Email</label>
            <input
            
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
              v-model="$store.state.userName"
              type="text"
            /></div>
            <div class="right w-full sm:w-1/2">
                <label class="font-light text-sm text-dark tracking-wider" for="username">Phone number</label>
            <input
            
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
              v-model="number"
              type="number"
              
            />
            </div>
          </div>
          <div class="mb-4 relative flex w-full sm:flex-row flex-col items-center justify-between">
          <div class="left  w-full sm:w-1/2">  <label class="font-light text-sm text-dark tracking-wider" for="username">Image Upload</label>
            <input
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
              type="file"
        
            /></div>
            <div class="right  w-full sm:w-1/2">
                <label class="font-light text-sm text-dark tracking-wider" for="username">Phone number</label>
            <input
            
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
              v-model="number"
              type="number"
              required
            />
            </div>
          </div>
          <button @click="changeUserDetails()" class="mb-4 relative text-black hover:tracking-wider  px-6 py-3 bg-white text-xs">
            Save Changes
          </button>
    </div>
</div>
</div>
</div>
</div>
<div v-if="$store.state.completeDonations" class="card-div flex w-full justify-between h-1/2">
    <div class="profile  relative flex w-full bg-white  h-screen sm:h-fit  items-center justify-center pb-6">
    <div class="px-5 flex flex-col justify-center items-center w-full md:w-3/4 ">
        <h1 class="text-2xl text-dark tracking-wider flex justify-center mt-3">
            Complete Payments
        </h1>
<div class="bg-gray-200 rounded p-4 mt-4 w-full relative">
    <div class="flex items-center justify-center flex-col">    
    </div>
    <div class="flex w-full relative flex-col items-center justify-center">
        <div class="mb-4 relative flex w-full md:flex-row flex-col items-center justify-between">
          <div class="left w-full md:w-1/2">  <label class="font-light text-sm text-dark tracking-wider" for="username">Username</label>
            <input
            
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
              v-model="$store.state.userName"
              type="text"
            /></div>
            <div class="right w-full md:w-1/2">
                <label class="font-light text-sm text-dark tracking-wider" for="username">Phone number</label>
            <input
            
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
              v-model="number"
              type="number"
              
            />
            </div>
          </div>
       
          <div class="mb-4 relative flex w-full md:flex-row flex-col items-center justify-between">
          <div class="left w-full md:w-1/2">  <label class="font-light text-sm text-dark tracking-wider" for="username">Email</label>
            <input
            
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
              v-model="$store.state.userName"
              type="text"
            /></div>
            <div class="right w-full md:w-1/2">
                <label class="font-light text-sm text-dark tracking-wider" for="username">Amount</label>
            <input
            
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
              v-model="number"
              type="number"
              
            />
            </div>
          </div>
       
          <button @click="pay()" class="mb-4 relative uppercase text-white hover:tracking-wider  px-6 py-3 bg-black text-xs">
          Make Payments
          </button>
    </div>
</div>
</div>
</div>
</div>
</section>

</template>

<script>
import CardThree from './cardThree.vue';
export default {
    components: { CardThree },
    data(){
        return{
        

        }
    },
    methods:{
        edit(){
            this.$store.state.settings = true
      this.$store.state.completeDonations = false
      this.$store.state.profile = false

        }
    }

}
</script>

<style lang="scss" scoped>
    section{
 @media(max-width:1000px){
flex-direction:column;
display: flex;
margin-top: 2rem;

}
    }
 .big-div{
    display:flex;
    flex-direction: row;
height: 33%;
@media(max-width:1000px){
flex-direction:column;
height:fit-content
}
}
.profile-detail
{
    width:14rem;
    @media(max-width:1000px){
width:100%;
}
}
.card{
background: #fff;
      height: 250px;
   transition: all .2s ease-in;
    
      &:last-child{
        margin-right: 0;
      }
  }
</style>