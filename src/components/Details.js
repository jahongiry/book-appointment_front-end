import "./Details.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { fetchSingleCar } from "../store/mainpage_reducer";
import { useEffect } from "react";

function Details() {
  
  // const carImage = useSelector((state) => state.mainPage.carImage);
  // const name = useSelector((state) => state.mainPage.name);
  // const alt = useSelector((state) => state.mainPage.alt);
  // const description = useSelector((state) => state.mainPage.description);
  // const price = useSelector((state) => state.mainPage.price);
  
  const car = useSelector((state) => state.cars.car)
  console.log(car.id)
  // useEffect(() => {
  //   dispatch(fetchSingleCar(car.id))
  // } , [dispatch])
  
  
  return (
    <div className="details-container">
      <div>
        <img className="details-img" src={car.image_url} alt={car.model} />
        <Link to="/mainpage" className="more-model">
          <div className="left">
            <button className="back-button">
              <FontAwesomeIcon icon="fa-solid fa-caret-left" />
            </button>
          </div>
        </Link>
      </div>
      <div className="side-card">
        <h3>{car.name}</h3>
        <p className="description-details">
          {car.description} <br />
          Price: ${car.cost}
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
        <Link to="/reserve_form">
        <button className="reserve-button">Reserve</button>
        </Link>
      </div>
    </div>
  );
}

export default Details;
