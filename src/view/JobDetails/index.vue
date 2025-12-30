<template>
  <div>
    <div class="head">
        <span class="title">{{ $route.query.lineonespan1 }}</span>
        <span class="salary">{{ $route.query.lineonespan2 }}</span>
        <div class="box">
            <span>{{ $route.query.linefourspan3 }}</span>
            <span>{{ $route.query.linethreespan1 }}</span>
            <span>{{ $route.query.linethreespan4 }}</span>
            <span>{{ $route.query.linethreespan2 }}</span>
        </div>
    </div>
    <a href="">
        <div class="namecard">
            <img src="../../assets/avatar.jpg" alt="">
            <div class="space-between">
                <div class="left">
                    <span>{{ $route.query.linefourspan1 }}</span>
                    <span>{{ $route.query.linetwospan }}*HR</span>
                    <span>今日活跃</span>
                </div>
                <div class="right">
                    <span>></span>
                </div>
            </div>
        </div>
    </a>
    <div class="details">
        <p>职位详情</p>
        <span class="label">{{ $route.query.linethreespan3 }}</span>
        <span class="label">{{ $route.query.linethreespan4 }}</span>
        <p class="zzms">职责描述：</p>
        <li>1、能按时完成各项前端研发手机及研发任务；</li>
        <li>2、能指导处理前端开发的各项问题；</li>
        <li>3、能指导分析处理用户遇到的各种前端使用问题；</li>
        <li>4、能根据项目情况和业务需求，快速完成架构优化，能独立完成移动前端定制化架构设计和搭建；</li>
    </div>
    <div class="ygfl">
        <p>员工福利</p>
        <span class="label">五险一金</span>
    </div>
    <a href="">
        <div class="groupcard">
            <img src="../../assets/avatar.jpg" alt="">
            <div class="space-between">
                <div class="left">
                    <span>{{ $route.query.linetwospan }}</span>
                    <span>不需要融资*20-99人</span>
                    <span>今日活跃</span>
                </div>
                <div class="right">
                    <span>></span>
                </div>
            </div>
        </div>
    </a>
    <div class="foot">
        <p>BOSS安全提示</p>
        <span>
            BOSS直聘严禁用人单位和招聘者用户做出任何损害求职者合法权益的违法违规行为，包括但不限于扣押求职者证件、收取求职者财物、向求职者集资、让求职者入股、诱导求职者异地入职、异地参加培训、违法违规使用求职者简历等，您一旦发现此类行为
        </span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
a{
    text-decoration: none;
}
.head{
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid rgb(241, 241, 241);
}
.head span{
    margin-bottom: 8px;
}
.head .title{
    font-size: 25px;
    color: black;
}
.head .salary{
    font-size: 18px;
    color: rgb(5, 167, 5);
}
.head .box{
    margin-bottom: 8px;
}
.head .box span{
    color: rgb(109, 109, 109);
    margin-right: 10px;
}
/*  */
.namecard{
    display: flex;
    flex-direction: row;
    padding: 10px;
    border-bottom: 1px solid rgb(241, 241, 241);
}
.namecard img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 10px 0px 10px 0px;
}
.namecard .space-between{
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.namecard .space-between .left{
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    color: black;
}
.namecard .space-between .right span{
    line-height: 80px;
}
/*  */
.details p,
.ygfl p{
    font-size: 18px;
}
.details .label,
.ygfl .label{
    padding: 5px;
    background-color: rgb(241, 241, 241);
    margin-left: 5px;
}
.details .zzms{
    margin-top: 30px;
    font-size: 15px;
}
/*  */
.groupcard{
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    padding: 10px;
    border-top: 1px solid rgb(241, 241, 241);
    border-bottom: 1px solid rgb(241, 241, 241);
}
.groupcard img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 10px 0px 10px 0px;
}
.groupcard .space-between{
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.groupcard .space-between .left{
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    color: black;
}
.groupcard .space-between .right span{
    line-height: 80px;
}
/*  */
.foot span{
    color: rgb(109, 109, 109);
    margin-right: 10px;
}
</style>