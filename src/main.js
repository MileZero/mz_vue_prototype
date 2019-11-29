import Vue from 'vue'
import App from './App.vue'
import VueNavigationBar from 'vue-navigation-bar'
import VueRouter from 'vue-router'
import VueBreadcrumbs from 'vue-breadcrumbs'
import VueSidebarMenu from '../src/index.js'
import DropDown from '../src/index.js'
import axios from 'axios'

import dashboard from './components/dashboard.vue'
import routemap from './components/RouteMap.vue'
import driverstatus from './components/DriverStatus.vue'
import fleet from './components/fleet.vue'
import label from './components/label.vue'

Vue.use(VueRouter)
Vue.use(VueSidebarMenu)
Vue.use(VueBreadcrumbs)
Vue.use(VueNavigationBar)
Vue.use(DropDown)

const router = new VueRouter({
    routes: [{
            path: '/',
            redirect: {
                name: 'dashboard'
            }
        },
        {
            path: '/Monitor/dashboard',
            name: 'dashboard',
            component: dashboard,
            // props: true
            meta: {
                label: 'dashboard'
            }
        },
        {
            path: '/Monitor/RouteMap',
            name: 'RouteMap',
            component: routemap,
            meta: {
                label: 'RouteMap'
            }
        },
        {
            path: '/Monitor/DriverStatus',
            name: 'DriverStatus',
            component: driverstatus,
            meta: {
                label: 'DriverStatus'
            }

        },
        {
            path: '/Configure/Fleet',
            name: 'Fleet',
            component: fleet,
            meta: {
                label: 'fleet'
            }
        },
        {
            path: '/Configure/Fleet/label',
            name: 'label',
            component: label,
            meta: {
                label: 'label'
            }
        }
    ]

})

new Vue({ // eslint-disable-line no-new
    el: '#app',
    router,
    data() {
        return {
            configOptions: [],
            options: ' '
        }
    },
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Access-Control-Allow-Methods, Access-Control-Allow-Origin, Origin, Accept, Content-Type',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    mounted() {
        axios
            .get('http://worldview.prod.milezero.com/wv/api/search/org/3c897e84-3957-4958-b54d-d02c01b14f15/containers/type/FACILITY')
            .then(response => console.log(response))
    },
    render: h => h(App)
})