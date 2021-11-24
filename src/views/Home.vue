<template>
  <div class="home-page" v-bind="$attrs">
    <div>
      <form class="side-bard">
        <fieldset>
          <legend>Kategorier</legend>
          <div v-if="categoriesLoaded" class="options">
            <input type="radio" name="category" @click="getProducts()" value="" v-model="category" checked>
            <label>Alle Kategorier</label>
            <div v-for="(selected, i) in categories" :key="i">
              <input type="radio" name="category" v-bind:value="selected"
                     v-model="category">
              <label>{{ selected }}</label>
            </div>
          </div>
          <div v-if="!categoriesLoaded">
            {{categoriesErrorMessage}}
          </div>
        </fieldset>
      </form>
      <div class="per-side">
        <label>Vis </label>
        <select v-model="limit">
          <option value="6">6</option>
          <option value="12">12</option>
          <option value="24">24</option>
        </select>
        <p>per side</p>
      </div>
    </div>
    <div v-if="productsLoaded" class="products">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        class="product-cards"
        :addToCart="addToCart"
        :user="user"
      />
    </div>
    <div v-if="!productsLoaded" class="products">
      {{productsErrorMessage}}
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard'
import url from '../httpRoutes'

export default {
  name: 'Home',
  props: ['addToCart', 'user'],
  components: {
    ProductCard
  },
  data () {
    return {
      products: [],
      categories: [],
      category: '',
      limit: '6',
      categoriesErrorMessage: null,
      productsErrorMessage: null,
      categoriesLoaded: false,
      productsLoaded: false
    }
  },
  mounted () {
    this.getCategories()
    this.getProducts()
  },
  methods: {
    getCategories () {
      fetch(url.categories)
        .then(async response => {
          const data = await response.json()
          if (!response.ok) {
            const error = (data && data.message) || response.statusText
            return Promise.reject(error)
          }
          this.categories = data
          this.categoriesLoaded = true
        })
        .catch(error => {
          this.categoriesErrorMessage = error
          console.error('There was an error!', error)
        })
    },
    getProducts () {
      if (this.category !== '') {
        fetch(url.productLimit + this.limit + '&category=' + this.category)
          .then(async response => {
            const data = await response.json()
            if (!response.ok) {
              const error = (data && data.message) || response.statusText
              return Promise.reject(error)
            }
            this.products = data
            this.productsLoaded = true
          })
          .catch(error => {
            this.productsErrorMessage = error
            console.error('There was an error!', error)
          })
      } else {
        fetch(url.productLimit + this.limit)
          .then(async response => {
            const data = await response.json()
            if (!response.ok) {
              const error = (data && data.message) || response.statusText
              return Promise.reject(error)
            }
            this.products = data
            this.productsLoaded = true
          })
          .catch(error => {
            this.productsErrorMessage = error
            console.error('There was an error!', error)
          })
      }
    }
  },
  watch: {
    category: function () {
      this.getProducts()
    },
    limit: function () {
      this.getProducts()
    },
    search: function () {
      this.getProducts()
    }
  }
}
</script>
<style scoped>
.home-page {
  display: flex;
}
.side-bard {
  display: flex;
}
.per-side {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
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
.product-cards:hover {
  border: 1px solid gray;
  margin: 4px;
}
</style>
