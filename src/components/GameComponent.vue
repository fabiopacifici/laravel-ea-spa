<template>
  <div class="game" >
      <img :src="base_url + 'storage/' + game.thumb" alt="">
      <h3>{{game.name}}</h3>
       <router-link :to="'/games/' + game.id">Go to {{game.name}}</router-link>
  </div>
</template>

<script>
export default {
  props: {
    game: Object,
    base_url: String
  },
  mounted(){
  
  }
}
</script>

<style lang="scss" scoped>

</style>