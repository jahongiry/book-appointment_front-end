import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createNewReservation } from "../store/reservationReducer";
import "./ReserveCar.css";

function ReserveCar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const car = useSelector((state) => state.cars.car);
  console.log("car", car);
  const { userId } = JSON.parse(window.localStorage.getItem("user"));
  const userid = userId;
  const [date, setDate] = useState("");
  const [city, setCity] = useState("");
  const [carId, setCarId] = useState(car.id);
  const newReservation = (e) => {
    e.preventDefault();
    dispatch(createNewReservation({ userid, carId, date, city }));
    setCarId();
    setCity("");
    setDate("");
    navigate("/reservations");
  };

  return (
    <div>
      <div className="main">
        <h1>Reservation Form</h1>
        <div
          className="card reserve-car-d"
          style={{ backgroundColor: "lightgreen" }}
        >
          <form onSubmit={newReservation}>
            <div className="form-group">
              <label className="form-lable">
                <strong>Choosen Car</strong>
              </label>
              <input className="input-r" type="text" value={car.name} />
            </div>
            <div className="form-group">
              <label>
                <strong>Choose A Date</strong>
              </label>
              <input
                className="form-control form-control-lg input-r"
                type="date"
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
            </div>
            <input
              className="input-r"
              type="hidden"
              value={carId}
              onChange={() => {
                setCarId(cars);
              }}
            />
            <div className="form-group ">
              <label>
                <strong>Please Enter City</strong>
              </label>
              <input
                className="form-control form-control-lg input-r"
                type="text"
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              />
            </div>
            <button className="btn btn-dark button-r" type="submit">
              Make Reservation{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ReserveCar;
