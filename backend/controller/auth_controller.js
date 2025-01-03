const { model } = require("mongoose")
const Joi = require("joi");


const passwordPattern = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/);
const authController = {
    async register(req, res, next) {

        const userRegisterSchema = {
            username: Joi.string().min(3).max(30).required(),
            name: Joi.string().max(30).required(),
            email: Joi.string().email().required(),
            password: Joi.string().pattern(passwordPattern).required(),
            confirmPassword: Joi.ref("password")
        }

        const { error } = userRegisterSchema.validate(req.boday);

        if (error) {

        }

    },
    async login(req, res, next) {
        const userLoginSchema = {
          
            email: Joi.string().email().required(),
            password: Joi.string().pattern(passwordPattern).required(),
    
        }

        const { error } = userLoginSchema.validate(req.boday);

        if (error) {

        }

     }
}

model.exports = authController;