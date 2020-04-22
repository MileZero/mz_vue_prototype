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
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.MenuBarOptionLabel {
  color: white;
  font-weight: bold;
  margin-top: 16px;
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

.MenuBarOptionLabel::after {
  content: "";
  border: solid white;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  align-self: flex-end;
  flex: 0 0 auto;
}
</style>
