<template>
  <button @click="addProdToCart(product.id)">
    Legg i handlevogn
  </button>
</template>

<script>
export default {
  name: 'AddToCart',
  props: ['addToCart', 'product'],
  methods: {
    addProdToCart (id) {
      fetch('http://localhost:9090/client/add-to-cart', {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        body: JSON.stringify({ products: [id] })
      })
        .then(async response => {
          const data = await response.json()
          if (!response.ok) {
            const error = (data && data.message) || response.statusText
            return Promise.reject(error)
          }
          this.addToCart(id)
        })
        .catch(error => {
          this.productErrorMessage = error
          console.error('There was an error!', error)
        })
    }
  }
}
</script>

<style scoped>

</style>
