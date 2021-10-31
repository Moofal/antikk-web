<template>
  <div class="home-page" v-bind="$attrs">
  <aside>
    <div class="side-bard">
      <form>
        <fieldset>
          <legend>Kategorier</legend>
          <div class="options">
            <input type="radio" name="category" @click="getProducts()">
            <label>Alle Kategorier</label>
            <div v-for="(selected, i) in categories" :key="i">
              <input type="radio" name="category" v-bind:value="selected"
                     v-model="category">
              <label>{{ selected }}</label>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  </aside>
  <main>
    <div class="products">
      <ProductCard
        v-for="product in products.slice(0,6)"
        :key="product.prodId"
        :product="product"
        class="product-cards"
        :addToCart="addToCart"
      />
    </div>
  </main>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard'

export default {
  name: 'Home',
  props: ['addToCart'],
  components: {
    ProductCard
  },
  data () {
    return {
      products: [],
      categories: [],
      category: ''
    }
  },
  mounted () {
    fetch('http://localhost:3000/categories')
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.categories = data
      })
  },
  created () {
    this.getProducts()
  },
  methods: {
    getProducts () {
      fetch('http://localhost:3000/products?_limit=6')
        .then(response => {
          return response.json()
        })
        .then(data => {
          this.products = data
        })
    },
    changeCategory () {
      fetch('http://localhost:3000/products?_limit=6&category=' + this.category)
        .then(response => {
          return response.json()
        })
        .then(data => {
          this.products = data
        })
    }
  },
  watch: {
    category: function () {
      fetch('http://localhost:3000/products?_limit=6&category=' + this.category)
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
.home-page {
  display: flex;
}
.side-bard {
  display: flex;
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
