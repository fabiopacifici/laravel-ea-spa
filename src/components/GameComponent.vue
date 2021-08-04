<template>
  <div>  
      <img :src="base_url + 'storage/' + game.thumb" alt="">
      <h3>{{game.name}}</h3>
        <router-link class="btn btn-primary" :to="'/games/'+game.id" v-if="this.$route.path == '/games'"> View </router-link>

  </div>
</template>

<script>
export default {
  props: {
    game: Object,
    base_url: String
  }
}
</script>

<style lang="scss" scoped>
.btn.btn-primary {
  display: block;
  margin: 1rem;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  background-color: #333;
  color: white;
  text-decoration: none;
  &:hover{
   
    background-color: lightslategray;
    transition: all 1s;
  }
}
</style>