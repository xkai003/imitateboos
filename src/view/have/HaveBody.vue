<template>
  <a href="" v-for="item in list" :key="item.id">
    <div class="box">
      <div class="hard">
        <img :src="item.hardimg" alt="">
        <div class="name">
          <span>{{ item.hardspan }}</span>
        </div>
      </div>
      <div class="body">
        <span>{{ item.bodyspan }}</span>
      </div>
      <div class="foot">
        <div>
          <svg t="1766323823513" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="19836"><path d="M513.354736 969.810549c-31.429882 0-61.775975-15.534309-83.090492-42.448404l-59.066502-74.962074c-25.288411-32.152408-83.451755-60.330923-124.274475-60.330923H131.680367c-69.181866 0-125.358264-56.176398-125.358264-125.358264V216.215911c0-69.181866 56.176398-125.358264 125.358264-125.358264h763.52937c69.181866 0 125.358264 56.176398 125.358264 125.358264V666.530252c0 69.181866-56.176398 125.358264-125.358264 125.358264h-115.423531c-40.82272 0-98.986065 28.178515-124.274476 60.330923l-59.066502 74.962074c-21.314518 27.094726-51.66061 42.629035-83.090492 42.629036zM131.680367 156.246252c-33.055565 0-59.96966 26.914094-59.96966 59.969659V666.530252c0 33.055565 26.914094 59.96966 59.96966 59.96966h115.423531c60.872817 0 138.00247 37.390721 175.754454 85.25807l59.066502 74.962074c8.850944 11.379785 20.230729 17.521256 31.610514 17.521256 11.560416 0 22.75957-6.322103 31.610513-17.521256l59.066502-74.962074c37.571353-47.867349 114.881637-85.25807 175.754454-85.25807h115.423532c33.055565 0 59.96966-26.914094 59.969659-59.96966V216.215911c0-33.055565-26.914094-59.96966-59.969659-59.969659H131.680367z" fill="#333333" p-id="19837"></path></svg>
          <span>{{ item.footspan1 }}</span>
        </div>
        <div>
          <svg t="1766323875162" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="20997"><path d="M327.728136 804.301276l150.60509-60.966537 33.721009-13.627369 33.721009 13.627369 150.609183 60.914348-4.484128-166.562527-0.907673-32.985252 20.663622-25.711592 96.563266-120.353089L652.842749 411.574776l-30.030967-9.081843-17.825994-25.716708-92.931552-134.033669-92.871177 134.033669-17.825994 25.716708-30.033014 9.081843-155.490354 47.120181 96.566336 120.29476 20.663622 25.711592-0.907673 32.985252L327.728136 804.301276M789.940197 939.129031 512.054235 826.727031 234.17339 939.129031l8.115841-303.886125L62.389956 411.175687l282.879696-85.667102L512.054235 84.869946l166.843936 240.638639 282.711873 85.667102L781.766027 635.243929 789.940197 939.129031 789.940197 939.129031 789.940197 939.129031z" fill="#888888" p-id="20998"></path></svg>
          <span>{{ item.footspan2 }}</span>
        </div>
        <div>
          <svg t="1766323910787" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="21162"><path d="M707.584 93.184c-77.312 0-148.992 38.912-196.608 102.912-47.104-64-119.296-102.912-196.608-102.912-139.264 0-252.416 123.904-252.416 275.968 0 90.624 40.448 154.624 73.216 205.824C229.888 723.968 468.48 908.8 478.72 916.48c9.728 7.68 20.992 11.264 32.256 11.264s22.528-3.584 32.256-11.264c10.24-7.68 248.32-193.024 343.552-341.504 32.768-51.2 73.216-115.2 73.216-205.824 0-152.064-113.152-275.968-252.416-275.968zM821.76 573.44c-87.552 122.88-272.896 263.168-282.112 269.824-8.704 6.656-18.944 10.24-28.672 10.24-10.24 0-19.968-3.072-28.672-10.24-9.216-6.656-190.976-148.48-282.112-274.944-29.184-46.08-75.776-103.424-75.776-184.32 0-136.192 75.776-231.936 200.192-231.936 69.12 0 144.384 66.048 186.368 123.392 42.496-57.344 117.248-123.392 186.368-123.392 124.928 0 205.824 95.744 205.824 231.936 0 80.896-51.712 143.872-81.408 189.44z" fill="" p-id="21163"></path></svg>
          <span>{{ item.footspan3 }}</span>
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
          hardspan: "魏同学",
          bodyspan: "今年辞职了两次，发现一个特别无奈的现象。无论你是被辞退的还是自己主动离职的，你关系特别好的那些同事都会渐渐远离你。",
          footspan1: "380",
          footspan2: "344",
          footspan3: "449"
        },
        {
          hardimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          hardspan: "余同学",
          bodyspan: "我会javascript、html、css、node、npm、安装vue脚手架、组件化、模块化，还是没人要。",
          footspan1: "73",
          footspan2: "62",
          footspan3: "32"
        },
        {
          hardimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          hardspan: "李同学",
          bodyspan: "面试了小二十几家公司，发现好的中小型公司都不注重前端的基本功。老是成套的问一些框架和类的使用。",
          footspan1: "33",
          footspan2: "354",
          footspan3: "34"
        },
        {
          hardimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          hardspan: "罗同学",
          bodyspan: "一进去就让你填表的大多都是HR刷业绩的。",
          footspan1: "92",
          footspan2: "535",
          footspan3: "63"
        },
        {
          hardimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          hardspan: "黄同学",
          bodyspan: "累了，投了这么多简历，有回复的都是在珠三角，全部不同意线上面试，可是一个个地方跑，成本实在太高了。",
          footspan1: "1",
          footspan2: "20",
          footspan3: "10"
        },
        {
          hardimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          hardspan: "王同学",
          bodyspan: "首先应届毕业生分两种，一种是即将毕业还没拿到毕业证处于实习或待业状态的，一种是拿到毕业证，但时间处于择业期间。",
          footspan1: "51",
          footspan2: "167",
          footspan3: "239"
        },
        // --- 以下是新增的30条数据 ---
        {
          hardimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          hardspan: "赵同学",
          bodyspan: "工作三年，技术没涨多少，发际线倒是越来越高了。",
          footspan1: "128",
          footspan2: "89",
          footspan3: "102"
        },
        {
          hardimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          hardspan: "陈同学",
          bodyspan: "面试造火箭，工作拧螺丝。这句调侃真的越来越有体会了。",
          footspan1: "256",
          footspan2: "178",
          footspan3: "211"
        },
        {
          hardimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          hardspan: "刘同学",
          bodyspan: "学了半年React，感觉自己已经掌握了宇宙的真理，结果找工作处处碰壁。",
          footspan1: "42",
          footspan2: "31",
          footspan3: "15"
        },
        {
          hardimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          hardspan: "杨同学",
          bodyspan: "前端真的是一个需要不断学习的职业，三天不学感觉就要被淘汰了。",
          footspan1: "99",
          footspan2: "108",
          footspan3: "124"
        },
        {
          hardimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          hardspan: "吴同学",
          bodyspan: "今天又被产品经理怼了，说我做的页面不符合他的审美，可他又说不出来哪里不好。",
          footspan1: "155",
          footspan2: "203",
          footspan3: "187"
        },
        {
          hardimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          hardspan: "郑同学",
          bodyspan: "终于下定决心从外包公司跳出来了，希望下一份工作能稳定一点。",
          footspan1: "76",
          footspan2: "54",
          footspan3: "68"
        },
        {
          hardimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          hardspan: "郭同学",
          bodyspan: "感觉现在的前端框架更新太快了，Vue 3还没玩熟，Vite又出来了。",
          footspan1: "111",
          footspan2: "90",
          footspan3: "85"
        },
        {
          hardimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          hardspan: "何同学",
          bodyspan: "今天面试被问到了闭包，我解释了半天，面试官最后说：“你可能对闭包有什么误解”。",
          footspan1: "29",
          footspan2: "45",
          footspan3: "33"
        },
        {
          hardimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          hardspan: "高同学",
          bodyspan: "每天最开心的事情就是下班的那一刻，关掉电脑，感觉整个世界都清净了。",
          footspan1: "201",
          footspan2: "156",
          footspan3: "179"
        },
        {
          hardimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          hardspan: "林同学",
          bodyspan: "自学前端一年，投了500份简历，终于拿到了第一个面试邀请，激动得睡不着觉。",
          footspan1: "8",
          footspan2: "12",
          footspan3: "5"
        },
        {
          hardimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          hardspan: "胡同学",
          bodyspan: "今天在代码里发现了一个三年前的bug，不知道这三年它是怎么存活下来的。",
          footspan1: "143",
          footspan2: "130",
          footspan3: "121"
        },
        {
          hardimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          hardspan: "钟同学",
          bodyspan: "前端薪资真的两极分化，有的人毕业就月薪2万，有的人工作三年还在8000徘徊。",
          footspan1: "302",
          footspan2: "288",
          footspan3: "315"
        },
        {
          hardimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          hardspan: "徐同学",
          bodyspan: "现在的招聘要求真的越来越高了，一个初级前端岗位，要求会Vue、React、小程序、还要有Node.js经验。",
          footspan1: "188",
          footspan2: "210",
          footspan3: "195"
        },
        {
          hardimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          hardspan: "孙同学",
          bodyspan: "今天又加班到晚上11点，感觉身体被掏空，真的不想再做程序员了。",
          footspan1: "225",
          footspan2: "240",
          footspan3: "233"
        },
        {
          hardimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          hardspan: "马同学",
          bodyspan: "终于把那个祖传的jQuery项目重构完了，用Vue重写之后，感觉整个世界都美好了。",
          footspan1: "95",
          footspan2: "88",
          footspan3: "101"
        },
        {
          hardimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          hardspan: "朱同学",
          bodyspan: "面试的时候，面试官问我有没有什么想问他的，我问：“你们公司加班严重吗？”，然后面试官就不说话了。",
          footspan1: "67",
          footspan2: "72",
          footspan3: "59"
        },
        {
          hardimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          hardspan: "秦同学",
          bodyspan: "感觉自己的技术栈太单一了，只会写页面，想学习一下后端知识，但是又不知道从哪里开始。",
          footspan1: "44",
          footspan2: "38",
          footspan3: "29"
        },
        {
          hardimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          hardspan: "尤同学",
          bodyspan: "今天看到尤雨溪发微博了，感觉离偶像又近了一步，加油，打工人！",
          footspan1: "135",
          footspan2: "122",
          footspan3: "140"
        },
        {
          hardimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          hardspan: "许同学",
          bodyspan: "投了一个月的简历，终于拿到了一个offer，薪资虽然不是很高，但是平台还不错，先干着吧。",
          footspan1: "52",
          footspan2: "41",
          footspan3: "37"
        },
        {
          hardimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          hardspan: "蒋同学",
          bodyspan: "今天在GitHub上看到一个特别牛的项目，感觉自己就是个菜鸡，还要继续努力啊。",
          footspan1: "88",
          footspan2: "76",
          footspan3: "91"
        },
        {
          hardimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          hardspan: "蔡同学",
          bodyspan: "前端真的是一个神奇的职业，你永远不知道用户的浏览器会给你带来什么惊喜。",
          footspan1: "166",
          footspan2: "150",
          footspan3: "172"
        },
        {
          hardimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          hardspan: "潘同学",
          bodyspan: "今天又和设计师吵架了，他说我还原的设计稿有问题，我说他的设计稿有问题，最后谁也说服不了谁。",
          footspan1: "199",
          footspan2: "215",
          footspan3: "208"
        },
        {
          hardimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          hardspan: "袁同学",
          bodyspan: "感觉自己的职业生涯遇到了瓶颈，不知道该往哪个方向发展，有点迷茫。",
          footspan1: "71",
          footspan2: "63",
          footspan3: "55"
        },
        {
          hardimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          hardspan: "于同学",
          bodyspan: "今天学习了TypeScript，感觉打开了新世界的大门，之前写的JavaScript都是垃圾。",
          footspan1: "105",
          footspan2: "99",
          footspan3: "112"
        },
        {
          hardimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          hardspan: "杜同学",
          bodyspan: "面试的时候被问到了HTTP状态码，我只记得200和404，然后就没有然后了。",
          footspan1: "35",
          footspan2: "28",
          footspan3: "22"
        },
        {
          hardimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          hardspan: "沈同学",
          bodyspan: "终于买了一台属于自己的MacBook Pro，感觉敲代码的速度都变快了。",
          footspan1: "120",
          footspan2: "105",
          footspan3: "118"
        },
        {
          hardimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          hardspan: "程同学",
          bodyspan: "今天在Stack Overflow上提了一个问题，被大神喷了一顿，说我这是基础问题，让我去看文档。",
          footspan1: "49",
          footspan2: "58",
          footspan3: "44"
        },
        {
          hardimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          hardspan: "吕同学",
          bodyspan: "感觉现在的前端市场越来越卷了，不学习真的不行啊。",
          footspan1: "177",
          footspan2: "165",
          footspan3: "181"
        },
        {
          hardimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          hardspan: "丁同学",
          bodyspan: "今天写了一个特别牛的组件，感觉自己就是世界上最厉害的程序员，哈哈。",
          footspan1: "83",
          footspan2: "70",
          footspan3: "92"
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
.box .hard{
  display: flex;
  flex-direction: row;
}
.box .hard img{
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.box .hard .name{
  margin-left: 10px;
}
.box .body{
  font-size: clamp(14px, 1.5vw, 16px);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.box .foot{
  display: flex;
  justify-content: space-between;
  padding: 0px 30px 0px 30px;
}
.box .foot div{
  display: flex;
  flex-direction: row;
}
.box .foot .icon{
  width: 20px;
  height: 20px;
}
.box .foot span{
  margin-left: 5px;

}
</style>