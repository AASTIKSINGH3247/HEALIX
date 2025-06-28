// backend/models/healthModel.js
const db = require('../config/db');

const Health = {
  create: (userId, heartRate, pulse, bloodPressure, healthScore, date, callback) => {
    const sql = 'INSERT INTO health_data (user_id, heart_rate, pulse, blood_pressure, health_score, date) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(sql, [userId, heartRate, pulse, bloodPressure, healthScore, date], callback);
  },

  getLatestByUser: (userId, callback) => {
    const sql = 'SELECT * FROM health_data WHERE user_id = ? ORDER BY date DESC LIMIT 1';
    db.query(sql, [userId], callback);
  },

  getHistoryByUser: (userId, callback) => {
    const sql = 'SELECT * FROM health_data WHERE user_id = ? ORDER BY date DESC LIMIT 30';
    db.query(sql, [userId], callback);
  },

  deleteByUser: (userId, callback) => {
    const sql = 'DELETE FROM health_data WHERE user_id = ?';
    db.query(sql, [userId], callback);
  },

  getAll: (callback) => {
    const sql = 'SELECT * FROM health_data';
    db.query(sql, callback);
  }
};

module.exports = Health;
