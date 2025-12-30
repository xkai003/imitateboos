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
      list :[
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "UI设计师",
          "lineonespan2": "8000-12000元",
          "linetwospan": "广州小凯有限公司",
          "linethreespan1": "1-3年",
          "linethreespan2": "本科",
          "linethreespan3": "视觉设计",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "王女士*招聘者",
          "linefourspan2": "回复率高",
          "linefourspan3": "广州&nbsp;天河区&nbsp;岗顶"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "后端开发",
          "lineonespan2": "12000-18000元",
          "linetwospan": "深圳未来科技",
          "linethreespan1": "3-5年",
          "linethreespan2": "本科",
          "linethreespan3": "Java",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "李经理*招聘者",
          "linefourspan2": "已认证",
          "linefourspan3": "深圳&nbsp;南山区&nbsp;科技园"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "新媒体运营",
          "lineonespan2": "5000-8000元",
          "linetwospan": "北京启航软件",
          "linethreespan1": "经验不限",
          "linethreespan2": "大专",
          "linethreespan3": "内容运营",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "张先生*招聘者",
          "linefourspan2": "回复率高",
          "linefourspan3": "北京&nbsp;海淀区&nbsp;中关村"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "运维工程师",
          "lineonespan2": "9000-15000元",
          "linetwospan": "上海星辰互动",
          "linethreespan1": "1-3年",
          "linethreespan2": "大专",
          "linethreespan3": "Linux",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "刘女士*招聘者",
          "linefourspan2": "回复率高",
          "linefourspan3": "上海&nbsp;浦东新区&nbsp;陆家嘴"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "数据分析师",
          "lineonespan2": "10000-16000元",
          "linetwospan": "杭州云帆数据",
          "linethreespan1": "3-5年",
          "linethreespan2": "本科",
          "linethreespan3": "Python",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "陈经理*招聘者",
          "linefourspan2": "已认证",
          "linefourspan3": "杭州&nbsp;西湖区&nbsp;文三路"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "电商运营",
          "lineonespan2": "6000-10000元",
          "linetwospan": "成都极速网络",
          "linethreespan1": "1-3年",
          "linethreespan2": "大专",
          "linethreespan3": "淘宝",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "杨先生*招聘者",
          "linefourspan2": "回复率高",
          "linefourspan3": "成都&nbsp;武侯区&nbsp;天府广场"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "测试工程师",
          "lineonespan2": "8000-13000元",
          "linetwospan": "武汉智慧教育",
          "linethreespan1": "1-3年",
          "linethreespan2": "大专",
          "linethreespan3": "自动化测试",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "赵女士*招聘者",
          "linefourspan2": "回复率高",
          "linefourspan3": "武汉&nbsp;洪山区&nbsp;光谷"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "网络安全工程师",
          "lineonespan2": "15000-25000元",
          "linetwospan": "西安绿能科技",
          "linethreespan1": "3-5年",
          "linethreespan2": "本科",
          "linethreespan3": "渗透测试",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "黄经理*招聘者",
          "linefourspan2": "已认证",
          "linefourspan3": "西安&nbsp;雁塔区&nbsp;高新区"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "产品经理",
          "lineonespan2": "12000-20000元",
          "linetwospan": "南京光影视觉",
          "linethreespan1": "3-5年",
          "linethreespan2": "本科",
          "linethreespan3": "需求分析",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "周先生*招聘者",
          "linefourspan2": "回复率高",
          "linefourspan3": "南京&nbsp;江宁区&nbsp;大学城"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "销售代表",
          "lineonespan2": "5000-15000元",
          "linetwospan": "苏州磐石安全",
          "linethreespan1": "经验不限",
          "linethreespan2": "学历不限",
          "linethreespan3": "客户开发",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "吴女士*招聘者",
          "linefourspan2": "回复率高",
          "linefourspan3": "苏州&nbsp;工业园区"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "前端开发",
          "lineonespan2": "9000-15000元",
          "linetwospan": "广州环球贸易",
          "linethreespan1": "1-3年",
          "linethreespan2": "大专",
          "linethreespan3": "Vue",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "郑经理*招聘者",
          "linefourspan2": "已认证",
          "linefourspan3": "广州&nbsp;白云区&nbsp;嘉禾"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "全栈工程师",
          "lineonespan2": "15000-25000元",
          "linetwospan": "深圳创想科技",
          "linethreespan1": "3-5年",
          "linethreespan2": "本科",
          "linethreespan3": "React",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "马先生*招聘者",
          "linefourspan2": "回复率高",
          "linefourspan3": "深圳&nbsp;福田区&nbsp;华强北"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "内容运营",
          "lineonespan2": "6000-9000元",
          "linetwospan": "北京恒信集团",
          "linethreespan1": "1-3年",
          "linethreespan2": "本科",
          "linethreespan3": "文案",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "朱女士*招聘者",
          "linefourspan2": "回复率高",
          "linefourspan3": "北京&nbsp;朝阳区&nbsp;CBD"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "人力资源专员",
          "lineonespan2": "5000-8000元",
          "linetwospan": "上海腾跃网络",
          "linethreespan1": "1-3年",
          "linethreespan2": "大专",
          "linethreespan3": "招聘",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "胡经理*招聘者",
          "linefourspan2": "已认证",
          "linefourspan3": "上海&nbsp;徐汇区&nbsp;漕河泾"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "算法工程师",
          "lineonespan2": "20000-35000元",
          "linetwospan": "杭州博远数据",
          "linethreespan1": "3-5年",
          "linethreespan2": "硕士",
          "linethreespan3": "机器学习",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "林先生*招聘者",
          "linefourspan2": "回复率高",
          "linefourspan3": "杭州&nbsp;滨江区&nbsp;阿里巴巴"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "活动运营",
          "lineonespan2": "7000-11000元",
          "linetwospan": "成都锐捷通信",
          "linethreespan1": "1-3年",
          "linethreespan2": "本科",
          "linethreespan3": "策划",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "郭女士*招聘者",
          "linefourspan2": "回复率高",
          "linefourspan3": "成都&nbsp;高新区&nbsp;软件园"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "财务会计",
          "lineonespan2": "6000-10000元",
          "linetwospan": "武汉新方向教育",
          "linethreespan1": "3-5年",
          "linethreespan2": "本科",
          "linethreespan3": "税务",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "何经理*招聘者",
          "linefourspan2": "已认证",
          "linefourspan3": "武汉&nbsp;武昌区&nbsp;中南路"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "平面设计师",
          "lineonespan2": "7000-12000元",
          "linetwospan": "西安华信能源",
          "linethreespan1": "1-3年",
          "linethreespan2": "大专",
          "linethreespan3": "PS",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "高先生*招聘者",
          "linefourspan2": "回复率高",
          "linefourspan3": "西安&nbsp;未央区&nbsp;经济开发区"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "SEO优化师",
          "lineonespan2": "8000-15000元",
          "linetwospan": "南京视觉艺术",
          "linethreespan1": "3-5年",
          "linethreespan2": "本科",
          "linethreespan3": "搜索引擎优化",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "罗女士*招聘者",
          "linefourspan2": "回复率高",
          "linefourspan3": "南京&nbsp;秦淮区&nbsp;夫子庙"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "游戏策划",
          "lineonespan2": "10000-18000元",
          "linetwospan": "苏州安邦卫士",
          "linethreespan1": "1-3年",
          "linethreespan2": "本科",
          "linethreespan3": "数值策划",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "郑经理*招聘者",
          "linefourspan2": "已认证",
          "linefourspan3": "苏州&nbsp;姑苏区&nbsp;观前街"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "嵌入式开发",
          "lineonespan2": "12000-20000元",
          "linetwospan": "广州小凯有限公司",
          "linethreespan1": "3-5年",
          "linethreespan2": "本科",
          "linethreespan3": "C语言",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "王先生*招聘者",
          "linefourspan2": "回复率高",
          "linefourspan3": "广州&nbsp;黄埔区&nbsp;科学城"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "行政助理",
          "lineonespan2": "4000-6000元",
          "linetwospan": "深圳未来科技",
          "linethreespan1": "经验不限",
          "linethreespan2": "大专",
          "linethreespan3": "办公软件",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "李女士*招聘者",
          "linefourspan2": "回复率高",
          "linefourspan3": "深圳&nbsp;宝安区&nbsp;西乡"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "市场营销",
          "lineonespan2": "8000-15000元",
          "linetwospan": "北京启航软件",
          "linethreespan1": "3-5年",
          "linethreespan2": "本科",
          "linethreespan3": "品牌推广",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "张经理*招聘者",
          "linefourspan2": "已认证",
          "linefourspan3": "北京&nbsp;海淀区&nbsp;上地"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "客服专员",
          "lineonespan2": "4000-6000元",
          "linetwospan": "上海星辰互动",
          "linethreespan1": "经验不限",
          "linethreespan2": "中专",
          "linethreespan3": "电话客服",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "刘先生*招聘者",
          "linefourspan2": "回复率高",
          "linefourspan3": "上海&nbsp;静安区&nbsp;南京西路"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "出纳",
          "lineonespan2": "4000-6000元",
          "linetwospan": "杭州云帆数据",
          "linethreespan1": "1-3年",
          "linethreespan2": "大专",
          "linethreespan3": "资金管理",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "陈女士*招聘者",
          "linefourspan2": "回复率高",
          "linefourspan3": "杭州&nbsp;江干区&nbsp;钱江新城"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "视频剪辑师",
          "lineonespan2": "7000-12000元",
          "linetwospan": "成都极速网络",
          "linethreespan1": "1-3年",
          "linethreespan2": "大专",
          "linethreespan3": "PR",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "杨经理*招聘者",
          "linefourspan2": "已认证",
          "linefourspan3": "成都&nbsp;锦江区&nbsp;春熙路"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "SEM投放",
          "lineonespan2": "9000-16000元",
          "linetwospan": "武汉智慧教育",
          "linethreespan1": "3-5年",
          "linethreespan2": "本科",
          "linethreespan3": "百度推广",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "赵先生*招聘者",
          "linefourspan2": "回复率高",
          "linefourspan3": "武汉&nbsp;江汉区&nbsp;王家墩"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "游戏美术",
          "lineonespan2": "10000-18000元",
          "linetwospan": "西安绿能科技",
          "linethreespan1": "1-3年",
          "linethreespan2": "大专",
          "linethreespan3": "角色设计",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "黄女士*招聘者",
          "linefourspan2": "回复率高",
          "linefourspan3": "西安&nbsp;雁塔区&nbsp;小寨"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "电气工程师",
          "lineonespan2": "10000-18000元",
          "linetwospan": "南京光影视觉",
          "linethreespan1": "3-5年",
          "linethreespan2": "本科",
          "linethreespan3": "PLC",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "周经理*招聘者",
          "linefourspan2": "已认证",
          "linefourspan3": "南京&nbsp;建邺区&nbsp;河西"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "机械工程师",
          "lineonespan2": "12000-20000元",
          "linetwospan": "苏州磐石安全",
          "linethreespan1": "3-5年",
          "linethreespan2": "本科",
          "linethreespan3": "CAD",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "吴先生*招聘者",
          "linefourspan2": "回复率高",
          "linefourspan3": "苏州&nbsp;吴中区&nbsp;木渎"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "前端开发",
          "lineonespan2": "7000-12000元",
          "linetwospan": "广州环球贸易",
          "linethreespan1": "1-3年",
          "linethreespan2": "大专",
          "linethreespan3": "React",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "郑女士*招聘者",
          "linefourspan2": "回复率高",
          "linefourspan3": "广州&nbsp;荔湾区&nbsp;上下九"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "后端开发",
          "lineonespan2": "10000-18000元",
          "linetwospan": "深圳创想科技",
          "linethreespan1": "3-5年",
          "linethreespan2": "本科",
          "linethreespan3": "Python",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "马经理*招聘者",
          "linefourspan2": "已认证",
          "linefourspan3": "深圳&nbsp;龙岗区&nbsp;坂田"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "新媒体运营",
          "lineonespan2": "5000-8000元",
          "linetwospan": "北京恒信集团",
          "linethreespan1": "经验不限",
          "linethreespan2": "大专",
          "linethreespan3": "短视频",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "朱先生*招聘者",
          "linefourspan2": "回复率高",
          "linefourspan3": "北京&nbsp;丰台区&nbsp;总部基地"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "运维工程师",
          "lineonespan2": "8000-14000元",
          "linetwospan": "上海腾跃网络",
          "linethreespan1": "1-3年",
          "linethreespan2": "大专",
          "linethreespan3": "Docker",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "胡女士*招聘者",
          "linefourspan2": "回复率高",
          "linefourspan3": "上海&nbsp;虹口区&nbsp;北外滩"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "数据分析师",
          "lineonespan2": "9000-15000元",
          "linetwospan": "杭州博远数据",
          "linethreespan1": "3-5年",
          "linethreespan2": "本科",
          "linethreespan3": "SQL",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "林经理*招聘者",
          "linefourspan2": "已认证",
          "linefourspan3": "杭州&nbsp;西湖区&nbsp;黄龙"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "电商运营",
          "lineonespan2": "6000-10000元",
          "linetwospan": "成都锐捷通信",
          "linethreespan1": "1-3年",
          "linethreespan2": "大专",
          "linethreespan3": "京东",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "郭先生*招聘者",
          "linefourspan2": "回复率高",
          "linefourspan3": "成都&nbsp;成华区&nbsp;建设路"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "测试工程师",
          "lineonespan2": "7000-12000元",
          "linetwospan": "武汉新方向教育",
          "linethreespan1": "1-3年",
          "linethreespan2": "大专",
          "linethreespan3": "功能测试",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "何女士*招聘者",
          "linefourspan2": "回复率高",
          "linefourspan3": "武汉&nbsp;洪山区&nbsp;街道口"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "网络安全工程师",
          "lineonespan2": "13000-22000元",
          "linetwospan": "西安华信能源",
          "linethreespan1": "3-5年",
          "linethreespan2": "本科",
          "linethreespan3": "安全防护",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "高经理*招聘者",
          "linefourspan2": "已认证",
          "linefourspan3": "西安&nbsp;高新区&nbsp;锦业路"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "产品经理",
          "lineonespan2": "11000-19000元",
          "linetwospan": "南京视觉艺术",
          "linethreespan1": "3-5年",
          "linethreespan2": "本科",
          "linethreespan3": "用户研究",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "罗先生*招聘者",
          "linefourspan2": "回复率高",
          "linefourspan3": "南京&nbsp;鼓楼区&nbsp;湖南路"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "销售代表",
          "lineonespan2": "5000-15000元",
          "linetwospan": "苏州安邦卫士",
          "linethreespan1": "经验不限",
          "linethreespan2": "学历不限",
          "linethreespan3": "渠道销售",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "郑女士*招聘者",
          "linefourspan2": "回复率高",
          "linefourspan3": "苏州&nbsp;相城区&nbsp;元和"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "UI设计师",
          "lineonespan2": "7000-12000元",
          "linetwospan": "广州小凯有限公司",
          "linethreespan1": "1-3年",
          "linethreespan2": "本科",
          "linethreespan3": "交互设计",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "王先生*招聘者",
          "linefourspan2": "回复率高",
          "linefourspan3": "广州&nbsp;天河区&nbsp;珠江新城"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "全栈工程师",
          "lineonespan2": "14000-24000元",
          "linetwospan": "深圳未来科技",
          "linethreespan1": "3-5年",
          "linethreespan2": "本科",
          "linethreespan3": "Vue",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "李经理*招聘者",
          "linefourspan2": "已认证",
          "linefourspan3": "深圳&nbsp;南山区&nbsp;蛇口"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "内容运营",
          "lineonespan2": "6000-9000元",
          "linetwospan": "北京启航软件",
          "linethreespan1": "1-3年",
          "linethreespan2": "本科",
          "linethreespan3": "新媒体",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "张先生*招聘者",
          "linefourspan2": "回复率高",
          "linefourspan3": "北京&nbsp;海淀区&nbsp;五道口"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "人力资源专员",
          "lineonespan2": "5000-8000元",
          "linetwospan": "上海星辰互动",
          "linethreespan1": "1-3年",
          "linethreespan2": "大专",
          "linethreespan3": "薪酬福利",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "刘女士*招聘者",
          "linefourspan2": "回复率高",
          "linefourspan3": "上海&nbsp;浦东新区&nbsp;张江"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "算法工程师",
          "lineonespan2": "18000-32000元",
          "linetwospan": "杭州云帆数据",
          "linethreespan1": "3-5年",
          "linethreespan2": "硕士",
          "linethreespan3": "深度学习",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "陈经理*招聘者",
          "linefourspan2": "已认证",
          "linefourspan3": "杭州&nbsp;滨江区&nbsp;网易"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "活动运营",
          "lineonespan2": "7000-11000元",
          "linetwospan": "成都极速网络",
          "linethreespan1": "1-3年",
          "linethreespan2": "本科",
          "linethreespan3": "执行",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "杨先生*招聘者",
          "linefourspan2": "回复率高",
          "linefourspan3": "成都&nbsp;武侯区&nbsp;红牌楼"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "财务会计",
          "lineonespan2": "6000-10000元",
          "linetwospan": "武汉智慧教育",
          "linethreespan1": "3-5年",
          "linethreespan2": "本科",
          "linethreespan3": "总账",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "赵女士*招聘者",
          "linefourspan2": "回复率高",
          "linefourspan3": "武汉&nbsp;武昌区&nbsp;水果湖"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "平面设计师",
          "lineonespan2": "7000-12000元",
          "linetwospan": "西安绿能科技",
          "linethreespan1": "1-3年",
          "linethreespan2": "大专",
          "linethreespan3": "AI",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "黄经理*招聘者",
          "linefourspan2": "已认证",
          "linefourspan3": "西安&nbsp;碑林区&nbsp;南大街"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "SEO优化师",
          "lineonespan2": "8000-15000元",
          "linetwospan": "南京光影视觉",
          "linethreespan1": "3-5年",
          "linethreespan2": "本科",
          "linethreespan3": "站内优化",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "周先生*招聘者",
          "linefourspan2": "回复率高",
          "linefourspan3": "南京&nbsp;建邺区&nbsp;奥体"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "游戏策划",
          "lineonespan2": "10000-18000元",
          "linetwospan": "苏州磐石安全",
          "linethreespan1": "1-3年",
          "linethreespan2": "本科",
          "linethreespan3": "系统策划",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "吴女士*招聘者",
          "linefourspan2": "回复率高",
          "linefourspan3": "苏州&nbsp;工业园区&nbsp;独墅湖"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "嵌入式开发",
          "lineonespan2": "12000-20000元",
          "linetwospan": "广州环球贸易",
          "linethreespan1": "3-5年",
          "linethreespan2": "本科",
          "linethreespan3": "STM32",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "郑经理*招聘者",
          "linefourspan2": "已认证",
          "linefourspan3": "广州&nbsp;白云区&nbsp;机场路"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "行政助理",
          "lineonespan2": "4000-6000元",
          "linetwospan": "深圳创想科技",
          "linethreespan1": "经验不限",
          "linethreespan2": "大专",
          "linethreespan3": "会议安排",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "马先生*招聘者",
          "linefourspan2": "回复率高",
          "linefourspan3": "深圳&nbsp;龙华区&nbsp;龙华"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "市场营销",
          "lineonespan2": "8000-15000元",
          "linetwospan": "北京恒信集团",
          "linethreespan1": "3-5年",
          "linethreespan2": "本科",
          "linethreespan3": "市场调研",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "朱经理*招聘者",
          "linefourspan2": "已认证",
          "linefourspan3": "北京&nbsp;朝阳区&nbsp;三里屯"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "客服专员",
          "lineonespan2": "4000-6000元",
          "linetwospan": "上海腾跃网络",
          "linethreespan1": "经验不限",
          "linethreespan2": "中专",
          "linethreespan3": "在线客服",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "胡女士*招聘者",
          "linefourspan2": "回复率高",
          "linefourspan3": "上海&nbsp;黄浦区&nbsp;人民广场"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "出纳",
          "lineonespan2": "4000-6000元",
          "linetwospan": "杭州博远数据",
          "linethreespan1": "1-3年",
          "linethreespan2": "大专",
          "linethreespan3": "现金管理",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "林先生*招聘者",
          "linefourspan2": "回复率高",
          "linefourspan3": "杭州&nbsp;拱墅区&nbsp;武林"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "视频剪辑师",
          "lineonespan2": "7000-12000元",
          "linetwospan": "成都锐捷通信",
          "linethreespan1": "1-3年",
          "linethreespan2": "大专",
          "linethreespan3": "AE",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "郭经理*招聘者",
          "linefourspan2": "已认证",
          "linefourspan3": "成都&nbsp;高新区&nbsp;世纪城"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "SEM投放",
          "lineonespan2": "9000-16000元",
          "linetwospan": "武汉新方向教育",
          "linethreespan1": "3-5年",
          "linethreespan2": "本科",
          "linethreespan3": "信息流",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "何先生*招聘者",
          "linefourspan2": "回复率高",
          "linefourspan3": "武汉&nbsp;东湖高新区&nbsp;金融港"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "游戏美术",
          "lineonespan2": "10000-18000元",
          "linetwospan": "西安华信能源",
          "linethreespan1": "1-3年",
          "linethreespan2": "大专",
          "linethreespan3": "场景设计",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "高女士*招聘者",
          "linefourspan2": "回复率高",
          "linefourspan3": "西安&nbsp;高新区&nbsp;唐延路"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "电气工程师",
          "lineonespan2": "10000-18000元",
          "linetwospan": "南京视觉艺术",
          "linethreespan1": "3-5年",
          "linethreespan2": "本科",
          "linethreespan3": "变频器",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "罗经理*招聘者",
          "linefourspan2": "已认证",
          "linefourspan3": "南京&nbsp;江宁区&nbsp;将军大道"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "机械工程师",
          "lineonespan2": "12000-20000元",
          "linetwospan": "苏州安邦卫士",
          "linethreespan1": "3-5年",
          "linethreespan2": "本科",
          "linethreespan3": "SolidWorks",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "郑先生*招聘者",
          "linefourspan2": "回复率高",
          "linefourspan3": "苏州&nbsp;昆山市&nbsp;玉山"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "前端开发",
          "lineonespan2": "8000-14000元",
          "linetwospan": "广州小凯有限公司",
          "linethreespan1": "1-3年",
          "linethreespan2": "大专",
          "linethreespan3": "Vue",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "王先生*招聘者",
          "linefourspan2": "回复率高",
          "linefourspan3": "广州&nbsp;天河区&nbsp;体育西路"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "后端开发",
          "lineonespan2": "11000-19000元",
          "linetwospan": "深圳未来科技",
          "linethreespan1": "3-5年",
          "linethreespan2": "本科",
          "linethreespan3": "Java",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "李经理*招聘者",
          "linefourspan2": "已认证",
          "linefourspan3": "深圳&nbsp;南山区&nbsp;科技园"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "新媒体运营",
          "lineonespan2": "5000-8000元",
          "linetwospan": "北京启航软件",
          "linethreespan1": "经验不限",
          "linethreespan2": "大专",
          "linethreespan3": "公众号",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "张先生*招聘者",
          "linefourspan2": "回复率高",
          "linefourspan3": "北京&nbsp;海淀区&nbsp;中关村"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "运维工程师",
          "lineonespan2": "9000-15000元",
          "linetwospan": "上海星辰互动",
          "linethreespan1": "1-3年",
          "linethreespan2": "大专",
          "linethreespan3": "Kubernetes",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "刘女士*招聘者",
          "linefourspan2": "回复率高",
          "linefourspan3": "上海&nbsp;浦东新区&nbsp;陆家嘴"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "数据分析师",
          "lineonespan2": "10000-16000元",
          "linetwospan": "杭州云帆数据",
          "linethreespan1": "3-5年",
          "linethreespan2": "本科",
          "linethreespan3": "Python",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "陈经理*招聘者",
          "linefourspan2": "已认证",
          "linefourspan3": "杭州&nbsp;西湖区&nbsp;文三路"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "电商运营",
          "lineonespan2": "6000-10000元",
          "linetwospan": "成都极速网络",
          "linethreespan1": "1-3年",
          "linethreespan2": "大专",
          "linethreespan3": "拼多多",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "杨先生*招聘者",
          "linefourspan2": "回复率高",
          "linefourspan3": "成都&nbsp;武侯区&nbsp;天府广场"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "测试工程师",
          "lineonespan2": "8000-13000元",
          "linetwospan": "武汉智慧教育",
          "linethreespan1": "1-3年",
          "linethreespan2": "大专",
          "linethreespan3": "性能测试",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "赵女士*招聘者",
          "linefourspan2": "回复率高",
          "linefourspan3": "武汉&nbsp;洪山区&nbsp;光谷"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "网络安全工程师",
          "lineonespan2": "15000-25000元",
          "linetwospan": "西安绿能科技",
          "linethreespan1": "3-5年",
          "linethreespan2": "本科",
          "linethreespan3": "安全审计",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "黄经理*招聘者",
          "linefourspan2": "已认证",
          "linefourspan3": "西安&nbsp;雁塔区&nbsp;高新区"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "产品经理",
          "lineonespan2": "12000-20000元",
          "linetwospan": "南京光影视觉",
          "linethreespan1": "3-5年",
          "linethreespan2": "本科",
          "linethreespan3": "产品规划",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "周先生*招聘者",
          "linefourspan2": "回复率高",
          "linefourspan3": "南京&nbsp;江宁区&nbsp;大学城"
        },
        {
          "catdlink": "/jobdetails",
          "lineonespan1": "销售代表",
          "lineonespan2": "5000-15000元",
          "linetwospan": "苏州磐石安全",
          "linethreespan1": "经验不限",
          "linethreespan2": "学历不限",
          "linethreespan3": "直销",
          "linethreespan4": "全职",
          "linefourimg": "/src/assets/avatar.jpg",
          "linefourspan1": "吴女士*招聘者",
          "linefourspan2": "回复率高",
          "linefourspan3": "苏州&nbsp;工业园区"
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