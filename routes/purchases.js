const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const Purchase = require('../models/purchase');

router.get('/', auth, async (req, res) => {
    try {
        const purchases = await Purchase.find({ boughtBy: req.user.id });
        return res.json(purchases);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;