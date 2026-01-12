<template>
  <div class="background">
    <div class="head">
        <p>以下是30天内的聊天记录</p>
        <p>{{ $route.query.time|| "15:00" }}</p>
        
    </div>
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
    <div class="body">
        <div>
            <div class="right">
                <div class="rightchat">
                    <span>你好，看到你的招聘信息，我很感兴趣，希望可以进一步沟通。</span>
                </div>
                <img src="../../assets/avatar.jpg" alt="">
            </div>
        </div>
        <div>
            <div class="left">
                <img :src="$route.query.hardimg || '/src/assets/HR_avatar.jpg'" alt="">
                <div class="leftchat">
                    <span>你好，方便发一份简历过来吗？</span>
                </div>
            </div>
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
    margin-top: 120px;
    height: 100vh;
    background-color: #f5f6f7;
    padding: 0px 10px;
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
    height: 250px;
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
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    /* border: 1px solid red; */
}
.body .left .leftchat{
    border-radius: 10px 10px 10px 0px;
    margin-right: 50px;
    color: black;
    background-color: #fff;
    font-size: 15px;
    padding: 7px;
}
.body .left img{
  width: 30px;
  height: 30px;
  margin: 25px 5px 0px 5px;
  border-radius: 50%;
}
</style>