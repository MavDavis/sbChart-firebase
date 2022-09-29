<template>
    <div class="modal flex absolute w-full h-full items-center justify-center z-10 top-0 left-0">
      <div class=" sm:w-1/4 h-1/4 w-3/4 bg-white text-dark px-5 rounded flex flex-col items-center justify-center">
          <p class="text-center">{{modalMssg}}</p>
          <button class="bg-black text-white  mt-4 px-3 py-1" @click="closeModal()">close <i class="fas fa-arrow-left hover:tracking-wider"></i></button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
  props:['modalMssg'],
  methods:{
      closeModal(){
          this.$emit('closeModal')
      }
  }
  }
  </script>
  
  <style scoped>
  .modal{
      background: rgba(0, 0, 0, 0.6);
  }
  </style>