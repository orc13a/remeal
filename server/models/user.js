const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const userSchema = mongoose.model('UserSchema', UserSchema);

module.exports = userSchema;