import express from "express";
import cors from "cors";
import { router } from "./router";
import { client } from "./config";

const app = express();

const createTable = async () => {
  await client.query(
    `CREATE TABLE IF NOT EXISTS Recommends ( id INTEGER PRIMARY KEY, masterpiece TEXT, rate NUMERIC, author TEXT, description TEXT, category TEXT, photo TEXT);`
  );
};

createTable();
app.use(express.json());
app.use(cors());
app.use(router);

export { app };
