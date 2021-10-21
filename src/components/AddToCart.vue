<template>
  <button @click="addToCart(product.prodId)">
    Legg til
  </button>
</template>

<script>
export default {
  name: 'AddToCart',
  props: ['addToCart', 'product']
}
</script>

<style scoped>

</style>
