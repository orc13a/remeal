const express = require('express');
const api = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;
const { v4: uuidv4 } = require('uuid');

// Models
const user = require('../models/user');

// ----------------------------------------
// GET requests
// ----------------------------------------

api.get('/all', async (req, res) => {
    try {
        const allUsers = await user.find();
        res.status(200).json(allUsers);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

// ----------------------------------------
// POST requests
// ----------------------------------------

api.post('create', async (req, res) => {
    let newUserObj = {
        id: uuidv4(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        fullName: `${req.body.firstName} ${req.body.lastName}`,
        email: req.body.email,
        password: req.body.password,
    }
    
    const newUser = new user(newUserObj);

    try {
        await newUser.save();

        res.status(201).json({ message: `The user has been created successfully` });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
});

// ----------------------------------------

module.exports = api;