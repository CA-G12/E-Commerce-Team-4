const { getUserInfo } = require('./users');

const {
  deleteProductFromCartQuery,
  getCartProductsForUserQuery,
  postToCartQuery,
} = require('./cart');

const { getAllProductsQuery, getOneProduct } = require('./products');

const { addUserQuery, getPassword, checkEmail } = require('./auth');

module.exports = {
  getUserInfo,
  deleteProductFromCartQuery,
  postToCartQuery,
  getCartProductsForUserQuery,
  getAllProductsQuery,
  getOneProduct,
  addUserQuery,
  getPassword,
  getAllProductsQuery,
  checkEmail,
};
