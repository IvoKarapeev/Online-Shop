const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddlewares');
const productService = require('../services/productService');

router.get('/', async (req,res) => {

    const products = await productService.getAllProducts().lean();

    res.json(products);

});

router.post('/',isAuth,async (req,res) => {

    const {name,description,price,imageUrl,category} = req.body;
    const creator = req.user;

    try {

        const newProduct =  await productService.createProduct(name,description,price,imageUrl,category,creator);

        res.json(newProduct);
    
    } catch (error) {
        res.status(400).json({error});
    }

});

router.put('/:productId',isAuth,async (req,res) => {

    const userId = req.user._id;
    const {name,description,price,imageUrl,category} = req.body;

    const productData = {
        name,
        description,
        price,
        imageUrl,
        category
    };

    try {
        
        const updatedProduct = await productService.edit(req.params.productId,productData,userId);

        res.send(updatedProduct)

    } catch (error) {
        res.status(404).send(error.error);
    }

});

router.delete('/:productId',isAuth,async (req,res) => {

    const userId = req.user._id;
    
    try {
        
        await productService.delete(req.params.productId,userId);

        res.send('Product deleted!');

    } catch (error) {
        res.status(400).send(error.error);
    }

});

router.get('/purchase/:productId',isAuth,async (req,res) => {

    const userId = req.user._id;
    
    try {
        
        const purchesedProduct = await productService.purchaseProduct(req.params.productId,userId);

        res.json(purchesedProduct);

    } catch (error) {
        res.status(400).send(error.error);
    }

});


module.exports = router;