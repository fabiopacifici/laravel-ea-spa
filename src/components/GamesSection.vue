<template>
<section class="games-section">

<h1>Games</h1>
<div class="games">
  <!-- TODO: Implement single component -->
  <game-component></game-component>

  <div class="game" v-for="game in games" :key="game.id">
      <img :src="base_url + 'storage/' + game.thumb" alt="">
      <h3>{{game.name}}</h3>
  </div>

</div>
</section>
  
</template>


<script>
import axios from "axios";
export default {
  data(){
    return {
      base_url: 'http://127.0.0.1:8000/',
      api_endpoint: 'api/games',
      games: null,
      meta: null,
      links: null
    }
  },

  mounted(){
    const fullUrl = this.base_url + this.api_endpoint;
      axios.get(fullUrl).then(resp => {
      console.log(resp);
      this.games = resp.data.data;
      this.meta = resp.data.meta;
      this.links = resp.data.links

    })  
    .catch(e => {
      console.error('Sorry! Something went wrong' + e);
    })
  }

}
</script>

<style lang="scss" scoped>
  .games {
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    .game {
      box-shadow: 2px 2px 2px #ededed;
      margin: 0.5rem;
      &, & > img {
        border-radius: 0.25rem;
      }

    }

  }
</style>