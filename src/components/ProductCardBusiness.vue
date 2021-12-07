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
      await fetch('http://localhost:9090/business/store/' + this.product.id + '/delete', {
        method: 'GET',
        mode: 'cors',
        credentials: 'include'
      })
      await this.toggleDelPop()
      location.reload()
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
