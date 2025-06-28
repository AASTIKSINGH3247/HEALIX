// backend/controllers/healthController.js
const db = require('../config/db');

exports.submitHealthData = (req, res) => {
  const { userId, heartRate, pulse, bloodPressure, healthScore, date } = req.body;
  const sql = 'INSERT INTO health_data (user_id, heart_rate, pulse, blood_pressure, health_score, date) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(sql, [userId, heartRate, pulse, bloodPressure, healthScore, date], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Health data saved successfully' });
  });
};

exports.getHealthHistory = (req, res) => {
  const userId = req.params.userId;
  const sql = 'SELECT * FROM health_data WHERE user_id = ? ORDER BY date DESC LIMIT 30';
  db.query(sql, [userId], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};