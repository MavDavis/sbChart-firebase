<template>
  <section id="homeDonate mt-5">
    <Loading v-if="$store.state.loading"/>
    <div class="flex flex-col w-screen h-full my-5 justify-center items-center">
      <h2 class="md:text-4xl text-2xl text-bold mt-8 mb-5">Make A Commitment</h2>
<p v-if="errMsg" class="bold text-red-500 my-5 flex justify-center align-center text-lg">
  {{err}}
</p>


      <div class="w-full flex justify-center flex-col items-center h-fit relative ">
        <div class="pl-10 mb-2 w-full  ">Price Range:</div>

       <div class="w-full flex justify-center  items-center h-fit relative mb-5 px-5  ">
        <div
          v-for="range in PriceRangeArray"
          :key="range.string"
          @click="rangeActive(range.id)"
          :class="[range.active ? 'bg-black text-white ':' bg-white text-black hover:bg-black hover:text-white']"
          class="
            border
            p-2
            w-1/4
            border-black

            min-h-fit
            justify-center
            items-center
            flex
            cursor-pointer
           select-btn
            border-r-0
          "
        >
          {{ range.string }}
        </div>
       </div>
      </div>
      <div class="w-full flex justify-center flex-col items-center h-fit relative">
        <div class="pl-10 mb-2 w-full">{{ wordsRange }}</div>

       <div class="w-full flex justify-center  items-center h-fit relative mb-5 px-5">
        <div
          v-for="range in priceDetailRangeArray"
          :key="range.string"
          @click="rangeActiveTwo(range.id)"
          :class="[range.active? 'bg-black text-white': 'bg-white text-black hover:bg-black hover:text-white']"
          class="
            border
            p-2
            select-btn
            border-black
            w-1/4
            justify-center
            min-h-fit
            items-center
            flex
            cursor-pointer
           
            border-r-0
          "
        >
          {{ range.string }}
        </div>
       </div>
      </div>
      <p v-if="$store.state.error" class="bold text-red-500 my-5 flex justify-center align-center text-lg">
  {{$store.state.errMssg}}
</p>
      <form
      @submit.prevent ="$store.commit('donateLogin')"
        class="
          w-full
          md:w-1/2
          max-w-screen-lg
          relative
          flex flex-col
          justify-center
          items-center
        "
      >
        <label class="text-bolder text-lg tracking-wider uppercase" for="price"
          >Donate Here</label
        >
        <div class="mb-4 relative w-3/4 md:w-full">
          <i class="absolute text-lg font-semibold top-2 left-3 text-dark z-10"
            >&#8358;</i
          >
          <input
            class="
              bg-gray-100
              appearance-none
              border
              rounded
              w-full
              py-2
              px-8
              text-dark
              leading-tight
              focus:outline-none focus:shadow-outline
            "
            @keyup="checkPrice()"
            v-model="$store.state.pendingPrice"
            type="number"
            name="price"
            required
            :disabled="priceEnabling"
            :placeholder="priceRange"
          />
        </div>
        <div class="mb-4 relative w-3/4 md:w-full">
          <i class="fas fa-user absolute top-3 left-3 text-dark z-10"></i>
          <input
            class="
              bg-gray-100
              appearance-none
              border
              rounded
              w-full
              py-2
              px-8
              text-dark
              leading-tight
              focus:outline-none focus:shadow-outline
            "
            v-model="$store.state.userName"
            type="text"
            required
            placeholder="Enter Legal Name"
          />
        </div>
        <div class="mb-4 relative w-3/4 md:w-full">
          <i class="fas fa-envelope absolute top-3 left-3 text-dark z-10"></i>
          <input
            class="
              bg-gray-100
              appearance-none
              border
              rounded
              w-full
              py-2
              px-8
              text-dark
              leading-tight
              focus:outline-none focus:shadow-outline
            "
            v-model="$store.state.userEmail"
            type="email"
            required
            placeholder="Email"
          />
        </div>
        <div class="mb-4 relative w-3/4 md:w-full">
          <i class="fas fa-envelope absolute top-3 left-3 text-dark z-10"></i>
          <input
            class="
              bg-gray-100
              appearance-none
              border
              rounded
              w-full
              py-2
              px-8
              text-dark
              leading-tight
              focus:outline-none focus:shadow-outline
            "
            v-model="$store.state.confirmUserEmail"
            type="email"
            required
            placeholder="Confirm Email"
          />
        </div>
        <button 
          class="
            btn
            3/4
            w-3/4
            md:w-1/2
            border-black
            relative
            border
            flex
            justify-center
            items-center
            text-black
          "
        >
          <div

          class="
              btn-absolute
              absolute
              top-0
              left-0
              w-full
              h-full
              text-white
              bg-black
              justify-center
              flex
              items-center
            "
          >
            Donate
          </div>
          Donate
        </button>
        <p v-if="$store.state.errordCheck" class="bold text-red-500 my-5 flex justify-center align-center text-lg">
  {{$store.state.errorForDonate}}
</p>
      </form>
    </div>
  </section>
</template>

<script>
import Loading from './Loading.vue';
  function arrayTofalse(array){
    array.forEach(item =>{
      item.active = false
    })
  };

export default {
    methods: {
        checkPrice() {
            if (this.errMsg == true) {
                this.errMsg = false;
            }
            if (this.priceDetailRangeArray == this.PriceHundredRangeArray) {
                if (this.$store.state.pendingPrice > 100000) {
                    this.$store.state.pendingPrice = 100000;
                    this.errMsg = true;
                    this.err = "Max Input of 100,000";
                }
            }
            else if (this.priceDetailRangeArray == this.PricefiveHundredRangeArray) {
                if (this.$store.state.pendingPrice > 500000) {
                    this.$store.state.pendingPrice = 500000;
                    this.errMsg = true;
                    this.err = "Max Input of 500,000";
                }
            }
            else if (this.priceDetailRangeArray == this.PricesixHundredRangeArray) {
                if (this.$store.state.pendingPrice > 1000000) {
                    this.$store.state.pendingPrice = 1000000;
                    this.errMsg = true;
                    this.err = "Max Input of 1,000,000";
                }
            }
        },
        rangeActiveTwo(id) {
            this.errMsg = false;
            this.priceEnabling = false;
            arrayTofalse(this.priceDetailRangeArray);
            let item = this.priceDetailRangeArray.find(item => item.id == id);
            item.active = true;
        },
        rangeActive(id) {
            this.errMsg = false;
            this.priceEnabling = false;
            arrayTofalse(this.PriceRangeArray);
            let item = this.PriceRangeArray.find(item => item.id == id);
            item.active = true;
            if (id == 1) {
                this.wordsRange = "Range 1k-100k:";
                this.priceDetailRangeArray = this.PriceHundredRangeArray;
                this.priceRange = "1000";
            }
            else if (id == 2) {
                this.wordsRange = "Range 100k-500k:";
                this.priceDetailRangeArray = this.PricefiveHundredRangeArray;
                this.priceRange = "100,000";
            }
            else if (id == 3) {
                this.wordsRange = "Range 500k-1M:";
                this.priceDetailRangeArray = this.PricesixHundredRangeArray;
                this.priceRange = "500,000";
            }
            else if (id == 4) {
                this.wordsRange = "Range 1M+:";
                this.priceDetailRangeArray = this.priceOneMil;
                this.priceRange = "1,000,000";
            }
        }
    },
    data() {
        return {
            priceEnabling: true,
            priceRange: "100,000",
            wordsRange: null,
            price: 0,
            err: "",
            errMsg: false,
            priceDetailRangeArray: null,
            PriceRangeArray: [
                { string: "1k - 100k", active: false, id: 1 },
                { string: "100k - 500k", active: true, id: 2 },
                { string: "500k - 1M", active: false, id: 3 },
                { string: "> 1M", active: false, id: 4 },
            ],
            PriceHundredRangeArray: [
                { string: "1k-25k", active: true, id: 1 },
                { string: "25k-50k", active: false, id: 2 },
                { string: "50k-75k", active: false, id: 3 },
                { string: "75-100k", active: false, id: 4 },
            ],
            PricefiveHundredRangeArray: [
                { string: "100k-200k", active: true, id: 1 },
                { string: "200k-300k", active: false, id: 2 },
                { string: "300k-400k", active: false, id: 3 },
                { string: "400-500k", active: false, id: 4 },
            ],
            PricesixHundredRangeArray: [
                { string: "600k-700k", active: false, id: 1 },
                { string: "700k-800k", active: false, id: 2 },
                { string: "800k-900k", active: false, id: 3 },
                { string: "900-1M", active: false, id: 4 },
            ],
            priceOneMil: [
                { string: "1M-2M", active: false, id: 1 },
                { string: "2M-3M", active: false, id: 2 },
                { string: "3M-4M", active: false, id: 3 },
                { string: "4M+", active: false, id: 4 },
            ]
        };
    },
    created() {
        this.priceDetailRangeArray = this.PricefiveHundredRangeArray;
        this.wordsRange = "Range 100k-500k:";
    },
    components: { Loading }
};
</script>

<style lang="scss" scoped>
  *{
    transition: 0.2s ease-in;
  }
section {
  min-height: 100vh;
  // padding: 0 10%;
}
.btn-absolute {
  transform: scaleX(0);
  transform-origin: top right;
}
.btn:hover .btn-absolute {
  transform: scaleX(1);
  transform-origin: top left;
}
@media(max-width:700px){
.select-btn{
  height: 100px;
}
.select-btn:last-child{
  border-right: 1px solid black;
}
}
</style>