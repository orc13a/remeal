// ----------------------------------------
// Main server file
// ----------------------------------------

// npm packages
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

// Environment variables
const port = process.env.PORT || 8899;
const dbConStr = process.env.DBCONSTR;

const server = express();

// Middleware
server.use(cors());

server.use('/users', require('./routes/users')); // All routs /users

server.get('*', (req, res) => {
    res.status(404).json({ message: '404 - Not found' });
});

// Database connection (mongoDB)
mongoose.connect(dbConStr, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => server.listen(port, () => { // On connection
        console.log(`\n==> Connected to database successfully`);
        console.log(`==> Server listning on port: ${port}\n`);
    }))
    .catch((err) => { // If err and not connected
        console.log(err);
    });

// Set mongoose setting
mongoose.set('useFindAndModify', false);