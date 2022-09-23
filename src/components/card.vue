<template>
    <div class="card">
        <img :src="img" alt="" class="card-img">
        <div class="card-absolute">
            <h4>{{heading}}</h4>
            <p>{{p}}</p>
<h5>{{details}}</h5>
        </div>
    </div>
</template>

<script>
export default {
props:["details", "heading", "p", "img"]
}
</script>

<style lang="scss" scoped>
.card{
    position:relative;
    width:100%;
    height:100%;
    background: #eee;
    margin: 1rem 0;
    border:10px solid #fff;

    .card-img{
        position: relative;
        width:100%;
        height: 100%;

    }
    .card-absolute{

        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height:100%;
        background: rgba(0, 0, 0, 0.8);
        transform: scaleX(0);
  transform-origin: bottom right;

    }
    &:hover .card-absolute{
        cursor:pointer;
        transform: scaleX(1);
  transform-origin: bottom left;
    }
}
</style>