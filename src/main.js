import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import router from './router/index.js';
import { Auth0Plugin } from './service/auth/index.js';
import * as AuthOptions from './service/auth/auth0-local-connection.json';

/* State Module Imports */
//import BreadCrumbs from './modules/BreadCrumbs/index.js';

/* Initialize Vuex Store */
Vue.config.productionTip = false;
Vue.use(Vuex);
//const store = new Vuex.Store({
//    modules: {
//        BreadCrumbs,
//    },
//});

/* Initialize Auth0 Plugin */
Vue.use(Auth0Plugin, {
  domain: AuthOptions.domain,
  clientId: AuthOptions.clientId,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});

/* Render Vue Application */
new Vue({
  router,
  render: (h) => h(App),
//  store: store
}).$mount('#app');
