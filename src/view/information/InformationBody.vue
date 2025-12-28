<template>
  <a href="" v-for="item in list" :key="item.id">
    <div class="box">
      <div class="left">
        <img :src="item.hardimg" alt="">
      </div>
      <div class="right">
        <div>
          <div><span v-html="item.rightspan1"></span></div>
          <div><span >{{ item.rightspan2 }}</span></div>
        </div>
        <div>
          <div><span v-html="item.rightspan3"></span></div>
          <div><span >{{ item.rightspan4 }}</span></div>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  data(){
    return{
      list: [
        {
          hardimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          rightspan1: "黄同学&nbsp;小凯集团&nbsp;|&nbsp;前端开发",
          rightspan2: "3000元",
          rightspan3: "[已读]&nbsp;你好，看到你的招聘信息，我很感兴趣哈哈哈哈哈哈哈",
          rightspan4: "16:00"
        },
        {
          hardimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          rightspan1: "黄同学&nbsp;小凯集团&nbsp;|&nbsp;前端开发",
          rightspan2: "3000元",
          rightspan3: "[已读]&nbsp;你好，看到你的招聘信息，我很感兴趣哈哈哈哈哈哈哈",
          rightspan4: "16:00"
        },
        {
          hardimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          rightspan1: "黄同学&nbsp;小凯集团&nbsp;|&nbsp;前端开发",
          rightspan2: "3000元",
          rightspan3: "[已读]&nbsp;你好，看到你的招聘信息，我很感兴趣哈哈哈哈哈哈哈",
          rightspan4: "16:00"
        },
        {
          hardimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          rightspan1: "黄同学&nbsp;小凯集团&nbsp;|&nbsp;前端开发",
          rightspan2: "3000元",
          rightspan3: "[已读]&nbsp;你好，看到你的招聘信息，我很感兴趣哈哈哈哈哈哈哈",
          rightspan4: "16:00"
        },
        {
          hardimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          rightspan1: "黄同学&nbsp;小凯集团&nbsp;|&nbsp;前端开发",
          rightspan2: "3000元",
          rightspan3: "[已读]&nbsp;你好，看到你的招聘信息，我很感兴趣哈哈哈哈哈哈哈",
          rightspan4: "16:00"
        },
        {
          hardimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          rightspan1: "黄同学&nbsp;小凯集团&nbsp;|&nbsp;前端开发",
          rightspan2: "3000元",
          rightspan3: "[已读]&nbsp;你好，看到你的招聘信息，我很感兴趣哈哈哈哈哈哈哈",
          rightspan4: "16:00"
        },
        {
          hardimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          rightspan1: "黄同学&nbsp;小凯集团&nbsp;|&nbsp;前端开发",
          rightspan2: "3000元",
          rightspan3: "[已读]&nbsp;你好，看到你的招聘信息，我很感兴趣哈哈哈哈哈哈哈",
          rightspan4: "16:00"
        },
        {
          hardimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          rightspan1: "黄同学&nbsp;小凯集团&nbsp;|&nbsp;前端开发",
          rightspan2: "3000元",
          rightspan3: "[已读]&nbsp;你好，看到你的招聘信息，我很感兴趣哈哈哈哈哈哈哈",
          rightspan4: "16:00"
        },
        {
          hardimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          rightspan1: "黄同学&nbsp;小凯集团&nbsp;|&nbsp;前端开发",
          rightspan2: "3000元",
          rightspan3: "[已读]&nbsp;你好，看到你的招聘信息，我很",
          rightspan4: "16:00"
        },
        {
          hardimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          rightspan1: "黄同学&nbsp;小凯集团&nbsp;|&nbsp;前端开发",
          rightspan2: "3000元",
          rightspan3: "[已读]&nbsp;你好，看到你的招聘信息，我很",
          rightspan4: "16:00"
        },
        {
          hardimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          rightspan1: "黄同学&nbsp;小凯集团&nbsp;|&nbsp;前端开发",
          rightspan2: "3000元",
          rightspan3: "[已读]&nbsp;你好，看到你的招聘信息，我很",
          rightspan4: "16:00"
        }
      ]
    }
  }
}
</script>

<style scoped>
a{
  text-decoration: none;
}
.box{
  /* border: 1px solid red; */
  color: rgb(85, 85, 85);
  background-color: #fff;
  display: flex;
  flex-direction: row;
  padding: 10px;
  margin-top: 10px;
  font-size: 13px;
  border-radius: 15px;
}
.box:hover{
  background-color: rgb(234, 253, 253);
}
.box .left img{
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.box .right{
  width: 100%;
  margin-left: 10px;
  /* background-color: #e0d0d0; */
}
.box .right div{
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
}
.box .right div span{
    max-width: 30ch;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>