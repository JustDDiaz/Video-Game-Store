import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/games">
        <button>All Games</button>
      </Link>
      <Link to="/games/new">
        <button>Add new Game</button>
      </Link>
    </nav>
  );
}
