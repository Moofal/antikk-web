<template>
  <div class="card">
    <div class="card-img">
      <img src="../assets/logo.png" alt="Bilde av produkt">
    </div>
    <div class="card-info">
      <h2>Produkt navn</h2>
      <p>Info om produkt</p>
      <button>
        Legg til
      </button>
    </div>
  </div>
</template>

<!--
When i call this file product card i vue does
not want to import it for some reason
-->

<script>
export default {
  name: 'Product'
}
</script>

<style scoped>

</style>
