<template>
  <div class="socialMediaPart">
    <div class="socialTitles">
      <h1>Our social networks</h1>
      <p>Join Us</p>
    </div>
    <div class="social-links">
      <a href="#">
        <i class="fab">
          <AkDiscordFill class="icon" />
        </i>
      </a>
      <a href="#">
        <i class="fab">
          <AkInstagramFill />
        </i>
      </a>
      <a href="#">
        <i class="fab">
          <AkTwitterFill />
        </i>
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
<style scoped>
.socialMediaPart {
  height: 50vh;
  width: 100%;
  color: white;
  width: 100%;
  display: grid;
  justify-items: center;
}

.socialTitles {
  text-align: center;
  width: 50%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 2px solid white;
}
.social-links {
  display: flex;
  width: 50%;
  justify-content: space-evenly;
  margin-top: 60px;
}

.social-links a {
  width: 80px;
  height: 80px;
  text-align: center;
  text-decoration: none;
  color: #ffffff;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  transition: transform 0.5s;
  border: 3px grey solid;
}

.social-links a .fab {
  font-size: 30px;
  line-height: 80px;
  position: relative;
  z-index: 10;
  transition: color 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.social-links a::after {
  content: '';
  width: 100%;
  height: 100%;
  top: -90px;
  left: 0;
  background: #000;
  background: linear-gradient(-45deg, #9067c6, #242038);
  position: absolute;
  transition: 0.5s;
}

.social-links a:hover::after {
  top: 0;
}

.social-links a:hover .fab {
  color: #000000;
}

.social-links a:hover {
  transform: translateY(-10px);
}
</style>
