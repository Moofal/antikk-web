<template>
  <div>
    <nav class="breadcrumb">
      <span>
        Her er du:
      </span>
      <div>
        <router-link to="/end-user">Bruker</router-link>
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
import UserOrder from '@/components/UserOrder'
export default {
  name: 'OrderHistory',
  components: { UserOrder },
  data () {
    return {
      orders: [],
      products: [],
      loaded: false,
      id: this.$route.params.id
    }
  },
  mounted () {
    fetch('http://localhost:9090/user/orders', {
      mode: 'cors',
      credentials: 'include'
    })
      .then(async response => {
        const data = await response.json()
        if (!response.ok) {
          const error = (data && data.message) || response.statusText
          return Promise.reject(error)
        }
        console.log(data)
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
