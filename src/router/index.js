import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home.vue";
import home2 from "../pages/home2.vue";
import home3 from "../pages/home3.vue";
import home4 from "../pages/home4.vue";
import home5 from "../pages/home5.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/home2",
    name: "home2",
    component: home2,
  },
  {
    path: "/home3",
    name: "home3",
    component: home3,
  },
  {
    path: "/home4",
    name: "home4",
    component: home4,
  },
  {
    path: "/home5",
    name: "home5",
    component: home5,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
