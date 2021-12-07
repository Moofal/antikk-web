<template>
  <div>
    <nav class="breadcrumb">
      <span>
        Her er du:
      </span>
      <div>
        <router-link :to="businessUrl">Bedrift</router-link>
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
        <li>Kunde</li>
        <li>Varer</li>
      </ul>
      <section v-if="loaded">
        <table
          v-for="(order, i) in orders"
          :key="i"
          class="order"
        >
          <BusinessOrder :order="order" :orders="orders" :i="i"/>
        </table>
      </section>
    </div>
  </div>
</template>

<script>
import BusinessOrder from '@/components/BusinessOrders'
export default {
  name: 'BusinessOrders',
  components: { BusinessOrder },
  data () {
    return {
      orders: [],
      products: [],
      loaded: false,
      id: this.$route.params.id
    }
  },
  computed: {
    businessUrl () {
      return '/business/' + this.id
    }
  },
  mounted () {
    fetch('http://localhost:9090/business/orders', {
      mode: 'cors',
      credentials: 'include'
    })
      .then(async response => {
        const data = await response.json()
        if (!response.ok) {
          const error = (data && data.message) || response.statusText
          return Promise.reject(error)
        }
        this.orders = data.data
        this.loaded = true
      })
      .catch(error => {
        this.userErrorMessage = error
        console.error('There was an error!', error)
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
