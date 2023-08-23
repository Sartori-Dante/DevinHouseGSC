// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/views/Home/Home.vue"),
      },
    ],
  },
  {
    path: "/cart",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Cart",
        component: () => import("@/views/Cart/Cart.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
