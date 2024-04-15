<template>
  <vue-particles id="tsparticles" url="/particlesjs-config.json" />
  <header>
    <div class="text">
      <h1>Hello summoner ! Welcome to</h1>
      <a href="#">Get Started</a>
    </div>
    <div class="logo"></div>
  </header>
</template>

<script>
window.addEventListener('scroll', () => {
  const header = document.querySelector('header')
  // header.style.filter = `brightness(${1 - window.scrollY / 800})`;
})
</script>

<style>
header {
  width: 100%;
  height: 100vh;
  /* background-image: url('/LolPictures/1341675.jpeg'); */
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1)),
    url('/LolPictures/1341675.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  font-family: MainFont;
  display: flex;
  justify-content: center;
  align-items: center;
}

.text {
  color: white;
  width: 50%;
  z-index: 2;
}

.text h1 {
  font-size: 80px;
  margin-bottom: 100px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.text a {
  padding: 30px 40px;
  background-color: #8d86c9;
  text-decoration: none;
  border: 1px solid white;
  border-radius: 30px 0 30px 0;
  color: white;
}

.text a:hover {
  background-color: #6c63a4;
  clip-path: none;
  border-radius: 0 30px 0 30px;
  transition: 0.5s;
}

.text a:not(:hover) {
  transition: 0.5s;
}

#tsparticles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.logo {
  width: 25%;
  height: calc(100vh - 50%);
  background-color: chartreuse;
}

@media only screen and (max-width: 600px) {
  .logo {
    display: none;
  }
}
</style>
