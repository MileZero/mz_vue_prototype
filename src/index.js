import SidebarMenu from './components/SidebarMenu.vue';
import NavigationBar from 'vue-navigation-bar';

export default {
    install(Vue, options) {
        Vue.component('sidebar-menu', SidebarMenu)
        Vue.component('vue-navigation-bar', NavigationBar)
    }
}

export { SidebarMenu }
export { NavigationBar }