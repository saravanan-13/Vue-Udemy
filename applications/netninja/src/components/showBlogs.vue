<template >
<div v-theme:column="'narrow'" class="show-blog">
  <h1>BLOGS BOOM</h1>
  <button @click="gohome">GoHome</button>
  <input type="text" v-model="search" placeholder="search blogs"/>
<div class="show-blogs" v-for="blog in filterblogs">
<h3 v-rainbow>{{blog.title | toUppercase }}</h3>
  <p>{{blog.body | snippet}}</p>
</div>
</div>
</template>

<script>
  import searchMixin from '../mixins/searchMixin'
    export default {
       data(){
         return{
            blogs:[],
           search:''
         }
       },
      methods:{
        gohome:function () {
          this.$router.push('/add')
        }
      },
      created(){
         this.$http.get('https://jsonplaceholder.typicode.com/posts')
           .then(function (data) {
             this.blogs = data.body.splice(0,10)
           })
      },
      computed:{

      },
      filters:{
         toUppercase(value){
           return value.toUpperCase()
         }
      },
      directives:{
         'rainbow':{
           bind(el,binding,vnode){
             el.style.color = "#" + Math.random().toString().slice(2,8)
           }
         }
      },
      mixins:[searchMixin]
    }
</script>

<style scoped>

  .show-blog{
    margin: auto;
  }

</style>
