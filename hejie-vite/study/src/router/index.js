import { createRouter, createWebHistory } from "vue-router";

// 开启历史模式
// vue2中使用 mode: history 实现
const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      component: () => import("../view/Hejie.vue"),
    },
    {
      path: "/test",
      component: () => import("../view/Test.vue"),
    },
  ],
});

export default router;
