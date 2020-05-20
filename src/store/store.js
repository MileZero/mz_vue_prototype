import Vue from 'vue';
import Vuex from 'vuex';

/* Import Plugins */
// import WebsocketPlugin from './plugins/websocket';
/* Import Modules */
import BreadCrumbs from './modules/BreadCrumbs';
import Hub from './modules/Hub';

Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    BreadCrumbs,
    Hub,
  },
  // plugins: [WebsocketPlugin],
});

export default store;
