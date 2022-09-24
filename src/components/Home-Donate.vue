<template>
  <section>
    <div class="flex w-screen h-full my-5 md:flex-row flex-col-reverse ">
        <form class="w-full md:w-1/2 max-w-screen relative flex flex-col justify-center">
            <h2 class="text-left text-4xl text-bold ">Make Quick Donations</h2>
            <p class="mt-4 mb-7 w-3/4 leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed alias rerum culpa commodi mollitia magni!</p>
          <label class="text-bolder text-lg tracking-wider" for="price">Donate Here</label>
            <div class="mb-4 relative w-3/4 md:w-full">
              <i class=" absolute text-lg font-semibold top-2 left-3 text-dark z-10">&#8358;</i>
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
                v-model="price"
                type="number"
                name="price"
                required
                placeholder="500.00"
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
                v-model="email"
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
                v-model="email"
                type="email"
                required
                placeholder="Confirm Email"
              />
            </div>
            <button class="btn 3/4 w  md:w-1/2 border-black relative border w-full   flex justify-center items-center text-black">
                <div class="btn-absolute absolute top-0 left-0 w-full h-full text-white bg-black justify-center flex items-center">Donate</div>
Donate            </button>

            </form>
            <div class="w-full md:w-1/2 h-screen relative">
                <img src="" alt="">
            </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
section{
    min-height: 100vh;
    padding: 0 10%;
}
.btn-absolute{
    transform: scaleX(0);
  transform-origin: top right; 
}
.btn:hover .btn-absolute{
    transform: scaleX(1);
  transform-origin: top left;   
}
</style>