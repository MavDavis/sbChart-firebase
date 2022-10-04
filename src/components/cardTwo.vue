<template>
  <div class="card">
    <img :src="required(img)" alt="">
  </div>
</template>

<script>
export default {
props:['img', "id"]
}
</script>

<style lang="scss" scoped>
.card{
    border:
    1px #eeeeee solid;
    height: 400px;
 transition: all .2s ease-in;
    &:hover{
      cursor: pointer;
        transform: rotate(7deg);
    }
}
</style>