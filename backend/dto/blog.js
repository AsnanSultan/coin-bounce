class blogDTO {
    constructor(blog) {
        this.id = blog.id;

        this.author = blog.author;
        this.content = blog.content;
        this.title = blog.title;
        this.photo = blog.photopath;
        this.createdAt = blog.createdAt;
    }
}

module.exports = blogDTO;