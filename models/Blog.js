class Blog {
    constructor() {
      this.blogs = [];
    }
  
    addBlog(title, content, author) {
      const newBlog = {
        id: this.blogs.length + 1,
        title,
        content,
        author,
        date: new Date(),
      };
      this.blogs.push(newBlog);
      return newBlog;
    }
  
    getAllBlogs() {
      return this.blogs;
    }
  }
  
  module.exports = new Blog();
  