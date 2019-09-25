import SidebarMenu from './components/SidebarMenu.vue';
import NavigationBar from './vue-navigation-bar.vue';

export default {
    install(Vue) {
        Vue.component('sidebar-menu', SidebarMenu),
            Vue.component('VueNavigationBar', NavigationBar)
    }
}

export { SidebarMenu }
export { NavigationBar }