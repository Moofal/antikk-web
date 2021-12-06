<template>
  <div class="cart">
    <h1>Handlevogn</h1>
    <CartPopup v-if="proceedToPay" :togglePaymentPopup="delPop" :pay="pay"/>
      <div class="products" v-bind="$attrs">
        {{errorMessage}}
        <ProductInCart
          v-for="(product, index) in cart"
          :key="product.id"
          :product="product"
          class="product-cards"
          :index="index"
          :removeItem="removeItem"
        />
      </div>
    <div v-if="showCartFooter()" class="cart-footer">
      <div class="total-price">
        <ul class="price-left">
          <li>Sum:</li>
        </ul>
        <ul class="price-right">
          <li>{{getTotalPrice()}}</li>
        </ul>
      </div>
      <p v-if="user !=='endUser'">Du må være en bruker for å kunne handle</p>
      <div class="btn-proceed">
        <button @click="proceed">
          GÅ TIL KASSEN
        </button>
      </div>
    </div>
    <div v-else>Handlevogn er tom</div>
    {{orders}}
  </div>
</template>

<script>
import CartPopup from '@/components/CartPopup'
import ProductInCart from '@/components/ProductInCart'
import { url } from '@/httpRoutes'

export default {
  name: 'Cart',
  components: {
    ProductInCart,
    CartPopup
  },
  props: ['cart', 'removeItem', 'clearCart', 'user'],
  data () {
    return {
      proceedToPay: false,
      errorMessage: null,
      orders: []
    }
  },
  mounted () {
    this.howManyOrders()
  },
  methods: {
    howManyOrders () {
      let newStoreId
      for (let i = 0; i < this.cart.length; i++) {
        newStoreId = this.cart[i].storeId
        if (!this.orders.includes(newStoreId)) {
          this.orders.push(newStoreId)
        }
      }
    },
    getTotalPrice () {
      let sum = 0
      for (let i = 0; i < this.cart.length; i++) {
        sum += parseInt(this.cart[i].price)
      }
      return sum.toFixed(2)
    },
    showCartFooter () {
      if (this.cart.length > 0) {
        return true
      }
    },
    proceed () {
      if (this.user === 'endUser') {
        this.delPop()
      }
    },
    delPop () {
      this.proceedToPay = !this.proceedToPay
    },
    async pay () {
      for (let i = 0; i < this.orders.length; i++) {
        const newOrder = {}
        newOrder.id = i + 1
        newOrder.number = '1'
        newOrder.storeId = this.orders[i]
        newOrder.clientId = 'cce2bc90-b912-4ef1-9272-f962f94f0d7f'
        newOrder.products = []
        newOrder.total = 0
        for (let j = 0; j < this.cart.length; j++) {
          if (this.cart[j].storeId === this.orders[i]) {
            newOrder.products.push(this.cart[j])
            newOrder.total += parseInt(this.cart[j].price)
          }
        }
        await fetch(url.orders, {
          method: 'POST',
          body: JSON.stringify(newOrder),
          headers: { 'Content-Type': 'application/json' }
        })
          .then(async response => {
            const data = await response.json()
            if (!response.ok) {
              const error = (data && data.message) || response.status
              return Promise.reject(error)
            }
          })
          .catch(error => {
            this.errorMessage = error
            console.error('There was an error!', error)
          })
      }
      this.clearCart()
      this.delPop()
    }
  }
}
</script>

<style scoped>
.products {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: left;
  margin: 0 auto;
}
.product-cards {
  justify-content: left;
  margin: 5px;
}
.product-cards:hover {
  border: 1px solid gray;
  margin: 4px;
}
.cart-footer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-flow: column;
}
.total-price {
  display: flex;
  justify-content: flex-start;
}
.price-left {
  display: flex;
  flex-flow: column nowrap;
  list-style: none;
  padding: 0;
}
.price-right {
  display: flex;
  flex-flow: column nowrap;
  list-style: none;
}
</style>
