import Router from "express";
import multer from "multer";
import path from "path";
import { client } from "./config";

const router = Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

router.post("/recommendation-image", upload.single("foto"), (req, res) => {
  // const { id } = req.body
  const filepath = path.resolve(req.file.path);
  console.log(filepath);
  // db.serialize(() => {
  //     db.run(`UPDATE Recommends SET photo = ${req.file.path} WHERE id = ${id}`)
  // })
  // return res.json({ filepath })
});

router.post("/recommendation", async (req, res) => {
  // const { masterpiece, rate, author, description, category } = req.body;
  // await client.query(
  //   `INSERT INTO Recommends ( masterpiece, rate, author, description, category ) VALUES (?,?,?,?,?)`,
  //   [masterpiece, rate, author, description, category]
  // );
  await client.query(
    `INSERT INTO Recommends ( masterpiece, rate, author, description, category ) VALUES ('Chainsaw Man', 4.5, 'igu', 'cara muito bom', 'anime')`
  );
});

router.get("/teste", async (req, res) => {
  res.json({ msg: "Funcionando" });
});

router.get("/recommendations-list", async (req, res) => {
  await client.query(
    `SELECT * FROM Recommends ORDER BY id desc`,
    function (error, rows) {
      if (error) return res.status(500).json({ error, msg: error.message });
      res.json({ recommends: rows });
    }
  );
});

export { router };
