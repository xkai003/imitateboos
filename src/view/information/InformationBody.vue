<template>
  <a href="" v-for="item in list" :key="item.id">
    <div class="box">
      <div class="left">
        <img :src="item.hardimg" alt="">
      </div>
      <div class="right">
        <div>
          <div><span v-html="item.rightspan1"></span></div>
          <div><span>{{ item.rightspan2 }}</span></div>
        </div>
        <div>
          <div><span v-html="item.rightspan3"></span></div>
          <div><span>{{ item.rightspan4 }}</span></div>
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
          rightspan1: "罗同学&nbsp;小凯集团&nbsp;|&nbsp;前端开发",
          rightspan2: "3000元",
          rightspan3: "[已读]&nbsp;你好，看到你的招聘信息，我很感兴趣，希望可以进一步沟通",
          rightspan4: "16:00"
        },
        {
          hardimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          rightspan1: "黄同学&nbsp;未来科技&nbsp;|&nbsp;UI设计师",
          rightspan2: "4500元",
          rightspan3: "[已读]&nbsp;我的作品集已附上，期待能有机会面试，谢谢！",
          rightspan4: "09:15"
        },
        {
          hardimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          rightspan1: "张同学&nbsp;启航软件&nbsp;|&nbsp;后端工程师",
          rightspan2: "5000元",
          rightspan3: "[已读]&nbsp;您好，本人有丰富的Java开发经验，对贵公司的岗位非常向往。",
          rightspan4: "10:30"
        },
        {
          hardimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          rightspan1: "李同学&nbsp;星辰互动&nbsp;|&nbsp;产品经理",
          rightspan2: "6000元",
          rightspan3: "[已读]&nbsp;你好，我是一名有互联网大厂背景的PM，希望能与您交流。",
          rightspan4: "11:45"
        },
        {
          hardimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          rightspan1: "王同学&nbsp;云帆数据&nbsp;|&nbsp;数据分析师",
          rightspan2: "4000元",
          rightspan3: "[已读]&nbsp;你好，我擅长Python和SQL，曾负责过多个数据建模项目。",
          rightspan4: "13:20"
        },
        {
          hardimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          rightspan1: "赵同学&nbsp;极速网络&nbsp;|&nbsp;测试工程师",
          rightspan2: "3500元",
          rightspan3: "[已读]&nbsp;你好，我有自动化测试和性能测试的经验，希望能加入贵团队。",
          rightspan4: "14:05"
        },
        {
          hardimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          rightspan1: "陈同学&nbsp;智慧教育&nbsp;|&nbsp;前端开发",
          rightspan2: "3800元",
          rightspan3: "[已读]&nbsp;您好，我是一名应届生，精通Vue和React框架，渴望得到锻炼机会。",
          rightspan4: "15:10"
        },
        {
          hardimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          rightspan1: "刘同学&nbsp;绿能科技&nbsp;|&nbsp;运维工程师",
          rightspan2: "4200元",
          rightspan3: "[已读]&nbsp;你好，熟悉Linux系统和Docker容器化部署，期待面试机会。",
          rightspan4: "16:30"
        },
        {
          hardimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          rightspan1: "吴同学&nbsp;光影视觉&nbsp;|&nbsp;UX研究员",
          rightspan2: "5500元",
          rightspan3: "[已读]&nbsp;你好，我是一名用户体验研究员，擅长用户访谈和可用性测试。",
          rightspan4: "17:45"
        },
        {
          hardimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          rightspan1: "周同学&nbsp;磐石安全&nbsp;|&nbsp;网络安全",
          rightspan2: "7000元",
          rightspan3: "[已读]&nbsp;你好，我有CISSP认证，专注于企业网络安全架构设计。",
          rightspan4: "18:15"
        },
        {
          hardimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          rightspan1: "郑同学&nbsp;环球贸易&nbsp;|&nbsp;跨境电商运营",
          rightspan2: "2800元",
          rightspan3: "[已读]&nbsp;你好，我有丰富的亚马逊和独立站运营经验，希望能加入贵司。",
          rightspan4: "19:00"
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
    max-width: 55vw;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>