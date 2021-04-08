const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const port = process.env.PORT || 8899;
const dbConStr = process.env.DBCONSTR;

const server = express();

server.use(bodyParser.json({ limit: "30mb", extended: true }));
server.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
server.use(cors());

server.use('/', require('./routes/index'));

mongoose.connect(dbConStr, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => server.listen(port, () => {
        console.log(`\n==> Server listning on port: ${port}\n`);
    }))
    .catch((err) => {
        console.log(err);
    });

mongoose.set('useFindAndModify', false);