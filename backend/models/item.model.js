const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
    userId: String,
    itemId: String,
    item: String,
    amount: Number,
    expirationDate: Date,
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const item = mongoose.model('item', ItemSchema);

module.exports = item;