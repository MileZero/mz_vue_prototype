<template>
  <div class="MenuBar">
    <div class="Content-sidebar">
      <div id="menu" class="Content-menu">
        <HubSelectionMenu />
        <MonitorMenu />
        <ManageMenu />
        <ReviewMenu />
        <ConfigureMenu />
      </div>
    </div>
  </div>
</template>

<script>
import ConfigureMenu from '../ConfigureMenu/ConfigureMenu.vue';
import HubSelectionMenu from '../HubSelectionMenu/HubSelectionMenu.vue';
import ManageMenu from '../ManageMenu/ManageMenu.vue';
import MonitorMenu from '../MonitorMenu/MonitorMenu.vue';
import ReviewMenu from '../ReviewMenu/ReviewMenu.vue';

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
        }
    };
</script>
