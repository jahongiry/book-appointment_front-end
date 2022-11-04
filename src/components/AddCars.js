import "./AddCars.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AddCars() {
  return (
    <div className="addcar-container">
      <h1 className="heading-for-add">Add Luxury cars to sell</h1>
      <form className="email-login add-car-form">
        <label>
          <input
            className="input-email"
            type="text"
            name="username"
            placeholder="Enter Car model..."
          />
        </label>
        <label>
          <input
            className="input-email"
            type="text"
            name="username"
            placeholder="Enter city..."
          />
        </label>
        <label>
          <input
            className="input-email"
            type="text"
            name="username"
            placeholder="Price in US dollars $..."
          />
        </label>
        <label className="linkcars">
          <input
            className="input-email"
            type="text"
            name="username"
            placeholder="Link of picture of the car..."
          />
        </label>
      </form>
    </div>
  );
}

export default AddCars;
