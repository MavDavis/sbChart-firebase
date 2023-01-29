<template>
     <div
      class="flex flex-col h-fit w-full relative"
      v-if="$store.state.profile"
    >
      <div
        class="md:text-3xl sm:text-xl text-lg w-full justify-start flex items-center"
      >
        Library:
      </div>
      <div
        class="mt-9 card-div flex md:flex-row flex-col w-full justify-between min-h-fit"
      >
        <div
          class="card p-5 rounded h-36 overflow-hidden w-full xmd:mb-0 mb-5 md:w-1/2 mr-4"
        >
          <!-- <apexchart class="max-w-full max-h-full relative" type="line" :options="options" :series="series"></apexchart> -->
          <p class="text-lg font-bold tracking-wide">100l:</p>
          <div class="flex flex-col my-3 relative w-full">
          
          </div>
          <div class="flex relative mt-auto items-end w-36">
            <button
              class="flex w-36 justify-center bg-black py-2 px-3 hover:tracking-wider hover:bg-white hover:text-black btn-border text-white"
            >
              read more
            </button>
          </div>
        </div>
        <div class="card rounded w-full md:w-1/2 mr-4">
          <Sbchart />
        </div>
      </div>
    </div>
</template>
<script>
export default{

}
</script>