<template>
  <div class="MenuBarOption ConfigureMenu MenuDropDown" v-on:click="dropdown">
    <div class=MenuBarOptionLabel>CONFIGURE</div>
    <DropDownArrow :isSelected="dropdownSelected" />
    <div v-if="dropdownSelected" class="FlexBreak"></div>
    <transition name="SlideDown">
      <ul v-if="dropdownSelected" v-on:click.stop class="MenuOptionsList">
        <li class="MenuOptionsListItem" v-for="option in MenuOptions" :key="option.id">
          {{option.title}}
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import DropDownArrow from '../DropDownArrow/DropDownArrow.vue';

const MenuOptions = {
  Workforce: {
    title: 'Workforce',
    endpoint: '',
    id: 1,
  },
  Fleet: {
    title: 'Fleet',
    endpoint: '',
    id: 2,
  },
  Warehouse: {
    title: 'Warehouse',
    endpoint: '',
    id: 3,
  },
};

export default {
  props: {
  },
  data() {
    return {
      dropdownSelected: false,
      MenuOptions,
    };
  },
  methods: {
    dropdown() {
      this.dropdownSelected = !this.dropdownSelected;
    },
  },
  components: {
    DropDownArrow,
  },
};
</script>

<style lang="scss" scoped>
  @import "./_ConfigureMenu.scss";
</style>
