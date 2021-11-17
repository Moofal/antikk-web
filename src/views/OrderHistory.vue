<template>
  <div>
    <nav class="breadcrumb">
      <span>
        Her er du:
      </span>
      <div>
        <router-link to="bruker">Bruker</router-link>
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
          <tbody>
          <tr class="table">
            <td class="cell">
              <a class="item">Status</a>
            </td>
            <td class="table">
              <a class="item">{{order.orderNumber}}</a>
            </td>
            <td class="table">
              <a class="item"></a>
            </td>
            <td>
              <ul v-for="product in orders[i].products" :key="product.id">
                <li>{{product.name}}</li>
              </ul>
            </td>
            <td class="table">
              <a class="item">{{order.total}} kr</a>
            </td>
          </tr>
          </tbody>
        </table>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderHistory',
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
.table {
  display: flex;
  justify-content: space-evenly;
  align-items: stretch;
}
.cell {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  flex: none;
  align-items: stretch;
}
.item {
  width: 100%;
  height: 100%;
  padding: 15px 0;
}
</style>
