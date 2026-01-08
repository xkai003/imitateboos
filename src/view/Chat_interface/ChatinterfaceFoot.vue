<template>
  <div class="background">
    <!-- <button>立即沟通</button> -->
    <!-- <router-link to="/Chat_interface">立即沟通</router-link> -->
    <div class="box">
      <div class="left">
        <a href="">常</a>
      </div>
      <div class="center">
        <input type="text" placeholder="回复消息">
      </div>
      <div class="right">
        <a href="">
          <svg t="1767863214435" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10328"><path d="M512 1024h-5.36381A512 512 0 1 1 1024 517.36381 512.487619 512.487619 0 0 1 512 1024z m0-975.238095a463.238095 463.238095 0 0 0-4.87619 926.47619h4.87619a463.238095 463.238095 0 0 0 4.87619-926.47619z" fill="#2c2c2c" p-id="10329"></path><path d="M299.885714 427.154286m-63.390476 0a63.390476 63.390476 0 1 0 126.780952 0 63.390476 63.390476 0 1 0-126.780952 0Z" fill="#2c2c2c" p-id="10330"></path><path d="M724.114286 427.154286m-63.390476 0a63.390476 63.390476 0 1 0 126.780952 0 63.390476 63.390476 0 1 0-126.780952 0Z" fill="#2c2c2c" p-id="10331"></path><path d="M512 790.918095a174.567619 174.567619 0 0 1-166.765714-123.367619l46.323809-14.628571a125.805714 125.805714 0 0 0 240.88381 0l46.323809 14.628571a174.567619 174.567619 0 0 1-166.765714 123.367619z" fill="#2c2c2c" p-id="10332"></path></svg>
        </a>
        <a href="">
          <svg t="1767863278275" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11389"><path d="M512 992C246.912 992 32 777.088 32 512 32 246.912 246.912 32 512 32c265.088 0 480 214.912 480 480 0 265.088-214.912 480-480 480z m0-64c229.76 0 416-186.24 416-416S741.76 96 512 96 96 282.24 96 512s186.24 416 416 416z" fill="#2c2c2c" p-id="11390"></path><path d="M256 544a32 32 0 0 1 0-64h512a32 32 0 0 1 0 64H256z" fill="#2c2c2c" p-id="11391"></path><path d="M480 256a32 32 0 0 1 64 0v512a32 32 0 0 1-64 0V256z" fill="#2c2c2c" p-id="11392"></path></svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .background{
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid red; */
    /* padding: 10px; */
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
  }
  .box{
    width: 90%;
    background-color: #f5f6f7;
    /* border: 1px solid red; */
    border-radius: 50px;
    margin: 10px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
  }
  /* left */
  .box .left a{
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #10c497;
    text-align: center;
    text-decoration: none;
    color: #fff;
    margin: 0 auto;
  }
  /* center */
  .box .center{
    margin-left: 5px;
    /* background-color: #fff; */
    width: 67%;
  }
  .box .center input{
    width: 100%;
    height: 30px;
    border: none;
    background-color: #f5f6f7;

    margin: 0;
    padding: 0;
  }
  /* right */
  .box .right a{
    display: block;
    width: 30px;
    height: 30px;
    float: left;
    margin-left: 5px;
    border-radius: 50%;
    /* background-color: #10c497; */
    text-align: center;
    text-decoration: none;
    color: #fff;
    /* margin: 0 auto; */
  }
</style>