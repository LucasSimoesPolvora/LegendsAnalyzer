<template>
  <div class="socialMediaPart">
    <div class="socialTitles">
      <h1>Our social networks</h1>
      <p>Join Us</p>
    </div>
    <div class="cardDisplay">
      <a href="">
        <div class="socialCard" :style="{ backgroundColor: '#7289da' }">
          <AkDiscordFill class="icon" />
          <h3>Discord</h3>
        </div>
      </a>
      <a href="">
        <div class="socialCard" :style="{ backgroundColor: '#C13584' }">
          <AkInstagramFill class="icon" />
          <h3>Instagram</h3>
        </div>
      </a>
      <a href="">
        <div class="socialCard" :style="{ backgroundColor: '#1DA1F2' }">
          <AkTwitterFill class="icon" />
          <h3>Twitter (X)</h3>
        </div>
      </a>
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
  align-items: center;
  justify-content: space-around;
  height: 50vh;
  width: 100%;
  color: white;
}

.socialTitles {
  text-align: center;
  width: 50%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-right: 2px solid white;
}

.socialCard {
  width: 20vh;
  height: 100px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.cardDisplay {
  width: 50%;
  display: grid;
  justify-content: center;
}

.cardDisplay a {
  text-decoration: none;
  color: white;
}

.cardDisplay .socialCard {
  margin: 10px 0;
}

.icon {
  font-size: 2.3em;
}
</style>
