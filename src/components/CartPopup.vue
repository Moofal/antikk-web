<template>
  <div class="popup">
    <div class="popup-items">
      <h3>Exit</h3>
      <button @click="togglePaymentPopup" class="exit-proceed">
        X
      </button>
      <h3>Bestil handlevogn</h3>
      <button @click="pay" class="pay">
        Betal
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartPopup',
  props: ['togglePaymentPopup', 'pay']
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
