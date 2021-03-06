const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    userId: String,
    firstName: String,
    lastName: String,
    fullName: String,
    email: String,
    password: String,
    familyFridgeId: String,
    admin: Boolean,
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const user = mongoose.model('user', UserSchema);

module.exports = user;