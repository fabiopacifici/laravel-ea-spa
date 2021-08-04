<template>
<section class="games-section">

<h1>Games</h1>
<div class="games">

  <game-component v-for="game in games" :key="game.id" :game="game" :base_url="base_url"></game-component>

</div>



<pagination-component @prev="prevPage()" @next="nextPage()"  :links="links" :meta="meta">

</pagination-component>

</section>
  
</template>


<script>
import axios from "axios";
import GameComponent from "@/components/GameComponent";
import PaginationComponent from './PaginationComponent.vue';
export default {
  components: {
    GameComponent,
    PaginationComponent
  },
  data(){
    return {
      base_url: 'http://127.0.0.1:8000/',
      api_endpoint: 'api/games',
      games: {},
      meta: {},
      links: {}
    }
  },
  methods:{

    callApi(fullUrl){
  
      axios.get(fullUrl).then(resp => {
      console.log(resp);
      this.games = resp.data.data;
      this.meta = resp.data.meta;
      this.links = resp.data.links

    })  
    .catch(e => {
      console.error('Sorry! Something went wrong' + e);
    })
    },

    prevPage(){
      console.log('Pagina precedente');
      // chiata per pagina precedente

      this.callApi(this.links.prev);
    },
    nextPage(){
      console.log('Pagina successiva');
      // chiamata pagina successiva
      this.callApi(this.links.next);
    },

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