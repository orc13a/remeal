const server = require('express')();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

server.use(cors())
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true })); // Support parsing of application/x-www-form-urlencoded post data