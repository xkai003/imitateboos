<template>
  <div class="box">
    <router-link to="">全职</router-link>
    <router-link to="">实习</router-link>
    <router-link to="">兼职</router-link>
    <input type="text" placeholder="搜索">
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.box{
  width: 100%;
  height: 35px;
  /* border: 1px solid red; */
}
.box a{
  margin-left: 10px;
  font-size: 20px;
  color: rgb(172, 172, 172);
  text-decoration: none;
}
.box a:hover{
  color: black;
}
/* .box a.router-link-active{
  color: black;
} */
.box input{
  height: 30px;
  border-radius: 15px;
  float: right;
}
</style>