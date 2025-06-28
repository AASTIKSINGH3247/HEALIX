// backend/controllers/authController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');

const JWT_SECRET = 'your_jwt_secret'; // replace with env var

exports.register = (req, res) => {
  const { username, email, password } = req.body;

  const sqlCheck = `SELECT * FROM users WHERE email = ?`;
  db.query(sqlCheck, [email], (err, results) => {
    if (err) return res.status(500).json({ message: 'DB error' });

    if (results.length > 0) {
      return res.status(409).json({ message: 'Email already registered' });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const sqlInsert = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;
    db.query(sqlInsert, [username, email, hashedPassword], (err, result) => {
      if (err) return res.status(500).json({ message: 'Registration failed' });
      res.status(201).json({ message: 'User registered successfully' });
    });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  const sql = `SELECT * FROM users WHERE email = ?`;
  db.query(sql, [email], (err, results) => {
    if (err) return res.status(500).json({ message: 'DB error' });
    if (results.length === 0) return res.status(401).json({ message: 'Invalid email' });

    const user = results[0];
    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid password' });

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1d' });
    res.status(200).json({ token, userId: user.id });
  });
};
