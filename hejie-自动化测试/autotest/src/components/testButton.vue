<template>
  <div>
    <p>{{msg}}</p>
    <p>{{data1}}</p>
    <p>ahsdfhsahdf</p>
    <div>{{title}}</div>
    <button @click="m1">{{data1}}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "我是测试语句",
      data1: "123"
    }
  },
  props: {
    title: String
  },
  methods: {
    m1() {
      this.data1 = this.title + "点击事件1"
    }
  }
}
</script>

<style lang="scss" scoped>
</style>