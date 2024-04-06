const sqlite3 = require('sqlite3')
const md5 = require('md5')

const DBSRC = "db.sqlite"

const db = new sqlite3.Database(DBSRC, (err) => {
    if(err){
        console.error(err.message)
        throw err
    }else{
        console.log("SQLITE DB CONNECTED")
        db.run(`CREATE TABLE anime (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, review NUMBER, description TEXT, author TEXT)`, (err) => {
            if(err){
                console.log("table already exists")
            }
        })
    }
})

module.exports = db