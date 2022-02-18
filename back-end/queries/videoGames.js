const db = require("../db/dbConfig.js");

const getAllVideoGames = async () => {
  try {
    const getAll = await db.any("SELECT * FROM games");

    return getAll;
  } catch (error) {
    return error;
  }
};

const getVideoGame = async (id) => {
  try {
    const getGame = await db.one("SELECT * FROM games WHERE id=$1", id);

    return getGame;
  } catch (error) {
    return error;
  }
};

const addVideoGame = async (game) => {
  try {
    const { name, description, price, rating, featured, image } = game;
    const newGame = await db.one(
      "INSERT INTO games (name, description, price, rating, featured, image) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [name, description, price, rating, featured, image]
    );

    return newGame;
  } catch (error) {
    return error;
  }
};

const deleteGame = async (id) => {
  try {
    const removeGame = await db.one(
      "DELETE FROM games WHERE id=$1 RETURNING *",
      id
    );

    return removeGame;
  } catch (error) {
    return error;
  }
};

const updateGame = async (id, game) => {
  try {
    const { name, description, price, rating, featured, image } = game;
    const update = await db.one(
      "UPDATE games SET name=$2, description=$3, price=$4, rating=$5, featured=$6, image=$7 WHERE id=$1 RETURNING *",
      [[id, name, description, price, rating, featured, image]]
    );

    return update;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllVideoGames,
  getVideoGame,
  addVideoGame,
  deleteGame,
  updateGame,
};
