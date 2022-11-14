const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddlewares');
const ProductsService = require('../services/productService');

router.get('/', async (req,res) => {

    const products = await ProductsService.getAllProducts().lean();

    res.json(products);

});

router.post('/',isAuth,async (req,res) => {

    const {name,description,imageUrl,category} = req.body;

    try {

        const newProduct =  await ProductsService.createProduct(name,description,imageUrl,category);

        res.json(newProduct)
    
    } catch (error) {
        res.status(400).json({error});
    }

});

module.exports = router;