import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

export default function GameDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const URL = process.env.REACT_APP_API_URL;
  const [game, setGame] = useState({});

  useEffect(() => {
    axios
      .get(`${URL}/games/${id}`)
      .then((response) => setGame(response.data))
      .catch((error) => console.warn(error));
  }, [URL, id]);

  const handleDelete = () => {
    axios
      .delete(`${URL}/games/${id}`)
      .then(
        () => {
          navigate("/games");
        },
        (error) => console.warn(error)
      )
      .catch((error) => console.warn(error));
  };

  return (
    <div>
      <div>
        <img src={game.image} alt={`Game cover for ${game.name}`} />
        <h3>{game.name}</h3>
        <p>${game.price}</p>
        <p>{game.rating}/5</p>
        <p>{game.description}</p>
      </div>
      <Link to={`/games/${game.id}`}>
        <button>Back</button>
      </Link>
      <Link to={`/games/${game.id}/edit`}>
        <button>Edit</button>
      </Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
