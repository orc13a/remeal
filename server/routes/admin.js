// ----------------------------------------
// All routs /admin/
// ----------------------------------------

// npm packages
const express = require('express');
const router = express.Router();

// Schemas
const userSchema = require('../models/newUser');

router.get('/users', async (req, res) => {
    try {
        const users = await userSchema.find();

        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ "error": error.messages });
    }
});

// Export we can be used outside this file
module.exports = router;