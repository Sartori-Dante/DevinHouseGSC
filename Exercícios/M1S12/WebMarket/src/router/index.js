// Composables
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home/Home.vue";
import Cart from "../views/Cart/Cart.vue";
import Pay from "../views/Pay/Pay.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/pay",
    name: "Pay",
    component: Pay,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
