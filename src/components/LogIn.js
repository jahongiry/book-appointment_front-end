import "./LogIn.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LogIn() {
  return (
    <div className="login-container">
      <h1 className="login-heading">TRY NEW LAMBORGINI MODELS WITH US!</h1>
      <form className="email-login">
        <label>
          <input
            className="input-email"
            type="text"
            name="username"
            placeholder="Enter your email..."
          />
        </label>
      </form>
    </div>
  );
}

export default LogIn;
