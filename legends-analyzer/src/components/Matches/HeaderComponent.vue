<template>
  <header>
    <div class="header-components">
        <div class="title">
            <h1>Search player's matches :</h1>
            <input type="text" placeholder="Enter a player's name + #" />
        </div>
        <div class="img">
            <!-- <img src="/LolPictures/1332615.jpeg" alt="League of Legends" /> -->
            <div></div>
        </div>
    </div>
  </header>
</template>

<script setup></script>

<script>
export default {}
</script>

<style scoped>
header {
  height: 100vh;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),
    url('/LolPictures/1332615.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.header-components {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
}

.title input {
  width: 300px;
  height: 50px;
  border: none;
  border-radius: 5px;
  padding: 0 10px;
  font-size: 1.2rem;
  outline: none;
}

.img div {
    width: 500px;
    height: 500px;
    background: greenyellow;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
</style>
