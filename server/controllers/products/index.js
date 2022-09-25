const { getProducts } = require('./getProducts');
const { getOneProduct } = require('./getOneProduct');
const { deleteProduct } = require('./deleteProduct');

module.exports = {
  getOneProduct,
  getProducts,
  deleteProduct,
};
