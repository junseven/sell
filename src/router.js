import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass:'active',
  routes: [
    {
      path: '/goods',
      name: 'goods',
      component: () => import(/* webpackChunkName: "about" */ './components/goods/goods.vue')
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: () => import(/* webpackChunkName: "about" */ './components/ratings/ratings.vue')
    },
    {
      path: '/seller',
      name: 'seller',
      component: () => import(/* webpackChunkName: "about" */ './components/seller/sellse.vue')
    }
  ]
})
