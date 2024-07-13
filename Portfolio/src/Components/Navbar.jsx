import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div id="navbar">
      <div id="links">
        <Link to="">About</Link>
        <Link to="">Portfolio</Link>
        <Link to="">Contact</Link>
      </div>
    </div>
  );
}
