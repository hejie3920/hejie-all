export const actions = {
  nuxtServerInit({ commit }, { app }) {
    // 服务端就将vuex状态填充
    // 参数1是vuex的上下文
    // 参数2是nuxt的上下文
    const token = app.$cookies.get("token");
    if (token) {
      console.log("nuxtServerInit: token:"+token);
      commit("user/init", token);
    }
  }
};
