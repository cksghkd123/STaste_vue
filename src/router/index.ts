import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "main",
    component: () =>
      import("@/views/MainView.vue"),
  },
  {
    path: "/mylist",
    name: "mylist",
    component: () =>
      import("@/views/MyListView.vue"),
  },
  {
    path: "/mypage",
    name: "mypage",
    component: () =>
      import("../views/MyPageView.vue"),
  },
  {
    path: "/map",
    name: "map",
    component: () =>
      import("@/views/MapView.vue"),
  },
  {
    path: "/what-i-want",
    name: "what-i-want",
    component: () =>
      import("@/views/WhatIWantView.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

