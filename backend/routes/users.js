// ----------------------------------------
// All routs /users/
// ----------------------------------------

// npm packages
const express = require('express');
const api = express.Router();
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const saltRounds = 10;

// Schemas
const userSchema = require('../models/user.model');

// ----------------------------------------
// GET requests
// ----------------------------------------

// route will be: /all
api.get('/all', async (req, res) => {
    try {
        const allUsers = await userSchema.find();
        res.status(200).json(allUsers);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

api.get('/:userId', async (req, res) => {
    try {
        const userId = req.params;
        const user = await userSchema.find({ userId: userId });
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

// ----------------------------------------
// POST requests
// ----------------------------------------

// route will be: /users/add

api.post('/create', async (req, res) => {
    let newUserObj = {
        userId: uuidv4(),
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

            // const newUser = new userSchema(newUserObj);

            try {
                await new userSchema(newUserObj).save();

                res.status(201).json({ message: `User has been created successfully` });
            } catch (error) {
                res.status(406).json({ message: error });
            }
        });
    }
});

// ----------------------------------------
// Export
// ----------------------------------------

// Export we can be used outside this file
module.exports = api;