const { getUserInfo } = require('./users');
const {
  deleteProductFromCartQuery,
  getCartProductsForUserQuery,
  postToCartQuery,
} = require('./cart');
const {
  getAllProducts,
  getOneProduct,
} = require('./products');
const {
  getAccount,
  getPassword,
} = require('./auth');

module.exports = {
  getUserInfo,
  deleteProductFromCartQuery,
  postToCartQuery,
  getCartProductsForUserQuery,
  getAllProducts,
  getOneProduct,
  getAccount,
  getPassword,
};
