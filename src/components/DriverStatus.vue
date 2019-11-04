<template>
  <div>
    <a style="cursor: pointer; text-decoration: underline" v-on:click="navigate()"></a>
    <router-link :to="{name: 'DriverStatus' }">DriverStatus</router-link>
    <h2>DriverStatus Page</h2>
    </div>
    </template>