import Joi from "joi";

export const createUserSchema = Joi.object({
    email: Joi.string()
            .required()
            .email({
                minDomainSegments: 2
            })
            .messages({
                'any.required': ' Must be a valid email address',
            }),
    password: Joi.string()
                .required()
                .min(6)
                .max(35)
                .alphanum()
                .messages({
                    'any.required': ' Password must be at least 6 alphanumeric characters',
                }),
                // .regex() //EXPRESIONES REGULARES, CARACTERES ESPECIALES
    name: Joi.string()
            .min(2)
            .messages({
                'any.required': ' The name must be at least 2 characters',
            }),
    lastname: Joi.string()
                .min(2)
                .messages({
                    'any.required': ' The lastname must be at least 2 characters',
                }),
    photo: Joi.string()
            .required()
            .uri()
            .messages({
                'any.required': ' The photo must be a web address',
            })
})