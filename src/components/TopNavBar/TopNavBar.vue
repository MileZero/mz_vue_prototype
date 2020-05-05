<template>
  <div class="TopNavBar">
    <div class="CompanyLogo"></div>
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
  name: 'TopNavBar',
  components: {
    BreadCrumbs,
    HubSelectionMenu,
    UserMenu,
  },
};
</script>

<style lang="scss" scoped>
  @import "./_TopNavBar.scss";
</style>
