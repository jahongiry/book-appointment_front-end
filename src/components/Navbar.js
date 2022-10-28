import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  return (
    <>
      <nav className="nav-menu active">
        <ul className="nav-menu-items">
          <li className="navbar-toggle logo">
            <Link to="#" className="menu-bars">
              Logo
            </Link>
          </li>
          <li className="navbar-toggle reserve">
            <Link to="#" className="menu-bars">
              Reserve car
            </Link>
          </li>
          <li className="navbar-toggle reserve">
            <Link to="#" className="menu-bars">
              My Reserve
            </Link>
          </li>
          <li className="navbar-toggle reserve">
            <Link to="#" className="menu-bars">
              Add a car
            </Link>
          </li>
          <li className="navbar-toggle reserve">
            <Link to="#" className="menu-bars">
              Delete car
            </Link>
          </li>
          <li className="icons">
            <FontAwesomeIcon icon="fa-brands fa-twitter" />
            <FontAwesomeIcon icon="fa-brands fa-facebook" />
            <FontAwesomeIcon icon="fa-brands fa-google" />
            <FontAwesomeIcon icon="fa-brands fa-pinterest" />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
