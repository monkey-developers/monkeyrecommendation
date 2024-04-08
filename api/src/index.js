const express = require("express");
const app = express();
const db = require("./database.js");
const bodyParser = require("body-parser");
const cors = require("cors");
const md5 = require("md5")

const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res, next) => {
  res.json({ msg: "Server Working!" });
});

// GET ALL RECOMMENDATIONS
app.get("/api/animes", (req, res, next) => {
  const sql = "select * from anime order by id desc";
  db.all(sql, [], (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});

// CREATE A NEW RECOMMENDATION
app.post("/api/animes/", (req, res, next) => {
  const data = {
    name: req.body.name,
    image: req.body.image,
    episodes: req.body.episodes,
    status: req.body.status,
    description: req.body.description,
    author: req.body.author,
    score: req.body.score,
    comment: req.body.comment,
    videoId: req.body.videoId,
  };
  const sql =
    "INSERT INTO anime (name, image, episodes, status, description, author, score, comment, videoId) VALUES (?,?,?,?,?,?,?,?,?)";
  const params = [
    data.name,
    data.image,
    data.episodes,
    data.status,
    data.description,
    data.author,
    data.score,
    data.comment,
    data.videoId,
  ];
  db.run(sql, params, (err, response) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: data,
    });
  });
});

// DELETE A RECOMMENDATION
app.delete("/api/anime/:id", (req, res, next) => {
  db.run(
    "DELETE FROM anime WHERE id = ?",
    req.params.id,
    function (err, result) {
      if (err) {
        res.status(400).json({ error: res.message });
        return;
      }
      res.json({ message: "deleted", changes: this.changes });
    }
  );
});

// CREATE A NEW USER
app.post("/api/user/", (req, res, next) => {
  const hashedPass = md5(req.body.password)
  const data = {
    email: req.body.email,
    password: hashedPass,
    name: req.body.name,
    username: req.body.username
  };
  db.run(
    "INSERT INTO user (email, password, name, username) VALUES (?,?,?,?)",
    [data.email, data.password, data.name, data.username],
    (err, response) => {
      if(err){
        res.status(400).json({error: err.message})
        return
      }
      res.json({
        message: "success",
        data: data,
      });
    }
  )
})

// GET USER BY ID
app.get("/api/user/:id", (req, res, next) => {
  db.run("SELECT * FROM user WHERE id = ?", req.params.id, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});

// LOGIN USER
app.post("/api/user/login", (req, res, next) => {
  const hashedPass = md5(req.body.password)
  
  const data = {
    username: req.body.username,
    password: hashedPass
  }
  
  db.all("SELECT * FROM user WHERE username = ? AND password = ?", [data.username, data.password], (err, rows) => {
    if(err){
      res.status(400).json({
        error: err.message,
        message: "USER NOT FOUND",
        data: false
      })
    }
    if(rows && rows.length > 0){
      res.json({
        message: "LOGGED IN",
        data: rows
      })
    }else{
      res.json({
        message: "USER NOT FOUND",
        data: false
      })
    }
  })
})

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});