<template>
  <div class="hello">
    <p>{{count}}</p>
    <p>{{double}}</p>
    <p>{{JSON.stringify(state.arr)}}</p>
    <div class ref="test"></div>
  </div>
</template>

<script>
import { ref, reactive, onMounted, computed, watchEffect, watch } from "vue"
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  setup() {
    // 响应值和响应引用类型
    const count = ref(12)
    const state = reactive({ arr: [] })
    // computed
    const double = computed(() => {
      return count.value * 2
    })
    watch(state, (value) => {
      console.warn("TCL: ", value)
    })
    watchEffect(() => {
      console.warn("TCL:effect", state.arr)
      // $refs.innerHTML = state.arr
    })

    onMounted(() => {
      setTimeout(() => {
        console.warn("TCL: ", "inhoa")
        state.arr = [23]
      }, 1500)
    })
    return {
      count,
      state,
      double
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
