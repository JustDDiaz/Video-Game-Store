// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const gamesController = require("./controllers/videoGameController");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use("/games", gamesController);

app.get("*", (_, response) => {
  response.status(404).json({ error: "No video games here" });
});

// EXPORT
module.exports = app;
