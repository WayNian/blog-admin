import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Layout from "@/views/layout/index.vue";

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: "/dashboard",
  //   component: Layout,
  //   redirect: "/dashboard/index",
  //   children: [
  //     {
  //       path: "/dashboard/index",
  //       name: "dashboard",
  //       component: () => import(/* webpackChunkName: "dashboard" */ "@/views/dashboard/index.vue"),
  //     },
  //   ],
  // },
  // {
  //   path: "/cc",
  //   component: Layout,
  //   redirect: "/aa/cc",
  //   children: [
  //     {
  //       path: "/cc",
  //       name: "cc",
  //       component: () => import(/* webpackChunkName: "dashboard" */ "@/views/dashboard/index.vue"),
  //     },
  //   ],
  // },
  {
    path: "/",
    component: Layout,
    redirect: "dashboard",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: () => import(/* webpackChunkName: "dashboard" */ "@/views/dashboard/index.vue"),
      },
      {
        path: "workspace/aritle-list",
        name: "aritle-list",
        component: () => import(/* webpackChunkName: "aritle-list" */ "@/views/articles/list.vue"),
      },
      {
        path: "workspace/aritle-write",
        name: "aritle-write",
        component: () =>
          import(/* webpackChunkName: "aritle-write" */ "@/views/articles/write.vue"),
      },
      {
        path: "musicspace",
        name: "musicspace",
        component: () => import(/* webpackChunkName: "workspace" */ "@/views/dashboard/index.vue"),
      },
      {
        path: "tag",
        name: "tag",
        component: () => import(/* webpackChunkName: "tag" */ "@/views/dashboard/index.vue"),
      },
      {
        path: "category",
        name: "category",
        component: () => import(/* webpackChunkName: "category" */ "@/views/dashboard/index.vue"),
      },
      {
        path: "about",
        name: "about",
        component: () => import(/* webpackChunkName: "about" */ "@/views/dashboard/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});
console.log(router.getRoutes());

export default router;
