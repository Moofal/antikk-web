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
        <p class="price">{{product.price}} kr {{product.category}}</p>
      </div>
    </router-link>
      <AddToCart v-if="user !== 'businessUser'" :addToCart="addToCart" :product="product"/>
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
h3 {
  margin: auto;
  text-decoration: none;
}
.description {
  margin: auto;
}
</style>
