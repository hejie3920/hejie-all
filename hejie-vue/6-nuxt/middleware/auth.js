export default function({ redirect, store }) {
  console.log("token:" + store.state.user.token);
  // 通过vuex中令牌存在与否判断是否登录
  if (!store.getters['user/isLogin']) {
    redirect("/login");
  }
}
