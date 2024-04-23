<script setup>
import { RouterLink, RouterView } from 'vue-router';
import NavBar from './components/Lobby/NavBar.vue';
</script>

<template>
  <NavBar />
  <RouterView />
</template>

<style>
footer {
  background-color: black;
}
</style>
