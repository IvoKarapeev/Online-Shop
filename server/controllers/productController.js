const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddlewares');
const productService = require('../services/productService');

router.get('/', async (req,res) => {

    const products = await productService.getAllProducts().lean();

    res.json(products);

});

router.post('/',isAuth,async (req,res) => {

    const {name,description,imageUrl,category} = req.body;
    const creator = req.user;

    try {

        const newProduct =  await productService.createProduct(name,description,imageUrl,category,creator);

        res.json(newProduct);
    
    } catch (error) {
        res.status(400).json({error});
    }

});

router.get('/:productId',async (req,res) => {

    try {
        const product = await productService.getOne(req.params.productId);
        
        res.json(product);
    } catch (error) {
        res.status(404).send(error.error);
    }

});

router.post('/:productId',isAuth,async (req,res) => {

    const userId = req.user._id;
    const {name,description,imageUrl,category} = req.body;

    const productData = {
        name,
        description,
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
        res.status(404).send(error.error);
    }

})

module.exports = router;