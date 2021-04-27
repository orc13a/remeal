// ----------------------------------------
// All routs /users/
// ----------------------------------------

// npm packages
const express = require('express');
const router = express.Router();

// Schemas
const userSchema = require('../models/user.model');

// ----------------------------------------
// GET requests
// ----------------------------------------

// route will be: /all
router.get('/all', async (req, res) => {
    try {
        const allUsers = await userSchema.find();
        res.status(200).json(allUsers);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

// ----------------------------------------
// POST requests
// ----------------------------------------

// route will be: /users/add
router.post('/users/add', async (req, res) => {
    // const user = req.body;
    // const newUser = new userSchema(user);

    // try {
    //     await newUser.save();

    //     res.status(200).json(newUser);
    // } catch (error) {
    //     res.status(409).json({ "error": error.messages });
    // }
});

// ----------------------------------------
// Export
// ----------------------------------------

// Export we can be used outside this file
module.exports = router;