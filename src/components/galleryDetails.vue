<template>
<button class="px-5 py-7 md:text-2xl text-lg" @click="this.$router.go(-1)">Back</button>
<div class="flex w-full h-full justify-center items-center mb-7">
    <img :src="img.img" alt="">

</div></template>

<script>
export default {
data(){
return{
    img:""

}},
created(){
    this.img = this.$store.state.gallery.find(item => item.id == this.$route.params.id)
}
}
</script>

<style>

</style>