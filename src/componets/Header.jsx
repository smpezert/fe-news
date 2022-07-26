import { Link } from "react-router-dom";

export default function Header() {
  return (
    <h1 className="title">
      <Link to="/">Newsport</Link>
    </h1>
  );
}
