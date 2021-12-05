<template>
  <div v-if="userLoaded">
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
  <div v-else>
    {{userErrorMessage}}
  </div>
</template>

<script>
import { url } from '@/httpRoutes'
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
  methods: {
    getUser () {
      fetch(url.userSimen)
        .then(async response => {
          const data = await response.json()
          if (!response.ok) {
            const error = (data && data.message) || response.statusText
            return Promise.reject(error)
          }
          this.user = data[0]
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
