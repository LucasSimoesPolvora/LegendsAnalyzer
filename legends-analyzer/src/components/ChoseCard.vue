<template>
  <div class="cardContainer">
    <Card
      :imageLink="'./LolPictures/1332615.jpeg'"
      :title="'League Of Legends'"
      :isHide="false"
    ></Card>
    <Card
      :imageLink="'/valorant.jpg'"
      :title="'Soon'"
      :isHide="true"
    ></Card>
  </div>
</template>
<script setup>
import Card from './Card.vue'
</script>
<style>
.cardContainer {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
}
</style>
