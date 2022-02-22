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
  allGames.length !== 0
    ? response.status(200).json(allGames)
    : response.status(404).json({ error: "error" });
});

games.get("/:id", async (request, response) => {
  console.log("GET request to /:id");

  const { id } = request.params;
  const oneGame = await getVideoGame(id);
  if (oneGame.id) {
    response.status(200).json(oneGame);
  } else {
    response.status(404).json({ error: "error" });
  }
});

games.post("/", async (request, response) => {
  console.log("POST request to /");

  const addGame = await addVideoGame(request.body);
  response.status(200).json(addGame);
});

games.delete("/:id", async (request, response) => {
  console.log("DELETE request to /:id");

  const removeGame = await deleteGame(request.params.id);
  removeGame.id
    ? response.status(200).json(removeGame)
    : response.status(404).json({ error: "error" });
});

games.put("/:id", async (request, response) => {
  console.log("UPDATE request to /:id");

  const update = await updateGame(request.params.id, request.body);
  update.id
    ? response.status(200).json(update)
    : response.status(404).json({ error: "error" });
});

module.exports = games;
