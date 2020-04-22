<template>
  <div class="MenuBarOption ReviewMenu" v-on:click="dropdown">
    <div class=MenuBarOptionLabel>Review</div>
    <div class="ReviewMenuContent" v-if="dropdownSelected">Dropdown!
    </div>
  </div>
</template>

<script>
  import './_ReviewMenu.scss';
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
