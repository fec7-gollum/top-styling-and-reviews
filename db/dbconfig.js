const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'justin',
  pasword: 'codecode',
  database: 'myFEC',
});


connection.connect((err) => {
  if (err) {
    console.error(err, 'couldnt connect to database');
    return;
  }
  console.log('connected');
});


module.exports.connection = connection;
