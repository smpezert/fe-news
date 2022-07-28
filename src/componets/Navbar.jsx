import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to={"/"} className="nav-links">
        Homepage
      </Link>
      <Link to={"/topics/coding"} className="nav-links">
        Coding
      </Link>
      <Link to={"/topics/cooking"} className="nav-links">
        Cooking
      </Link>
      <Link to={"/topics/football"} className="nav-links">
        Football
      </Link>
      <Link to={"/user"} className="nav-links">
        Profile
      </Link>
    </nav>
  );
}
