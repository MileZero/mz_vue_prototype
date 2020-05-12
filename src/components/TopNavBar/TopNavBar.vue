<template>
  <div class="TopNavBar">
    <div class="CompanyLogo" :style="InjectCompanyLogo"></div>
    <BreadCrumbs />
    <HubSelectionMenu />
    <UserMenu />
  </div>
</template>

<script>
import HubSelectionMenu from '../HubSelectionMenu/HubSelectionMenu.vue';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs.vue';
import UserMenu from '../UserMenu/UserMenu.vue';

export default {
  props: {
  },
  data() {
    return {
      CompanyLogoUrl: '',
    };
  },
  name: 'TopNavBar',
  components: {
    BreadCrumbs,
    HubSelectionMenu,
    UserMenu,
  },
  computed: {
    InjectCompanyLogo() {
      return { 'background-image': `url("${this.$auth.org.org.logo}")` };
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "./_TopNavBar.scss";
</style>
