<template>
  <div v-if="productLoaded">
    <main class="grid-container" v-for="(product, i) in product" :key="i">
      <div class="product-info">
        <h2 class="product-title">{{product.name}}</h2>
        <div class="product-text">
          <router-link :to="businessUrl">
            <h3 class="store-name">{{product.storeName}}</h3>
          </router-link>
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
import { getProductById } from '@/httpRoutes'

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
      storeId: '',
      showAddToCartWindow: false,
      showAuctionWindow: true,
      productErrorMessage: null,
      productLoaded: false
    }
  },
  mounted () {
    this.getProductInfo()
  },
  computed: {
    businessUrl () {
      return '/business/' + this.storeId
    }
  },
  methods: {
    getProductInfo () {
      fetch(getProductById(this.id))
        .then(async response => {
          const data = await response.json()
          if (!response.ok) {
            const error = (data && data.message) || response.statusText
            return Promise.reject(error)
          }
          this.product.push(data[0])
          this.storeId = data[0].storeId
          this.productLoaded = true
        })
        .catch(error => {
          this.productErrorMessage = error
          console.error('There was an error!', error)
        })
    }
  }
}
</script>

<style scoped>
* {
  text-decoration: none;
  color: black;
}
.store-name:hover {
  text-decoration: underline;
}
h3 {
  margin: auto;
}
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
