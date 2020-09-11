<template>
  <div>
    <p>{{msg}}</p>
    <p>{{data1}}</p>
    <p>ahsdfhsahdf</p>
    <button @click="m2">点我</button>
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
  methods: {
    m1() {
      return this.data1 + 456
    },
    m2() {
      this.data1 = "我已经被点击了"
    }
  }
}
</script>

<style lang="scss" scoped>
</style>