<template>
  <vue-particles id="tsparticles" url="/particlesjs-config.json" />
  <header>
    <div id="particles-js"></div>
    <div class="text">
      <h1>Hello summoner ! Welcome to</h1>
      <a href="#">Get Started</a>
    </div>
    <div class="logo"></div>
  </header>
</template>

<script>
export default {}
</script>

<style>
header {
  width: 100%;
  height: 100vh;
  background-image: url('/LolPictures/1341675.jpeg');
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
  color: white;
  width: 50%;
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
  padding: 30px 50px;
  background-color: #8d86c9;
  text-decoration: none;
  border: 1px solid white;
  border-radius: 30px 0 30px 0;
  color: white;
}

.text a:hover {
  background-color: #6c63a4;
  border-radius: 0 30px 0 30px;
  transition: 0.5s;
}

.text a:not(:hover) {
  transition: 0.5s;
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
