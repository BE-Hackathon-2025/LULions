const sqlite3 = require('sqlite3').verbose();

// Create or open the local database file
const db = new sqlite3.Database('./db/users.db', (err) => {
  if (err) {
    console.error('❌ Error connecting to database:', err.message);
  } else {
    console.log('✅ Connected to SQLite database.');
  }
});

// Create a users table if it doesn’t exist
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE,
      password TEXT
    )
  `, (err) => {
    if (err) console.error('❌ Error creating table:', err.message);
    else console.log('✅ Users table ready.');
  

  });
  
});
db.run(`INSERT OR IGNORE INTO users (username, password) VALUES (?, ?)`, ['admin', '12345']);

module.exports = db;
