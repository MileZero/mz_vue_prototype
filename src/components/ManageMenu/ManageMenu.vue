<template>
  <div class="MenuBarOption ManageMenu" v-on:click="dropdown">
      <div class=MenuBarOptionLabel>Manage</div>
        <div v-if="dropdownSelected" class="ManageMenuContent">Dropdown!
        </div>
  </div>
</template>

<script>
  import './_ManageMenu.scss';
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
