<template>
  <div class="card">
    <div class="card-info">
      <router-link :to="productUrl">
      <div>
        <h2>{{ product.name }}</h2>
        <router-link :to="businessUrl">
          <h3>{{product.storeName}}</h3>
        </router-link>
        <p class="description">{{product.description}}</p>
        <div v-if="product.type !== 'auction'">
          <p class="price">{{product.price}} kr {{product.category}}</p>
        </div>
        <div v-else>
          <p class="price">Start bud: {{product.startingBid}} kr {{product.category}}</p>
        </div>
      </div>
    </router-link>
      <AddToCart
        v-if="user !== 'businessUser'
        && product.type !== 'auction'"
        :addToCart="addToCart"
        :product="product"/>
    </div>
  </div>
</template>

<script>
import AddToCart from '@/components/AddToCart'

export default {
  name: 'ProductCard',
  props: ['product', 'addToCart', 'user'],
  components: {
    AddToCart
  },
  computed: {
    productUrl () {
      return '/product/' + this.product.id
    },
    businessUrl () {
      return '/business/' + this.product.storeId
    }
  }
}
</script>

<style scoped>
* {
  text-decoration: none;
  color: black;
}
h2 {
  margin: auto;
}
h3:hover {
  text-decoration: underline;
}
h3 {
  margin: auto;
}
.description {
  margin: auto;
}
</style>
