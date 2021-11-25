<template>
  <div v-if="orderLoaded">
    <nav class="breadcrumb">
      <span>
        Her er du:
      </span>
      <div>
        <router-link to="bruker">Bruker</router-link>
        <span>></span>
      </div>
      <div>
        <router-link to="/orders">Ordreoversikt</router-link>
        <span>></span>
      </div>
      <div>
        <span>Ordre {{orderId}}</span>
      </div>
    </nav>
    <h2 class="title">Produkter</h2>
    <div v-for="(product, i) in order.products" :key="i">
      <div class="card-info">
        <router-link :to="'/product/' + product.id">
          <div>
            <h2>{{ product.name }}</h2>
            <router-link :to="'/business/' + product.storeId">
              <h3>{{product.storeName}}</h3>
            </router-link>
            <p class="description">{{product.description}}</p>
            <div v-if="product.type !== 'auction'">
              <p class="price">{{product.price}} kr {{product.category}}</p>
            </div>
            <div v-else>
              <p class="price">Start bud: {{product.startingBid}} kr {{product.category}}</p>
            </div>
          </div>
        </router-link>
        </div>
    </div>
    <p>Total pris: {{order.total}} kr</p>
  </div>
  <div v-if="!orderLoaded">
    {{orderErrorMessage}}
  </div>
</template>

<script>
import { getOrder } from '@/httpRoutes'

export default {
  name: 'Order',
  data () {
    return {
      orderId: this.$route.params.id,
      order: [],
      orderLoaded: false,
      orderErrorMessage: null
    }
  },
  mounted () {
    this.getOrder()
  },
  computed: {
    productUrl () {
      return '//'
    }
  },
  methods: {
    getOrder () {
      fetch(getOrder(this.orderId))
        .then(async response => {
          const data = await response.json()
          if (!response.ok) {
            const error = (data && data.message) || response.statusText
            return Promise.reject(error)
          }
          this.order = data[0]
          this.orderLoaded = true
        })
        .catch(error => {
          this.orderErrorMessage = error
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
.breadcrumb {
  display: flex;
  flex-direction: row;
}
.title {
  text-decoration: underline;
}
h2 {
  margin: auto;
}
h3:hover {
  text-decoration: underline;
}
h3 {
  margin: auto;
}
.description {
  margin: auto;
}
</style>
