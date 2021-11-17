import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Bruker from '../views/Bruker.vue'
import Cart from '../views/Cart.vue'
import LoggInn from '../views/LoggInn.vue'
import ProductPage from '../views/ProductPage.vue'
import Business from '../views/Business.vue'
import EditProduct from '../views/EditProduct.vue'
import RegisterProduct from '../views/RegisterProduct.vue'
import OrderHistory from '../views/OrderHistory.vue'
import Order from '../views/Order'

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
    path: '/edit-product/:id',
    name: 'EditProduct',
    component: EditProduct
  },
  {
    path: '/register-product/:id',
    name: 'RegisterProduct',
    component: RegisterProduct
  },
  {
    path: '/orders',
    name: 'OrderHistory',
    component: OrderHistory
  },
  {
    path: '/orders/:id',
    name: 'Order',
    component: Order
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
