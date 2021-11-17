<template>
  <div class="card">
    <router-link :to="productUrl">
    <div class="card-info">
      <h2>{{ product.name }}</h2>
      <p class="description">{{product.description}}</p>
      <p class="price">{{product.price}} kr</p>
      <div>
        <button @click="removeItem(index)">
          Fjern produkt
        </button>
      </div>
    </div>
    </router-link>
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
* {
  text-decoration: none;
  color: black;
}
.card-info {
  display: flex;
  flex-direction: column;
}
</style>
