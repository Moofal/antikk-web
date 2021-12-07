<template>
  <div v-if="userLoaded">
    <div class="user-info">
      <h2>Min side</h2>
      <div>Inlogget som: {{user.fname}} {{user.lname}}, {{user.email}}, {{user.phone}}</div>
    </div>
    <router-link :to="orderHistoryId">
      <button>
        Mine ordre
      </button>
    </router-link>
  </div>
  <div v-else>
    {{userErrorMessage}}
  </div>
</template>

<script>
export default {
  name: 'Bruker',
  data () {
    return {
      user: [],
      userLoaded: false,
      userErrorMessage: null
    }
  },
  mounted () {
    this.getUser()
  },
  computed: {
    orderHistoryId () {
      return '/order-history/' + this.user.id
    }
  },
  methods: {
    getUser () {
      fetch('http://localhost:9090/user/details', {
        mode: 'cors',
        credentials: 'include'
      })
        .then(async response => {
          const data = await response.json()
          if (!response.ok) {
            const error = (data && data.message) || response.statusText
            return Promise.reject(error)
          }
          this.user = data.data
          this.userLoaded = true
        })
        .catch(error => {
          this.userErrorMessage = error
          console.error('There was an error!', error)
        })
    }
  }
}
</script>

<style>

</style>
