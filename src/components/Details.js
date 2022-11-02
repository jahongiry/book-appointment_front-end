import "./Details.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image from "../img/lambo.webp";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Details() {
  const id = useSelector((state) => state.mainPage.id);
  const carImage = useSelector((state) => state.mainPage.carImage);
  const name = useSelector((state) => state.mainPage.name);
  const alt = useSelector((state) => state.mainPage.alt);
  const description = useSelector((state) => state.mainPage.description);
  const price = useSelector((state) => state.mainPage.price);
  return (
    <div className="details-container">
      <div>
        <img className="details-img" src={carImage} alt={alt} />
        <Link to="/mainpage" className="more-model">
          <div className="left">
            <button className="back-button">
              <FontAwesomeIcon icon="fa-solid fa-caret-left" />
            </button>
          </div>
        </Link>
      </div>
      <div className="side-card">
        <h3>{name}</h3>
        <p className="description-details">
          {description} <br />
          Price: ${price}
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
