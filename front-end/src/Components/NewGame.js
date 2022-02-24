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
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col col-12 col-md-6">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                type="text"
                placeholder="Name of game"
                onChange={handleTextChange}
                required
                className="form-control"
              />
            </div>
          </div>
          <div className="col col-12 col-md-6">
            <div className="form-group">
              <label htmlFor="price">Price:</label>
              <input
                id="price"
                type="number"
                placeholder="Price of game"
                onChange={handleTextChange}
                required
                className="form-control"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col col-12 col-md-6">
            <div className="form-group">
              <label htmlFor="rating">Rating:</label>
              <select id="rating" required className="form-control">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
          <div className="col col-12 col-md-6">
            <div className="form-group">
              <label htmlFor="image">Image:</label>
              <input
                id="image"
                type="text"
                placeholder="http://"
                onChange={handleTextChange}
                className="form-control"
              />
            </div>
          </div>
        </div>
        <div className="form-check">
          <label htmlFor="featured" className="form-check-label">
            featured
          </label>
          <input
            id="featured"
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={game.featured}
            className="form-check-input"
          />
        </div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          type="text"
          placeholder="Description of game"
          onChange={handleTextChange}
          className="form-control"
        />
        <input type="submit" className="btn btn-outline-primary" />
        <Link to={`/games`}>
          <button className="btn btn-outline-dark">Back</button>
        </Link>
      </form>
    </div>
  );
}
