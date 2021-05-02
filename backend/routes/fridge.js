// ----------------------------------------
// All routs /frige/
// ----------------------------------------

// npm packages
const express = require('express');
const api = express.Router();
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const saltRounds = 10;
var jwt = require('jsonwebtoken');

const auth = require('../middleware/Auth');

// Schemas
const itemSchema = require('../models/item.model');

// ----------------------------------------
// GET requests
// ----------------------------------------



// ----------------------------------------
// POST requests
// ----------------------------------------

api.post('/add', auth, (req, res) => {
    res.status(200).json({ message: 'Goodie', body: req.body });
});

// ----------------------------------------
// Export
// ----------------------------------------

// Export we can be used outside this file
module.exports = api;