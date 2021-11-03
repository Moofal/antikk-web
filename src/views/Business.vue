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
      <h2>Produktene Dine</h2>
      <div class="products">
        <ProductCardBusiness
          v-for="(product, i) in products"
          :key="i"
          :product="product"
          class="product-cards"
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
.products {
  display: flex;
  flex-wrap: wrap;
  max-width: 630px;
  justify-content: center;
  margin: 0 auto;
}
.product-cards {
  justify-content: center;
  align-items: center;
  max-width: 200px;
  max-height: 450px;
  margin: 5px;
}
</style>
