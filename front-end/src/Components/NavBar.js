import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="bg-dark">
      <nav className="navbar navbar-expand-md navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link active" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link active" to="/games">
              All Games
            </Link>
          </li>
          <li>
            <Link className="nav-link active" to="/games/new">
              Add New Game
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
