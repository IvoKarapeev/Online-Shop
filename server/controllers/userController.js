const router = require('express').Router();
const { isGuest, isAuth } = require('../middlewares/authMiddlewares');
const userService = require('../services/userService');

router.post('/register',isGuest, async (req,res) => {

    const {name, username, password, wallet} = req.body;

    try {
        
        const user = await userService.register(name,username,password, wallet);
        const token = await userService.createToken(user);

        return res.json({
            'AccessToken':token,
            _id:user._id,
            username:user.username,
            wallet:user.wallet
        })

    } catch (error) {

        res.status(404).json({error});

    }

});

router.post('/login',isGuest, async (req,res) => {

    const {username, password} = req.body;

    try {
        
        const user = await userService.login(username,password);
        const token = await userService.createToken(user);

        return res.json({
            'AccessToken':token,
            _id:user._id,
            username:user.username,
            wallet:user.wallet
        })

    } catch (error) {

        res.status(404).json({error});

    }

});

module.exports = router;