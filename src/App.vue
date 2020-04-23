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

.FlexBreak {
  flex-basis: 100%;
  height: 0;
}

.SlideDown-enter-active {
  transition: all .15s ease;
}
.SlideDown-leave-active {
  transition: all .15s ease;
}
.SlideDown-enter, .SlideDown-leave-to {
  transform: translateY(-15px);
  opacity: 0.1;
}
.SlideDown-leave, .SlideDown-enter-to {
  transform: translateY(0px);
  opacity: 1;
}

.MenuOptionsList {
  margin-left: -10px;
  margin-top: 0px;
  margin-bottom: 10px;
}

.MenuOptionsListItem {
  color: white;
  list-style-type: none;
  text-align: left;
}

.MenuBarOption {
  position: relative;
  width: 160px;
  min-height: 70px;
  cursor: pointer;
  transition: background .33s;
  background: 0 0;
  border: none;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.MenuBarOptionLabel {
  color: white;
  font-weight: bold;
  flex: none;
  font-size: 14px;
  margin-left: -5px;
  margin-bottom: auto;
  margin-top: 15px;
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
  margin-bottom: auto;
}
</style>
