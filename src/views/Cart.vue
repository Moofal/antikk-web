<template>
  <div class="cart">
    <h1>Handlevogn</h1>
    <CartPopup v-if="proceedToPay" :togglePaymentPopup="togglePaymentPopup" :pay="pay"/>
      <div class="products" v-bind="$attrs">
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
      <p v-if="!endUser">Du må være en bruker for å kunne handle</p>
      <div class="btn-proceed">
        <button @click="proceed">
          GÅ TIL KASSEN
        </button>
      </div>
    </div>
    <div v-else>Handlevogn er tom</div>
  </div>
</template>

<script>
import CartPopup from '@/components/CartPopup'
import ProductInCart from '@/components/ProductInCart'

export default {
  name: 'Cart',
  components: {
    ProductInCart,
    CartPopup
  },
  props: ['cart', 'removeItem', 'clearCart', 'endUser'],
  data () {
    return {
      proceedToPay: false
    }
  },
  methods: {
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
      if (this.endUser) {
        this.togglePaymentPopup()
      }
    },
    togglePaymentPopup () {
      this.proceedToPay = !this.proceedToPay
    },
    pay () {
      this.clearCart()
      this.togglePaymentPopup()
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
