import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <Link to="/" className="navbar applications">
          Applications
        </Link>
        <Link to="/analysis" className="navbar analysis">
          Analysis
        </Link>
      </div>
    </>
  );
}

export default Navbar;
