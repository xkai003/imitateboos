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
  /* width: 100%;
  height: 98vh; */
  background-color: #eff0f1;
  padding: 10px;
}
</style>
