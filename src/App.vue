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
  width: 145px;
  height: 70px;
  cursor: pointer;
  transition: background .33s;
  background: 0 0;
  border: none;
  display: flex;
  align-items: center;
}

.MenuBarOptionLabel {
  color: white;
  font-weight: bold;
  flex: none;
  font-size: 14px;
}

.MenuBarOption::before {
  content: "";
  width: 50px;
  height: 50px;
  background: url(./assets/menu-icons.png);
  background-size: 350px 50px;
  background-repeat: no-repeat;
  opacity: .32;
  transform: scale(0.5);
  transition: opacity .33s;
  flex: 0 0 auto;
}
</style>
