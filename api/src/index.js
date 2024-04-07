const express = require("express");
const app = express();
const db = require("./database.js");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res, next) => {
  res.json({ msg: "Server Working!" });
});

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

app.listen(PORT, () => {
  console.log("server running");
});
