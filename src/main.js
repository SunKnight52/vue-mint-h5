// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import axios from "axios"
import store from "./vuex/vuex"
import "../static/base.css"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.prototype.$http = axios;

Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  if (to.path != "/login" && !localStorage.username) {
    console.log(1)
    next("/login")
  }
  next()
});



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
