<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Ciao Vue App"/> -->
    <games-section></games-section>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import GamesSection from './components/GamesSection.vue'

export default {
  name: 'App',
  components: {
    GamesSection
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
