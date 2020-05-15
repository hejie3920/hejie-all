<template>
  <div>
    测试
    <el-button type="primary">Primary</el-button>
    <p v-for="(item,index) in testArr" :key="index" @click="handleClick('test')">{{item}}</p>
  </div>
</template>
<script>
// import Vue from "vue"
export default {
  data() {
    return {
      testArr: [0, 1, 1, 1, 1]
    }
  },
  methods: {
    test() {
      console.log("TCL: ", "nihoa")
      // let a = "asndif"
    },
    handleClick(type, obj) {
      switch (type) {
        case "test":
          console.log("TCL: ", "hahah")
          break
        default:
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
