<template>
  {{product}}
  <router-link :to="editProductUrl">
    <button>
      Rediger produkt
    </button>
  </router-link>
</template>

<script>
export default {
  name: 'ProductCardBusiness',
  props: ['product'],
  computed: {
    editProductUrl () {
      return '/edit-product/' + this.product.id
    }
  }
}
</script>

<style scoped>

</style>
