<template>
  <div class="card">
    <img :src="img" alt="">
  </div>
</template>

<script>
export default {
props:['img']
}
</script>

<style lang="scss" scoped>
.card{
    border:
    1px #eeeeee solid;
    height: 400px;
 transition: all .2s ease-in;
    &:hover{
        transform: rotate(-3deg);
    }
}
</style>