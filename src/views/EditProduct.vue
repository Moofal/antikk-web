<template>
  <div v-if="productLoaded" class="register-page">
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
        <input v-model="product.name" placeholder="Navn">
        <label>Produkt Informasjon</label>
        <textarea v-model="product.description" aria-rowspan="10" aria-colspan="50"></textarea>
        <label>Kategori</label>
        <select v-if="categoriesLoaded" v-model="product.category">
          <option v-for="(category, i) in categories" :key="i" v-bind:value="category">
            {{category}}
          </option>
        </select>
        <div v-else>
          {{categoriesErrorMessage}}
        </div>
        <label>Salgs Type</label>
        <div>
          <label>Salg</label>
          <input type="radio" name="type" value="sale" v-model="product.type">
          <label>Auktion</label>
          <input type="radio" name="type" value="auction" v-model="product.type">
        </div>
        <div class="input" v-if="product.type === 'sale' ">
          <label>Pris</label>
          <input v-model="product.price" placeholder="0">
        </div>
        <div class="input" v-if="product.type === 'auction' ">
          <label>Start Pris</label>
          <input v-model="product.startingBid">
          <label>Stepper</label>
          <input v-model="product.stepper">
          <label>Når slutter auktionen</label>
          <input type="datetime-local" v-model="product.endDate">
        </div>
      </fieldset>
    </form>
    <div class="btn-submit">
      <router-link :to="businessUrl">
        <button @click="editProduct">Rediger Produkt</button>
      </router-link>
    </div>
  </div>
  <div v-else>
    {{productErrorMessage}}
  </div>
</template>

<script>
import { url } from '@/httpRoutes'

export default {
  name: 'EditProduct',
  data () {
    return {
      categories: [],
      product: {},
      postId: this.$route.params.id,
      categoriesLoaded: false,
      categoriesErrorMessage: null,
      productLoaded: false,
      productErrorMessage: null,
      editProductErrorMessage: null
    }
  },
  mounted () {
    this.getStoreId()
    this.getCategories()
    this.getProduct()
  },
  computed: {
    businessUrl () {
      return '/business/' + this.product.storeId
    }
  },
  methods: {
    cleanSaleType () {
      if (this.product.type === 'sale') {
        delete this.product.startingBid
        delete this.product.stepper
        delete this.product.endDate
      }
      if (this.product.type === 'auction') {
        delete this.product.price
      }
    },
    getStoreId () {
      this.product.storeId = this.$route.params.id
    },
    async editProduct () {
      await this.cleanSaleType()
      const editedProduct = this.product
      await fetch(url.productAction + this.postId, {
        method: 'PUT',
        body: JSON.stringify(editedProduct),
        headers: { 'Content-Type': 'application/json' }
      })
        .then(async response => {
          const data = await response.json()
          if (!response.ok) {
            const error = (data && data.message) || response.status
            return Promise.reject(error)
          }
        })
        .catch(error => {
          this.editProductErrorMessage = error
          console.error('There was an error!', error)
        })
    },
    getProduct () {
      fetch(url.productId + this.postId)
        .then(async response => {
          const data = await response.json()
          if (!response.ok) {
            const error = (data && data.message) || response.statusText
            return Promise.reject(error)
          }
          this.product = data[0]
          this.productLoaded = true
        })
        .catch(error => {
          this.productErrorMessage = error
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
          this.categories = data
          this.categoriesLoaded = true
        })
        .catch(error => {
          this.categoriesErrorMessage = error
          console.error('There was an error!', error)
        })
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
