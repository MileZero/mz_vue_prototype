<template>
  <div class="MenuBarOption MonitorMenu" v-on:click="dropdown">
    <div class=MenuBarOptionLabel>Monitor</div>
    <div class="MonitorMenuContent" v-if="dropdownSelected">Dropdown!
    </div>
  </div>
</template>

<script>
  import './_MonitorMenu.scss';
  export default {
    props: {
    },
    data () {
      return {
        dropdownSelected: false,
      }
    },
    methods: {
      dropdown () {
        this.dropdownSelected = !this.dropdownSelected;
      }
    }
  };
</script>
