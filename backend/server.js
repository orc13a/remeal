// npm packages
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var cors = require('cors');
require('dotenv').config()

const server = express();

// Environment variables 
const PORT = process.env.PORT || 9955;
const DBCONSTR = process.env.DBCONSTR;

// Midleware
server.use(bodyParser.json());
server.use(cors());

// Routes
server.use('/users', require('./routes/users')); // All routs /users
server.use('/fridge', require('./routes/fridge')); // All routs /fridge

// If there is no route for what the user has requested for
server.get('*', (req, res) => {
    res.status(404).json({ message: '404 - Not found' });
});

// Database connection (mongoDB)
mongoose.connect(DBCONSTR, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => server.listen(PORT, () => { // On connection
        console.log(`\n==> Connected to database successfully`);
        console.log(`==> Server listning on port: ${PORT}\n`);
    }))
    .catch((err) => { // If err and not connected
        console.log(err);
    });

// Set mongoose setting
mongoose.set('useFindAndModify', false);