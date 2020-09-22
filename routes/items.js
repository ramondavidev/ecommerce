const express = require('express');
const router = express.Router();

const Item = require('../models/item');

router.get('/', async(req, res) => {
    try {
        const items = await Item.find();
        return res.json(items);
    } catch (error) {
        console.log(error);
    }
});

router.get('/:id', async(req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        return res.json(item);
    } catch (error) {
        console.log(error);
    }
});

router.post('/category', async(req, res) => {
    try {
        const { category } = req.body;
        console.log(category);
        const items = await Item.find({ category: category });
        return res.json(items);
    } catch (error) {
        console.log(error);
    }
});

router.post('/', async (req, res) => {
    try {
        const { name, price, quantity, image, description, option, category } = req.body;
        const item = new Item({
            name,
            price,
            quantity,
            image,
            description,
            option,
            category
        });

    await item.save();

    return res.json(item);
    } catch (error) {
        console.log(error);
    }
});

router.put('/:id', async(req, res) => {
    try {
        const { name, price, quantity, image, description, option, category } = req.body;
        const itemUpdated = {
            name,
            price,
            quantity,
            image,
            description,
            option,
            category
        }
        const itemReturned = await Item.findByIdAndUpdate(req.params.id, itemUpdated, {new: true});
        res.json(itemReturned);
    } catch (error) {
        console.error(error);
    }
});

router.delete('/:id', async(req, res) => {
    try {
        await Item.findByIdAndDelete(req.params.id);

        res.json({ msg: 'Postagem removida com sucesso' });
    } catch (error) {
        console.error(error);
    }
});

module.exports = router;