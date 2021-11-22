<template>
  <main class="grid-container" v-for="(product, i) in product" :key="i">
    <div class="product-info">
      <h2 class="product-title">{{product.name}}</h2>
      <div class="product-text">
        <h3>Produkt beskrivelse</h3>
        <p class="product-description">{{product.description}}</p>
      </div>
    </div>
    <div class="product-sale-auction">
      <div v-if="product.type==='sale'">
        <p>Type: Salg</p>
        <p>Kategori:  {{product.category}}</p>
        <div>{{product.price}} kr</div>
        <AddToCart :addToCart="addToCart" :product="product"/>
      </div>
      <div >
        <AuctionWindow v-if="product.type==='auction'" :id="id" :product="product"/>
      </div>
    </div>
  </main>
</template>

<script>
import AddToCart from '../components/AddToCart'
import AuctionWindow from '../components/AuctionWindow'
import url from '../httpRoutes'

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
    fetch('http://localhost:9090/client/product/' + this.id + '/details')
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data)
        this.product.push(data.data)
      })
  }
}
</script>

<style scoped>
.product-description {
  size: 100px;
}
.grid-container{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.product-sale-auction{
  border-style: solid;
}
.product-info {
  width: 25%;
}
</style>
