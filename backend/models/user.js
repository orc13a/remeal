const express = require('express');
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    id: String,
    firstName: String,
    lastName: String,
    fullName: String,
    email: String,
    password: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const user = mongoose.model('user', userSchema);

module.exports = user;