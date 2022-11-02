import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import car from "../img/lambo.webp";
import "./MainPage.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { mainpageActions } from "../store/mainpage_reducer";
import { useState } from "react";

function MainPage() {
  const [initial, setInitial] = useState(0);
  const dispatch = useDispatch();

  const cars = [
    {
      id: 1,
      carImage: car,
      name: "Lambo car1",
      alt: "Lambo car",
      price: 3000,
      description: "Lamborghini 350 GT at the Turin Motor Show!",
    },
    {
      id: 2,
      carImage: car,
      name: "Lambo car2",
      description: "Lamborghini 350 GT at the Turin Motor Show!",
      price: 5000,
      alt: "Lambo car",
    },
    {
      id: 3,
      carImage: car,
      name: "Lambo car3",
      description: "Lamborghini 350 GT at the Turin Motor Show!",
      price: 8000,
      alt: "Lambo car",
    },
    {
      id: 4,
      carImage: car,
      name: "Lambo car4",
      alt: "Lambo car",
      price: 3000,
      description: "Lamborghini 350 GT at the Turin Motor Show!",
    },
    {
      id: 5,
      carImage: car,
      name: "Lambo car5",
      description: "Lamborghini 350 GT at the Turin Motor Show!",
      price: 5000,
      alt: "Lambo car",
    },
    {
      id: 6,
      carImage: car,
      name: "Lambo car6",
      description: "Lamborghini 350 GT at the Turin Motor Show!",
      price: 8000,
      alt: "Lambo car",
    },
  ];

  const carsTest = (arr) => {
    return arr.slice(initial, initial + 3);
  };
  const nextCars = carsTest(cars);

  return (
    <div className="main">
      <h1>LATEST MODELS</h1>
      <p className="choose">Please select a Lambo Model</p>
      <hr className="main-line" />
      <div className="middle">
        <div className="left">
          <button
            onClick={() => {
              if (initial !== 0) {
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
            <div className="first" key={car.id}>
              <Link
                to="/details"
                className="to-deatils-link"
                onClick={() => {
                  dispatch(
                    mainpageActions.moveToDetailsPage({
                      id: car.id,
                      carImage: car.carImage,
                      name: car.name,
                      alt: car.alt,
                      description: car.description,
                      price: car.price,
                    })
                  );
                }}
              >
                <div className="card1">
                  <img className="lambo" src={car.carImage} alt={car.alt} />
                </div>
                <h3 className="model-name">{car.name}</h3>
                <hr className="small-line" />
                <h6 className="lambo-info">
                  Lamborghini 350 GT at the Turin Motor Show
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
              setInitial(initial + 3);
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
