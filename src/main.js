import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';


Vue.config.productionTip = false
Vue.use(VueRouter)


// 1. Define route components.
// These can be imported from other files
import Games from './views/Games';
import Game from './views/Game';
import Home from './views/Home';
import Contacts from './views/Contacts';




// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Home },
  { path: '/contacts', component: Contacts },
  { path: '/games', component: Games },
  { path: '/games/:id', component: Game },


]


// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
