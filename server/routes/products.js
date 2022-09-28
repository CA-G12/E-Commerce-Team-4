const router = require('express').Router();
const {
  getProducts,
  getProductsByPriceDesc,
  getProductsByPriceAsc,
  getProductsByCategory,
  showMoreProducts,
  productDetails,
} = require('../controllers');

router.get('/products', getProducts);
router.get('/productsByPriceDesc', getProductsByPriceDesc);
router.get('/productsByPriceAsc', getProductsByPriceAsc);
router.get('/products/:category', getProductsByCategory);
router.get('/showMore/?:number', showMoreProducts);
router.get('/product/:id', productDetails);

module.exports = router;
