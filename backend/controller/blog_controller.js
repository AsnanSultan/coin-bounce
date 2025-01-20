const Joi = require('joi');
const fs = require('fs');

const mongodbIdPattren = /^[0-9a-fA-F]{24}$/;
const Blog = require('../models/blog');
const { BACKEND_SERVER_PATH } = require('../config');
const BlogDTO = require('../dto/blog.js');
const blog = require('../models/blog');

const BlogDetailsDTO = require("../dto/blog-detail");

const blogController = {
    async create(req, res, next) {


        const createBlogSchema = Joi.object({
            title: Joi.string().required(),
            author: Joi.string().regex(mongodbIdPattren).required(),
            photo: Joi.string().required(),
            content: Joi.string().required(),

        });
        const error = createBlogSchema.validate(req.body);
        if (error.error) {

            return next(error);
        }

        const { title, author, content, photo } = req.body;
        const buffer = Buffer.from(photo.replace(/^data:image\/(png|jpg|jpeg);base64,/, ""), 'base64');

        const imagePath = `${Date.now()}-${author}.png`;

        try {

            fs.writeFileSync(`storage/${imagePath}`, buffer);
        } catch (error) {
            return next(error);
        }

        let newBlog;
        try {

            newBlog = new Blog({
                title,
                author,
                content,
                photopath: `${BACKEND_SERVER_PATH}/storage/${imagePath}`
            });

            await newBlog.save();

        } catch (error) {
            return next(error);
        }


        const blogDto = new BlogDTO(newBlog);
        return res.status(201).json({ blog: blogDto });


    },
    async getAll(req, res, next) {

        try {

            const blogs = await Blog.find({});
            let dtoBlogs = [];
            for (let i = 0; i < blogs.length; i++) {
                const blogDto = new BlogDTO(blogs[i]);
                dtoBlogs.push(blogDto);
            }

            return res.status(200).json({ blogs: dtoBlogs });

        } catch (error) {
            return next(error);
        }

    },
    async getById(req, res, next) {
        const getByIdSchema = Joi.object({
            id: Joi.string().regex(mongodbIdPattren).required()
        });

        const { error } = getByIdSchema.validate(req.params);

        if (error) {
            return next(error);
        }
        const { id } = req.params;
        try {


            const blog = await Blog.findOne({ _id: id }).populate("author");
            if (!blog) {
                return res.status(404).json({ message: "Blog not found" });
            }
            const blogDto = new BlogDetailsDTO(blog);
            return res.status(200).json({ blog: blogDto });
        } catch (error) {
            return next(error);
        }


    },
    async update(req, res, next) {
        const updateBlogSchema = Joi.object({
            title: Joi.string().required(),
            content: Joi.string().required(),
            author: Joi.string().regex(mongodbIdPattren).required(),
            blogId: Joi.string().regex(mongodbIdPattren).required(),
            photo: Joi.string()

        });
        const { error } = updateBlogSchema.validate(req.body);
        if (error) {
            return next(error);
        }

        const { title, content, author, blogId, photo } = req.body;
        let blog;
        try {
            blog = await Blog.findOne({_id : blogId});

        } catch (error) {
            return next(error);
        }
        if (photo) {
            previousPhotoPath = blog.photopath;
            previousPhotoPath = previousPhotoPath.split("/").at(-1);
            fs.unlinkSync(`storage/${previousPhotoPath}`);

            const buffer = Buffer.from(photo.replace(/^data:image\/(png|jpg|jpeg);base64,/, ""), 'base64');

            const imagePath = `${Date.now()}-${author}.png`;

            try {

                fs.writeFileSync(`storage/${imagePath}`, buffer);
            } catch (error) {
                return next(error);
            }

            await Blog.updateOne({_id : blogId}, {
                title,
                content,
                photopath: `${BACKEND_SERVER_PATH}/storage/${imagePath}`

            });



        }else{
            await Blog.updateOne({_id:blogId},{title,content});
        }

      return  res.status(200).json({ message: "Blog updated successfully" });





    },
    delete(req, res, next) {
    },


};

module.exports = blogController;