<template>
  <div class="popup">
    <div class="popup-items">
      <h3>Exit</h3>
      <button @click="toggleDelPop" class="exit-proceed">
        X
      </button>
      <h3>Er du sikker på at du vill slette dette produktet?</h3>
      <router-link :to="businessUrl">
        <button @click="deleteProduct" class="delete">
          Slett
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DelProdPopup',
  props: ['toggleDelPop', 'deleteProduct', 'businessUrl']
}
</script>

<style lang="scss" scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
.popup-items {
  background: #fff;
  padding: 30px;
  display: flex;
  flex-flow: column nowrap;
}
.popup-items h3 {
  margin: 0;
  text-align: center;
}
}
</style>
