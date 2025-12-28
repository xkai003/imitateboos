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
          hardspan: "唐同学",
          bodyspan: "前端大牛小凯",
          footspan1: "8888",
          footspan2: "8888",
          footspan3: "8888"
        },
        {
          hardimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          hardspan: "李同学",
          bodyspan: "前端大牛小凯",
          footspan1: "8888",
          footspan2: "8888",
          footspan3: "8888"
        },
        {
          hardimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          hardspan: "李同学",
          bodyspan: "前端大牛小凯",
          footspan1: "8888",
          footspan2: "8888",
          footspan3: "8888"
        },
        {
          hardimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          hardspan: "李同学",
          bodyspan: "前端大牛小凯",
          footspan1: "8888",
          footspan2: "8888",
          footspan3: "8888"
        },
        {
          hardimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          hardspan: "黄同学",
          bodyspan: "前端大牛小凯",
          footspan1: "8888",
          footspan2: "8888",
          footspan3: "8888"
        },
        {
          hardimg: new URL('/src/assets/avatar.jpg', import.meta.url).href,
          hardspan: "林同学",
          bodyspan: "前端大牛小凯",
          footspan1: "8888",
          footspan2: "8888",
          footspan3: "8888"
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