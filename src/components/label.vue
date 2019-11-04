<template>
  <div>
    <a style="cursor: pointer; text-decoration: underline" v-on:click="navigate()"></a>
    <router-link :to="{name: 'Fleet' }">Fleet</router-link>
    <router-link :to="{name: 'label' }">label</router-link>
    <h2>label Page</h2>
    </div>
    </template>