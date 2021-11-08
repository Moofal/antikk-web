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
      <div v-if="user === 'businessUser' && storeId==='1'">
        <h2>Produktene Dine</h2>
        <div class="products">
          <ProductCardBusiness
            v-for="(product, i) in products"
            :key="i"
            :product="product"
            class="product-cards"
            :businessUrl="businessUrl"
            :getProducts="getProducts"
          />
        </div>
      </div>
      <div v-else>
        <ProductCard
          v-for="(product, i) in products"
          :key="i"
          :product="product"
          class="product-cards"
          :user="user"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCardBusiness from '@/components/ProductCardBusiness'
import ProductCard from '@/components/ProductCard'

export default {
  name: 'Business',
  props: ['user'],
  components: {
    ProductCard,
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
    },
    businessUrl () {
      return '/business/' + this.storeId
    }
  },
  mounted () {
    this.getStoreInfo()
    this.getProducts()
  },
  methods: {
    getStoreInfo () {
      fetch('http://localhost:3000/store?id=' + this.storeId)
        .then(response => {
          return response.json()
        })
        .then(data => {
          this.store = data[0]
        })
    },
    getProducts () {
      fetch('http://localhost:3000/products?storeId=' + this.storeId)
        .then(response => {
          return response.json()
        })
        .then(data => {
          this.products = data
        })
    }
  }
}
</script>

<style scoped>
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
