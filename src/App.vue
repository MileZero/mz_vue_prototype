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
import './_GlobalStyles.scss';
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
    login() {
      this.$auth.loginWithRedirect();
    },
  }
};
</script>

<style>

#app {
  font-family: "Roboto",sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
