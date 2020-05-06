<template>
  <div class="MenuBarOption MenuBarOptionTemplate MenuDropDown" v-on:click="dropdown">
    <div class=MenuBarOptionLabel>TEMPLATE</div>
    <DropDownArrow :isSelected="dropdownSelected" />
    <div v-if="dropdownSelected" class="FlexBreak"></div>
    <transition name="SlideDown">
      <ul v-if="dropdownSelected" v-on:click.stop class="MenuOptionsList">
        <li v-for="option in MenuOptions" :key="option.id">
          <router-link :to="option.endpoint" replace class="MenuOptionsListItem">
            {{option.title}}
          </router-link>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import DropDownArrow from '../../DropDownArrow/DropDownArrow.vue';

const MenuOptions = {
  UserInfo: {
    title: 'UserInfo(Template)',
    endpoint: '/template',
    id: 1,
  },
  OptionTwo: {
    title: 'ClearDisplay',
    endpoint: '/',
    id: 2,
  },
  OptionThree: {
    title: 'Option 3',
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
@import "./_MenuBarOptionTemplate.scss";
</style>
