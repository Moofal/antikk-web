<template>
  <main>
    <div class="product-cards">
      <Product
        v-for="(product, i) in 6"
        :key="i"
        :product="product"
      />
    </div>
  </main>
</template>

<script>
import Product from '@/components/Product'

export default {
  name: 'Home',
  components: {
    Product
  }
}
</script>
<style>
.product-cards {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 600px;
  margin: 0 auto;
}
</style>
