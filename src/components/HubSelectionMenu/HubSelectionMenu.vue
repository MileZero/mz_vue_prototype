<template>
  <div class="HubSelectionMenu" v-on:click="dropdown">
    <div class="HubSelectionMenuContent" v-if="this.$auth.org.facilities">
      <div class="HubInfo">{{this.$auth.org.facilities[currentHubIndex].label}}</div>
        <transition name="HubOptions">
          <div v-if="dropdownSelected" v-on:click.stop class="HubOptionsList">
            <div class="MenuOptionsListItem HubListItem"
                v-for="(hub, index) in this.$auth.org.facilities"
                :key="hub.id"
                v-bind:class="index === currentHubIndex ? 'SelectedHub' : ''"
                v-on:click="setHub(index)">
              {{hub.label}}
            </div>
          </div>
        </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentHubIndex: 0,
      dropdownSelected: false,
    };
  },
  props: {
  },
  methods: {
    dropdown() {
      this.dropdownSelected = !this.dropdownSelected;
    },
    setHub(hubIndex) {
      this.currentHubIndex = hubIndex;
      this.dropdownSelected = false;
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "./_HubSelectionMenu.scss";
</style>
