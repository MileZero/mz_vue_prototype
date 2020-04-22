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
  font-family: "Roboto",sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.MenuBarOption {
  position: relative;
  width: 90px;
  height: 70px;
  cursor: pointer;
  transition: background .33s;
  background: 0 0;
  border: none;
}

.MenuBarOption::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50px;
  height: 50px;
  margin-left: -25px;
  margin-top: -20px;
  background: url(./assets/menu-icons.png);
  background-size: 350px 50px;
  background-repeat: no-repeat;
  opacity: .32;
  transition: opacity .33s;
}
</style>
