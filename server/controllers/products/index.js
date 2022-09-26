const { getProducts,   getProductsByPriceDesc, getProductsByPriceAsc, getProductsByCategory, showMoreProducts } = require('./getProducts');
const { getOneProduct } = require('./getOneProduct');
const { deleteProduct } = require('./deleteProduct');

module.exports = {
  getOneProduct,
  getProducts,
  deleteProduct,
  getProductsByPriceDesc,
  getProductsByPriceAsc,
  getProductsByCategory,
  showMoreProducts,
};
