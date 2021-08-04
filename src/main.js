import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

Vue.config.productionTip = false
Vue.use(VueRouter);
// define components
import Games from './views/Games';
import Home from './views/Home';
import Game from './views/Game';

// Define routes
const routes = [
  { path: '/', component: Home },
  { path: '/games', component: Games },
  { path: '/games/:id', component: Game }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  render: h => h(App),

}).$mount('#app')
