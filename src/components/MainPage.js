import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import car from "../img/lambo.webp";
import "./MainPage.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { mainpageActions } from "../store/mainpage_reducer";
import { useEffect, useState } from "react";
import { fetchAllCars } from "../store/mainpage_reducer";
import { fetchSingleCar } from "../store/mainpage_reducer";

function MainPage() {
  const [initial, setInitial] = useState(0);
  const [right, setRight] = useState(true);
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars.cars);
  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);
  const carsTest = (arr) => {
    return arr.slice(initial, initial + 3);
  };
  const nextCars = carsTest(cars);
  const chooseName = () => {
    if (right === true) {
      return "first";
    } else {
      return "second";
    }
  };
  const classNaming = chooseName();
  return (
    <div className="main">
      <h1>LATEST MODELS</h1>
      <p className="choose">Please select a Lambo Model</p>
      <hr className="main-line" />
      <div className="middle">
        <div className="left">
          <button
            onClick={() => {
              setRight(false);
              if (initial > 0) {
                setInitial(initial - 3);
              }
            }}
            type="button"
            className="back-button"
          >
            <FontAwesomeIcon icon="fa-solid fa-caret-left" />
          </button>
        </div>
        <ul className="car-ul">
          {nextCars.map((car) => (
            <div className={classNaming} key={car.id}>
              <Link
                to={`/details/${car.id}`}
                className="to-deatils-link"
                onClick={() => {
                  dispatch(fetchSingleCar(car.id));
                }}
              >
                <div className="card1">
                  <img className="lambo" src={car.image_url} alt={car.model} />
                </div>
                <h3 className="model-name">{car.name}</h3>
                <hr className="small-line" />
                <h6 className="lambo-info">
                  {car.description} <br />
                </h6>
              </Link>
              <div className="logos-fonts">
                <FontAwesomeIcon
                  className="facebook"
                  icon="fa-brands fa-twitter"
                />
                <FontAwesomeIcon
                  className="facebook"
                  icon="fa-brands fa-facebook"
                />
                <FontAwesomeIcon
                  className="facebook"
                  icon="fa-brands fa-google"
                />
              </div>
            </div>
          ))}
        </ul>
        <div className="right">
          <button
            onClick={() => {
              setRight(true);

              if (initial <= cars.length - 6) {
                setInitial(initial + 3);
              }
            }}
            type="button"
            className="next-button"
          >
            <FontAwesomeIcon icon="fa-solid fa-caret-right" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
