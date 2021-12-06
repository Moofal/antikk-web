<template>
  <header>
    <router-link to="/" class="header-button"><h1>Antikk Web</h1></router-link>
    <!-- <input type="search" v-on:keydown.enter="onSearch" v-model="tempSearch" placeholder="Søk"> -->
    <nav>
    <router-link v-if="user === 'endUser'" to="/end-user" class="header-button"><span>Bruker</span></router-link>
      <router-link v-if="user === 'businessUser'" to="/business/1" class="header-button"><span>Bedrift</span></router-link>
    <router-link v-if="user !== 'businessUser'" to="/cart" class="header-button"><span>Handlevogn({{numProdInCart}})</span></router-link>
    <router-link to="/logg-inn" class="header-button"><span>Logg inn</span></router-link>
    </nav>
  </header>
  <hr/>
  <router-view
    :addToCart="addToCart"
    :cart="cart"
    :removeItem="removeItem"
    :clearCart="clearCart"
    :seeAsEndUser="seeAsEndUser"
    :seeAsBusiness="seeAsBusiness"
    :loggOut="loggOut"
    :user="user"
    :search="search"
  />
  <Footer />
</template>

<script>
import Footer from '@/components/Footer'

export default {
  name: 'Home',
  components: {
    Footer
  },
  data () {
    return {
      cart: [],
      numProdInCart: 0,
      user: '',
      tempSearch: '',
      search: ''
    }
  },
  mounted () {
    if (localStorage.getItem('cart')) {
      try {
        this.cart = JSON.parse(localStorage.getItem('cart'))
      } catch (e) {
      }
    }
    if (localStorage.numProdInCart) {
      this.numProdInCart = localStorage.numProdInCart
    }
    if (localStorage.user) {
      this.user = localStorage.user
    }
  },
  methods: {
    addToCart (id) {
      fetch('http://localhost:3000/products?id=' + id)
        .then(response => {
          return response.json()
        })
        .then(data => {
          this.cart.push(data[0])
          this.numProdInCart++
          this.saveChart()
        })
    },
    removeItem (index) {
      this.cart.splice(index, 1)
      this.numProdInCart--
      this.saveChart()
    },
    saveChart () {
      const parsed = JSON.stringify(this.cart)
      localStorage.setItem('cart', parsed)
      localStorage.numProdInCart = this.numProdInCart
    },
    clearCart () {
      this.cart.length = 0
      this.numProdInCart = 0
      this.saveChart()
    },
    seeAsEndUser () {
      this.user = 'endUser'
      localStorage.user = this.user
    },
    seeAsBusiness () {
      this.user = 'businessUser'
      localStorage.user = this.user
    },
    loggOut () {
      this.user = ''
      localStorage.user = this.user
    },
    onSearch () {
      this.search = this.tempSearch
    }
  }
}
</script>

<style>
header {
  font-family: Arial,serif;
  text-decoration: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
header h1 {
  margin-right: 20px;
}
nav {
  margin-left: 20px;
}
nav span {
  margin-left: 5px;
}
.header-button {
  text-decoration: none;
  color: black;
}
footer {
  background-color: black;
  color: white;
}
footer p {
  text-align: center;
}
</style>
