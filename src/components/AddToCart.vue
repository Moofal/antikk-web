<template>
  <button @click="addToCart(product.id)">
    Legg i handlevogn
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
