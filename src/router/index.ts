import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/signIn",
    name: "signIn",
    component: () =>
      import("@/views/SignInView.vue"),
  },
  {
    path: "/signUp",
    name: "signUp",
    component: () =>
      import("@/views/SignUpView.vue"),
  },
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
    path: "/markets",
    name: "markets",
    component: () =>
      import("@/views/MarketsView.vue"),
  },
  {
    path: "/market/:marketId",
    name: "market-details",
    component: () =>
      import("@/views/MarketDetails.vue"),
    props: true
  },
  {
    path: "/write/review",
    name: "write-review",
    component: () =>
      import("@/views/WriteReviewView.vue"),
  }
];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;