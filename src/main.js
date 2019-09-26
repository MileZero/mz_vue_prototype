import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueBreadcrumbs from 'vue-breadcrumbs'
import VueSidebarMenu from '../src/index'
import VueNavigationBar from 'vue-navigation-bar'

Vue.use(VueRouter)
Vue.use(VueSidebarMenu)
Vue.use(VueBreadcrumbs)
Vue.use(VueNavigationBar)

const router = new VueRouter({
    routes: []
})

new Vue({ // eslint-disable-line no-new
    el: '#app',
    router,
    render: h => h(App)
})