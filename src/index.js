import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import router from './router';
import {
  Auth0Plugin, getParams, loginMvb, getInstance,
} from './service/auth';
import * as AuthOptions from './service/auth/auth0-local-connection.json';
import WebsocketPlugin from './store/plugins/websocket';
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
  plugins: [WebsocketPlugin],
});

/* Initialize Auth0 Plugin */
Vue.use(Auth0Plugin, {
  domain: AuthOptions.domain,
  clientId: AuthOptions.clientId,
  scope: AuthOptions.scope,
  onRedirectCallback: async (appState) => {
    console.log('using passed redirect cb');
    const params = getParams(window.location.search);
    const response = await loginMvb(getInstance(), params.state);
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname,
    );
    return response;
  },
});

/* Render Vue Application */
new Vue({
  router,
  render: (h) => h(App),
  store,
}).$mount('#app');
