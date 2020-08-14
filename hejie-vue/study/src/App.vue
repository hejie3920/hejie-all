<template>
  <div id="app">
    <baseModal></baseModal>
    <router-view></router-view>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <FormTest></FormTest> -->
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue"
import FormTest from "./components/FormTest.vue"
import Test from "./pages/Test.vue"

export default {
  name: "app",
  components: {
    HelloWorld,
    FormTest,
    Test
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
