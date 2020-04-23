<template>
  <div class="MenuBarOption ReviewMenu MenuDropDown" v-on:click="dropdown">
    <div class=MenuBarOptionLabel>REVIEW</div>
    <DropDownArrow :isSelected="dropdownSelected" />
    <div v-if="dropdownSelected" class="FlexBreak"></div>
    <transition name="SlideDown">
      <ul v-if="dropdownSelected" class="MenuOptionsList">
        <li class="MenuOptionsListItem" v-for="option in MenuOptions" :key="option.id">{{option.title}}</li>
      </ul>
    </transition>
  </div>
</template>

<script>
  import './_ReviewMenu.scss';
  import DropDownArrow from '../DropDownArrow/DropDownArrow.vue';

  const MenuOptions = {
    Analytics: {
      title: 'Analytics',
      endpoint: '',
      id: 1,
    },
    Loadscans: {
      title: 'Loadscans',
      endpoint: '',
      id: 2,
    },
    Undeliverables: {
      title: 'Undeliverables',
      endpoint: '',
      id: 3,
    },
    Payments: {
      title: 'Payments',
      endpoint: '',
      id: 4,
    },
    POD: {
      title: 'POD',
      endpoint: '',
      id: 5,
    },
    History: {
      title: 'History',
      endpoint: '',
      id: 6,
    },
    Messages: {
      title: 'Messages',
      endpoint: '',
      id: 7,
    },
    Tasks: {
      title: 'Tasks',
      endpoint: '',
      id: 8,
    },
  };

  export default {
    props: {
    },
    data () {
      return {
        dropdownSelected: false,
        MenuOptions
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
