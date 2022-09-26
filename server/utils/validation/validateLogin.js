const joi = require('joi');
const schemaLogin = joi.object({
    password: joi.string()
        .pattern(/^[a-zA-Z0-9]{3,30}$/),
    email: joi.string()
        .email().pattern(/^[a-zA-z0-9]?.*@[a-zA-z0-9]{1,}.[a-zA-Z]{1,}$/)
})

module.exports = schemaLogin