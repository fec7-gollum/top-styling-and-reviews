const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// const connection = require('../db/dbconfig.js');


const server = express();

server.use(bodyParser.text());
server.use(bodyParser.json());
server.use(express.static(path.join(__dirname, '../public/dist')));

// Server Requests
// eslint-disable-next-line no-console
server.listen(3001, () => { console.log('server ON!'); });
