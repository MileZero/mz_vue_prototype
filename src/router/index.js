import Vue from 'vue';
import Router from 'vue-router';
import App from '../App.vue';
import { authGuard } from '../service/auth/authGuard';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'App',
      component: App,
      beforeEnter: authGuard,
    },
    {
      path: '/template',
      name: 'Template',
      components: {
        ContentDisplay: () => import('../views/_Templates/PageViewTemplate/PageViewTemplate.vue'),
      },
    },
    {
      path: '/search',
      name: 'Search',
      components: {
        ContentDisplay: () => import('../views/Search/Search.vue'),
      },
    },
  ],
});
