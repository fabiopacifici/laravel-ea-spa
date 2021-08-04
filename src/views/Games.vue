<template>
  <main class="">
    <div class="jumbo">
      <h1>EA Action Games</h1>
    </div>
  <games-section></games-section>
  </main>
</template>

<script>
import GamesSection from '../components/GamesSection.vue'
export default {
  components: { GamesSection },

}
</script>

<style lang="scss" scoped>
  .jumbo{
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-transform: uppercase;
    background-image: url('../assets/jumbo.png');
    background-size: cover;
    height: 400px;
  }
</style>