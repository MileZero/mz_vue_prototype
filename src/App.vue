<template>
  <div wid="app">
    <transition name="fade">
      <div v-if="!$auth.loading">
        <Unauthorized v-if="!$auth.isAuthenticated"/>
        <TopNavBar v-if="$auth.isAuthenticated"/>
        <MenuBar v-if="$auth.isAuthenticated"/>
        <ContentDisplay v-if="$auth.isAuthenticated"/>
      </div>
    </transition>
  </div>
</template>

<script>
import MenuBar from './components/MenuBar/MenuBar.vue';
import TopNavBar from './components/TopNavBar/TopNavBar.vue';
import ContentDisplay from './components/ContentDisplay/ContentDisplay.vue';
import Unauthorized from './views/Unauthorized/Unauthorized.vue';

export default {
  name: 'App',
  components: {
    TopNavBar,
    MenuBar,
    ContentDisplay,
    Unauthorized,
  },
  methods: {
  },
  mounted() {
    this.$router.push('search');
    this.$store.commit('hub/SetHub', this.$auth.org.facilities[0]);
  },
};
</script>

<style lang="scss">
  @import "./assets/scss/_GlobalStyles.scss";
</style>
