import car from "../img/lambo.webp";
import "./MainPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MainPage() {
  return (
    <div className="main">
      <h1>LATEST MODELS</h1>
      <p className="choose">Please select a Lambo Model</p>
      <hr className="main-line" />
      <div className="middle">
        <div className="left">
          <button className="back-button">
            <FontAwesomeIcon icon="fa-solid fa-caret-left" />
          </button>
        </div>
        <div className="first">
          <div className="card1">
            <img className="lambo" src={car} alt="lambo car"></img>
          </div>

          <h3 className="model-name">LAMBO S500</h3>
          <hr className="small-line" />
          <h6 className="lambo-info">
            Lamborghini 350 GT at the Turin Motor Show
          </h6>
          <div className="logos-fonts">
            <FontAwesomeIcon className="facebook" icon="fa-brands fa-twitter" />
            <FontAwesomeIcon
              className="facebook"
              icon="fa-brands fa-facebook"
            />
            <FontAwesomeIcon className="facebook" icon="fa-brands fa-google" />
          </div>
        </div>
        <div className="first">
          <div className="card1">
            <img className="lambo" src={car} alt="lambo car"></img>
          </div>
          <h3 className="model-name">LAMBO S500</h3>
          <hr className="small-line" />
          <h6 className="lambo-info">
            Lamborghini 350 GT at the Turin Motor Show
          </h6>
          <div className="logos-fonts">
            <FontAwesomeIcon className="facebook" icon="fa-brands fa-twitter" />
            <FontAwesomeIcon
              className="facebook"
              icon="fa-brands fa-facebook"
            />
            <FontAwesomeIcon className="facebook" icon="fa-brands fa-google" />
          </div>
        </div>
        <div className="first">
          <div className="card1">
            <img className="lambo" src={car} alt="lambo car"></img>
          </div>
          <h3 className="model-name">LAMBO S500</h3>
          <hr className="small-line" />
          <h6 className="lambo-info">
            Lamborghini 350 GT at the Turin Motor Show
          </h6>
          <div className="logos-fonts">
            <FontAwesomeIcon className="facebook" icon="fa-brands fa-twitter" />
            <FontAwesomeIcon
              className="facebook"
              icon="fa-brands fa-facebook"
            />
            <FontAwesomeIcon className="facebook" icon="fa-brands fa-google" />
          </div>
        </div>
        <div className="right">
          <button className="next-button">
            <FontAwesomeIcon icon="fa-solid fa-caret-left" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
