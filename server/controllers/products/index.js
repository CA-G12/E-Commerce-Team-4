const {
  getProducts,
  getProductsByPriceDesc,
  getProductsByPriceAsc,
  getProductsByCategory,
  showMoreProducts,
} = require('./getProducts');
const { deleteProduct } = require('./deleteProduct');
const  productDetails = require('./productDetails')

module.exports = {
  getProducts,
  deleteProduct,
  getProductsByPriceDesc,
  getProductsByPriceAsc,
  getProductsByCategory,
  showMoreProducts,
  productDetails,
};
