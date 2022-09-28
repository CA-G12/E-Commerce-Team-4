const { login, logout, signUp, checkLogin } = require('./auth');
const { getCartProducts, postToCart, deleteFromCart } = require('./cart');
const {
  deleteProduct,
  getProducts,
  getProductsByPriceDesc,
  getProductsByPriceAsc,
  getProductsByCategory,
  showMoreProducts,
  productDetails,
} = require('./products');

module.exports = {
  login,
  logout,
  signUp,
  checkLogin,
  getCartProducts,
  deleteFromCart,
  postToCart,
  getProducts,
  deleteProduct,
  getProductsByPriceDesc,
  getProductsByPriceAsc,
  getProductsByCategory,
  showMoreProducts,
  productDetails,
};
