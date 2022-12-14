import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { sendSigninDetails } from '../store/user_reducer';
import './LogIn.css';
/* eslint-disable  no-unused-vars */
const LogIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);
  const { loggedIn } = state;
  const [signIn, setSignIn] = useState(loggedIn);
  const [username, setUsername] = useState('');
  const loginUser = (e) => {
    e.preventDefault();
    const user = {
      username,
    };
    dispatch(sendSigninDetails(user));
    setUsername('');
  };
  /* eslint-enable  no-unused-vars */

  useEffect(() => {
    setSignIn(loggedIn);
    if (loggedIn === 'in') {
      navigate('/mainpage');
    }
  }, [state]);

  return (
    <div className="login-container">
      <h1 className="login-heading">TRY NEW LUXURY CAR MODELS WITH US!</h1>
      <form className="email-login login-info" onSubmit={loginUser}>
        <label htmlFor="name">
          <input
            id="name"
            className="input-email"
            type="text"
            name="username"
            placeholder="Enter User name..."
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </label>

        <button type="submit" className="btn btn-success btn-login">
          Login
        </button>
        <Link to="./register">
          <button type="submit" className="btn btn-success btn-register">
            New User? Sign up!
          </button>
        </Link>
      </form>
    </div>
  );
};

export default LogIn;
