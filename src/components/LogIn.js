import { Link } from "react-router-dom";
import "./LogIn.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LogIn() {
  return (
    <div className="login-container">
      <h1 className="login-heading">TRY NEW LUXURY CAR MODELS WITH US!</h1>
      <form className="email-login login-info">
        <label>
          <input
            className="input-email"
            type="text"
            name="username"
            placeholder="Enter your username..."
          />
        </label>
        <label>
          <input
            className="input-email"
            type="text"
            name="username"
            placeholder="Enter first name..."
          />
        </label>
        <label>
          <input
            className="input-email"
            type="text"
            name="username"
            placeholder="Enter last name..."
          />
        </label>
        <Link to="/mainpage">
        <button className="btn btn-success">Login</button>
        </Link>
      </form>
    </div>
  );
}

export default LogIn;
