<template>
  <div class="circle">
    <div>
    </div>
  </div>
  
  <div class="applicationChose">
    <div class="cardContainer">
      <Card
      :imageLink="'./LolPictures/1332615.jpeg'"
      :title="'League Of Legends'"
      :isHide="false"
      ></Card>
      <div class="centerDiv">
        <img src="/LolPictures/masterLol.webp" alt="">
        <h2>Select the game</h2>
      </div>
      <Card :imageLink="'/valorant.jpg'" :title="'Soon...'" :isHide="true"></Card>
    </div>
  </div>
</template>

<script setup>
import Card from './Card.vue'
</script>

<script>
document.addEventListener('scroll', () => {
  const divCenter = document.querySelector('.centerDiv');

  if(window.scrollY > divCenter.offsetHeight) {
    console.log('ok');
    divCenter.style.opacity = 1;
    divCenter.style.transition = '3s';
  }
  else {
    divCenter.style.opacity = 0;
    divCenter.style.transition = '3s';
  }
})
</script>

<style>
.cardContainer {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  z-index: 1;
}

.cardContainer img {
  width: 30vh;
  height: 30vh;
  border-radius: 20px;
  object-fit: cover;
}

.centerDiv {
  text-align: center;
  opacity: 0;
}

.centerDiv img {
  animation: topToBottom 1.5s linear infinite;
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

@keyframes topToBottom {
  0% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(-10px);
  }
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
