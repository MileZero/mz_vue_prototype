<template>
  <div id="app">
    <MenuBar />
    <ContentDisplay />
  </div>
</template>

<script>
import MenuBar from './components/MenuBar/MenuBar.vue';
import ContentDisplay from './components/ContentDisplay/ContentDisplay.vue';

export default {
  name: 'App',
  components: {
    MenuBar,
    ContentDisplay,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
