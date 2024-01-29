/* eslint-disable no-undef */
import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(cors());

const PORT = 8000;
const apiKey = process.env.API_KEY;

app.get("/", (req, res) => {
  res.json("hi");
});

app.get("/ipAdress", async (req, res) => {
  const query = new URLSearchParams(req.query);
  const response = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&${query}`
  );
  const data = await response.json();
  res.json(data);
});

app.listen(8000, () => console.log(`Server is running on ${PORT} `));
