const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'justin',
  database: 'myFEC',
});

module.exports.connection = connection;
