<template>
  <div>
    <a style="cursor: pointer; text-decoration: underline" v-on:click="navigate()"></a>
            <router-link v-bind:to="{name: 'Dashboard'}">Dashboard</router-link>
    <h2>Dashboard Page</h2>
    </div>
    </template>