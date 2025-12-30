<template>
  <div class="box1">
    <PositionNavigation></PositionNavigation>
    <PositionBody></PositionBody>
  </div>
</template>

<script>
  import PositionNavigation from './PositionnNavigation.vue'
  import PositionBody from './PositionBody.vue'
  export default {
    name: 'LoginIndex',
    components: {
      PositionNavigation,
      PositionBody
    }
  }

</script>

<style scoped>
.box1{
  background-color: #f5f6f7;
  padding: 10px;
  margin-bottom: 50px;
}
</style>
