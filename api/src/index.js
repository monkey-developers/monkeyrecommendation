const express = require("express")
const app = express()
const db = require("./database.js")

const PORT = 3000

app.get("/", (req, res, next) => {
    res.json({"msg": "ok"})
})

app.get("/api/animes", (req, res, next) => {
    const sql = "select * from anime"
    db.all(sql, [], (err,rows) => {
        if(err){
            res.status(400).json({"error":err.message})
            return
        }
        res.json({
            "message": "success",
            "data": rows
        })
    })
})
app.listen(PORT, () => {
    console.log("nice")
})