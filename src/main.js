import Vue from 'vue'
import App from './App.vue'
import VueNavigationBar from 'vue-navigation-bar'
import VueRouter from 'vue-router'
import VueBreadcrumbs from 'vue-breadcrumbs'
import VueSidebarMenu from '../src/index.js'

// import Dashboard from './components/Dashboard.vue'
// import RouteMap from './components/RouteMap.vue'
// import DriverStatus from './components/DriverStatus.vue'
import Monitor from './components/Monitor.vue'
import Manage from './components/Manage.vue'
import Review from './components/Review.vue'
import Configure from './components/Configure.vue'

Vue.use(VueRouter)
Vue.use(VueSidebarMenu)
Vue.use(VueBreadcrumbs)
Vue.use(VueNavigationBar)

const router = new VueRouter({
    routes: [{
            path: '/',
            redirect: {
                name: 'Monitor'
            }
        },
        {
            path: '/Monitor',
            name: 'Monitor',
            component: Monitor
                // meta: {
                //     breadcrumb: 'Dashboard'
                // }
        },
        {
            path: '/Manage',
            name: 'Manage',
            component: Manage
                // meta: {
                //     breadcrumb: 'RouteMap'
                // }
        },
        {
            path: '/Review',
            name: 'Review',
            component: Review
                // meta: {
                //     breadcrumb: 'DriverStatus'
                // }

        },
        {
            path: '/Configure',
            name: 'Configure',
            component: Configure
                // meta: {
                //     breadcrumb: 'DriverStatus'
                // }

        }
    ]

})

new Vue({ // eslint-disable-line no-new
    el: '#app',
    router,
    render: h => h(App)
})