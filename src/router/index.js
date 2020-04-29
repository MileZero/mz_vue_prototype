import Vue from 'vue'
import Router from 'vue-router'
import App from '../App.vue'
import { authGuard } from "../service/auth/authGuard.js";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'App',
      component: App,
      beforeEnter: authGuard
    },
  ]
})
