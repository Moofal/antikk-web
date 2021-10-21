<template>
  <div class="products">
    <ProductInCart
      v-for="(product, index) in cart"
      :key="product.prodId"
      :product="product[0]"
      class="product-cards"
      :index="index"
      :removeItem="removeItem"
    />
  </div>
</template>

<script>

import ProductInCart from '@/components/ProductInCart'
export default {
  name: 'Cart',
  components: {
    ProductInCart
  },
  props: ['cart', 'removeItem']
}
</script>

<style scoped>
.products {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: left;
  margin: 0 auto;
}
.product-cards {
  justify-content: left;
  margin: 5px;
}
.product-cards:hover {
  border: 1px solid gray;
  margin: 4px;
}
</style>
