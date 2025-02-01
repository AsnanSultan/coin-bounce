class BlogDetailsDTO {
    constructor(blog) {
        this.id = blog.id;
        this.content = blog.content;
        this.title = blog.title;
        this.photo = blog.photopath;
        this.createdAt = blog.createdAt;

        this.autherName = blog.author.name;
        this.autherUsername = blog.author.username;
    }
}

module.exports = BlogDetailsDTO;