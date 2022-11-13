const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
        minlength:[3,'The Product name shoud be at least 3 characters long']
    },
    description:{
        type: String,
        required:true,
        minlength:[10,'The Description should be at least 10 characters long.']
    },
    imageUrl:{
        type: String,
        required:true,
    },
    category:{
        type: String,
        required:true,
        enum:['Clothes','Shoes','Accessories']
    },
    customers:[{
        type:mongoose.Types.ObjectId,
        ref:'User'
    }]
});

const Product = mongoose.model('Product',productSchema);

module.exports = Product;