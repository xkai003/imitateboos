<template>
  <div class="box1">
    <InformationNavigation></InformationNavigation>
    <InformationBody></InformationBody>
  </div>
</template>

<script>
import InformationNavigation from './InformationNavigation.vue'
import InformationBody from './InformationBody.vue'
export default {
  name: 'LoginIndex',
  components: {
    InformationNavigation,
    InformationBody
  }
}

</script>

<style scoped>
.box1{
  background-color: #eff0f1;
  padding: 10px;
  margin-bottom: 50px;
}
</style>
