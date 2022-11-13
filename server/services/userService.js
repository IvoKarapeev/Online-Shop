const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const { SALT_ROUNDS,SECRET } = require('../config/env');

exports.register = async (name,username,password) => {

    if (password.length < 6) {
        throw{
            error:'The password should be at least six characters long!'
        }
    };

    password = await bcrypt.hash(password,SALT_ROUNDS);

    const userData = {
        name,
        username,
        password
    };

    const user = await User.create(userData);

    return user;
};

exports.login = async (username,password) => {

    const user = await User.findOne({username});

    if (!user) {
        throw {
            error:'There is not a user with this username!'
        };
    };

    const isAuthenticated = await bcrypt.compare(password,user.password);

    if (!isAuthenticated) {
        throw{
            error: 'Wrong username or password'
        };
    };

    return user;
    
};


exports.createToken = async (user) => {

    const payload = { _id:user._id, username:user.username };
    const options = { expiresIn:'2d' };

    return new Promise((resolve,reject) => {
        jwt.sign( payload, SECRET, options,(err,token) => {

            if (err) {
                return reject(err);
            };

            resolve(token);

        })
    })
    
};