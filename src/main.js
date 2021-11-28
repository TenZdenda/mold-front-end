import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import axios from "axios";
import moment from "moment";

import "./assets/css/style.css";

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.prototype.moment = moment;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
