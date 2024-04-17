<template>
  <main>
    <div class="card">
      <StatsCard />
      <EsportNews />
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
.card {
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
}
</style>
