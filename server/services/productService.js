const Product = require('../models/Product');
const User = require('../models/User');

exports.getAllProducts = () => Product.find();

exports.createProduct = async (name,description,imageUrl,category) => {

    if (!imageUrl.startsWith('http')) {
        throw{
            error:'Image Url shoud start with http/https'
        }
    };

    const product = await Product.create({name,description,imageUrl,category});

    return product;

}
