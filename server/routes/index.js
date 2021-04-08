// ----------------------------------------
// All routs /
// ----------------------------------------

// npm packages
const express = require('express');
const router = express.Router();

// route will be: /
// A GET request
router.get('/', (req, res) => {
    res.status(200).json({ "message": "Hello World" });
    res.end();
});

// Export we can be used outside this file
module.exports = router;