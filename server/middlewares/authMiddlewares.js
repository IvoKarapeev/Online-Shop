const { SECRET } = require('../config/env');
const jwt = require('jsonwebtoken');

exports.auth = async ( req,res,next ) => {

    const token = req.headers['x-authorization'];
    
    if (token) {
        jwt.verify( token, SECRET, (err,decodedToken) => {

            if (err) {
                console.log(err);
            };

            req.user = decodedToken;
            res.locals.user = decodedToken;

            next();
        });
    }else{

        next();
    }
};

exports.isAuth = ( req,res,next ) => {
    if (!req.user) {
        return res.json('You need to login first!')
    }

    next();
};

exports.isGuest = ( req,res,next ) => {
    if (req.user) {
        return res.json('You need to logout first!')

    }

    next();
};
