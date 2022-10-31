import car from "../img/lambo.webp";
import "./MainPage.css";

function MainPage() {
  return (
    <div className="main">
      <h1>LATEST MODELS</h1>
      <p className="choose">Please select a Lambo Model</p>
      <hr />

      <div className="middle">
        <div className="left">left</div>
        <div className="card1">
          <img className="lambo" src={car} alt="lambo car"></img>
        </div>
        <div className="card1 second">
          <img className="lambo" src={car} alt="lambo car"></img>
        </div>
        <div className="card1 third">
          <img className="lambo" src={car} alt="lambo car"></img>
        </div>
        <div className="right">right</div>
      </div>
    </div>
  );
}

export default MainPage;
