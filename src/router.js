import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/signIn',
      name: 'SignIn',
      component: () => import('./components/auth/SignIn.vue')
    },
    {
      path: '/getToken',
      name: 'GetToken',
      component: () => import('./components/jsonp/GetToken.vue')
    }
  ]
})
