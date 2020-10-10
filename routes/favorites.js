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
        //if the user already has as favorite, remove.
        if(exist) {
            for(var i = 0; i < user.favorites.length; i ++) {
                if(user.favorites[i] == id) {
                    user.favorites.splice(i, 1);
                }
            }
            await user.save();
            return res.json(user);
        }
        //if the user doesnt have as favorite, add.
        else {
            user.favorites.push(id);
            await user.save();
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