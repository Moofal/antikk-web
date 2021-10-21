<template>
  <div>
    <ProductInCart
      v-for="product in cart"
      :key="product.prodId"
      :product="product[0]"
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
  props: ['cart']
}
</script>

<style scoped>

</style>
