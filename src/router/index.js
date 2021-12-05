import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import EndUser from '../views/EndUser.vue'
import Cart from '../views/Cart.vue'
import LoggInn from '../views/LoggInn.vue'
import ProductPage from '../views/ProductPage.vue'
import Business from '../views/Business.vue'
import EditProduct from '../views/EditProduct.vue'
import RegisterProduct from '../views/RegisterProduct.vue'
import OrderHistory from '../views/EndUserOrderHistory.vue'
import EndUserOrder from '../views/EndUserOrder'
import BusinessOrderHistory from '@/views/BusinessOrderHistory'
import BusinessOrder from '@/views/BusinessOrder'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/end-user',
    name: 'EndUser',
    component: EndUser
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
    path: '/business-order-history/:id',
    name: 'BusinessOrderHistory',
    component: BusinessOrderHistory
  },
  {
    path: '/endUser-order/:id',
    name: 'EndUserOrder',
    component: EndUserOrder
  },
  {
    path: '/business-order/:id',
    name: 'BusinessOrder',
    component: BusinessOrder
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
