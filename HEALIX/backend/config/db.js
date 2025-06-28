// backend/config/db.js
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // change as per your MySQL user
  password: '', // set your MySQL password if any
  database: 'healix' // name of your database
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to MySQL database as ID', db.threadId);
});

module.exports = db;
