require('dotenv').config();
const joi = require('joi');

const signUpValidationSchema = joi.object({
  name: joi.string().required(),
  username: joi.string().alphanum().min(3).max(30)
  .required(),
  email: joi.string().email().required().pattern(/^[a-zA-z0-9]?.*@[a-zA-z0-9]{1,}.[a-zA-Z]{1,}$/),
  password: joi.string().alphanum().min(7).max(30),
  confirmPassword: joi.ref('password'),
  country: joi.string().required(),
  address: joi.string().required(),
  imgUrl: joi.string().empty('').default('https://i0.wp.com/researchictafrica.net/wp/wp-content/uploads/2016/10/default-profile-pic.jpg'),
});

module.exports = signUpValidationSchema;
