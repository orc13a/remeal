const express = require('express');
const api = express.Router();

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

api.post('create', (req, res) => {
    console.log(req.body);
    res.end();

    // try {
        
    // } catch (error) {
        
    // }
});

// ----------------------------------------

module.exports = api;