<template>
  <div>
    <JobDetailsHead></JobDetailsHead>
    <JobDetailsBody></JobDetailsBody>
    <JobDetailsFoot></JobDetailsFoot>
  </div>
</template>

<script>
import JobDetailsHead from './JobDetailsHead.vue';
import JobDetailsBody from './JobDetailsBody.vue';
import JobDetailsFoot from './JobDetailsFoot.vue';
export default {
    components: {
        JobDetailsHead,
        JobDetailsBody,
        JobDetailsFoot
        
    }
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