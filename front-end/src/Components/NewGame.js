import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function NewGame() {
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

  const handleTextChange = (event) => {
    setGame({
      ...game,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${URL}/games`, game).then(() => navigate("/games"));
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
          placeholder="Name of game"
          onChange={handleTextChange}
          required
        />
        <label htmlFor="description">Description:</label>
        <input
          id="description"
          type="text"
          placeholder="Description of game"
          onChange={handleTextChange}
        />
        <label htmlFor="price">Price:</label>
        <input
          id="price"
          type="number"
          placeholder="Price of game"
          onChange={handleTextChange}
          required
        />
        <label htmlFor="rating">Rating:</label>
        <input
          id="rating"
          type="number"
          placeholder="Rating between 0 and 5"
          onChange={handleTextChange}
          required
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
          placeholder="http://"
          onChange={handleTextChange}
        />
        <input type="submit" />
      </form>
      <Link to={`/games`}>
        <button>Back</button>
      </Link>
    </div>
  );
}
