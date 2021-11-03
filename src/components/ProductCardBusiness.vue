<template>
  <div class="card">
    <div class="card-info">
      <h2>{{ product.name }}</h2>
      <h3>{{product.storeName}}</h3>
      <p class="description">{{product.description}}</p>
      <p class="price">{{product.price}} kr {{product.category}}</p>
      <router-link :to="editProductUrl">
        <button>
          Rediger produkt
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCardBusiness',
  props: ['product'],
  computed: {
    productUrl () {
      return '/product/' + this.product.id
    },
    editProductUrl () {
      return '/edit-product/' + this.product.id
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
