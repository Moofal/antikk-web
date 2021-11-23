<template>
  <div class="card">
    <DelProdPopup
      v-if="delPop"
      :toggleDelPop="toggleDelPop"
      :deleteProduct="deleteProduct"
      :businessUrl="businessUrl"
    />
    <div class="card-info">
      <h2>{{ product.name }}</h2>
      <h3>{{product.storeName}}</h3>
      <p class="description">{{product.description}}</p>
      <div v-if="product.type !== 'auction'">
        <p class="price">{{product.price}} kr {{product.category}}</p>
      </div>
      <div v-else>
        <p class="price">Start bud: {{product.startingBid}} kr {{product.category}}</p>
      </div>
      <router-link :to="editProductUrl">
        <button>
          Rediger produkt
        </button>
      </router-link>
      <button @click="toggleDelPop">
        Slett Produkt
      </button>
    </div>
  </div>
</template>

<script>
import DelProdPopup from '@/components/DelProdPopup'
import url from '../httpRoutes'

export default {
  name: 'ProductCardBusiness',
  props: ['product', 'businessUrl'],
  data () {
    return {
      delPop: false
    }
  },
  components: {
    DelProdPopup
  },
  computed: {
    productUrl () {
      return '/product/' + this.product.id
    },
    editProductUrl () {
      return '/edit-product/' + this.product.id
    }
  },
  methods: {
    toggleDelPop () {
      this.delPop = !this.delPop
    },
    async deleteProduct () {
      await fetch(url.productAction + this.product.id, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      })
      await this.toggleDelPop()
    }
  }
}
</script>

<style scoped>
h2 {
  margin: auto;
}
h3 {
  margin: auto;
  text-decoration: none;
}
.description {
  margin: auto;
}
</style>
