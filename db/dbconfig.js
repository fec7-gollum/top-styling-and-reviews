/* eslint-disable quotes */
/* eslint-disable no-console */
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'myFEC',
});

module.exports = connection;
