const server = require('express')();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config()

const PORT = process.env.PORT || 9955;
const mongodbConnectionURL = process.env.MONGODBCONURL;

server.use(cors())
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true })); // Support parsing of application/x-www-form-urlencoded post data

server.use('/users', require('./routes/users')); // All routes /users/

mongoose.connect(mongodbConnectionURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => server.listen(PORT, () => console.log(`\n==> Connected to database\n==> Server listening on port: ${PORT}\n`)))
    .catch((err) => {throw err});

mongoose.set('useUnifiedTopology', false);