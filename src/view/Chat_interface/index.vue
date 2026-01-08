<template>
  <div>
    <ChatinterfaceHead></ChatinterfaceHead>
    <ChatinterfaceBody></ChatinterfaceBody>
    <ChatinterfaceFoot></ChatinterfaceFoot>
  </div>
</template>

<script>
import ChatinterfaceHead from './ChatinterfaceHead.vue'
import ChatinterfaceBody from './ChatinterfaceBody.vue'
import ChatinterfaceFoot from './ChatinterfaceFoot.vue'
export default {
    components: {
        ChatinterfaceHead,
        ChatinterfaceBody,
        ChatinterfaceFoot
    }
}
</script>

<style>
</style>