<template>
  <div class="circle">
    <div></div>
  </div>
  
  <div class="applicationChose">
    <div class="cardContainer">
      <Card
        :imageLink="'./LolPictures/1332615.jpeg'"
        :title="'League Of Legends'"
        :isHide="false"
      ></Card>
      <Card :imageLink="'/valorant.jpg'" :title="'Soon'" :isHide="true"></Card>
    </div>
  </div>
</template>
<script setup>
import Card from './Card.vue'
</script>
<style>
.cardContainer {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
  z-index: 1;
}

.applicationChose {
  height: 100vh;
  display: grid;
  align-items: center;
  place-items: center;
}

.applicationChose #title {
  font-size: 3rem;
  z-index: 1;
}

.circle {
  background-image: linear-gradient(#F7ECE1, #9067c6);
  padding: 1px;
  width: 70vh;
  height: 70vh;
  border-style: solid;
  border-color: transparent;
  border-radius: 50%;
  border-width: 1px;
  animation: rot 1s linear infinite;
  padding: 1px;
  position: absolute;
  left: calc(50% - 35vh);
  top: calc(100vh + 50% - 35vh);
  z-index: 0;
}
.circle > div {
  background: rgb(0, 0, 0);
  height: calc(70vh - 1px);;
  width: calc(70vh - 1px);
  border-style: solid;
  border-color: transparent;
  border-radius: 50%;
  border-width: 1px;
}

@keyframes rot {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
