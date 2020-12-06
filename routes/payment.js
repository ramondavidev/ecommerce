const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const Purchase = require('../models/purchase');

router.post('/', auth, async (req, res) => {
    //get cart
    const { cart } = req.body;

    //creating a array with the items from the cart
    let itemArray = [];
    for(let i = 0; i < cart.length; i++){
        const { name, price, quantityBuy, image, description, category, option} = cart[i];

        const total = price * quantityBuy;

        const item = {
            name,
            price,
            total,
            quantity: quantityBuy,
            image,
            description,
            category,
            options: option
        }
        itemArray.push(item);
    }

    //body to create a payment
    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'brl'
    };

    stripe.charges.create(body, async (stripeErr, stripeRes) => {
        if(stripeErr) {
            console.log(stripeErr);
            res.status(500).send({ error: stripeErr });
        } else { 
            try {

            // create user's purchase
            const purchase = new Purchase({
                boughtBy: req.user.id,
                items: itemArray,
                totalPrice: req.body.amount
            });
            await purchase.save();

            //remove quantity from 

            res.status(200).send({ success: stripeRes });
            } catch (error) {
                console.log(error);
                res.status(500).send({ error: stripeErr });
            }
        }
    });
});

module.exports = router;