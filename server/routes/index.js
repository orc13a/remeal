// ----------------------------------------
// All routs /
// ----------------------------------------

// npm packages
const express = require('express');
const router = express.Router();

// Schemas
const userSchema = require('../models/newUser');

// ----------------------------------------
// GET requests
// ----------------------------------------

// route will be: /
router.get('/', (req, res) => {
    res.send('hello');
    res.end();
});

router.get('/login', (req, res) => {
    
    res.end();
});

// ----------------------------------------
// POST requests
// ----------------------------------------

// route will be: /users/add
router.post('/users/add', async (req, res) => {
    const user = req.body;
    const newUser = new userSchema(user);

    try {
        await newUser.save();

        res.status(200).json(newUser);
    } catch (error) {
        res.status(409).json({ "error": error.messages });
    }
});

// ----------------------------------------
// Export
// ----------------------------------------

// Export we can be used outside this file
module.exports = router;