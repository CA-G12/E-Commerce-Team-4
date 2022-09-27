const Joi = require('joi');

const signUpValidationSchema = Joi.object({
  name: Joi.string().required(),
  username: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email().pattern(/^[a-zA-z0-9]?.*@[a-zA-z0-9]{1,}.[a-zA-Z]{1,}$/).required(),
  password: Joi.string().pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/).required(),
  confirmPassword: Joi.ref('password'),
  country: Joi.string().required(),
  address: Joi.string().required(),
  imgUrl: Joi
    .string()
    .empty('')
    .default(
      'https://i0.wp.com/researchictafrica.net/wp/wp-content/uploads/2016/10/default-profile-pic.jpg'
    ),
});

module.exports = signUpValidationSchema;
