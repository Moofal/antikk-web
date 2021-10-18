<template>
  <div class="card">
    <div class="card-img">
      <img src="../assets/logo.png" alt="Bilde av produkt">
    </div>
    <div class="card-info">
      <h2>{{ product.prodName }}</h2>
      <p class="description">{{product.prodDescription}}</p>
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
