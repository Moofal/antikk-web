<template>
  <div class="home-page" v-bind="$attrs">
    <div>
      <form class="side-bard">
        <fieldset>
          <legend>Kategorier</legend>
          <div class="options">
            <input type="radio" name="category" @click="getProducts()" value="" v-model="category" checked>
            <label>Alle Kategorier</label>
            <div v-for="(selected, i) in categories" :key="i">
              <input type="radio" name="category" v-bind:value="selected"
                     v-model="category">
              <label>{{ selected }}</label>
            </div>
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
    <div class="products">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        class="product-cards"
        :addToCart="addToCart"
        :user="user"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard'
import url from '../httpRoutes'

export default {
  name: 'Home',
  props: ['addToCart', 'user', 'search'],
  components: {
    ProductCard
  },
  data () {
    return {
      products: [],
      categories: [],
      category: '',
      limit: '6'
    }
  },
  mounted () {
    // fetch('http://localhost:3000/categories')
    //   .then(response => {
    //     return response.json()
    //   })
    //   .then(data => {
    //     this.categories = data
    //   })
  },
  created () {
    this.getProducts()
  },
  methods: {
    getCategories () {
      fetch(url.categories)
        .then(response => {
          return response.json()
        })
        .then(data => {
          this.categories = data
        })
    },
    getProducts () {
      if (this.category !== '') {
        fetch('http://localhost:3000/products?_limit=' + this.limit + '&category=' + this.category)
          .then(response => {
            return response.json()
          })
          .then(data => {
            this.products = data
          })
      } else {
        fetch(url.productLimit + this.limit)
          .then(response => {
            return response.json()
          })
          .then(data => {
            console.log(data)
            this.products = data.data
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
