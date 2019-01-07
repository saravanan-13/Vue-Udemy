export  default {
  computed :{
    filterblogs:function () {
      return this.blogs.filter((blog)=>{
        return blog.title.match(this.search)
      })
    }
  }
}
