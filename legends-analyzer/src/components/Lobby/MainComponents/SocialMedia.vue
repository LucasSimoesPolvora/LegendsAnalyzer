<template>
  <div class="socialMediaPart">
    <div class="socialTitles">
      <h1>Our social networks</h1>
      <p>Join Us</p>
    </div>
    <div class="cardDisplay">
      <div class="socialCard" :style="{ backgroundColor: '#7289da' }">
        <AkDiscordFill class="icon" />
        <h3>Discord</h3>
      </div>
      <div class="socialCard" :style="{ backgroundColor: '#C13584' }">
        <AkInstagramFill class="icon" />
        <h3>Instagram</h3>
      </div>
      <div class="socialCard" :style="{ backgroundColor: '#1DA1F2' }">
        <AkTwitterFill class="icon" />
        <h3>Twitter (X)</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import { AkDiscordFill, AkInstagramFill, AkTwitterFill } from '@kalimahapps/vue-icons'
</script>

<script>
export default {}
</script>
<style>
.socialMediaPart {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  color: white;
}

.socialTitles {
  text-align: center;
  width: 50vh;
  padding-bottom: calc(10vh - 2px);
  border-bottom: 2px solid white;
}

.socialCard {
  width: 20vh;
  height: 100px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.icon {
  font-size: 2.3em;
}

.cardDisplay {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin-top: 10vh;
  /* height: 50vh; */
  /* border-top: 2px solid white; */
}
</style>
