import Joi from "joi";

export const LoginValidation = {
  body: Joi.object({
    // phone_number: Joi.number().required(),
    //fcm_token: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
  }),
};


export const SignupValidation = {
  body: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    password: Joi.string().required(),
    
  }),
};
