// ----------------------------------------
// All routs /users/
// ----------------------------------------

// npm packages
const express = require('express');
const api = express.Router();
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const saltRounds = 10;
var jwt = require('jsonwebtoken');

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
        console.log(err);
        res.status(404).json({ message: error.message, type: 'error' });
    }
});

api.get('/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await userSchema.findOne({ userId: userId });
        
        if (user === null) {
            res.status(404).json({ message: 'No user was found', type: 'error' });
        } else {
            res.status(200).json({ user });
        }
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message, type: 'error' });
    }
});

// ----------------------------------------
// POST requests
// ----------------------------------------

// route will be: /users/create
api.post('/create', async (req, res) => {
    const email = req.body.email;
    const findUser = await userSchema.findOne({ email: email });

    if (findUser !== null) {
        res.status(406).json({ message: 'Email already used', type: 'error' });
    } else {
        let newUserObj = {
            userId: uuidv4(),
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            fullName: `${req.body.firstName} ${req.body.lastName}`,
            email: req.body.email,
            password: req.body.password,
        }
        
        if (!newUserObj.email || newUserObj.email === undefined || newUserObj.email.length < 5 || newUserObj.firstName.length < 2) {
            res.status(409).json({ message: `Missing credentials`, type: 'error' });
        } else {
            bcrypt.hash(newUserObj.password, saltRounds, async function(err, hashedPwd) {
                if (err) { res.status(409).json({ message: err, type: 'error' }); }
                
                newUserObj.password = hashedPwd;

                // const newUser = new userSchema(newUserObj);

                try {
                    await new userSchema(newUserObj).save();

                    res.status(201).json({ message: `User has been created successfully`, type: 'success' });
                } catch (error) {
                    console.log(error);
                    res.status(406).json({ message: error.message, type: 'error' });
                }
            });
        }
    }
});

api.post('/login', async (req, res) => {
    const email = req.body.email;
    const pwd = req.body.password;
    const user = await userSchema.findOne({ email: email });

    if (user === null) {
        res.status(404).json({ message: 'Email or password is incorrect', type: 'error' })
    } else {
        bcrypt.compare(pwd, user.password, function(err, result) {
            if (err) {
                res.status(409).json({ message: 'Something happend...', type: 'error' });
            } else if (result === false) {
                res.status(406).json({ message: 'Email or password is incorrect', type: 'error' });
            } else {
                res.cookie('user', user);
                res.end();
                jwt.sign({ userId: user.userId }, 'secret', { algorithm: 'RS256' }, function(err, token) {
                    if (err) {
                        console.log(err);
                        res.status(409).json({ message: 'Something happend...', type: 'error' });
                    }   
                    res.status(200).json({ loggedIn: user, token });
                });
            }
        });
    }
});

// ----------------------------------------
// Export
// ----------------------------------------

// Export we can be used outside this file
module.exports = api;