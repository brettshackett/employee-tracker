const express = require('express');
const router = express.Router();
const db = require('../../db/connection');

// Get all parties
router.get('/jobs', (req, res) => {
  const sql = `SELECT * FROM jobs`;

  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: rows
    });
  });
});

// Get single party
router.get('/job/:id', (req, res) => {
  const sql = `SELECT * FROM jobs WHERE id = ?`;
  const params = [req.params.id];

  db.query(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: row
    });
  });
});


module.exports = router;