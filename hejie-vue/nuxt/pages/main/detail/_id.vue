<template>
  <div>
    <h2>商品详情</h2>
    <pre>{{goodInfo}}</pre>
  </div>
</template>

<script>
export default {
  async asyncData(ctx) {
      const { $axios, params, error } = ctx;
    // asyncData中不能使用this获取组件实例
    // 但是可以通过上下文获取相关数据
    const result = await $axios.$get("/api/detail", { params });

    if (result.data) {
      return { goodInfo: result.data };
    }
    error({ statusCode: 400, message: "商品详情查询失败" });
  }
};
</script>

<style lang="scss" scoped>
</style>