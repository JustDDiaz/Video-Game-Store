const express = require("express");
const games = express.Router();
const {
  getAllVideoGames,
  getVideoGame,
  addVideoGame,
  deleteGame,
  updateGame,
} = require("../queries/videoGames");

games.get("/", async (_, response) => {
  console.log("GET request to /");

  const allGames = await getAllVideoGames();
  response.status(200).json(allGames);
});

games.get("/:id", async (request, response) => {
  console.log("GET request to /:id");

  const oneGame = await getVideoGame(request.params.id);
  response.status(200).json(oneGame);
});

games.post("/", async (request, response) => {
  console.log("POST request to /");

  const addGame = await addVideoGame(request.body);
  response.status(200).json(addGame);
});

games.delete("/:id", async (request, response) => {
  console.log("DELETE request to /:id");

  const removeGame = await deleteGame(request.params.id);
  response.status(200).json(removeGame);
});

games.put("/:id", async (request, response) => {
  console.log("UPDATE request to /:id");

  const update = await updateGame(request.params.id, request.body);
  response.status(200).json(update);
});

module.exports = games;
