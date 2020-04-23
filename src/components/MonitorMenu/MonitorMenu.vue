<template>
  <div class="MenuBarOption MonitorMenu MenuDropDown" v-on:click="dropdown">
    <div class=MenuBarOptionLabel>Monitor</div>
    <div class="MonitorMenuContent" v-if="dropdownSelected"></div>
    <DropDownArrow :isSelected="dropdownSelected" />
  </div>
</template>

<script>
  import './_MonitorMenu.scss';
  import DropDownArrow from '../DropDownArrow/DropDownArrow.vue';
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
    },
    components: {
      DropDownArrow,
    },
  };
</script>
