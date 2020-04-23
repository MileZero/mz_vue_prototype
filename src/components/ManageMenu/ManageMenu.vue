<template>
  <div class="MenuBarOption ManageMenu MenuDropDown" v-on:click="dropdown">
    <div class=MenuBarOptionLabel>Manage</div>
      <div v-if="dropdownSelected" class="ManageMenuContent"></div>
      <DropDownArrow :isSelected="dropdownSelected" />
  </div>
</template>

<script>
  import './_ManageMenu.scss';
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
