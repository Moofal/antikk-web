<template>
  <div class="card">
    <div class="card-img">
      <router-link :to="productUrl">
        <img src="../assets/logo.png" alt="Bilde av produkt">
      </router-link>
    </div>
    <div class="card-info">
      <h2>{{ product.name }}</h2>
      <p class="description">{{product.description}}</p>
      <p class="price">{{product.pris}} kr</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductInCart',
  props: ['product'],
  computed: {
    productUrl () {
      return '/product/' + this.product.prodId
    }
  }
}
</script>

<style scoped>

</style>
