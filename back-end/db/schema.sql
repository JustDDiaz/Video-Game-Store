DROP DATABASE IF EXISTS video_game_store;
CREATE DATABASE video_game_store;

\c video_game_store;

DROP TABLE IF EXISTS games;

CREATE TABLE games (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    price INT, 
    rating INT DEFAULT 5, CHECK (rating >= 0 AND rating <= 5), 
    featured BOOLEAN, 
    image TEXT
);


