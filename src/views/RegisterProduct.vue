<template>
  <div class="register-page">
    <form class="register-input">
      <fieldset class="input">
        <legend>Registrer Produkt</legend>
        <label>Produkt Navn</label>
        <input v-model="product.name">
        <label>Produkt Informasjon</label>
        <textarea v-model="product.description" aria-rowspan="8" aria-colspan="40"></textarea>
        <select v-model="product.category">
          <option v-for="(category, i) in categories" :key="i" v-bind:value="category" >
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
          <input v-model="product.price">
        </div>
        <div class="input" v-if="product.type === 'auction' ">
          <label>Start Pris</label>
          <input v-model="product.startingBid">
          <label>Stepper</label>
          <input v-model="product.stepper">
          <label>Når slutter auktionen</label>
          <input type="datetime-local">
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
        id: '13',
        storeId: this.$route.params.id,
        storeName: '',
        name: '',
        description: '',
        image: '',
        price: '',
        type: '',
        category: ''
      }
    }
  },
  mounted () {
    this.getCategories()
    this.getStoreName()
  },
  computed: {
    businessUrl () {
      return '/business/' + this.product.storeId
    }
  },
  methods: {
    async registerProduct () {
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
