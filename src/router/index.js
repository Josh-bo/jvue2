import { createWebHistory, createRouter } from "vue-router";
import productList from "../components/ProductList.vue";
// import displayProduct from "../components/displayProduct.vue";

const routes = [{ path: "/", name: "productList", component: productList }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
