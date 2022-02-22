import { Link } from "react-router-dom";

export default function Game({ game }) {
  return (
    <div className="col-4">
      <div className="card">
        <img src={game.image} alt={`Game cover for ${game.name}`} />
        <Link to={`/games/${game.id}`}>
          <h3>{game.name}</h3>
        </Link>
      </div>
    </div>
  );
}
