<script setup>
import fs from 'node:fs'
</script>

<script>
document.addEventListener('DOMContentLoaded', () => {
  const fileList = fs.readdirSync('/HeaderBackgrounds')

  console.log(fileList)
})
</script>

<template>
  <header>
    <div class="text">
      <h1>Hello summoner ! Welcome to</h1>
      <h2>Legends Analyzer</h2>
      <a href="#">Get Started</a>
    </div>
  </header>
  <p>coucou</p>
  <p>coucou</p>
  <p>coucou</p>
  <p>coucou</p>
  <p>coucou</p>
  <p>coucou</p>
  <p>coucou</p>
  <p>coucou</p>
  <p>coucou</p>
  <p>coucou</p>
  <p>coucou</p>
  <p>coucou</p>
  <p>coucou</p>
  <p>coucou</p>
  <p>coucou</p>
  <p>coucou</p>
  <p>coucou</p>
  <p>coucou</p>
  <p>coucou</p>
  <p>coucou</p>
  <p>coucou</p>
  <p>coucou</p>
  <p>coucou</p>
  <p>coucou</p>
  <p>coucou</p>
  <p>coucou</p>
  <p>coucou</p>
  <p>coucou</p>
  <p>coucou</p>
  <p>coucou</p>
  <p>coucou</p>
  <p>coucou</p>
  <p>coucou</p>
  <p>coucou</p>
</template>

<style scoped>
@font-face {
  font-family: 'MainFont';
  src: url(/font/League.otf);
}

header {
  width: 100%;
  height: 100vh;
  background-image: url('/headerBG.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  font-family: MainFont;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: -1px -200px 213px 200px rgba(0, 0, 0, 0.75) inset;
  -webkit-box-shadow: -1px -200px 213px 200px rgba(0, 0, 0, 0.75) inset;
  -moz-box-shadow: -1px -200px 213px 200px rgba(0, 0, 0, 0.75) inset;
}

.text {
  text-align: center;
  color: white;
}

.text h1 {
  font-size: 80px;
}

.text a {
}

@media only screen and (max-width: 600px) {
  header {
    background-size: cover;
  }
}
</style>
