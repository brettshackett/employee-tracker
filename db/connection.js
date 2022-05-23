const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  // Your MySQL username,
  user: 'root',
  // Your MySQL password
  password: '$hackettBrett2',
  database: 'employee_DB'
});

module.exports = db;
