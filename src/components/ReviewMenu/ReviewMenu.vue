<template>
  <div class="MenuBarOption ReviewMenu MenuDropDown" v-on:click="dropdown">
    <div class=MenuBarOptionLabel>Review</div>
    <div class="ReviewMenuContent" v-if="dropdownSelected"></div>
        <DropDownArrow :isSelected="dropdownSelected" />
  </div>
</template>

<script>
  import './_ReviewMenu.scss';
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
