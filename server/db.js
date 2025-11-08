const sqlite3 = require('sqlite3').verbose();

// Create or open database file
const db = new sqlite3.Database('./db/users.db');

// Create table if it doesn’t exist
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE,
      password TEXT
    )
  `);
});

module.exports = db;
