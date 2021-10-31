import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Bruker from '../views/Bruker.vue'
import Cart from '../views/Cart.vue'
import LoggInn from '../views/LoggInn.vue'
import ProductPage from '../views/ProductPage.vue'
import Business from '../views/Business.vue'
import ManageProduct from '../views/ManageProduct.vue'

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
    path: '/business/:id',
    name: 'Business',
    component: Business
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
  },
  {
    path: '/product/:id',
    name: 'ProductPage',
    component: ProductPage
  },
  {
    path: '/manage-product',
    name: 'ManageProduct',
    component: ManageProduct
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
