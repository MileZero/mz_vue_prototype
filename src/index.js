import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import router from './router';
import { Auth0Plugin } from './service/auth';
import * as AuthOptions from './service/auth/auth0-local-connection.json';
import BreadCrumbs from './store/BreadCrumbs';
import AuthInfo from './store/AuthInfo';

/* Initialize Vuex Store */
Vue.config.productionTip = false;
Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    BreadCrumbs,
    AuthInfo,
  },
});

/* Initialize Auth0 Plugin */
Vue.use(Auth0Plugin, {
  domain: AuthOptions.domain,
  clientId: AuthOptions.clientId,
  scope: AuthOptions.scope,
  onRedirectCallback: (appState) => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname,
    );
  },
});

/* Render Vue Application */
new Vue({
  router,
  render: (h) => h(App),
  store,
}).$mount('#app');
