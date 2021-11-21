<template>
  <router-link :to="orderLink">
    <tbody class="order">
    <tr class="table">
      <td class="cell">
        <a class="item">Status</a>
      </td>
      <td class="table">
        <a class="item">{{order.orderNumber}}</a>
      </td>
      <td class="table">
        <a class="item">{{}}</a>
      </td>
      <td>
        <ul v-for="product in orders[i].products" :key="product.id">
          <li>{{product.name}}</li>
        </ul>
      </td>
    </tr>
    </tbody>
  </router-link>
</template>

<script>
export default {
  name: 'UserOrder',
  props: ['orders', 'order', 'i'],
  computed: {
    orderLink () {
      return '/orders/' + this.order.id
    }
  }
}
</script>

<style scoped>
.order {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: stretch;
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
