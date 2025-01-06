const { model } = require("mongoose");
const Joi = require("joi");
const User = require("../models/user");
const bcrypt = require("bcryptjs");

const passwordPattern = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/);
const authController = {
    async register(req, res, next) {
        const userRegisterSchema = Joi.object({
            username: Joi.string().min(3).max(30).required(),
            name: Joi.string().max(30).required(),
            email: Joi.string().email().required(),
            password: Joi.string().pattern(passwordPattern).required(),
            confirmPassword: Joi.ref("password")
        });

        const { error } = userRegisterSchema.validate(req.body);

        if (error) {
            return next(error);
        }

        const { username, name, email, password } = req.body;
        try {
            const emailInUse = await User.exists({ email });
            const usernameInUse = await User.exists({ username });
            if (emailInUse) {
                const error = {
                    status: 409,
                    message: 'Email already exists'
                };
                return next(error);
            }

            if (usernameInUse) {
                const error = {
                    status: 409,
                    message: 'Username already exists'
                };
                return next(error);
            }

        } catch (error) {

            return next(error);
        }


        const passwordHash = await bcrypt.hash(password, 10);

        const userToStore = User({
            username,
            name,
            email,
            password: passwordHash
        });

        const user = await userToStore.save();

        return res.status(201).json({ user });

    },
    async login(req, res, next) {
        const userLoginSchema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().pattern(passwordPattern).required(),
        });

        const { error } = userLoginSchema.validate(req.body);

        if (error) {
            return next(error);
        }

        // ...existing code...
    }
};

module.exports = authController;