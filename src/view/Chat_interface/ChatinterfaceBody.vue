<template>
  <div class="background">
    <div class="head">
        <p>以下是30天内的聊天记录</p>
        <p>{{ $route.query.time|| "15:00" }}</p>
    </div>
    <!-- 职位卡片部分 -->
    <div class="box">
        <div class="lineone">
          <span>{{ $route.query.post|| "前端开发" }}</span>
          <span class="lineonespan2">{{ $route.query.salary|| "4500元" }}</span>
        </div>
        <div class="linetwo">
          <span>{{ $route.query.company|| "小凯有限公司" }}</span>
        </div>
        <div class="linethree">
          <span>1-3年</span>
          <span>大专</span>
          <span>vue</span>
          <span>全职</span>
        </div>
        <div class="linefour">
          <div class="left">
            <img :src="$route.query.hardimg || '/src/assets/HR_avatar.jpg'" alt="">
            <div class="name">
              <span>{{ $route.query.name || "小凯" }}*招聘者</span>
            </div>
          </div>
          <div class="right">
            <!-- <span v-html="item.linefourspan3"></span> -->
             <span>广州.荔湾区.上下九</span>
          </div>
        </div>
    </div>
    <!-- 交流部分 -->
    <div class="body">
      <!-- 招呼语部分 -->
      <div>
          <div class="right">
              <div class="rightchat">
                  <span>{{ $route.query.content || "你好，看到你的招聘信息，我很感兴趣，希望可以进一步沟通。" }}</span>
              </div>
              <img src="../../assets/avatar.jpg" alt="">
          </div>
      </div>
      <!-- hr索要简历的卡片 -->
      <div class="left">
          <img :src="$route.query.hardimg || '/src/assets/HR_avatar.jpg'" alt="">
          <!-- <div class="leftchat">
              <span>你好，方便发一份简历过来吗？</span>
          </div> -->
          <div class="leftchat">
            <div class="hard">        
              <svg t="1766503574696" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15707"><path d="M665.514667 38.997333A133.888 133.888 0 0 0 592.512 1.28L215.765333 0c-73.386667 0-104.149333 30.336-104.149333 104.405333v779.264C116.394667 953.6 145.322667 981.333333 215.765333 981.333333h602.112c73.6 0 104.362667-30.336 104.362667-104.362666V331.392l-1.194667-3.669333a131.285333 131.285333 0 0 0-36.608-68.693334L665.514667 38.997333z m10.325333 253.226667a46.762667 46.762667 0 0 1-46.421333-46.976v-146.773333l192.213333 193.749333H675.84z m130.816 605.824l-563.712 2.389333c-24.746667-0.298667-45.482667-17.408-45.653333-42.709333L194.218667 129.578667c0.213333-25.002667 20.352-45.952 45.098666-45.952l298.624 4.010666v158.421334c0 101.973333 58.538667 139.221333 133.077334 139.221333l165.973333-1.322667 4.224 469.504c0 16.810667-11.52 31.701333-34.56 44.586667z" fill="#2c2c2c" p-id="15708"></path><path d="M750.506667 682.666667H326.613333c-24.661333 0-44.373333 7.082667-44.373333 42.666666 0 35.285333 19.669333 42.666667 44.373333 42.666667h423.893334c23.893333 0 43.776-7.338667 43.776-42.624 0.085333-35.626667-19.797333-42.709333-43.776-42.709333zM317.696 512c-19.072 0-35.328 7.893333-35.328 42.666667 0 35.626667 16.256 42.666667 35.328 42.666666h335.274667c19.285333 0 34.944-7.04 34.944-42.666666 0-34.773333-15.658667-42.666667-35.029334-42.666667H317.696z" fill="#2c2c2c" p-id="15709"></path></svg>
              <span>我想要一份您的附件简历，您对否同意</span>
            </div>
            <div class="foot">
              <button>拒绝</button>
              <button @click="agree">同意</button>
            </div>
          </div>
      </div>
      <!-- 和hr交换资料之后的部分 -->
      <div class="head" v-show="resumeisshow">
        <p>15:00</p>
        <p>{{ exchangeitems }}请求已发送</p>
      </div>
      <div class="resume" v-show="resumeisshow">
          <div class="resumebox">
            <div class="hard">        
              <svg t="1766503574696" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15707"><path d="M665.514667 38.997333A133.888 133.888 0 0 0 592.512 1.28L215.765333 0c-73.386667 0-104.149333 30.336-104.149333 104.405333v779.264C116.394667 953.6 145.322667 981.333333 215.765333 981.333333h602.112c73.6 0 104.362667-30.336 104.362667-104.362666V331.392l-1.194667-3.669333a131.285333 131.285333 0 0 0-36.608-68.693334L665.514667 38.997333z m10.325333 253.226667a46.762667 46.762667 0 0 1-46.421333-46.976v-146.773333l192.213333 193.749333H675.84z m130.816 605.824l-563.712 2.389333c-24.746667-0.298667-45.482667-17.408-45.653333-42.709333L194.218667 129.578667c0.213333-25.002667 20.352-45.952 45.098666-45.952l298.624 4.010666v158.421334c0 101.973333 58.538667 139.221333 133.077334 139.221333l165.973333-1.322667 4.224 469.504c0 16.810667-11.52 31.701333-34.56 44.586667z" fill="#2c2c2c" p-id="15708"></path><path d="M750.506667 682.666667H326.613333c-24.661333 0-44.373333 7.082667-44.373333 42.666666 0 35.285333 19.669333 42.666667 44.373333 42.666667h423.893334c23.893333 0 43.776-7.338667 43.776-42.624 0.085333-35.626667-19.797333-42.709333-43.776-42.709333zM317.696 512c-19.072 0-35.328 7.893333-35.328 42.666667 0 35.626667 16.256 42.666667 35.328 42.666666h335.274667c19.285333 0 34.944-7.04 34.944-42.666666 0-34.773333-15.658667-42.666667-35.029334-42.666667H317.696z" fill="#2c2c2c" p-id="15709"></path></svg>
              <span>{{ exchangeitems }}</span>
            </div>
            <button>点击预览附件{{ exchangeitems }}</button>
          </div>
      </div>
      <div class="head" v-show="resumeisshow">
        <p>{{ $route.query.time|| "15:00" }}</p>
        <p>对方已同意，您的{{ exchangeitems }}已发送给对方</p>
        <p>对方已查看了你的{{ exchangeitems }}</p>
      </div>
      <div class="left" v-show="resumeisshow">
          <img :src="$route.query.hardimg || '/src/assets/HR_avatar.jpg'" alt="">
          <div class="leftchat">
              <span>{{ exchangeitems }}已查收，这边会把简历转交给用人部门查看，如果合适我们这边会通过boos发送面试邀请，更新理解。</span>
          </div>
      </div>
      <!-- 消息部分 -->
      <!-- v-if="this.title !== '' 判断父亲传过来的值是否为空。如果是就不显示该项，否则就显示 -->
      <div v-if="this.title !== ''">
          <div class="right">
              <div class="rightchat">
                  <!-- 渲染接收到的数据 -->
                  <span>{{ title }}</span>
              </div>
              <img src="../../assets/avatar.jpg" alt="">
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // 步骤三：子组件props接收到数据
  props: ['title'],
  data() {
    return {
      resumeisshow: false,
      exchangeitems: ''
    }
  },
  methods: {
    agree() {
      this.resumeisshow = true
      this.exchangeitems = "简历"
    }
  }
}
</script>

<style scoped>
.background{
    margin-top: 80px;
    margin-bottom: 60px;
    /* height: 100%; */
    height: 180vh;
    background-color: #f5f6f7;
    padding: 30px 10px;
}
/* head */
.head p{
    font-size: 15px;
    text-align: center;
    color: rgb(109, 108, 108);
}
/* body */
.body{
    width: 100%;
    /* height: 250px; */
    /* border: 1px solid red; */
}
.box{
  /* height: 150px; */
  /* border: 1px solid red; */
  color: rgb(85, 85, 85);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 10px;
  font-size: 13px;
  border-radius: 15px;
}
.box:hover{
  background-color: rgb(234, 253, 253);
}
.lineone{
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  color: black;
}
.lineone .lineonespan2{
  color: rgb(5, 167, 5);
}
.linetwo{
  margin-top: 8px;
}
.linethree{
  margin-top: 8px;
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
  margin-top: 8px;
}
.linefour .left{
  display: flex;
  flex-direction: row;
}
.linefour .left img{
  width: 30px;
  height: 30px;
  margin: 5px;
  border-radius: 50%;
}
.linefour .left .name{
  line-height: 35px;
  margin-left: 10px;
}
.linefour .right span{
  line-height: 40px;
}
/* body */
.body{
    margin-top: 30px;
    display: flex;
    flex-direction: column;
}
.body .right{
    float: right;
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
    /* border: 1px solid red; */
}
.body .right .rightchat{
    border-radius: 10px 10px 0px 10px;
    margin-left: 50px;
    color: #fff;
    background-color: #10c497;
    font-size: 15px;
    padding: 7px;
}
.body .right img{
  width: 30px;
  height: 30px;
  margin: 25px 5px 0px 5px;
  border-radius: 50%;
}
/*  */
.body .left{
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    /* border: 1px solid red; */
}
.body .left img{
  width: 30px;
  height: 30px;
  margin: 65px 5px 0px 5px;
  border-radius: 50%;
}
.body .left .leftchat{
  border-radius: 10px 10px 10px 0px;
  margin-right: 50px;
  color: black;
  background-color: #fff;
  font-size: 15px;
  padding: 7px;
  /* border: 1px solid red; */
}
.body .left .leftchat .hard{
  display: flex;
  flex-direction: row;
}
.body .left .leftchat .hard .icon{
  width: 50px;
  height: 50px;
}
.body .left .leftchat .hard span{
  margin-left: 10px;
}
.body .left .leftchat .foot{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.body .left .leftchat .foot button{
  width: 45%;
  height: 30px;
  margin-top: 10px;
  border: none;
  border-radius: 10px;
}
.body .left .leftchat .foot button:hover{
  background-color: #c9c9c9;
  cursor: pointer;
}
.body .resume{
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
}
.body .resume .resumebox{
  width: 65%;
  height: 100px;
  border: 1px solid rgb(30, 236, 243);
  background-color: rgb(241, 253, 253);
  padding: 15px;
  border-radius: 10px;
}
.body .resume .resumebox .hard{
  height: 50%;
  display: flex;
  flex-direction: row;
}
.body .resume .resumebox .hard .icon{
  width: 30px;
}
.body .resume .resumebox .hard span{
  line-height: 35px;
  margin-left: 10px;
}
.body .resume .resumebox button{
  width: 100%;
  height: 35%;
  border-radius: 10px;
  border: none;
  background-color: rgb(211, 240, 241);
}
.body .resume .resumebox button:hover{
  cursor: pointer;
  background-color: rgb(123, 238, 241);
}
</style>