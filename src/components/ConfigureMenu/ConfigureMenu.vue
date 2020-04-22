<template>
  <div class="MenuBarOption ConfigureMenu" v-on:click="dropdown">
    <div class=MenuBarOptionLabel>Configure</div>
    <div v-if="dropdownSelected" class="ConfigureMenuContent">Dropdown!
    </div>
  </div>
</template>

<script>
  import './_ConfigureMenu.scss';
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