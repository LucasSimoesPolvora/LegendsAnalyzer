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

#main {
  box-shadow: 0px 0px 30px 60px #000000;
}
</style>
