import Vue       from 'vue'
import VueRouter from 'vue-router'

import Home from '../sections/Home'

Vue.use(VueRouter)

export default new VueRouter({
  base: '/',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path     : '*',
      redirect : '/'
    }
  ]
})