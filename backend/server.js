const express = require('express');
const db = require('./db'); // connects to db.js

const app = express();
app.use(express.json());

// Test route
app.get('/test', (req, res) => {
  db.all('SELECT * FROM users', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.listen(3000, () => console.log('🚀 Server running on http://localhost:3000'));
