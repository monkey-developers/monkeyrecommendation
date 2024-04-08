const sqlite3 = require("sqlite3");

const DBSRC = "db.sqlite";

const db = new sqlite3.Database(DBSRC, (err) => {
  if (err) {
    console.error(err.message);
    throw err;
  } else {
    console.log("SQLITE DB CONNECTED");
    db.run(
      `CREATE TABLE anime (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, image TEXT, episodes NUMBER, status TEXT, description TEXT, author TEXT, score NUMBER, comment TEXT, videoId TEXT)`,
      (err) => {
        if (err) {
          console.log("Table ANIME already exists");
        }
      }
    );
    db.run(
      `CREATE TABLE user (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, password TEXT, name TEXT, username TEXT)`,
      (err) => {
        if(err){
          console.log("Table USER already exists")
        }
      }
    )
  }
});

module.exports = db;
