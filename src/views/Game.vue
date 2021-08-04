<template>
<div>
    <h1>{{game.name}}, play now!</h1>
  <game-component :game="game" :base_url="base_url" ></game-component>
</div>
</template>

<script>
import GameComponent from '../components/GameComponent.vue';
import axios from "axios";
export default {
  components: { GameComponent },
  data(){
    return {
      base_url: 'http://127.0.0.1:8000/',
      game: {},

    }
  },
  mounted(){
    const url = 'http://127.0.0.1:8000/api/games/' + this.$route.params.id;
    console.log(url);
    axios.get(url).then(resp => {
      console.log(resp);
        this.game = resp.data.data;

    })  
    .catch(e => {
      console.error('Sorry! Something went wrong' + e);
    })
  }
}
</script>

<style>

</style>