<template>
  <div class="esportNews">
    <h2>Last Matches</h2>
    <div v-for="news in esportResult" class="esportNewsInfos" >

      <div class="oppenents">
        <div class="team">
          <img :src="news.opponents[0].opponent.image_url" :alt="news.opponents[0].opponent.name" />
          <h4 :class="[ news.winner_id == news.opponents[0].opponent.id ? 'winner' : 'looser' ]">{{ news.opponents[0].opponent.name }}</h4>
        </div>
        <div class="score">
          <h2>VS</h2>
          <h5>{{ news.results[0].score }} / {{ news.results[1].score }}</h5>
        </div>
        <div class="team">
          <img :src="news.opponents[1].opponent.image_url" :alt="news.opponents[1].opponent.name" />
          <h4 :class="[ news.winner_id == news.opponents[1].opponent.id ? 'winner' : 'looser' ]">{{ news.opponents[1].opponent.name }}</h4>
        </div>
      </div>

    </div>
      <RouterLink to="#" class="see_more">See more</RouterLink>
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
        url: 'https://api.pandascore.co/lol/matches?filter[status]=finished&sort=-end_at',
        headers: {
          Authorization: 'Bearer ovxjJiSJUd0WNzEGwhkCqLmcqaJSvJXkDlMKea4Gc6CsFoYOphY'
        }
      }

      try {
        const response = await axios.request(options)

        let limit = 4;

        for (let i = 0; i < limit; i++) {
          if (response.data[i].end_at === null) {
            limit++
          } else {
            this.esportResult.push(response.data[i])
          }
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
  display: grid;
  align-content: space-around;
  /* border: 3px rgb(185, 81, 255) solid; */
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
  margin-bottom: 10px;
}

.team > h4 {
  font-size: 0.8rem;
  margin: 0;
}

.score > div {
  display: flex;
  justify-content: space-around;
  align-items: center;

}

.score > h5 {
  margin-bottom: 0;
  width: 50px;
}

.firstScore {
  align-self: flex-end;
}

.secondScore {
  align-self: flex-start;
}

.winner {
  color: rgb(0, 211, 0);
}

.looser {
  color: rgb(255, 0, 0);
}

.see_more {
  color: white;
  text-decoration: none;
  padding: 20px 0px;
  background-color: #8d86c9;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  height: 30px;
  margin-top: 40px;
}

.see_more:hover {
  background-color: #6c63a4;
  transition: 0.5s;
}

.see_more:not(:hover) {
  transition: 0.5s;
}

@media (max-width: 1000px) {
  .esportNews {
    width: 100%;
    margin: 0;
  }
}

</style>
