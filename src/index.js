/* eslint-disable */
import Vue from 'vue';
import HighchartsVue from 'highcharts-vue';
import App from './App.vue';
import router from './router';
import store from './store/store'
import { Auth0Plugin } from './service/auth';
import * as AuthOptions from './service/auth/auth0-local-connection.json';

Vue.config.productionTip = false;

Vue.use(HighchartsVue);

/* Initialize Auth0 Plugin */
Vue.use(Auth0Plugin, {
  domain: AuthOptions.domain,
  clientId: AuthOptions.clientId,
  options: AuthOptions.options,
});

/* Render Vue Application */
new Vue({
  router,
  render: (h) => h(App),
  store,
}).$mount('#app');
