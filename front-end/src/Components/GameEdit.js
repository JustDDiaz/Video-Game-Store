import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

export default function GameEdit() {
  const { id } = useParams();
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
    axios.put(`${URL}/games/${id}`, game).then(() => navigate(`/games/${id}`));
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
                value={game.name}
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
                value={game.price}
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
              <select
                id="rating"
                value={game.rating}
                required
                className="form-control"
              >
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
                value={game.image}
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
          value={game.description}
          onChange={handleTextChange}
          className="form-control"
        />
        <input type="submit" className="btn btn-outline-primary" />
        <Link to={`/games/${id}`}>
          <button className="btn btn-outline-dark">Back</button>
        </Link>
      </form>
    </div>
  );
}
