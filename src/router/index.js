import Vue from "vue";
import VueRouter from "vue-router";

import Clean from "../layouts/Clean.vue";
import Default from "../layouts/Default.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Default,
    children: [
      {
        path: "/",
        name: "Home",
        component: () => import("../views/Home.vue"),
      },
      {
        path: "/card-management/generate",
        name: "GenerateCard",
        component: () => import("../views/cardManagement/GenerateCard.vue"),
      },
      {
        path: "/card-management/activation",
        name: "CardActivation",
        component: () => import("../views/cardManagement/CardActivation.vue"),
      },
      {
        path: "/card-management/history",
        name: "CardHistory",
        component: () => import("../views/cardManagement/History.vue"),
      },
      {
        path: "/supplier-information/test",
        name: "test",
        component: () => import("../views/supplierInformation/test.vue"),
      },
    ],
  },
  {
    path: "/",
    component: Clean,
    children: [
      {
        path: "/login",
        name: "Login",
        component: () => import("../views/auth/Login.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
