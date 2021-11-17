<template>
  <main class="grid-container" v-for="(product, i) in product" :key="i">
    <h2 class="product-title">{{product.name}}</h2>
    <div class="product-text">
      <h3>Produkt beskrivelse</h3>
      <p>{{product.description}}</p>
    </div>
    <div v-if="product.type==='sale'" class="product-sale-auction">
      <p>Salg</p>
      <div>{{product.pris}}</div>
      <AddToCart :addToCart="addToCart" :product="product"/>
    </div>
    <div >
      <AuctionWindow v-if="product.type==='auction'" :id="id" :product="product"/>
    </div>
  </main>
</template>

<script>
import AddToCart from '../components/AddToCart'
import AuctionWindow from '../components/AuctionWindow'
export default {
  name: 'ProductPage',
  props: ['addToCart'],
  components: {
    AddToCart,
    AuctionWindow
  },
  data () {
    return {
      id: this.$route.params.id,
      product: [],
      showAddToCartWindow: false,
      showAuctionWindow: true
    }
  },
  mounted () {
    fetch('http://localhost:3000/products?id=' + this.id)
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.product.push(data[0])
      })
  }
}
</script>

<style scoped>
.grid-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.product-sale-auction{
  grid-area: productsaleauction;
  border-style: solid;
}
</style>
