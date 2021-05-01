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



// ----------------------------------------
// POST requests
// ----------------------------------------

api.post('/signup', async (req, res) => {
    const email = req.body.email;
    const findUser = await userSchema.findOne({ email: email });

    if (findUser !== null) {
        res.status(200).json({ message: 'E-mail allerede i brug', type: 'error' });
    } else {
        let newUserObj = {
            userId: uuidv4(),
            balance: req.body.balance,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            fullName: `${req.body.firstName} ${req.body.lastName}`,
            email: req.body.email,
            password: req.body.password,
        }
        
        if (!newUserObj.email || newUserObj.email === undefined || newUserObj.email.length < 5 || newUserObj.firstName.length < 2) {
            res.status(200).json({ message: 'Mangler at opfylde krav', type: 'error' });
        } else {
            bcrypt.hash(newUserObj.password, saltRounds, async function(err, hashedPwd) {
                if (err) { res.status(200).json({ message: err, type: 'error' }); }
                
                newUserObj.password = hashedPwd;

                // const newUser = new userSchema(newUserObj);

                try {
                    await new userSchema(newUserObj).save();
                    var token = jwt.sign({ userId: newUserObj.userId }, 'remealSECRET');
                    res.status(200).json({ userId: newUserObj.userId, token, message: 'Bruger oprettet succesfuldt', type: 'success' });
                } catch (error) {
                    console.log(error);
                    res.status(200).json({ message: error.message, type: 'error' });
                }
            });
        }
    }
});

api.post('/login', async (req, res) => {
    const email = req.body.email;
    const user = await userSchema.findOne({ email: email });

    if (user === null) {
        res.status(200).json({ message: 'Ingen bruger med den e-mail', type: 'error' });
    } else {
        bcrypt.compare(req.body.password, user.password, function(err, result) {
            if (err) { console.log(err) }
            if (result === true) {
                var token = jwt.sign({ userId: user.userId }, 'remealSECRET');
                res.status(200).json({ userId: user.userId, token, message: 'Bruger er blevet logget ind', type: 'success' });
            } else {
                res.status(200).json({ message: 'E-mail eller adgangskode er forkert', type: 'error' });
            }
        });
    }
});

// ----------------------------------------
// Export
// ----------------------------------------

// Export we can be used outside this file
module.exports = api;