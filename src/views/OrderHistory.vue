<template>
  <div>
    <nav class="breadcrumb">
      <span>
        Her er du:
      </span>
      <div>
        <router-link to="/bruker">Bruker</router-link>
        <span>></span>
      </div>
      <div>
        <span>Ordre</span>
      </div>
    </nav>
    <h2>Dine ordre</h2>
    <div>
      <ul class="header">
        <li>Bestilt</li>
        <li>Ordrenummer</li>
        <li>Selger</li>
        <li>Varer</li>
      </ul>
      <section v-if="loaded">
        <table
          v-for="(order, i) in orders"
          :key="i"
          class="order"
        >
          <UserOrder :order="order" :orders="orders" :i="i"/>
        </table>
      </section>
    </div>
  </div>
</template>

<script>
// import url from '../httpRoutes'

import UserOrder from '@/components/UserOrder'
export default {
  name: 'OrderHistory',
  components: { UserOrder },
  data () {
    return {
      orders: [],
      products: [],
      loaded: false
    }
  },
  mounted () {
    fetch('http://localhost:3000/order/?id=1')
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.orders = data
        this.loaded = true
      })
  }
}
</script>

<style scoped>
.breadcrumb {
  display: flex;
  flex-direction: row;
}
.order {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: stretch;
}
.header {
  display: flex;
  justify-content: space-evenly;
  padding: 0;
  margin: 0;
  width: 100%;
  list-style: none;
}
</style>
