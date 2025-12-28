<template>
  <div>
    <router-link :to="item.catdlink" v-for="item in list" :key="item.id">
    <!-- <a href=""  > -->
      <div class="box">
        <div class="lineone">
          <span>{{ item.lineonespan1 }}</span>
          <span>{{ item.lineonespan2 }}</span>
        </div>
        <div class="linetwo">
          <span>{{ item.linetwospan }}</span>
        </div>
        <div class="linethree">
          <span>{{ item.linethreespan1 }}</span>
          <span>{{ item.linethreespan2 }}</span>
          <span>{{ item.linethreespan3 }}</span>
          <span>{{ item.linethreespan4 }}</span>
        </div>
        <div class="linefour">
          <div class="left">
            <img :src="item.linefourimg" alt="">
            <div class="name">
              <span>{{ item.linefourspan1 }}</span>
              <span>{{ item.linefourspan2 }}</span>
            </div>
          </div>
          <div class="right">
            <span v-html="item.linefourspan3"></span>
          </div>
        </div>
      </div>
    <!-- </a> -->
    </router-link>
  </div>
</template>

<script>
export default {
  data(){
    return{
      list: [
        {
          catdlink: "/JobDetails",
          lineonespan1: "前端开发",
          lineonespan2: "1-1.5万元",
          linetwospan: "广州小凯有限公司",
          linethreespan1: "1-3年",
          linethreespan2: "学历不限",
          linethreespan3: "前端",
          linethreespan4: "兼职",
          linefourimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          linefourspan1: "唐先生*招聘者",
          linefourspan2: "回复率高",
          linefourspan3: "广州&nbsp;白云区&nbsp;嘉禾",
        },
        {
          catdlink: "/jobdetails",
          lineonespan1: "前端开发",
          lineonespan2: "1-1.5万元",
          linetwospan: "广州小凯有限公司",
          linethreespan1: "1-3年",
          linethreespan2: "学历不限",
          linethreespan3: "前端",
          linethreespan4: "兼职",
          linefourimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          linefourspan1: "唐先生*招聘者",
          linefourspan2: "回复率高",
          linefourspan3: "广州&nbsp;白云区&nbsp;嘉禾",
        },
        {
          catdlink: "/jobdetails",
          lineonespan1: "前端开发",
          lineonespan2: "1-1.5万元",
          linetwospan: "广州小凯有限公司",
          linethreespan1: "1-3年",
          linethreespan2: "学历不限",
          linethreespan3: "前端",
          linethreespan4: "兼职",
          linefourimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          linefourspan1: "唐先生*招聘者",
          linefourspan2: "回复率高",
          linefourspan3: "广州&nbsp;白云区&nbsp;嘉禾",
        },
        {
          catdlink: "/jobdetails",
          lineonespan1: "前端开发",
          lineonespan2: "1-1.5万元",
          linetwospan: "广州小凯有限公司",
          linethreespan1: "1-3年",
          linethreespan2: "学历不限",
          linethreespan3: "前端",
          linethreespan4: "兼职",
          linefourimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          linefourspan1: "唐先生*招聘者",
          linefourspan2: "回复率高",
          linefourspan3: "广州&nbsp;白云区&nbsp;嘉禾",
        },
        {
          catdlink: "/jobdetails",
          lineonespan1: "前端开发",
          lineonespan2: "1-1.5万元",
          linetwospan: "广州小凯有限公司",
          linethreespan1: "1-3年",
          linethreespan2: "学历不限",
          linethreespan3: "前端",
          linethreespan4: "兼职",
          linefourimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          linefourspan1: "唐先生*招聘者",
          linefourspan2: "回复率高",
          linefourspan3: "广州&nbsp;白云区&nbsp;嘉禾",
        },
        {
          catdlink: "/jobdetails",
          lineonespan1: "前端开发",
          lineonespan2: "1-1.5万元",
          linetwospan: "广州小凯有限公司",
          linethreespan1: "1-3年",
          linethreespan2: "学历不限",
          linethreespan3: "前端",
          linethreespan4: "兼职",
          linefourimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          linefourspan1: "唐先生*招聘者",
          linefourspan2: "回复率高",
          linefourspan3: "广州&nbsp;白云区&nbsp;嘉禾",
        },
        {
          catdlink: "/jobdetails",
          lineonespan1: "前端开发",
          lineonespan2: "1-1.5万元",
          linetwospan: "广州小凯有限公司",
          linethreespan1: "1-3年",
          linethreespan2: "学历不限",
          linethreespan3: "前端",
          linethreespan4: "兼职",
          linefourimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          linefourspan1: "唐先生*招聘者",
          linefourspan2: "回复率高",
          linefourspan3: "广州&nbsp;白云区&nbsp;嘉禾",
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
  /* height: 150px; */
  /* border: 1px solid red; */
  color: rgb(85, 85, 85);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-top: 10px;
  font-size: 13px;
  border-radius: 15px;
}
.box:hover{
  background-color: rgb(234, 253, 253);
}
.box div{
  margin-top: 5px;
}
.lineone{
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  color: black;
}
.linethree span{
  margin-right: 5px;
  padding-left: 3px;
  padding-right: 3px;
  background-color: rgb(226, 225, 225);
}
.linefour{
  display: flex;
  justify-content: space-between;
}
.linefour .left{
  display: flex;
  flex-direction: row;
}
.linefour .left img{
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.linefour .left .name{
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}
.linefour .right span{
  line-height: 40px;
}
</style>