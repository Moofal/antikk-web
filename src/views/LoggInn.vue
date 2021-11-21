<template>
  <div>
    <button @click="seeAsBusiness">
      Logg in som Fredrikstad Antikvitet
    </button>
    <button @click="seeAsEndUser">
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
  props: ['seeAsEndUser', 'seeAsBusiness', 'loggOut']
}
</script>
