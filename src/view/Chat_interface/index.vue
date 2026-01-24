<template>
  <div>
    <ChatinterfaceHead @exchangecontentValue="exchangecontentFn"></ChatinterfaceHead>
    <!-- 步骤二：父亲传递数据给另一个子组件 -->
    <ChatinterfaceBody :reply="NewInputValue" :content="NewExchangecontentValue"></ChatinterfaceBody>
    <!-- 步骤一：父亲接收到数据 -->
    <ChatinterfaceFoot @checkInputValue="changeFn"></ChatinterfaceFoot>
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
    },
    data() {
      return {
        NewInputValue: '',
        NewExchangecontentValue: ''
      }
    },
    methods: {
      changeFn (newInputValue) {
        this.NewInputValue = newInputValue
      },
      exchangecontentFn (newexchangecontentValue) {
        this.NewExchangecontentValue = newexchangecontentValue
      }
    }
}
</script>

<style>
</style>