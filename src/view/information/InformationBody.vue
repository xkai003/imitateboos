<template>
  <!-- <router-link to="/Chat_interface" v-for="item in list" :key="item.id"> -->
  <router-link :to="chatinterface(item)" v-for="item in list" :key="item.id">
    <div class="box">
      <div class="left">
        <img :src="item.hardimg" alt="">
      </div>
      <div class="right">
        <div>
          <div>
            <span>{{ item.name }}</span>&nbsp;
            <span>{{ item.company }}</span>&nbsp;|&nbsp;
            <span>{{ item.post }}</span>
          </div>
          <div><span>{{ item.salary }}</span></div>
        </div>
        <div>
          <div><span>[已读]&nbsp;{{ item.content }}</span></div>
          <div><span>{{ item.time }}</span></div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  data(){
    return{
      list: [
        {
          hardimg: new URL('/src/assets/HR_avatar.jpg', import.meta.url).href,
          name: "罗经理",
          company: "小凯集团",
          post: "前端开发",
          salary: "3000元",
          content: "你好，看到你的招聘信息，我很感兴趣，希望可以进一步沟通",
          time: "16:00"
        },
        {
          hardimg: new URL('/src/assets/HR_avatar.jpg', import.meta.url).href,
          name: "黄经理",
          company: "未来科技",
          post: "UI设计师",
          salary: "4500元",
          content: "我的作品集已附上，期待能有机会面试，谢谢！",
          time: "09:15"
        },
        {
          hardimg: new URL('/src/assets/HR_avatar.jpg', import.meta.url).href,
          name: "张经理",
          company: "启航软件",
          post: "后端工程师",
          salary: "5000元",
          content: "您好，本人有丰富的Java开发经验，对贵公司的岗位非常向往。",
          time: "10:30"
        },
        {
          hardimg: new URL('/src/assets/HR_avatar.jpg', import.meta.url).href,
          name: "李经理",
          company: "星辰互动",
          post: "产品经理",
          salary: "6000元",
          content: "你好，我是一名有互联网大厂背景的PM，希望能与您交流。",
          time: "11:45"
        },
        {
          hardimg: new URL('/src/assets/HR_avatar.jpg', import.meta.url).href,
          name: "王经理",
          company: "云帆数据",
          post: "数据分析师",
          salary: "4000元",
          content: "你好，我擅长Python和SQL，曾负责过多个数据建模项目。",
          time: "13:20"
        },
        {
          hardimg: new URL('/src/assets/HR_avatar.jpg', import.meta.url).href,
          name: "赵经理",
          company: "极速网络",
          post: "测试工程师",
          salary: "3500元",
          content: "你好，我有自动化测试和性能测试的经验，希望能加入贵团队。",
          time: "14:05"
        },
        {
          hardimg: new URL('/src/assets/HR_avatar.jpg', import.meta.url).href,
          name: "陈经理",
          company: "智慧教育",
          post: "前端开发",
          salary: "3800元",
          content: "您好，我是一名应届生，精通Vue和React框架，渴望得到锻炼机会。",
          time: "15:10"
        },
        {
          hardimg: new URL('/src/assets/HR_avatar.jpg', import.meta.url).href,
          name: "刘经理",
          company: "绿能科技",
          post: "运维工程师",
          salary: "4200元",
          content: "你好，熟悉Linux系统和Docker容器化部署，期待面试机会。",
          time: "16:30"
        },
        {
          hardimg: new URL('/src/assets/HR_avatar.jpg', import.meta.url).href,
          name: "吴经理",
          company: "光影视觉",
          post: "UX研究员",
          salary: "5500元",
          content: "你好，我是一名用户体验研究员，擅长用户访谈和可用性测试。",
          time: "17:45"
        },
        {
          hardimg: new URL('/src/assets/HR_avatar.jpg', import.meta.url).href,
          name: "周经理",
          company: "磐石安全",
          post: "网络安全",
          salary: "7000元",
          content: "你好，我有CISSP认证，专注于企业网络安全架构设计。",
          time: "18:15"
        },
        {
          hardimg: new URL('/src/assets/HR_avatar.jpg', import.meta.url).href,
          name: "郑经理",
          company: "环球贸易",
          post: "跨境电商运营",
          salary: "2800元",
          content: "你好，我有丰富的亚马逊和独立站运营经验，希望能加入贵司。",
          time: "19:00"
        }
      ]
    }
  },
  // 路由传参
  methods:{
    chatinterface(product){
      return '/Chat_interface?id=' + product.id + //id
      '&hardimg=' + encodeURIComponent(product.hardimg) +
      '&name=' + encodeURIComponent(product.name) +
      '&company=' + encodeURIComponent(product.company) +
      '&post=' + encodeURIComponent(product.post) +
      '&salary=' + encodeURIComponent(product.salary) +
      '&content=' + encodeURIComponent(product.content) +
      '&time=' + encodeURIComponent(product.time)
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