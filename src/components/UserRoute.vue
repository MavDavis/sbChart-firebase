<template>
    <section class="h-full w-full relative flex flex-col items-center justify-center overflow-y-scroll md:py-0 py-11">
<div  class="rounded  h-fit  w-full relative px-5 py-4 bg-white mb-16 flex big-div xmd:flex-row flex-col  items-center">
    <div class=" relative h-full  flex sm:flex-row flex-col justify-center items-start w-fit md:mr-5">
        <div class=" relative sm:w-40 sm:h-40 w-36 h-36 bg-gray-200 rounded-full flex justify-center items-center">
            <i class="fas fa-user relative text-white sm:text-8xl text-7xl "></i>
            <i class="fas fa absolute fa-camera bg-gray-300 text-white px-2 py-1 cursor-pointer text-xl rounded-full right-3 bottom-0"></i>
        </div>

        <div class=" relative sm:h-40 h-20 flex justify-center items-center ml-4 sm:items-start flex-col">
<h4 class="username md:text-2xl sm:text-xl">{{$store.state.userName}}</h4>
<p class=" text-xs font-bold">User</p>
        </div>
    </div>
    <div class=" xmd:border-x border-x-0 border-y xmd:border-y-0  h-full relative profile-detail  flex py-5 xmd:py-0 px-4 mt-4 xmd:mt-0 flex-col justify-center">
        <p class=" text-xs mb-5"><span><i class="fas fa-envelope text-black mr-3"></i> </span> {{$store.state.userEmail}}</p>
        <p @click="edit()" class="cursor-pointer text-xs mb-5"><span><i class="fas fa-phone text-black mr-3"></i> </span> Enter a phone number</p>
        <p class=" text-xs mb-5"><span><i class="fas fa-user text-black mr-3"></i> </span> User Account</p>
        <p @click="edit()" class="cursor-pointer hover:tracking-wider text-xs mb-5"><span><i class=" fas fa-light fa-gear text-black mr-3"></i> </span> Edit Profile</p>

    </div>

    <div class="  h-full relative">
<div class="xmd:w-56 w-full relative ">

</div>
    </div>
</div>
<div class="flex flex-col h-fit w-full relative" v-if="$store.state.profile">
  <div class="md:text-3xl sm:text-xl text-lg w-full justify-start flex items-center">Activities:</div> 
<div class="mt-9 card-div flex md:flex-row flex-col  w-full justify-between min-h-fit">
  <div class="card p-5 rounded h-36 overflow-hidden w-full  xmd:mb-0 mb-5 md:w-1/2 mr-4">
      <!-- <apexchart class="max-w-full max-h-full relative" type="line" :options="options" :series="series"></apexchart> -->
<p class="text-lg font-bold tracking-wide">
  Transactions:

</p><div class="flex flex-col  my-3 relative w-full ">
  <table>
  <tr class="flex justify-items-start w-full relative justify-between leading-8">
    <th class="font-bold text-sm tracking-wide">Date</th>
    <th class="font-bold text-sm tracking-wide">Amount</th>
  </tr>
  <tr class="flex justify-items-start w-full relative justify-between leading-8">
    <td>01 March 2022</td>
    <td>&#8358;0.00</td>
  </tr>
  <tr class="flex justify-items-start w-full relative justify-between leading-8">
    <td>01 July 2022</td>
    <td>&#8358;6000.00</td>
  </tr>
</table>
</div>
<div class="flex relative mt-auto items-end w-36">
  <button class="flex w-36 justify-center  bg-black py-2 px-3  hover:tracking-wider hover:bg-white hover:text-black btn-border text-white">Donate</button>
</div>
    </div>
    <div class="card rounded w-full md:w-1/2 mr-4">
      <Sbchart/>
    </div>
  </div>

</div>
<div v-if="$store.state.settings" class="card-div flex w-full justify-between h-1/2">
    <div class="profile  relative flex w-full bg-white  h-fit   items-center justify-center">
    <div class="px-5 flex flex-col justify-center mb-10 items-center w-full md:w-3/4 ">
        <h1 class="md:text-2xl sm:text-xl text-sm text-dark tracking-wider flex justify-center mt-3">
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
          <div class="left w-full sm:w-1/2">  <label class="font-light sm:text-sm text-xs text-dark tracking-wider" for="username">Username</label>
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
                <label class="font-light sm:text-sm text-xs text-dark tracking-wider" for="username">Phone number</label>
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
          <div class="left w-full sm:w-1/2">  <label class="font-light sm:text-sm text-xs text-dark tracking-wider" for="username">Email</label>
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
                <label class="font-light sm:text-sm text-xs text-dark tracking-wider" for="username">Phone number</label>
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
          <div class="left  w-full sm:w-1/2">  <label class="font-light sm:text-sm text-xs text-dark tracking-wider" for="username">Image Upload</label>
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
                <label class="font-light sm:text-sm text-xs text-dark tracking-wider" for="username">Phone number</label>
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
    <div class="profile  relative flex w-full bg-white  h-fit  sm:items-center items-start  justify-center pb-6">
    <div class="px-5 flex flex-col justify-center items-center w-full md:w-3/4 ">
        <h1 class="md:text-2xl sm:text-xl text-sm text-dark tracking-wider flex justify-center mt-3">
Donate
        </h1>
<div class="bg-gray-200 rounded p-4 mt-4 w-full relative">
    <div class="flex items-center justify-center flex-col">    
    </div>
    <div class="flex w-full relative flex-col items-center justify-center">
        <div class="mb-4 relative flex w-full md:flex-row flex-col items-center justify-between">
          <div class="left w-full md:w-1/2">  <label class="font-light sm:text-sm text-xs text-dark tracking-wider" for="username">Username</label>
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
                <label class="font-light sm:text-sm text-xs text-dark tracking-wider" for="username">Phone number</label>
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
          <div class="left w-full md:w-1/2">  <label class="font-light sm:text-sm text-xs text-dark tracking-wider" for="username">Email</label>
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
                <label class="font-light sm:text-sm text-xs text-dark tracking-wider" for="username">Amount</label>
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
       
          <button @click="pay()" class="mb-4 relative uppercase text-white hover:tracking-wider px-3  sm:px-6 sm:py-3 py-2 bg-black text-xs">
          Make Payments
          </button>
    </div>
</div>
</div>
</div>
</div>
<div v-if="$store.state.contactUs"  class="flex items-center w-full min-h-screen bg-gray-50 dark:bg-gray-900">
        <div class="container mx-auto">
            <div class="md:w-3/4 w-full  mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
                <div class="text-center">
                    <h1 class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Reviews</h1>
                    <p class="text-gray-400 dark:text-gray-400">Fill up the form below to send us a feedback.</p>
                </div>
                <div class="m-7">
                    <form >
                      
            
                        <div class="mb-6">
                            <label for="name" class="block mb-1 text-sm text-gray-600 dark:text-gray-400">Full Name</label>
                            <input type="text" name="name" id="name" placeholder="John Doe" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"/>
                        </div>
                        <div class="mb-6">
                            <label for="email" class="block mb-1 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                            <input type="email" name="email" id="email" placeholder="you@email.com" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"/>
                        </div>
                        <div class="mb-6">
                            <label for="subject" class="block mb-1 text-sm text-gray-600 dark:text-gray-400">Subject</label>
                            <input type="text" name="subject" id="subject" placeholder="Your Subject" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"/>
                        </div>
                        <div class="mb-6">
                            <label for="message" class="block mb-1 text-sm text-gray-600 dark:text-gray-400">Your Message</label>
                            <textarea rows="5" name="message" id="message" placeholder="Your Message" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" required></textarea>
                        </div>
                        <div class="mb-6">
                            <button type="submit" class="w-full px-3 py-4 text-white rounded-md focus:outline-none">Send Message</button>
                        </div>
                        <p class="text-base text-center text-gray-400" id="result"></p>
                    </form>
                </div>
              </div>
              <div class="m-7 flex justify-center items-center flex-col">

                <div class="mt-5 flex">
                  <i class="fa-brands md:text-2xl text-lg hover:translate-y-2 fa-facebook mr-5"></i>    
                  <i class="fa-brands md:text-2xl text-lg hover:translate-y-2 fa-instagram mr-5"></i>
                  <i class="fa-brands md:text-2xl text-lg hover:translate-y-2 fa-twitter"></i>            </div>
              </div>
        </div>
    </div>
<div v-if="$store.state.makeDonations" class="card-div flex w-full justify-between h-1/2">
    <div class="profile  relative flex w-full bg-white  h-fit  sm:items-center items-start  justify-center pb-6">
    <div class="px-5 flex flex-col justify-center items-center w-full md:w-3/4 ">
        <h1 class="md:text-2xl sm:text-xl text-sm text-dark tracking-wider flex justify-center mt-3">
            Give
        </h1>
<div class="bg-gray-200 rounded p-4 mt-4 w-full relative">
    <div class="flex items-center justify-center flex-col">    
    </div>
    <div class="flex w-full relative flex-col items-center justify-center">
        <div class="mb-4 relative flex w-full md:flex-row flex-col items-center justify-between">
          <div class="left w-full md:w-1/2">  <label class="font-light sm:text-sm text-xs text-dark tracking-wider" for="username">Username</label>
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
                <label class="font-light sm:text-sm text-xs text-dark tracking-wider" for="username">Phone number</label>
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
          <div class="left w-full md:w-1/2">  <label class="font-light sm:text-sm text-xs text-dark tracking-wider" for="username">Email</label>
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
                <label class="font-light sm:text-sm text-xs text-dark tracking-wider" for="username">Amount</label>
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
       
          <button @click="pay()" class="mb-4 relative uppercase text-white hover:tracking-wider px-3  sm:px-6 sm:py-3 py-2 bg-black text-xs">
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
import CardThree from '@/components/cardThree.vue'
import VueApexCharts from 'vue-apexcharts'
import Sbchart from './Sbchart.vue'

export default {
    components: { CardThree, VueApexCharts, Sbchart },
    data(){
        return{
          options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [{
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }]
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
  @media(max-width:350px){
    p{
      font-size: .6rem;
    }
    .username{
      font-size: 1rem;
    }
  }
  .vue-apexcharts{
    position:relative;
    min-height:100% !important;
    height:100% !important;
  }
  .apexcharts-canvas{
    width:100% !important;
    height:100% !important;
    position: relative;
  }
  .apexcharts-svg{
    max-width: 100% !important;
    position: relative;
    max-height: 100% !important;
  }
  .btn-border
  {
    margin-top: auto;
    &:hover{
border:1px solid #000;
  }}
</style>