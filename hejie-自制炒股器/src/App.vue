<template>
  <div id="app">
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="/"> 首页 </el-menu-item>
      <el-menu-item index="/about"> 信号 </el-menu-item>
    </el-menu>
    <router-view class="content" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: location.pathname
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      if (key === this.activeIndex) return
      this.activeIndex = key
      this.$router.push(key)
    }
  }
}
</script>

<style lang="scss">
@import "@css/index.scss";
</style>
