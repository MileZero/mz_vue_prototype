<template>
  <div class="MenuBar">
    <div class="Content-sidebar">
      <HubSelectionMenu />
      <MonitorMenu />
      <ManageMenu />
      <ReviewMenu />
      <ConfigureMenu />
      <PackageSearch />
    </div>
  </div>
</template>

<script>
  import ConfigureMenu from '../ConfigureMenu/ConfigureMenu.vue';
  import HubSelectionMenu from '../HubSelectionMenu/HubSelectionMenu.vue';
  import ManageMenu from '../ManageMenu/ManageMenu.vue';
  import MonitorMenu from '../MonitorMenu/MonitorMenu.vue';
  import ReviewMenu from '../ReviewMenu/ReviewMenu.vue';
  import PackageSearch from '../PackageSearch/PackageSearch.vue';
  import './_MenuBar.scss';

  export default {
    props: {
    },
    name: 'MenuBar',
    components: {
      ConfigureMenu,
      HubSelectionMenu,
      ManageMenu,
      MonitorMenu,
      ReviewMenu,
      PackageSearch,
      }
  };
</script>
