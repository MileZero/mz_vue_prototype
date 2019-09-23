import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueBreadcrumbs from 'vue-breadcrumbs'
import VueSidebarMenu from '../src/index'

Vue.use(VueRouter)
Vue.use(VueSidebarMenu)
Vue.use(VueBreadcrumbs)

const router = new VueRouter({
    routes: []
})


new Vue({ // eslint-disable-line no-new
    el: '#app',
    router,
    render: h => h(App)
})