<template>
  <div>
    <a style="cursor: pointer; text-decoration: underline" v-on:click="navigate()"></a>
    <router-link :to="{name: 'RouteMap'}">RouteMap</router-link>
    <h2>RouteMap Page</h2>
    </div>
    </template>