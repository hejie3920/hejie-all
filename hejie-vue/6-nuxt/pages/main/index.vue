<template>
  <div>
    <h2>首页</h2>
    <ul>
      <li v-for="good in goods" :key="good.id">
        <n-link :to="{name:'main-detail-id', params:{id:good.id}}">
          <span>{{good.text}}</span>
          <span>￥{{good.price}}</span>
          <button @click.prevent="addCart(good)">加购物车</button>
        </n-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  head() { // head里面项目
    return {
      title: "课程列表",
      meta: [{ name: "description", hid: "description", content: "set page meta" }],
      link: [{ rel: "favicon", href: "favicon.ico" }],
      script: [{ src: "https://cdn.jsdelivr.net/npm/jquery/dist/jquery.js" }]
    };
  },
  async asyncData({$axios, error}) {
    // asyncData时间点早于组件创建，所以不能用this访问组件实例
    const result = await $axios.$get('/api/goods')
    if (result.ok) {
      return {goods: result.goods}
    }

    // 错误处理
    error({statusCode: 400, message:'查询数据失败'})
  },
  // data() {
  //   return {
  //     goods: [
  //       { id: 1, text: "Web全栈架构师", price: 8999 },
  //       { id: 2, text: "Python全栈架构师", price: 8999 }
  //     ]
  //   };
  // }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
