// backend/models/userModel.js
const db = require('../config/db');

const User = {
  create: (username, email, password, callback) => {
    const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.query(sql, [username, email, password], callback);
  },

  findByCredentials: (email, password, callback) => {
    const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
    db.query(sql, [email, password], callback);
  },

  findById: (userId, callback) => {
    const sql = 'SELECT * FROM users WHERE id = ?';
    db.query(sql, [userId], callback);
  },

  updatePassword: (userId, newPassword, callback) => {
    const sql = 'UPDATE users SET password = ? WHERE id = ?';
    db.query(sql, [newPassword, userId], callback);
  },

  updateProfile: (userId, newUsername, newEmail, callback) => {
    const sql = 'UPDATE users SET username = ?, email = ? WHERE id = ?';
    db.query(sql, [newUsername, newEmail, userId], callback);
  },

  deleteUser: (userId, callback) => {
    const sql = 'DELETE FROM users WHERE id = ?';
    db.query(sql, [userId], callback);
  },

  getAllUsers: (callback) => {
    const sql = 'SELECT id, username, email FROM users';
    db.query(sql, callback);
  },

  existsByEmail: (email, callback) => {
    const sql = 'SELECT COUNT(*) AS count FROM users WHERE email = ?';
    db.query(sql, [email], callback);
  }
};

module.exports = User;