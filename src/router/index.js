import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Bruker from '../views/Bruker.vue'
import Cart from '../views/Cart.vue'
import LoggInn from '../views/LoggInn.vue'
import ProductPage from '../views/ProductPage.vue'
import Business from '../views/Business.vue'
import EditProduct from '../views/EditProduct.vue'
import RegisterProduct from '../views/RegisterProduct.vue'
import OrderHistory from '../views/UserOrderHistory.vue'
import Order from '../views/Order'
import BusinessOrders from '@/views/BusinessOrders'

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
    path: '/order-history/:id',
    name: 'OrderHistory',
    component: OrderHistory
  },
  {
    path: '/business-orders/:id',
    name: 'BusinessOrders',
    component: BusinessOrders
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
