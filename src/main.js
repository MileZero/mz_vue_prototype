import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';

/* State Module Imports */
import SelectedPage from './modules/SelectedPage/index.js';

/* Initialize Vuex Store */
Vue.config.productionTip = false;
Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        SelectedPage,
    },
});

/* Render Vue Application */
new Vue({
  render: (h) => h(App),
  store: store
}).$mount('#app');
