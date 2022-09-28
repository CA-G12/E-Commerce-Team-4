const connection = require('../../config/connection');

const productDetailsQuery = (id) => connection.query('SELECT * FROM products WHERE id = $1', [id]);

module.exports = productDetailsQuery;