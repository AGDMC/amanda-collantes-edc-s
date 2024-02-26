const express = require("express");
const knex = require("knex")(require("./knexfile").development);
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/webinars", async (req, res) => {
  const webinars = await knex("webinars").select("*");
  res.json(webinars);
});

app.post("/webinars", async (req, res) => {
  const webinar = req.body;
  await knex("webinars").insert(webinar);
  res.json({ message: "Webinar added!" });
});

app.listen(3000, () => console.log("Server listening on port 3000"));
