<template>
  <div class="register-page">
    <form class="register-input">
      <fieldset class="input">
        <legend>Registrer Produkt</legend>
        <label>Produkt Navn</label>
        <input v-model="product.name">
        <label>Produkt Informasjon</label>
        <textarea v-model="product.description" aria-rowspan="8" aria-colspan="40"></textarea>
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
    <div>
      {{product}}
    </div>
    <div class="btn-submit">
      <button @click="registerProduct">Registrer produkt</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterProduct',
  data () {
    return {
      product: {
        storeId: '',
        prodId: '',
        storeName: '',
        name: '',
        description: '',
        image: '',
        price: '',
        type: ''
      },
      postId: null
    }
  },
  methods: {
    async registerProduct () {
      console.log(this.product)
      const requestOption = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.product)
      }
      const response = await fetch('http://localhost:3000/products', requestOption)
      const data = await response.json()
      this.postId = data.prodId
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
