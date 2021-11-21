<template>
  <div v-if="loaded">
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
</template>

<script>
export default {
  name: 'Order',
  data () {
    return {
      orderId: this.$route.params.id,
      order: [],
      loaded: false
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
      fetch('http://localhost:3000/order/?id=' + this.orderId)
        .then(response => {
          return response.json()
        })
        .then(data => {
          this.order = data[0]
          this.loaded = true
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
