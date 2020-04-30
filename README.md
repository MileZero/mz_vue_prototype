# mz_vue_prototype
Prototype refactoring of MileVision utilizing Vue/VueX.

## Project Structure
```
+-- /public
|   +-- index.html
|   +-- favicon.ico
|   +-- build.js (after building webpack bundle)
|
+-- /src
|   +-- _GlobalStyles.scss
|   +-- App.vue      [Parent Vue rendered to page] 
|   +-- main.js      [Vue initialization and config]
|   +-- /assets      [Static assets]
|   +-- /components  [Vue components]
|   +-- /modules     [VueX modules]
|   +-- /router      [Vue router]
|   +-- /service
    |   +-- /auth    [Auth0 Plugin]
    |   +-- /server  [Express Server]
|  
|   +-- /test        [Test Config]
```

## Project setup
```
npm i
```

### Disable Auth0 for local development
```
src/App.vue: Remove all v-if="!$auth.loading" and v-if="$auth.isAuthenticated" statements
src/main.js: Remove router param from new Vue({...}).$mount(#App) statement
```

### Compiles & hot reloads for development
```
npm run devWebpack
```

### Compiles and minifies for production
```
npm run buildProd
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
