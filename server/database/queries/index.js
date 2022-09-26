const { getUserInfo, signUpQuery } = require('./users');

const {
  deleteProductFromCart,
  getCartProductsForUser,
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
  deleteProductFromCart,
  getCartProductsForUser,
  getAllProducts,
  getOneProduct,
  getAccount,
  getPassword,
  signUpQuery,
};
