<template>
<section class="games-section">

<h1>Games</h1>
<div class="games">
  <!-- TODO: Implement single component -->
  <div class="game" v-for="game in games" :key="game.id">
      <game-component :game="game" :base_url="base_url"></game-component>
  </div>

</div>

  <PaginationComponent 
    @prevPage="prev(links.prev)" 
    @nextPage="next(links.next)" 
    :links="links"
    :meta="meta" />
</section>
  
</template>


<script>
import axios from "axios";
import GameComponent from './GameComponent.vue';
import PaginationComponent from './PaginationComponent.vue';
export default {
  components: { GameComponent, PaginationComponent },
  data(){
    return {
      base_url: 'http://127.0.0.1:8000/',
      api_endpoint: 'api/games',
      games: {},
      meta: {},
      links: {}
    }
  },
    methods: {
    callApi(url){
      axios.get(url).then(resp => {
      //console.log(resp);
        this.games = resp.data.data;
        this.meta = resp.data.meta;
        this.links = resp.data.links

    })  
    .catch(e => {
      console.error('Sorry! Something went wrong' + e);
    })
    },
    next(n){
      //console.log('Next page', n);
      if(n){
        this.callApi(n);
      }
    },
    prev(p){
      //console.log('Prev page', p);
      if(p){
        this.callApi(p);
      }
    }
  },
  mounted(){
    const fullUrl = this.base_url + this.api_endpoint;
    this.callApi(fullUrl);
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