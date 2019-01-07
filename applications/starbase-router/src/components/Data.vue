<template>
  <div class="col-md-12">

    <Item v-for="item in items"
          :passedItem="item"
          :type="type"
    />

  </div>
</template>

<script>
  import Item from './Item.vue'
    export default {
        data(){
          return {
            type:this.$route.params.type,
            items:[]
          }
        },
      watch : {
          '$route' : 'fetchItems'
      },
      methods:{
          fetchItems() {
            this.items = []
            this.type = this.$route.params.type

            let initial = [14,16,18]

            for (let i in initial) {
              let id = initial[i]
              fetch(`https://swapi.co/api/${this.type}/${id}`, {
                method: 'GET'
              })
                .then(response => response.json())
                .then(json => this.items.push(json))
            }
          }
      },
      created(){
          this.fetchItems()
      },
      components : {
          Item
      }
    }
</script>

<style scoped>

</style>
