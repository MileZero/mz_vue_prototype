<template>
  <div class="MenuBarOption ManageMenu MenuDropDown" v-on:click="dropdown">
    <div class=MenuBarOptionLabel>MANAGE</div>
    <DropDownArrow :isSelected="dropdownSelected" />
    <div v-if="dropdownSelected" class="FlexBreak"></div>
    <transition name="SlideDown">
      <ul v-if="dropdownSelected" v-on:click.stop class="MenuOptionsList">
        <li v-for="option in MenuOptions" :key="option.id">
          <router-link :to="option.endpoint" class="MenuOptionsListItem">
            {{option.title}}
          </router-link>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import DropDownArrow from '../DropDownArrow/DropDownArrow.vue';

const MenuOptions = {
  Metrics: {
    title: 'Metrics',
    endpoint: '',
    id: 1,
  },
  Orders: {
    title: 'Orders',
    endpoint: '',
    id: 2,
  },
  Sortation: {
    title: 'Sortation',
    endpoint: '',
    id: 3,
  },
  Routes: {
    title: 'Routes',
    endpoint: '',
    id: 4,
  },
  Dispatch: {
    title: 'Dispatch',
    endpoint: '',
    id: 5,
  },
  Manifest: {
    title: 'Manifest',
    endpoint: '',
    id: 6,
  },
  Bulk: {
    title: 'Bulk',
    endpoint: '',
    id: 7,
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
  @import "./_ManageMenu.scss";
</style>
