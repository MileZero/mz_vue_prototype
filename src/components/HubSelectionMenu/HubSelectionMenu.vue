<template>
  <div class="HubSelectionMenu" v-on:click="dropdown">
    <div class="HubSelectionMenuContent" v-if="this.$auth.org.facilities">
      <div class="HubInfo">{{this.$auth.org.facilities[currentHubIndex].label}}
      </div>
      <div class="DateTime">
        <div>{{currentTime}}</div>
        <div>{{currentDate}}</div>
      </div>
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
const moment = require('moment-timezone');

export default {
  data() {
    return {
      currentHubIndex: 0,
      dropdownSelected: false,
      currentDate: moment().format('dddd, MMMM DD'),
      currentTime: moment().format('hh:mm:ss A (z)'),
    };
  },
  props: {
  },
  methods: {
    dropdown() {
      this.dropdownSelected = !this.dropdownSelected;
      console.log(this.$auth.org);
    },
    setHub(hubIndex) {
      this.currentHubIndex = hubIndex;
      this.setDateTime();
      this.dropdownSelected = false;
    },
    setDateTime() {
      this.currentDate = moment.tz(this.$auth.org.facilities[this.currentHubIndex].location.timezone).format('dddd, MMMM DD');
      this.currentTime = moment.tz(this.$auth.org.facilities[this.currentHubIndex].location.timezone).format('hh:mm:ss A (z)');
    },
  },
  created() {
    this.setDateTime();
    setInterval(this.setDateTime, 1000);
  },
};
</script>

<style lang="scss" scoped>
  @import "./_HubSelectionMenu.scss";
</style>
