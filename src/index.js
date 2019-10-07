import SidebarMenu from './components/SidebarMenu.vue';
import DropDown from './components/dropdown.vue';
import NavigationBar from 'vue-navigation-bar';

export default {
    install(Vue, options) {
        Vue.component('sidebar-menu', SidebarMenu)
        Vue.component('vue-navigation-bar', NavigationBar)
        Vue.component('dropdown', DropDown)
    }
}

export { SidebarMenu }
export { NavigationBar }
export { DropDown }