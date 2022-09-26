const connection = require('../../config/connection');

const signUpQuery = ({ name, username, email, password, country, address }) => connection.query('INSERT INTO users (name, username, email, password, country, address) VALUES ($1, $2, $3, $4, $5, $6)');

module.exports = signUpQuery;