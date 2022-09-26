const joi = require('joi');

const signUpValidationSchema = joi.object({
  name: joi.string().required(),
  userName: joi.string().alphanum().min(3).max(30)
  .required(),
  email: joi.string().email().required().pattern(/^(?=.[0-9])(?=.[!@#$%^&])[a-zA-Z0-9!@#$%^&]{7,}$/),
  password: joi.string().alphanum().min(7).max(30).pattern(/^[a-zA-z0-9]?.*@[a-zA-z0-9]{1,}.[a-zA-Z]{1,}$/),
  confirmPassword: joi.ref('password'),
  country: joi.string().required(),
  address: joi.string().required(),
  imgUrl: joi.string().empty('').default('https://i0.wp.com/researchictafrica.net/wp/wp-content/uploads/2016/10/default-profile-pic.jpg'),
});

module.exports = signUpValidationSchema;
