<template>
  <div id="app">
    <img width="150" alt="Vue logo" src="./assets/logo.svg">

    <nav>
       <router-link to="/">Home</router-link> <!-- a -->
       <router-link to="/games">Games</router-link> <!-- a -->
       <router-link to="/contacts">Contacts</router-link> <!-- a -->

    </nav>

    <router-view></router-view>
    <!-- <HelloWorld msg="Ciao Vue App"/> -->
    

  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
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
