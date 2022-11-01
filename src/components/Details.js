import "./Details.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image from "../img/lambo.webp";
import { Link } from "react-router-dom";

function Details() {
  return (
    <div className="details-container">
      <div>
        <img className="details-img" src={image} alt="lambo image" />
        <Link to="/mainpage" className="more-model">
          <div className="left">
            <button className="back-button">
              <FontAwesomeIcon icon="fa-solid fa-caret-left" />
            </button>
          </div>
        </Link>
      </div>
      <div className="side-card">
        <h3>Lambo 500</h3>
        <p className="description-details">
          description about this type of Lambo
        </p>

        <Link to="/mainpage" className="more-model">
          <h4 className="discover-text">
            Discover more models{" "}
            <FontAwesomeIcon
              className="discover"
              icon="fa-solid fa-chevron-right"
            />
          </h4>
        </Link>
        <button className="reserve-button">Reserve</button>
      </div>
    </div>
  );
}

export default Details;
