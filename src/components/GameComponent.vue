<template>
  <div class="">
      <div class="game" v-for="game in games" :key="game.id">
      <img :src="base_url + 'storage/' + game.thumb" alt="">
      <h3>{{game.name}}</h3>
  </div> 
  </div>


</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>