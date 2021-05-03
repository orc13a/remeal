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

api.get('/items/:userId', auth, async (req, res) => {
    const userId = req.params.userId;
    const token = req.headers.auth;

    const allUserItems = await itemSchema.find({ userId: userId });
    
    if (allUserItems.length === 0) {
        res.status(200).json({ message: 'empty', type: 'error' });
    } else {
        res.status(200).json(allUserItems);
    }
});

// ----------------------------------------
// POST requests
// ----------------------------------------

api.post('/add', auth, async (req, res) => {
    const token = req.body.user.token;
    const userId = req.body.user.userId;
    const itemData = req.body.itemData;

    if (itemData.item.length === 0 || itemData.item === '' || Number(itemData.amount) === NaN) {
        res.status(200).json({ message: 'Alle felter skal udfyldes', type: 'error' });
    } else {
        try {
            let decoded = jwt.verify(token, 'remealSECRET');
    
            if (decoded.userId === userId) {
                let itemId = uuidv4();
    
                let item = {
                    userId: decoded.userId,
                    itemId: itemId,
                    item: itemData.item,
                    amount: itemData.amount,
                    expirationDate: itemData.expirationDate,
                }
    
                await itemSchema(item).save().then(() => {
                    res.status(200).json({ message: 'Vareren tilføjet til køleskabet', type: 'success' });
                });
            } else {
                res.status(409).json({ message: 'Der skete en fejl', type: 'error' });
            }
        } catch(err) {
            res.status(409).json({ message: err, type: 'error' });
        }
    }
});

api.post('/delete', auth, async (req, res) => {
    const itemId = req.body.item.itemId;
    const token = req.body.user.token;

    try {
        const item = await itemSchema.findOneAndDelete({ itemId });

        if (item === null) {
            res.status(200).json({ message: 'Ingen varer at slette', type: 'error' });
        } else {
            res.status(200).json({ message: 'Vare slettet', type: 'success' });
        }
    } catch (error) {
        res.status(200).json({ message: 'Der skete en fejl', type: 'error' });
    }
});

// ----------------------------------------
// Export
// ----------------------------------------

// Export we can be used outside this file
module.exports = api;