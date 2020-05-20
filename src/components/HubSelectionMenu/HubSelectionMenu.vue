<template>
  <div class="HubSelectionMenu" v-on:click="dropdown">
    <div class="HubSelectionMenuContent" v-if="selectedHub">
      <div class="HubInfo">{{selectedHub.label}}
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
              v-bind:class="hub.id === selectedHub.id ? 'SelectedHub' : ''"
              v-on:click="selectHub(index)">
            {{hub.label}}
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

const moment = require('moment-timezone');

export default {
  data() {
    return {
      dropdownSelected: false,
      currentDate: moment().format('dddd, MMMM DD'),
      currentTime: moment().format('hh:mm A (z)'),
    };
  },
  props: {
  },
  computed: {
    ...mapGetters('Hub', [
      'selectedHub',
    ]),
  },
  methods: {
    ...mapMutations('Hub', [
      'setHub',
    ]),
    dropdown() {
      this.dropdownSelected = !this.dropdownSelected;
    },
    selectHub(hubIndex) {
      this.setHub(this.$auth.org.facilities[hubIndex]);
      this.setDateTime();
      this.dropdownSelected = false;
    },
    setDateTime() {
      this.currentDate = moment.tz(this.selectedHub.location.timezone).format('dddd, MMMM DD');
      this.currentTime = moment.tz(this.selectedHub.location.timezone).format('hh:mm A (z)');
    },
  },
  mounted() {
    this.setDateTime();
    setInterval(this.setDateTime, 1000 * 60);
  },
};
</script>

<style lang="scss" scoped>
  @import "./_HubSelectionMenu.scss";
</style>
