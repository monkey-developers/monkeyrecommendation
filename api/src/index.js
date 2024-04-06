const express = require("express")
const app = express()
const db = require("./database.js")
const bodyParser = require("body-parser")

const PORT = 3000

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

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

app.post("/api/animes/", (req, res, next) => {
    var errs = []
    if(!req.body.name){
        errs.push('No title specified')
    }
    if(!req.body.review){
        errs.push('No review specified')
    }
    if(!req.body.description){
        errs.push('No description specified')
    }
    if(!req.body.author){
        errs.push('No author specified')
    }

    const data = {
        name: req.body.name,
        review: req.body.review,
        description: req.body.description,
        author: req.body.author
    }
    const sql = "INSERT INTO anime (name, review, description, author) VALUES (?,?,?,?)"
    const params = [data.name, data.review, data.description, data.author]
    db.run(sql, params, (err, response) => {
        if(err){
            res.status(400).json({"error": err.message})
            return
        }
        res.json({
            "message": "success",
            "data": data
        })
    })
})

app.listen(PORT, () => {
    console.log("server running")
})