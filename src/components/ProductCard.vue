<template>
  <div class="card">
    <div class="card-img">
      <router-link :to="productUrl">
        <img src="../assets/logo.png" alt="Bilde av produkt">
      </router-link>
    </div>
    <div class="card-info">
      <h2>{{ product.name }}</h2>
      <router-link :to="businessUrl">
        <h3>{{product.storeName}}</h3>
      </router-link>
      <p class="description">{{product.description}}</p>
      <p class="price">{{product.price}} kr {{product.category}}</p>
      <AddToCart :addToCart="addToCart" :product="product"/>
    </div>
  </div>
</template>

<script>
import AddToCart from '@/components/AddToCart'

export default {
  name: 'ProductCard',
  props: ['product', 'addToCart'],
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
h2 {
  margin: auto;
}
h3 {
  margin: auto;
  text-decoration: none;
}
.description {
  margin: auto;
}
</style>
