<template>
  <div class="business-home">
    <div class="row">
      <div v-if="storeLoaded">
        <h2>{{store.storeName}}</h2>
        <p>{{store.description}}</p>
        Tel: {{store.phone}}
        <h3>Adresse</h3>
        <div>
          {{store.address.streetAddress}}
          {{store.address.postalCode}}
        </div>
      </div>
      <div v-else>
        {{storeErrorMessage}}
      </div>
      <div v-if="user === 'businessUser'">
        <h2>Ordre</h2>
        <router-link to="/orders">
          <button>
            Mine ordre
          </button>
        </router-link>
      </div>
    </div>
    <div v-if="user === 'businessUser'">
      <h2 class="product-title">Produktene Dine</h2>
      <router-link :to="addToProductsUrl"  class="add-prod-btn">
        <button>
          Legg til produkt
        </button>
      </router-link>
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
      <h2 class="product-title">Produkter</h2>
      <div class="products">
        <ProductCard
          v-for="(product, i) in products"
          :key="i"
          :product="product"
          class="product-cards"
          :user="user"
          :addToCart="addToCart"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCardBusiness from '@/components/ProductCardBusiness'
import ProductCard from '@/components/ProductCard'
import { getStoreId, getProductsByStoreID } from '@/httpRoutes'

export default {
  name: 'Business',
  props: ['user', 'addToCart'],
  components: {
    ProductCard,
    ProductCardBusiness
  },
  data () {
    return {
      storeId: this.$route.params.id,
      store: [],
      products: [],
      storeLoaded: false,
      productsLoaded: false,
      storeErrorMessage: null,
      productsErrorMessage: null
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
      fetch(getStoreId(this.storeId))
        .then(async response => {
          const data = await response.json()
          if (!response.ok) {
            const error = (data && data.message) || response.statusText
            return Promise.reject(error)
          }
          this.store = data.data
          this.storeLoaded = true
        })
        .catch(error => {
          this.storeErrorMessage = error
          console.error('There was an error!', error)
        })
    },
    getProducts () {
      fetch(getProductsByStoreID(this.storeId))
        .then(async response => {
          const data = await response.json()
          if (!response.ok) {
            const error = (data && data.message) || response.statusText
            return Promise.reject(error)
          }
          this.products = data.data
          this.productsLoaded = true
        })
        .catch(error => {
          this.productsErrorMessage = error
          console.error('There was an error!', error)
        })
    }
  }
}
</script>

<style scoped>
.business-home {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}
.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.products {
  display: flex;
  flex-wrap: wrap;
  max-width: 630px;
  justify-content: center;
  margin: 0 auto;
}
.add-prod-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}
.product-cards {
  justify-content: center;
  align-items: center;
  max-width: 200px;
  max-height: 450px;
  margin: 5px;
}
.product-title {
  text-align: center;
}
</style>
