import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

export default function GameEdit() {
  const { id } = useParams;
  const navigate = useNavigate();
  const URL = process.env.REACT_APP_API_URL;
  const [game, setGame] = useState({
    name: "",
    description: "",
    price: 0,
    rating: 0,
    featured: false,
    image: "",
  });

  useEffect(() => {
    axios.get(`${URL}/games/${id}`).then((response) => setGame(response.data));
  }, [URL, id]);

  const handleTextChange = (event) => {
    setGame({
      ...game,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.get(`${URL}/games`, game).then(() => navigate(`/games/${id}`));
  };

  const handleCheckboxChange = () => {
    setGame({ ...game, featured: !game.featured });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={game.name}
          onChange={handleTextChange}
        />
        <label htmlFor="description">Description:</label>
        <input
          id="description"
          type="text"
          value={game.description}
          onChange={handleTextChange}
        />
        <label htmlFor="price">Price:</label>
        <input
          id="price"
          type="number"
          value={game.price}
          onChange={handleTextChange}
        />
        <label htmlFor="rating">Rating:</label>
        <input
          id="rating"
          type="number"
          value={game.rating}
          onChange={handleTextChange}
        />
        <label htmlFor="featured">featured</label>
        <input
          id="featured"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={game.featured}
        />
        <label htmlFor="image">Image:</label>
        <input
          id="image"
          type="text"
          value={game.image}
          onChange={handleTextChange}
        />
        <input type="submit" />
      </form>
      <Link to={`/games/${id}`}>
        <button>Back</button>
      </Link>
    </div>
  );
}
