const Joi = require('joi');
const Comment = require('../models/comment.js');
const blog = require('../models/blog');
const CommentDTO = require('../dto/comment');

const mongodbIdPattren = /^[0-9a-fA-F]{24}$/;

const commentController = {

    async create(req, res, next) {

        const createCommentSchema = Joi.object({
            content: Joi.string().required(),
            blog: Joi.string().regex(mongodbIdPattren).required(),
            author: Joi.string().regex(mongodbIdPattren).required(),

        });

        const { error } = createCommentSchema.validate(req.body);

        if (error) {
            return next(error);

        }


        const { content, blog, author } = req.body;
        try {

            const newComment = new Comment({ content, blog, author });

            await newComment.save();

        } catch (error) {
            return next(error);
        }


        return res.status(201).json({ message: "Comment created successfully" });
    },

    async getById(req, res, next) {


        const getByIdSchema = Joi.object({
            id: Joi.string().regex(mongodbIdPattren).required()
        })

        const { error } = getByIdSchema.validate(req.params);

        if (error) {
            return next(error);
        }


        const { id } = req.params;
        let comments;
        try {

            comments = await Comment.find({ blog: id }).populate(["author"]);

        } catch (error) {
            return next(error);


        }

        let commentDtos = []
        for (let i = 0; i < comments.length; i++) {
            const obj = new CommentDTO(comments[i]);
            commentDtos.push(obj);
        }

        return res.status(201).json({ data: commentDtos });

    }
}

module.exports = commentController;