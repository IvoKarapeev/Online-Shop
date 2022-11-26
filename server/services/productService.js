const Product = require('../models/Product');
const User = require('../models/User');

exports.getAllProducts = () => Product.find();

exports.createProduct = async (name,description,price,imageUrl,category,creator) => {

    if (!imageUrl.startsWith('http')) {
        throw{
            error:'Image Url shoud start with http/https'
        }
    };

    const product = await Product.create({name,description,price,imageUrl,category,creator});

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
};


exports.purchaseProduct = async (productId,userId) => {

    const user = await User.findById(userId); 
    const product = await Product.findById(productId).populate('creator');
    
    const creator = product.creator;
    

    if (userId == creator._id) {
        throw{
            error: 'You cant purchase this item if you are the creator!'
        };
    };

    if (user.wallet < product.price) {
        throw{
            error: 'You dont have enough money to purchise this item!'
        };
    }

    user.wallet -= product.price;
    user.purchasedProducts.push(product);
    user.save();

    product.customers.push(user);
    product.save();

    return product;
    
}


