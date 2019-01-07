<template>
  <div id="app">
    <h1>{{title}}</h1>
    <div class="col-md-12">
    <Character  v-for="id in ids"
      v-bind:id="id"
    />
    </div>
  </div>
</template>

<script>
  import Character from './components/Character.vue'
export default {
  name: 'app',
  data () {
    return {
      title: 'StarBase',
      ids:[1,13,14]
    }
  },
 components :{
    Character
 }
}
</script>

<style scoped>

</style>
