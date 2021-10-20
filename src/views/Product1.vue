<template>
  <main class="grid-container">
    <div>
    <h2 class="product-title">Product name</h2>
    <img src="https://www.antiquaethodierna.no/users/antiquaethod_mystore_no/images/31659_Liten_kopp_og_sk_l_med_trykt_dekor_1.jpg" alt="image description" width="300"/>
    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Product1'
}
</script>

<style scoped>
  .grid-container{
    display: grid;
  }
  .product-title{
    grid-area: product-title;
  }
</style>
