<template>
  <div id="app">
    <img width="150" alt="Vue logo" src="./assets/logo.svg">
    <nav class="main_menu">
    <router-link class="nav-link" to="/">Home</router-link>
    <router-link class="nav-link" to="/games">Games</router-link>
    <router-link class="nav-link" to="/contacts">Contacts</router-link>
    </nav>
    <router-view></router-view>
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
.main_menu {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .nav-link {
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    color: #2c3e50;
    padding: 1rem 0.5rem;
  }
  .router-link-exact-active {
    color: #41b883;
  &::after{
    display: block;
    content: '';
    height: 4px;
    width: 20px;
    margin: 0 auto;
    background-color: #41b883;
  }
  }

  }
</style>
