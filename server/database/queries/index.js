const { getUserInfo } = require('./users');

const {
  deleteProductFromCartQuery,
  getCartProductsForUserQuery,
  postToCartQuery,
} = require('./cart');

const { getAllProductsQuery, productDetailsQuery } = require('./products');

const { addUserQuery, getPassword, checkEmail } = require('./auth');

module.exports = {
  getUserInfo,
  deleteProductFromCartQuery,
  postToCartQuery,
  getCartProductsForUserQuery,
  getAllProductsQuery,
  productDetailsQuery,
  addUserQuery,
  getPassword,
  getAllProductsQuery,
  checkEmail,
};
