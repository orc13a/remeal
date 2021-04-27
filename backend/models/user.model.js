const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    fullName: String,
    email: String,
    password: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const user = mongoose.model('user', UserSchema);

module.exports = user;