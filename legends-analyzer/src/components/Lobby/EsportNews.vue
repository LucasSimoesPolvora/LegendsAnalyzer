<template>
  <div class="esportNews">
    <h2>Last Matches</h2>
    <div v-for="news in esportResult" class="esportNewsInfos">
      <div class="oppenents">
        <div class="team">
          <img :src="news.opponents[0].opponent.image_url" :alt="news.opponents[0].opponent.name" />
          <h4>{{ news.opponents[0].opponent.name }}</h4>
        </div>
        <h2>VS</h2>
        <div class="team">
          <img :src="news.opponents[1].opponent.image_url" :alt="news.opponents[1].opponent.name" />
          <h4>{{ news.opponents[1].opponent.name }}</h4>
        </div>
      </div>
    </div>
    <div class="center">
      <RouterLink to="#" class="see_more">See more</RouterLink>
    </div>
  </div>
</template>

<script setup>
import axios from 'redaxios'
</script>

<script>
export default {
  data() {
    return {
      esportResult: []
    }
  },
  mounted() {
    this.getEsportNews()
    this.sortByDate()
  },
  methods: {
    async getEsportNews() {
      const options = {
        method: 'GET',
        url: 'https://api.pandascore.co/lol/matches?filter[status]=finished',
        headers: {
          Authorization: 'Bearer ovxjJiSJUd0WNzEGwhkCqLmcqaJSvJXkDlMKea4Gc6CsFoYOphY'
        }
      }

      try {
        const response = await axios.request(options)

        for (let i = 0; i < 4; i++) {
          this.esportResult.push(response.data[i])
        }

        console.log(this.esportResult)
      } catch (error) {
        console.error(error)
      }
    },
    sortByDate() {
      this.esportResult = this.esportResult.sort(
        (a, b) => new Date(b.begin_at) - new Date(a.begin_at)
      )
    }
  }
}
</script>

<style scoped>
.esportNews {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),
    url('/LolPictures/1332614.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  text-align: center;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  width: 30%;
  height: 75vh;
  /* border: 5px aqua solid; */
}

.esportNews > h2 {
  color: white;
  font-size: 2rem;
  margin: 0;
  padding: 3rem 0;
}
.oppenents {
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #333;
  align-items: center;
}

.team {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
}

.team > img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-bottom: 5px;
}

.team > h4 {
  color: white;
  margin: 0;
}

.see_more {
  color: white;
  text-decoration: none;
  padding: 20px 40px;
  background-color: #8d86c9;
  border-radius: 5px;
}

.see_more:hover {
  background-color: #6c63a4;
  transition: 0.5s;
}

.see_more:not(:hover) {
  transition: 0.5s;
}

.center {
  margin-top: 60px;
  display: flex;
  justify-content: center;
}
</style>
