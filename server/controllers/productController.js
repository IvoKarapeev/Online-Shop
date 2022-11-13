const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddlewares');
const ProductsService = require('../services/productService');

router.get('/', async (req,res) => {

    const products = await ProductsService.getAllProducts().lean();

    res.json(products);

});

module.exports = router;