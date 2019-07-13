import Joi from 'joi';

export const signupValidation = Joi.object({
  first_name: Joi.string().alphanum().min(3).max(30)
    .required(),
  last_name: Joi.string().alphanum().min(3).required(),
  email: Joi.string().email({
    minDomainAtoms: 2,
  }).min(3).required(),
  address: Joi.string().alphanum().min(3).required(),
  password: Joi.string().min(3).required(),
});

// Sign in validation
export const signinValidation = Joi.object({
  email: Joi.string().email({
    minDomainAtoms: 2,
  }).min(3).required(),
  password: Joi.string().min(3).required(),
});
