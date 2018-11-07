import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home.vue'
import index from '@/page/index.vue'
import coin from '@/page/coin.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: "/home"   
    },
    {
      path: "/home",
      name: 'home',
      redirect: "/home/index",
      component: home,
      children: [
        {
          path: "/home/index",
          name: 'index',
          component: index,
        },
        {
          path: "/home/coin",
          name: 'coin',
          component: coin,
        }
      ]
    }
  ]
})
