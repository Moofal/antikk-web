<template>
  <div class="card">
    <div class="card-img">
      <router-link to="/{{product.prodId}}">
        <img src="../assets/logo.png" alt="Bilde av produkt">
      </router-link>
    </div>
    <div class="card-info">
      <h2>{{ product.name }}</h2>
      <p class="description">{{product.description}}</p>
      <p class="price">{{product.pris}}</p>
      <button>
        Legg til
      </button>
    </div>
  </div>
</template>

<!--
When i call this file product card i vue does
not want to import it for some reason
-->

<script>
export default {
  name: 'Product',
  props: ['product'],
  data () {
    return {
      products: []
    }
  }
}
</script>

<style scoped>
h2 {
  margin: auto;
}
.description {
  margin: auto;
}
</style>
