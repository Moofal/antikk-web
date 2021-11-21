<template>
  <main>
    <div>
      <h3>The current bid is:</h3>
      <h2>{{ currentBid }},-</h2>
      <button @click="currentBid=bidStep1; userCurrentBid=bidStep1; updateBidStepButtons()" id="bid_increment_1">{{ bidStep1 }},-</button>
      <button @click="currentBid=bidStep2; userCurrentBid=bidStep2; updateBidStepButtons()" id="bid_increment_2">{{ bidStep2 }},-</button>
      <button @click="currentBid=bidStep3; userCurrentBid=bidStep3; updateBidStepButtons()" id="bid_increment_3">{{ bidStep3 }},-</button>
      <div>Your current bid: {{ userCurrentBid }},-</div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'AuctionWindow',
  props: ['id', 'product'],
  data () {
    return {
      currentBid: parseInt(this.product.startingBid),
      userCurrentBid: 0,
      bidStep1: (parseInt(this.product.startingBid) + parseInt(this.product.bidIncrements)),
      bidStep2: (parseInt(this.product.startingBid) + parseInt(this.product.bidIncrements) * 2),
      bidStep3: (parseInt(this.product.startingBid) + (parseInt(this.product.bidIncrements) * 3))
    }
  },
  methods: {
    addToCurrentBid (step) {
      this.currentBid += parseInt(step)
    },
    updateBidStepButtons () {
      this.bidStep1 = this.currentBid + parseInt(this.product.bidIncrements)
      this.bidStep2 = this.currentBid + (parseInt(this.product.bidIncrements) * 2)
      this.bidStep3 = this.currentBid + (parseInt(this.product.bidIncrements) * 3)
    }
  }
}
</script>

<style scoped>
button{
  margin: 3px;
}
</style>
