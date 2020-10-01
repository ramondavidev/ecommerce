const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    quantityBuy: {
        type: Number,
        default: 0
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    option: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    productFor: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('item', ItemSchema);