import { Link } from "react-router-dom";

export default function Game({ game }) {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card">
        <img
          src={game.image}
          alt={`Game cover for ${game.name}`}
          height="400"
          className="card-img-top"
        />
        <div className="card-body">
          <Link to={`/games/${game.id}`}>
            <h3 className="card-title">{game.name}</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
