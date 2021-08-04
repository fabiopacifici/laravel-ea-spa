<template>
  <div>
    <game-component :game="game" :base_url="base_url"></game-component>
  </div>
</template>

<script>
import GameComponent from "@/components/GameComponent";
import axios from 'axios';
export default {
  components: {
    GameComponent
  },
  data(){
    return {
      base_url: 'http://127.0.0.1:8000/',
      game: {}
    } 
  },
  mounted(){
    const full_url = this.base_url + 'api/games/' + this.$route.params.id;
    axios
    .get(full_url)
    .then((result) => {
      console.log(result);
      this.game = result.data.data
    }).catch((err) => {
      console.error(err);
    });
  }

}
</script>

<style>

</style>