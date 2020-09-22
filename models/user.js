const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        require: true
    },
    address: {
        state: { 
            type: String, 
            require: true
        },
        city: { 
            type: String, 
            require: true
        },
        street: {
            type: String, 
            require: true
        },
        number: {
            type: String, 
            require: true
        },
    },
    favorites: [
        {
            item: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'item'
            }
        }
    ]
});

module.exports = mongoose.model('user', UserSchema);