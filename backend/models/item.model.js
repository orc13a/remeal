const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
    item: String,
    amount: String,
    expirationDate: Date,
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const item = mongoose.model('item', ItemSchema);

module.exports = item;