<template>
<div>
  <form>
    <fieldset>
      <div class="options">
        <div v-for="(selected, i) in categories" :key="i">
          <input type="radio" name="category" v-bind:value="selected" v-model="category">
          <label>{{ selected }}</label>
        </div>
      </div>
    </fieldset>
  </form>
</div>
</template>

<script>
export default {
  name: 'CategorieSideBar',
  data () {
    return {
      categories: [],
      category: ''
    }
  },
  mounted () {
    fetch('http://localhost:3000/categories')
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.categories = data
      })
  }
}
</script>

<style scoped>
.options {
  display: flex;
  flex-direction: column;
}
</style>
