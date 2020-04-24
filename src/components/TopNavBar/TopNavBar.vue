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
  import './_TopNavBar.scss';

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
