<template>
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>
    <form v-if="!submitted">
      <label>Blog Title:</label>
      <input type="text" v-model.lazy="blog.title" required />
      <label>Blog Content:</label>
      <textarea v-model.lazy.trim="blog.content"></textarea>
      <select v-model="blog.author" v-on:change="alertme">
        <option v-for="author in authors">{{author}}</option>
      </select>
      <div id="checkboxes">
        <label>Ninjas</label>
        <input type="checkbox" value="ninjas" v-model="blog.categories"/>
        <label>Wizards</label>
        <input type="checkbox" value="wizards" v-model="blog.categories"/>
        <label>Barney</label>
        <input type="checkbox" value="barney" v-model="blog.categories"/>
        <label>Ted Mosby</label>
        <input type="checkbox" value="ted mosby" v-model="blog.categories"/>
      </div>
      <button @click.prevent="addblog">Add blog</button>
    </form>
    <div v-if="submitted">
      <h2>Thanks for entering the data</h2>
    </div>
    <div id="preview">
      <h3>Preview blog</h3>
      <p>Blog title: {{ blog.title }}</p>
      <p>Blog content:</p>
      <p style="white-space: pre">{{ blog.content }}</p>
      <p>{{blog.author}}</p>
      <div id="check">
      <ul>Blog Category :
      <li v-for="category in blog.categories">{{category}}</li>
      </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        blog: {
          title: '',
          content: '',
          categories :[],
          author:""
        },
        authors:['ted','barney','stinson','marshal'],
        submitted:false
      }
    },
    methods: {
      addblog:function () {
        this.$http.post('https://jsonplaceholder.typicode.com/posts',{
          title: this.blog.title,
          body:this.blog.content,
          userId:1
        }).then(function (data) {
          console.log(data)
          this.submitted=true
        })
      },
      alertme(){
        alert("changed..!")
      }
    }
  }
</script>

<style>
  #add-blog *{
    box-sizing: border-box;
  }
  #add-blog{
    margin: 20px auto;
    max-width: 500px;
  }
  label{
    display: block;
    margin: 20px 0 10px;
  }
  input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
  }
  #preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
  }
  h3{
    margin-top: 10px;
  }
  #check{
    display: inline-block;
  }
</style>
