<template>
  <header>
    <router-link to="/" class="header-button"><h1>Antikk Web</h1></router-link>
    <input placeholder="Søk">
    <nav>
    <router-link to="/bruker" class="header-button"><span>Bruker</span></router-link>
    <router-link to="/cart" class="header-button"><span>Handlevogn</span></router-link>
    <router-link to="/logg-inn" class="header-button"><span>Logg inn</span></router-link>
    </nav>
  </header>
  <hr/>
</template>

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
</style>
