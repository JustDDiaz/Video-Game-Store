import axios from "axios";
import { useEffect, useState } from "react";
import Game from "./Game";

export default function Games() {
  const [games, setGames] = useState([]);
  const URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${URL}/games`.then((response) => setGames(response.data)))
      .catch((error) => console.warn(error));
  }, [URL]);

  return (
    <main>
      <div>
        {games.map((game) => {
          return <Game key={game.id} game={game} />;
        })}
      </div>
    </main>
  );
}
