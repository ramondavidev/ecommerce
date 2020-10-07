const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

//const Item = require('../models/item');
const User = require('../models/user');

router.post('/', auth, async(req, res) => {
    try {
        let user = await User.findById(req.user.id).select('-password');
        const { id } = req.body;
        const exist = user.favorites.find(fav => fav._id == id);
        if(exist) res.status(500).send('Server Error');
        else {
            user.favorites.push(id);
            user.save();
            res.json(user);
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;