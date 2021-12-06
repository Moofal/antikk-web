<template>
  <div>
<!--    <button @click="seeAsBusiness">-->
    <button @click="this.SignInBusiness">
      Logg in som Fredrikstad Antikvitet
    </button>
<!--    <button @click="seeAsEndUser">-->
    <button @click="this.SignInUser">
      Logg in som slutt bruker
    </button>
    <button @click="loggOut">
      Logg Ut
    </button>
  </div>
</template>

<script>
export default {
  name: 'LoggInn',
  props: ['seeAsEndUser', 'seeAsBusiness', 'loggOut'],
  methods: {
    SignInUser () {
      fetch('http://localhost:9090/user/sign-in', {
        method: 'POST',
        mode: 'cors',
        credentials: 'include'
      })
        .then(async response => {
          const data = await response.json
          console.log(data)
          this.seeAsEndUser()
        })
    },
    SignInBusiness () {
      fetch('http://localhost:9090/business/sign-in', {
        method: 'POST',
        mode: 'cors',
        credentials: 'include'
      })
        .then(async response => {
          const data = await response.json
          console.log(data)
          this.seeAsBusiness()
        })
    }
  }
}
</script>
