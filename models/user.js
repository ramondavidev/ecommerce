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
    favorites: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'item'
        }
    ]
});

module.exports = mongoose.model('user', UserSchema);