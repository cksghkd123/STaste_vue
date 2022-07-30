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
      import("@/views/MyList.vue"),
  },
  {
    path: "/mypage",
    name: "mypage",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
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

