const express = require('express');
const router = express.Router();

const Item = require('../models/item');

//get all items
router.get('/', async(req, res) => {
    try {
        const items = await Item.find();
        return res.json(items);
    } catch (error) {
        console.log(error);
    }
});

//get random items
router.get('/random', async(req, res) => {
    try {
        const count = await Item.count();
        var rand = Math.floor(Math.random() * count) + 1;
        const items = await Item.findOne().skip(rand);
        //const items = await Item.find().skip(rand).limit(3);
        return res.json(items);
    } catch (error) {
        console.log(error);
    }
});

// Display item home page
router.get('/display', async(req, res) => {
    try {
        const men = await Item.find({ productFor: 'homem' }).limit(3);
        const women = await Item.find({ productFor: 'mulher' }).limit(3);
        const children = await Item.find({ productFor: 'crianca' }).limit(3);
        //const items = [...men, ...women, ...children];
        const items = {
            men,
            women,
            children
        }
        //console.log(items);
        return res.json(items);
    } catch (error) {
        console.log(error);
    }
});

//Find item by name
router.get('/search/:itemName', async(req, res) => {
    try {
        const name = req.params.itemName;
        const items = await Item.find({ name: { "$regex": name, "$options": "i" } });
        return res.json(items);
    } catch (error) {
        console.log(error);
    }
});

//Find item by category
router.post('/category', async(req, res) => {
    try {
        const { category } = req.body;
        console.log(category);
        const items = await Item.find({ category });
        return res.json(items);
    } catch (error) {
        console.log(error);
    }
});

//Find item by group
router.post('/group', async(req, res) => {
    try {
        const { productFor } = req.body;
        const items = await Item.find({ productFor });
        return res.json(items);
    } catch (error) {
        console.log(error);
    }
});

//Find item by group and category
router.post('/category-group', async(req, res) => {
    try {
        const { productFor, category } = req.body;
        console.log(category);
        const items = await Item.find({ productFor, category });    
        return res.json(items);
    } catch (error) {
        console.log(error);
    }
});


//add new item
router.post('/', async (req, res) => {
    try {
        const { name, price, quantity, image, description, option, category, productFor } = req.body;
        const item = new Item({
            name,
            price,
            quantity,
            image,
            description,
            option,
            category,
            productFor
        });

    await item.save();

    return res.json(item);
    } catch (error) {
        console.log(error);
    }
});


//Edit item by ID
router.put('/:id', async(req, res) => {
    try {
        const { name, price, quantity, image, description, option, category, productFor } = req.body;
        const itemUpdated = {
            name,
            price,
            quantity,
            image,
            description,
            option,
            category,
            productFor
        }
        const itemReturned = await Item.findByIdAndUpdate(req.params.id, itemUpdated, {new: true});
        res.json(itemReturned);
    } catch (error) {
        console.error(error);
    }
});


//Delete item by Id
router.delete('/:id', async(req, res) => {
    try {
        await Item.findByIdAndDelete(req.params.id);

        res.json({ msg: 'Postagem removida com sucesso' });
    } catch (error) {
        console.error(error);
    }
});

//Get item by ID
router.get('/:id', async(req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        return res.json(item);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;