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
          <label>Når slutter auktionen</label>
          <input type="datetime-local">
        </div>
      </fieldset>
    </form>
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
        name: '',
        description: '',
        type: '',
        price: '',
        startingBid: ''
      }
    }
  },
  methods: {
    registerProduct () {
      console.log(this.product.name, this.product.description, this.product.type, this.product.price, this.product.startingBid)
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
</style>
