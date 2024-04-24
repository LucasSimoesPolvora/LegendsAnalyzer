<template>
  <main>
    <div class="cardDisplay">
      <StatsCard class="card"/>
      <EsportNews class="card"/>
    </div>
    <SocialMedia />
  </main>
</template>

<script setup>
import StatsCard from './StatsCard.vue'
import EsportNews from './EsportNews.vue'
import SocialMedia from './SocialMedia.vue'
</script>

<script>
export default {}
</script>

<style scoped>
.cardDisplay {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding-top: 50px;
    box-shadow: 0px 0px 30px 60px #000000;
}

.card {
  min-width: 600px;
}
</style>
