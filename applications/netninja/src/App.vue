<template>
    <div id="app">
      <h1>Net Ninja</h1>
      <router-link to="/" exact>Home</router-link> |
      <router-link to="/add" exact>Add Blogs</router-link>
      <router-view></router-view>
    </div>
</template>

<script>
  import addblogs from './components/addBlogs'
  import showBlogs from './components/showBlogs'
  import listBlogs from './components/listBlogs'
    export default {
        components:{
          'add-blog': addblogs,
          'show-blog':showBlogs,
          'list-blog':listBlogs
        },
      data(){
          return{

          }
      },
      methods:{

      }
    }
</script>

<style scoped>

</style>
