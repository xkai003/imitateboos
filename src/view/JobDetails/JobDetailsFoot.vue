<template>
  <div class="box">
    <button>立即沟通</button>
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
  .box button{
    width: 95%;
    height: 40px;
    background-color: rgb(31, 175, 127);
    border: none;
    color: #fff;
    border-radius: 8px;
    font-size: 15px;
  }
  .box button:hover{
    cursor: pointer;
    background-color: rgb(8, 148, 101);
  }
</style>