<template>
  <div v-if="loaded" class="register-page">
    <nav class="breadcrumb">
      <span>
        Her er du:
      </span>
      <div>
        <router-link :to="businessUrl">Bedrift Side</router-link>
        <span>></span>
      </div>
      <div>
        <span>Registrer Produkt</span>
      </div>
    </nav>
    <form class="register-input">
      <fieldset class="input">
        <legend>Registrer Produkt</legend>
        <label>Produkt Navn</label>
        <input v-model="product.name" placeholder="Navn" class="name">
        <label>Produkt Informasjon</label>
        <textarea v-model="product.description" aria-rowspan="10" aria-colspan="50"></textarea>
        <label>Kategori</label>
        <select v-model="product.category">
          <option v-for="(category, i) in categories" :key="i" v-bind:value="category">
            {{category}}
          </option>
        </select>
        <label>Salgs Type</label>
        <div>
          <label>Salg</label>
          <input type="radio" name="type" value="sale" v-model="product.type" class="sale">
          <label>Auktion</label>
          <input type="radio" name="type" value="auction" v-model="product.type" class="auction">
        </div>
        <div class="input" v-if="product.type === 'sale' ">
          <label>Pris</label>
          <input v-model="product.price" placeholder="0" class="price">
        </div>
        <div class="input" v-if="product.type === 'auction' ">
          <label>Start Pris</label>
          <input v-model="product.startingBid" class="startingBid">
          <label>Stepper</label>
          <input v-model="product.bidIncrements" class="bidIncrements">
          <label>Når slutter auktionen</label>
          <input type="date" v-model="product.endDate" class="endDate">
        </div>
      </fieldset>
    </form>
    <div class="btn-submit">
      <router-link :to="businessUrl">
        <button @click="registerProduct">Registrer produkt</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { url } from '@/httpRoutes'

export default {
  name: 'RegisterProduct',
  data () {
    return {
      categories: [],
      product: {
        id: '21',
        storeId: '',
        type: '',
        name: '',
        description: '',
        category: ''
      },
      categoriesLoaded: false,
      categoriesErrorMessage: null,
      loaded: false
    }
  },
  mounted () {
    this.getStoreId()
    this.getCategories()
  },
  methods: {
    cleanSaleType () {
      if (this.product.type === 'sale') {
        delete this.product.id

        delete this.product.startingBid
        delete this.product.bidIncrements
        delete this.product.endDate
      }
      if (this.product.type === 'auction') {
        delete this.product.price
      }
    },
    getStoreId () {
      this.product.storeId = this.$route.params.id
      this.loaded = true
    },
    async registerProduct () {
      await this.cleanSaleType()
      console.log(this.product)
      const reqUrl = (this.product.type === 'sale') ? url.postProduct : url.postAuction
      const newProduct = this.product
      await fetch(reqUrl, {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        body: JSON.stringify(newProduct)
        // headers: { 'Content-Type': 'application/json' }
      }).then(async response => {
        const data = await response.json()
        if (!response.ok) {
          const error = (data && data.message) || response.status
          return Promise.reject(error)
        }
      })
    },
    getStoreName () {
      fetch('http://localhost:9090/store/8bfac56a-f6bd-424f-a28e-037792ded027/details')
        .then(response => {
          return response.json()
        })
        .then(data => {
          this.product.storeName = data.data.storeName
        })
        .catch(error => {
          this.putProductErrorMessage = error
          console.error('There was an error!', error)
        })
    },
    getCategories () {
      fetch(url.categories)
        .then(async response => {
          const data = await response.json()
          if (!response.ok) {
            const error = (data && data.message) || response.statusText
            return Promise.reject(error)
          }
          this.categories = data.data
          this.categoriesLoaded = true
        })
        .catch(error => {
          this.categoriesErrorMessage = error
          console.error('There was an error!', error)
        })
    }
  },
  computed: {
    businessUrl () {
      return '/business/' + this.product.storeId
    }
  }
}
</script>

<style scoped>
.breadcrumb {
  display: flex;
  flex-direction: row;
}
.input {
  display: flex;
  flex-direction: column;
}
.register-input {
  display: flex;
  justify-content: center;
}
.btn-submit {
  display: flex;
  justify-content: center;
  align-items: center;
}
.input label {
  margin-top: 5px;
}
</style>
