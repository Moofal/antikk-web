<template>
  <div>
    <div class="user-info">
      <h2>Min side</h2>
      <div>Inlogget som: {{user.fname}} {{user.lname}}, {{user.email}}, {{user.phone}}</div>
    </div>
    <router-link to="/orders">
      <button>
        Mine ordre
      </button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Bruker',
  data () {
    return {
      user: []
    }
  },
  mounted () {
    this.getUser()
  },
  methods: {
    getUser () {
      fetch('http://localhost:3000/users/?_fname=Simen')
        .then(response => {
          return response.json()
        })
        .then(data => {
          this.user = data[0]
        })
    }
  }
}
</script>

<style>

</style>
