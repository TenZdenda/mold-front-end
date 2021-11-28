import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Reports from "../views/Reports.vue";
import Sensors from "../views/Sensors.vue";

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
    path: "/sensors",
    name: "Sensors",
    component: Sensors,
  },
];

const router = new VueRouter({
  mode: "history",
  linkExactActiveClass: "is-active",
  routes,
});

export default router;
