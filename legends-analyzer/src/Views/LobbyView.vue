<script setup>
import HeaderComponent from '@/components/Lobby/LobbyHeader.vue'
import MainComponent from '@/components/Lobby/Main.vue'
</script>

<template>
  <HeaderComponent />
  <MainComponent id="main"/>
</template>

<style>
main {
  background-color: black;
}
</style>
