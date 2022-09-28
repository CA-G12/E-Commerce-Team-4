const Joi = require('joi');

const schemaLogin = Joi.object({
  password: Joi.string().pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/),
  email: Joi.string().email().pattern(/^[a-zA-z0-9]?.*@[a-zA-z0-9]{1,}.[a-zA-Z]{1,}$/),
});

module.exports = schemaLogin;
