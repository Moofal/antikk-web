<template>
  <aside>
    <CategorieSideBar />
  </aside>
  <main>
    <div class="products">
      <Product
        v-for="product in products.slice(0,6)"
        :key="product.prodId"
        :product="product"
        class="product-cards"
      />
    </div>
  </main>
</template>

<script>
import Product from '@/components/Product'
import CategorieSideBar from '@/components/CategorieSideBar'

export default {
  name: 'Home',
  components: {
    CategorieSideBar,
    Product
  },
  data () {
    return {
      products: []
    }
  },
  created () {
    fetch('http://localhost:3000/products')
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
.product-cards:hover {
  border: 1px solid gray;
  margin: 4px;
}
</style>
