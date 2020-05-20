<template>
  <div class="MenuBar">
    <div class="Content-sidebar">
      <MonitorMenu />
      <ManageMenu />
      <ReviewMenu />
      <ConfigureMenu />
      <PackageSearch />
      <MenuBarOptionTemplate v-if="deploymentEnv === 'development'" />
      <div class="MenuBarOption SettingsMenu">
          <div class=MenuBarOptionLabel>SETTINGS</div>
      </div>
      <div class="MenuBarOption LogoutMenu" @click="logout">
          <div class=MenuBarOptionLabel>LOGOUT</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import MenuBarOptionTemplate from '../_Templates/MenuBarOptionTemplate/MenuBarOptionTemplate.vue';
import ConfigureMenu from '../ConfigureMenu/ConfigureMenu.vue';
import ManageMenu from '../ManageMenu/ManageMenu.vue';
import MonitorMenu from '../MonitorMenu/MonitorMenu.vue';
import ReviewMenu from '../ReviewMenu/ReviewMenu.vue';
import PackageSearch from '../PackageSearch/PackageSearch.vue';

export default {
  props: {
  },
  name: 'MenuBar',
  components: {
    ConfigureMenu,
    ManageMenu,
    MonitorMenu,
    ReviewMenu,
    PackageSearch,
    MenuBarOptionTemplate,
  },
  methods: {
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin,
      });
    },
  },
  data() {
    return {
      deploymentEnv: process.env.VUE_APP_ENV,
    };
  },
};
</script>

<style lang="scss" scoped>
  @import "./_MenuBar.scss";
</style>
