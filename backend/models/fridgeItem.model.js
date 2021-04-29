const mongoose = require('mongoose');

const FridgeItem = mongoose.Schema({
    itemId: String,
    item: String,
    amount: Number,
    expiryDate: Date,
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const item = mongoose.model('item', FridgeItem);

module.exports = item;