<template>
  <div class="home">
    <h1>Home Page</h1>
    <button v-permission="['admin', 'editor']">editor button</button>
    <button v-permission="['admin']">admin button</button>
    <router-view></router-view>
    <!-- <VuexTest></VuexTest> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import VuexTest from "@/components/vuex";

export default {
  name: "home",
  components: {
    HelloWorld,
    VuexTest
  }
};
</script>
