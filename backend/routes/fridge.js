// npm packages
const express = require('express');
const api = express.Router();
const { v4: uuidv4 } = require('uuid');

const itemSchema = require('../models/fridgeItem.model');

// ----------------------------------------
// GET requests
// ----------------------------------------

api.get(('all', async (req, res) => {
    try {
        const allItems = await itemSchema.find();
        res.status(200).json({ allItems });
    } catch (error) {
        throw error;
    }
}));

// ----------------------------------------
// POST requests
// ----------------------------------------

api.post('/add', async (req, res) => {
    try {
        await new itemSchema(req.body).save();
        res.status(201).json({ message: `Item has been added to fridge successfully`, type: 'success' });
    } catch (error) {
        throw error;
    }
});

// ----------------------------------------
// Export
// ----------------------------------------

// Export we can be used outside this file
module.exports = api;