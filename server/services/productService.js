const Product = require('../models/Product');
const User = require('../models/User');

exports.getAllProducts = () => Product.find();

exports.createProduct = async (name,description,imageUrl,category,creator) => {

    if (!imageUrl.startsWith('http')) {
        throw{
            error:'Image Url shoud start with http/https'
        }
    };

    const product = await Product.create({name,description,imageUrl,category,creator});

    return product;

};

exports.getOne = (productId) => Product.findById(productId);

exports.edit = async (productId,productData,userId) => {

    const product = await Product.findById(productId).populate('creator');
    const creator = product.creator;

    if (userId != creator._id) {
        throw{
            error: 'You must be the owner to edit!'
        };
    };

    
    if (!productData.imageUrl.startsWith('http')) {
        throw{
            error:'Image Url shoud start with http/https'
        }
    };

    const editedProduct = await Product.findByIdAndUpdate(productId,productData);
    
    return editedProduct;

};

exports.delete = async (productId,userId) => {

    const product = await Product.findById(productId).populate('creator');
    const creator = product.creator;

    if (userId != creator._id) {
        throw{
            error: 'You must be the owner to delete!'
        };
    };

    await Product.findByIdAndDelete(productId);
}


