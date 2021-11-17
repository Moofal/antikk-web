<template>
  <div class="register-page">
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
        <select v-model="product.category">
          <option v-for="(category, i) in categories" :key="i" v-bind:value="category">
            {{category}}
          </option>
        </select>
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
          <input v-model="product.bidIncrements">
          <label>Når slutter auktionen</label>
          <input type="datetime-local" v-model="product.endDate">
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
export default {
  name: 'RegisterProduct',
  data () {
    return {
      categories: [],
      product: {
        id: '15'
      }
    }
  },
  mounted () {
    this.getStoreId()
    this.getCategories()
    this.getStoreName()
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
        delete this.product.bidIncrements
        delete this.product.endDate
      }
      if (this.product.type === 'auction') {
        delete this.product.price
      }
    },
    getStoreId () {
      this.product.storeId = this.$route.params.id
    },
    async registerProduct () {
      await this.cleanSaleType()
      const newProduct = this.product
      await fetch('http://localhost:3000/products', {
        method: 'POST',
        body: JSON.stringify(newProduct),
        headers: { 'Content-Type': 'application/json' }
      })
    },
    getStoreName () {
      fetch('http://localhost:3000/store?id=' + this.product.storeId)
        .then(response => {
          return response.json()
        })
        .then(data => {
          this.product.storeName = data[0].storeName
        })
    },
    getCategories () {
      fetch('http://localhost:3000/categories')
        .then(response => {
          return response.json()
        })
        .then(data => {
          this.categories = data
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
