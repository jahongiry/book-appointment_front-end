import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../img/logo3.png";

function Navbar() {
  return (
    <>
      <nav className="nav-menu active">
        <ul className="nav-menu-items">
          <li className="navbar-toggle logo">
            <Link to="/mainpage" className="menu-bars">
              <img className="logo" src={logo} alt="Lambo logo"></img>
            </Link>
          </li>
          <li className="navbar-toggle reserve">
            <Link to="/reservatons" className="menu-bars">
              Reservations
            </Link>
          </li>
          <li className="navbar-toggle reserve">
            <Link to="/reserve_form" className="menu-bars">
              Reserve Now
            </Link>
          </li>
          <li className="navbar-toggle reserve">
            <Link to="/removecar" className="menu-bars">
              Remove
            </Link>
          </li>
          <li className="navbar-toggle reserve">
            <Link to="/addcars" className="menu-bars">
              Add Cars
            </Link>
          </li>
          <li className="navbar-toggle reserve">
            <Link to="/" className="menu-bars">
              Log out
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
