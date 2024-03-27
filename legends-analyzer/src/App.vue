<script>
document.addEventListener('scroll', () => {
  const header = document.querySelector('header')
  if(window.screen.width > 1500) {
    header.style.backgroundSize = `calc(100% + ${window.scrollY * 5}px)`
  }
})
</script>

<template>
  <header>
    <div class="text">
      <h1>Hello summoner ! Welcome to</h1>
      <h2>Legends Analyzer</h2>
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
  background-size: 100% 100%;
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

@media only screen and (max-width: 600px) {
  header {
    background-size: cover;
  }
}
</style>
