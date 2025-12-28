<template>
  <div class="box">
    <!-- 导航组件 -->
    <!-- 条件判断：如果当前路径不是 login/register，则显示导航 -->
    <Navigation v-if="!noNavRoutes.includes($route.path)"></Navigation>
    <!-- 渲染匹配到的路由组件 -->
    <router-view> </router-view>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
export default {
  components: {
    Navigation
  },
  computed: {
    noNavRoutes () {
      return ['/JobDetails'] // 不显示导航栏的路由
    }
  }
}
</script>

<style>
</style>
