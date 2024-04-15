<template>
  <div class="statsCard">
    <div class="cardStats_header">
      <h3>Champions ranked winrate :</h3>
      <div>
        <h3>Solo</h3>
        <h3>Flex</h3>
      </div>
    </div>
    <div class="cardStats_body">
      <div class="champion" v-for="stat in stats" :key="stat.champion">
        <div class="champion_info">
          <img :src="stat.image" alt="champion" />
          <div>
            <h4>{{ stat.champion }}</h4>
            <p>{{ stat.title }}</p>
          </div>
        </div>
        <div class="champion_winrate">
          <h4>{{ stat.soloWinrate }}%</h4>
          <h4>{{ stat.flexWinrate }}%</h4>
        </div>
      </div>
    </div>
    <RouterLink to="/lobby" class="see_more">See more</RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<script>
export default {
  data() {
    return {
      stats: [
        {
          champion: 'Aatrox',
          title: 'The Darkin Blade',
          soloWinrate: 50,
          flexWinrate: 60,
          image: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Aatrox.png'
        },
        {
          champion: 'Akali',
          title: 'The Rogue Assassin',
          soloWinrate: 20,
          flexWinrate: 30,
          image: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Akali.png'
        },
        {
          champion: 'Alistar',
          title: 'The Minotaur',
          soloWinrate: 4,
          flexWinrate: 10,
          image: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Alistar.png'
        },
        {
          champion: 'Hecarim',
          title: 'The Shadow of War',
          soloWinrate: 70,
          flexWinrate: 80,
          image: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Hecarim.png'
        }
      ]
    }
  },
  methods: {
    sortChampions() {
      this.stats.sort((a, b) => b.soloWinrate - a.soloWinrate)
    }
  },
  mounted() {
    this.sortChampions()
  }
}
</script>

<style>
.statsCard {
  /* background-color: #1e1e1e; */
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 1)),
    url('/LolPictures/1327236.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  width: 30%;
  
}

.champion {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  padding: 0 0 20px 0;
  border-bottom: 1px solid #333;
}

.champion_info {
  display: flex;
  align-items: center;
}

.champion_info > img {
  margin-right: 5vh;
    width: 100px;
}

.cardStats_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cardStats_header > div,
.champion_winrate {
  width: 25%;
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-items: center;
}

.see_more {
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  background-color: #8d86c9;
  border-radius: 5px;
}
</style>
