<template>
  <div v-bind="$attrs">
  <aside>
    <CategorieSideBar />
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
import CategorieSideBar from '@/components/CategorieSideBar'

export default {
  name: 'Home',
  props: ['products', 'addToCart'],
  components: {
    CategorieSideBar,
    ProductCard
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
.product-cards:hover {
  border: 1px solid gray;
  margin: 4px;
}
</style>
