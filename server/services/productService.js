const Product = require('../models/Product');
const User = require('../models/User');

exports.getAllProducts = () => Product.find();
