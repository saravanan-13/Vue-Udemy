<template>
  <div id="app">
    <h2>STARBASE ROUTER</h2>
    <router-link class="link" to="/data/people">Show People</router-link> |
    <router-link class="link" to="/data/planets">Show Planets</router-link> |
    <router-link class="link" to="/data/vehicles">Show Vehicles</router-link>
    <router-view> </router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style>

</style>
