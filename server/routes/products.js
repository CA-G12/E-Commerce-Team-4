const router = require('express').Router();
const { getProducts, getProductsByPriceDesc, getProductsByPriceAsc, getProductsByCategory, showMoreProducts } = require('../controllers/index');

router.get('/products', getProducts);
router.get('/productsByPriceDesc', getProductsByPriceDesc);
router.get('/productsByPriceAsc', getProductsByPriceAsc);
router.get('/products/:category', getProductsByCategory);
router.get('/showMore', showMoreProducts);

module.exports = router;
