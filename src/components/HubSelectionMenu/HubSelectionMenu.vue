<template>
  <div class="HubSelectionMenu" v-on:click="dropdown">
      <div class="HubSelectionMenuContent">
        <div class="HubInfo">{{currentHub.name}} ({{currentHub.id}})</div>
          <transition name="SlideDown">
            <ul v-if="dropdownSelected" v-on:click.stop class="HubOptionsList">
              <li class="MenuOptionsListItem" v-for="hub in hubs" :key="hub.id" v-on:click="changeHub(hub)">{{hub.name}} ({{hub.id}})</li>
            </ul>
          </transition>
      </div>
  </div>
</template>

<script>
  import './_HubSelectionMenu.scss';
  export default {
    data () {
      return {
        hubs: [
          {
            name: 'Albany',
            id: 7585,
          },
          {
            name: 'Rochester',
            id: 925,
          },
          {
            name: 'Stockton',
            id: 8506,
          },
        ],
        currentHub: {
          name: 'Albany',
          id: 7585,
        },
        dropdownSelected: false,
      }
    },
    props: {
    },
    methods: {
      dropdown () {
        this.dropdownSelected = !this.dropdownSelected;
      },
      changeHub(hub) {
        this.currentHub = hub;
        this.dropdownSelected = false;
      }
    },
  };
</script>
