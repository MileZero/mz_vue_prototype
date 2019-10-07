import Vue from 'vue'
import App from './App.vue'
import VueNavigationBar from 'vue-navigation-bar'
import VueRouter from 'vue-router'
import VueBreadcrumbs from 'vue-breadcrumbs'
import VueSidebarMenu from '../src/index.js'
import DropDown from '../src/index.js'

import Dashboard from './components/Dashboard.vue'
import RouteMap from './components/RouteMap.vue'
import DriverStatus from './components/DriverStatus.vue'

Vue.use(VueRouter)
Vue.use(VueSidebarMenu)
Vue.use(VueBreadcrumbs)
Vue.use(VueNavigationBar)
Vue.use(DropDown)

const router = new VueRouter({
    routes: [{
            path: '/',
            redirect: {
                name: 'Dashboard'
            }
        },
        {
            path: '/Dashboard',
            name: 'Dashboard',
            component: Dashboard,
            meta: {
                breadcrumb: 'Dashboard'
            }
        },
        {
            path: '/RouteMap',
            name: 'RouteMap',
            component: RouteMap,
            meta: {
                breadcrumb: 'RouteMap'
            }
        },
        {
            path: '/DriverStatus',
            name: 'DriverStatus',
            component: DriverStatus,
            meta: {
                breadcrumb: 'DriverStatus'
            }

        }
    ]

})

new Vue({ // eslint-disable-line no-new
    el: '#app',
    router,
    render: h => h(App)
    // components: { dropdown

})