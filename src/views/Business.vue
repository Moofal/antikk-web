<template>
  <div>
    <div>
      <router-link :to="addToProductsUrl">
        <button>
          Legg til produkt
        </button>
      </router-link>
      <div>
        {{store}}
      </div>
      <div >
        <ProductCardBusiness
          v-for="(product, i) in products"
          :key="i"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCardBusiness from '@/components/ProductCardBusiness'

export default {
  name: 'Business',
  components: {
    ProductCardBusiness
  },
  data () {
    return {
      storeId: this.$route.params.id,
      store: [],
      products: []
    }
  },
  computed: {
    addToProductsUrl () {
      return '/register-product/' + this.storeId
    },
    editProductUrl () {
      return '/edit-product/'
    }
  },
  mounted () {
    fetch('http://localhost:3000/store?id=' + this.storeId)
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
