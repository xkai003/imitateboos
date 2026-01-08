<template>
  <div class="box">
    <!-- <button>立即沟通</button> -->
    <router-link to="/Chat_interface">立即沟通</router-link>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .box{
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid red; */
    padding: 10px 0px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
  }
  .box a{
    text-decoration: none;
    text-align: center;
    line-height: 40px;
    width: 95%;
    height: 40px;
    background-color: rgb(31, 175, 127);
    color: #fff;
    border-radius: 8px;
    font-size: 15px;
  }
  .box a:hover{
    cursor: pointer;
    background-color: rgb(8, 148, 101);
  }
</style>