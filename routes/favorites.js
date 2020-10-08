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
            return res.json(user);
        }
    } catch (error) {
        console.error(error.message);
        return res.status(500).send('Server Error');
    }
});

router.get('/', auth, async(req, res) => {
    try {
        let user = await User.findById(req.user.id).select('favorites').populate('favorites');
        return res.json(user);
    } catch (error) {
        console.error(error.message);
        return res.status(500).send('Server Error');
    }
});

module.exports = router;