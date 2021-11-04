import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Layout from "@/views/layout/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "",
        component: import(
          /* webpackChunkName: "about" */ "@/views/dashboard/index.vue"
        ),
      },
    ],
  },
  {
    path: "/about",
    component: import(
      /* webpackChunkName: "about" */ "@/views/about/index.vue"
    ),
  },
];

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});

export default router;
