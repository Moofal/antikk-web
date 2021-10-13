import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Bruker from '../views/Bruker.vue'
import Cart from '../views/Cart.vue'
import LoggInn from '../views/LoggInn.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bruker',
    name: 'Bruker',
    component: Bruker
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/logg-inn',
    name: 'LoggInn',
    component: LoggInn
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
