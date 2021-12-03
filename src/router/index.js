import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Reports from "../views/Reports.vue";
import Settings from "../views/Settings.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/reports",
    name: "Reports",
    component: Reports,
  },
  {
    path: "/settings",
    name: "Sensors",
    component: Settings,
  },
];

const router = new VueRouter({
  mode: "history",
  linkExactActiveClass: "is-active",
  routes,
});

export default router;
