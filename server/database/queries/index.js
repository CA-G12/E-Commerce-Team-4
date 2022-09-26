const { getUserInfo, signUpQuery } = require('./users');

const {
  deleteProductFromCart,
  getCArtProductsForUser,
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
  getCArtProductsForUser,
  getAllProducts,
  getOneProduct,
  getAccount,
  getPassword,
  signUpQuery,
};
