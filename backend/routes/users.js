// ----------------------------------------
// All routs /users/
// ----------------------------------------

// npm packages
const express = require('express');
const api = express.Router();
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const saltRounds = 10;
var jwt = require('jsonwebtoken');

// Schemas
const userSchema = require('../models/user.model');

// ----------------------------------------
// GET requests
// ----------------------------------------



// ----------------------------------------
// POST requests
// ----------------------------------------



// ----------------------------------------
// Export
// ----------------------------------------

// Export we can be used outside this file
module.exports = api;