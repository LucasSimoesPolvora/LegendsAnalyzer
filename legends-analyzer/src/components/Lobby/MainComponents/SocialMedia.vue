<template>
  <div class="socialMediaPart">
    <div class="socialTitles">
      <h1>Our social networks</h1>
      <p>Join Us</p>
    </div>
    <SocialCard iconClass="pi-facebook" title="Facebook" link="https://www.facebook.com/" :color="'red'"></SocialCard>
  </div>
</template>

<script setup>
import SocialCard from './SocialCard.vue'

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
</style>
