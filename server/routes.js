const router = require('express').Router();
const productController = require('./controllers/productController');
const userController = require('./controllers/userController');

router.use('/product',productController);
router.use('/user',userController);

module.exports = router;
