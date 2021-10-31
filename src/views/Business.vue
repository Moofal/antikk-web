<template>
  <div>
    <div>
      <router-link to="/manage-product">
        <button>
          Legg til produkt
        </button>
      </router-link>
      <div>
        {{store}}
      </div>
      <div v-for="product in products" :key="product.prodId">
        {{ product }}
        <router-link to="/manage-product">
          <button>
            Rediger produkt
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Bedrift',
  data () {
    return {
      storeId: this.$route.params.id,
      store: [],
      products: []
    }
  },
  mounted () {
    fetch('http://localhost:3000/store?storeId=' + this.storeId)
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.store = data
      })
    fetch('http://localhost:3000/products?storeId=' + this.storeId)
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.products = data
      })
  }
}
</script>

<style>

</style>
