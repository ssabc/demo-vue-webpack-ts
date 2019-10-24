import Vue from 'vue'
import Router from 'vue-router'
import login from '../views/login.vue'
import Home from '../views/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})
