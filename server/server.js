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
server.use(bodyParser.json({ limit: "30mb", extended: true })); // Set limit on image size to 30 MB
server.use(bodyParser.urlencoded({ limit: "30mb", extended: true })); // Set limit on image size to 30 MB
server.use(cors());

// Set the routes
server.use('/', require('./routes/index')); // All routs /
server.use('/admin', require('./routes/admin')); // All routs /admin/

// Database connection (mongoDB)
mongoose.connect(dbConStr, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => server.listen(port, () => { // On connection
        console.log(`\n==> Server listning on port: ${port}\n`);
    }))
    .catch((err) => { // If err and not connected
        console.log(err);
    });

// Set mongoose setting
mongoose.set('useFindAndModify', false);