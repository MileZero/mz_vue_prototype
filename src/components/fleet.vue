<template>
  <div>
    <a style="cursor: pointer; text-decoration: underline" v-on:click="navigate()"></a>
    <router-link :to="{name: 'Fleet' }">Fleet</router-link>
    <p align="right">
    <router-link to="/Configure/Fleet/label" tag="button">label</router-link></p>
    <h2>Fleet Page</h2>
    </div>
    </template>