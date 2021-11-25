<template>
  <div v-if="productLoaded">
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
          <div v-if="user !== 'businessUser'">
            <AddToCart :addToCart="addToCart" :product="product"/>
          </div>
        </div>
        <div v-if="user !== 'businessUser'">
          <AuctionWindow v-if="product.type==='auction'" :id="id" :product="product"/>
        </div>
      </div>
    </main>
  </div>
  <div v-else>
    {{productErrorMessage}}
  </div>
</template>

<script>
import AddToCart from '../components/AddToCart'
import AuctionWindow from '../components/AuctionWindow'
import { url } from '@/httpRoutes'

export default {
  name: 'ProductPage',
  props: ['addToCart', 'user'],
  components: {
    AddToCart,
    AuctionWindow
  },
  data () {
    return {
      id: this.$route.params.id,
      product: [],
      showAddToCartWindow: false,
      showAuctionWindow: true,
      productErrorMessage: null,
      productLoaded: false
    }
  },
  mounted () {
    fetch(url.productId + this.id)
      .then(async response => {
        const data = await response.json()
        if (!response.ok) {
          const error = (data && data.message) || response.statusText
          return Promise.reject(error)
        }
        this.product.push(data[0])
        this.productLoaded = true
      })
      .catch(error => {
        this.productErrorMessage = error
        console.error('There was an error!', error)
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
