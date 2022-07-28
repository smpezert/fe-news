import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav-links">
      <Link to={"/"}>Homepage</Link>
      <Link to={"/topics/coding"}>Coding</Link>
      <Link to={"/topics/cooking"}>Cooking</Link>
      <Link to={"/topics/football"}>Football</Link>
      <Link to={"/user"}>Profile</Link>
    </nav>
  );
}
