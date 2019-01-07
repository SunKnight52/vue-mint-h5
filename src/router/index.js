import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home.vue'
import index from '@/page/index.vue'
import coin from '@/page/coin.vue'
import ces from '@/page/ces.vue'
import login from '@/page/user/login.vue'
Vue.use(Router)
export default new Router({
  // mode: 'history',
  routes: [
    { path: '/', redirect: "/home" },
    { path: '/login', name: "login", component: login },
    {path: "/home",name: 'home',redirect: "/home/index",component: home,children: [
        {path: "/home/index",name: 'index',component: index,},
        {path: "/home/coin",name: 'coin',component: coin,},
        {path: "/home/ces",name: 'haha',component: ces,}
      ]
    }
  ]
})
