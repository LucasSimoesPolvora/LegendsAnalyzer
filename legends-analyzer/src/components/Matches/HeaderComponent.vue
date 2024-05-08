<template>
  <header>
    <div class="header-components">
      <div class="title">
        <h1>Search player's matches :</h1>
        <div class="inputs">
          <div
            class="custom-select"
            :style="{ borderRadius: !isClicked ? '5px 0 0 5px' : '5px 0 0 0' }"
          >
            <div class="value" @click="toggleSelect()">
              <h4>
                {{ regionChosen.name }}
              </h4>
              <AkChevronDown v-if="!isClicked" />
              <AkChevronUp v-else />
            </div>
            <div :class="[isClicked ? 'clicked-selected' : 'select-options']">
              <p
                v-for="option in options"
                :key="option"
                @click="[(regionChosen.name = option), (isClicked = false)]"
              >
                {{ option }}
              </p>
            </div>
          </div>

          <input type="text" placeholder="Enter a player's name + #" />
        </div>
      </div>
      <div class="img">
        <!-- <img src="/LolPictures/1332615.jpeg" alt="League of Legends" /> -->
        <div></div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { AkChevronDown, AkChevronUp } from '@kalimahapps/vue-icons'
</script>

<script>
export default {
  data() {
    return {
      isClicked: false,
      regionChosen: { name: 'Choose a region', active: false },
      options: [
        'North America',
        'EU West',
        'EU East/Nordic',
        'Latin America (North)',
        'Latin America (South)',
        'Oceania',
        'Korea',
        'Japan',
        'Russia',
        'Brazil',
        'Turkey',
        'Philippines',
        'Singapore',
        'Thailand',
        'Taiwan',
        'Vietnam'
      ]
    }
  },
  methods: {
    toggleSelect() {
      this.isClicked = !this.isClicked
      console.log(this.isClicked)
    }
  }
}
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

.inputs {
  display: flex;
  align-items: end;
  height: 100px;
}

.custom-select {
  background-color: #242038;
  border-radius: 5px 0 0 0;
  font-family: Arial, Helvetica, sans-serif;
  /* height: 50px; */
}

.value {
  height: 50px;
  width: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 50px 0 0 5px;
  font-size: 0.9rem;
  cursor: pointer;
}

.value h4 {
  user-select: none;
}

.icon {
  font-weight: bolder;
}

.select-options p,
.clicked-selected p {
  padding: 4px 0;
  margin: 0;
  user-select: none;
}

.select-options p:hover,
.clicked-selected p:hover {
  background-color: #514c6b;
  cursor: pointer;
}

.select-options,
.clicked-selected {
  width: 200px;
  height: 300px;
  overflow-y: scroll;
}

.select-options::-webkit-scrollbar-track,
.clicked-selected::-webkit-scrollbar-track {
	border-radius: 10px;
}

.select-options::-webkit-scrollbar,
.clicked-selected::-webkit-scrollbar {
  width: 12px;
}

.select-options::-webkit-scrollbar-thumb,
.clicked-selected::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color: #514c6b;
}

.select-options {
  display: none;
  background-color: #242038;
  border-radius: 5px;
}

.clicked-selected {
  display: block;
  background-color: #242038;
  border-radius: 0 0 5px 5px;
  position: absolute;
  width: 400px;
}

.inputs div {
  text-align: center;
}

.title input {
  width: 300px;
  height: 50px;
  border: none;
  border-radius: 0 5px 5px 0;
  padding: 0 10px;
  font-size: 1.2rem;
  outline: none;
  background-color: #514c6b;
  color: white;
}

.title input::placeholder {
  color: rgb(202, 202, 202);
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
