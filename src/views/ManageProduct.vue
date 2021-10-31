<template>
  <RegisterProduct />
  <EditProduct v-if="false" />
</template>

<script>
import RegisterProduct from '@/components/RegisterProduct'
import EditProduct from '@/components/EditProduct'
export default {
  name: 'ManageProduct',
  components: {
    EditProduct,
    RegisterProduct
  }
}
</script>

<style scoped>

</style>
