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

api.post('/create', async (req, res) => {
    let newUserObj = {
        id: uuidv4(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        fullName: `${req.body.firstName} ${req.body.lastName}`,
        email: req.body.email,
        password: req.body.password,
    }
    
    if (!newUserObj.email || newUserObj.email === undefined || newUserObj.email.length < 5 || newUserObj.firstName.length < 2) {
        res.status(409).json({ message: `Missing credentials` });
    } else {
        bcrypt.hash(newUserObj.password, saltRounds, async function(err, hashedPwd) {
            if (err) { res.status(409).json({ message: err }); }
            
            newUserObj.password = hashedPwd;

            const newUser = new user(newUserObj);

            try {
                await newUser.save();

                res.status(201).json({ message: `User has been created successfully` });
            } catch (error) {
                res.status(406).json({ message: error });
            }
        });
    }
});

// ----------------------------------------

module.exports = api;