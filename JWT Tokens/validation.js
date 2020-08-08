//VALIDATION
const Joi = require('@hapi/joi');

//REGISTER VALIDATION
const registerValidation = validationData => {
    const schema = Joi.object({
        name    : Joi.string()
                .min(3)
                .required(),
        email   : Joi.string()
                .min(7)
                .required()
                .email(),
        password : Joi.string()
                .min(6)
                .required()
    });
    return schema.validate(validationData);
}


//LOGIN VALIDATION
const loginValidation = validationData => {
    const schema = Joi.object({
        email   : Joi.string()
                .min(7)
                .required()
                .email(),
        password : Joi.string()
                .min(6)
                .required()
    });
    return schema.validate(validationData);
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
