<template>
  <div>
    <div class="nav-list">
      <router-link v-for="(item,index) in routes" :key="index" :to="item.path">{{item.name}}</router-link>
    </div>
  </div>
</template>

<script>
import router from "../router/index"
export default {
  name: "baseModal",
  data() {
    return {
      routes: []
    }
  },
  created() {
    this.routes = router.options.routes.reduce((pre, next, index) => {
      let { path, name } = next
      pre.push({
        path,
        name
      })
      return pre
    }, [])
    console.log("created -> this.routes", this.routes)
  }
}
</script>

<style lang="scss" scoped>
.nav-list {
  display: flex;
  flex-flow: row;
  margin-bottom: 20px;
  a {
    margin: 0 20px;
  }
}
</style>