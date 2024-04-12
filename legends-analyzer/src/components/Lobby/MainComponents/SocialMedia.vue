<template>
  <div class="socialMediaPart">
    <div class="socialTitles">
      <h1>Our social networks</h1>
      <p>Join Us</p>
    </div>
    <div class="socialCard" :style="{backgroundColor: 'red'}">
        <AkDiscordFill class="icon"/>
        <h3>Discord</h3>
    </div>
  </div>
</template>

<script setup>
import { AkDiscordFill } from "@kalimahapps/vue-icons";
</script>

<script>
export default {}
</script>
<style>
.socialMediaPart .socialTitles{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  color: white;
}

.socialCard {
    width: 20vh;
    height: 100px;
}

.socialCard img {
    width: 20%;
    object-fit: cover;
}

.icon {
  font-size: 2.3em;
}
</style>
