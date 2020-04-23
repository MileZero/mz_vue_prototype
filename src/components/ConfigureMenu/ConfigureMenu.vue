<template>
  <div class="MenuBarOption ConfigureMenu MenuDropDown" v-on:click="dropdown">
    <div class=MenuBarOptionLabel>Configure</div>
    <div v-if="dropdownSelected" class="ConfigureMenuContent"></div>
    <DropDownArrow :isSelected="dropdownSelected" />
    </div>
  </div>
</template>

<script>
  import './_ConfigureMenu.scss';
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