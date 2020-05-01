<template>
  <div wid="app">
    <div v-if="!$auth.loading">
      <TopNavBar v-if="$auth.isAuthenticated"/>
      <MenuBar v-if="$auth.isAuthenticated"/>
      <ContentDisplay v-if="$auth.isAuthenticated"/>
    </div>
  </div>
</template>

<script>
import MenuBar from './components/MenuBar/MenuBar';
import TopNavBar from './components/TopNavBar/TopNavBar';
import ContentDisplay from './components/ContentDisplay/ContentDisplay';
export default {
  name: 'App',
  components: {
    TopNavBar,
    MenuBar,
    ContentDisplay,
  },
  methods: {
  },
};
</script>

<style lang="scss">
  @import "./_GlobalStyles.scss";
</style>