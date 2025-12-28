<template>
  <div class="box1">
    <MineBody></MineBody>
  </div>
</template>

<script>
import MineBody from './MineBody.vue'
export default {
  name: 'LoginIndex',
  components: {
    MineBody
  }
}

</script>

<style scoped>
.box1{
  height: 100vh;
  background-color: #eff0f1;
  padding: 10px;
}
</style>
