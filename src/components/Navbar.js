import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { logout } from '../store/user_reducer';
import logo from '../img/logo3.png';

const Navbar = () => {
  const dispatch = useDispatch();
  const [burger, setBurger] = useState(true);

  return (
    <>
      <div className="nav-container">
        <button
          type="submit"
          className="burger"
          onClick={() => {
            setBurger(!burger);
          }}
        >
          {burger && <FontAwesomeIcon icon="fa-solid fa-bars" />}
          {!burger && <FontAwesomeIcon icon={faXmark} />}
        </button>
        <nav className={`nav-menu ${burger ? 'active' : ''}`}>
          <ul className="nav-menu-items mobile">
            <li className="navbar-toggle logo">
              <Link to="/mainpage" className="menu-bars">
                <img className="logo" src={logo} alt="Lambo logo" />
              </Link>
            </li>
            <li className="navbar-toggle reserve">
              <Link
                to="/reservations"
                className="menu-bars"
                onClick={() => {
                  setBurger(!burger);
                }}
              >
                Reservations
              </Link>
            </li>
            <li className="navbar-toggle reserve">
              <Link
                to="/reserve_form"
                className="menu-bars"
                onClick={() => {
                  setBurger(!burger);
                }}
              >
                Reserve Now
              </Link>
            </li>
            <li className="navbar-toggle reserve">
              <Link
                to="/removecar"
                className="menu-bars"
                onClick={() => {
                  setBurger(!burger);
                }}
              >
                Remove
              </Link>
            </li>
            <li className="navbar-toggle reserve">
              <Link
                to="/addcars"
                className="menu-bars"
                onClick={() => {
                  setBurger(!burger);
                  dispatchEvent();
                }}
              >
                Add Cars
              </Link>
            </li>
            <li className="navbar-toggle reserve">
              <Link
                to="/"
                className="menu-bars"
                onClick={() => {
                  setBurger(!burger);
                  dispatch(logout());
                }}
              >
                Log out
              </Link>
            </li>
            <li className="icons">
              <FontAwesomeIcon className="icon" icon="fa-brands fa-twitter" />
              <FontAwesomeIcon className="icon" icon="fa-brands fa-facebook" />
              <FontAwesomeIcon className="icon" icon="fa-brands fa-google" />
              <FontAwesomeIcon className="icon" icon="fa-brands fa-pinterest" />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
