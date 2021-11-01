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
      <button @click="removeItem(index)">
        Fjern produkt
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductInCart',
  props: ['product', 'removeItem', 'index'],
  computed: {
    productUrl () {
      return '/product/' + this.product.id
    }
  }
}
</script>

<style scoped>
.card {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.card-img {
  flex-direction: column;
}
.card-info {
  flex-direction: column;
}
</style>
