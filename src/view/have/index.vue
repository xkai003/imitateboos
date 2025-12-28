<template>
  <div class="box1">
    <HaveNavigation></HaveNavigation>
    <HaveBody></HaveBody>
  </div>
</template>

<script>
import HaveNavigation from './HaveNavigation.vue'
import HaveBody from './HaveBody.vue'
export default {
  name: 'LoginIndex',
  components: {
    HaveNavigation,
    HaveBody
  }
}

</script>

<style scoped>
.box1{
  /* width: 100%;
  height: 98vh; */
  background-color: #eff0f1;
  padding: 10px;
}
</style>
