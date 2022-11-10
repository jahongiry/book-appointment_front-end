import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllReservations } from "../store/reservationReducer";
import "./Reservations.css";

const Reservations = () => {
  const { userId } = JSON.parse(window.localStorage.getItem("user"));
  const reservations = useSelector((state) => state.reservations.reservations);
  const userid = userId || 1;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllReservations(userid));
  }, [dispatch]);
 

  return (
    <div className="reserve-all-container">
      <h1>Reservations</h1>
      <ul className="reserve-container">
        {reservations.map((reservation , index) => (
          
          <div className="cards" key={index}>
            <img
              className="reserve-img"
              src={reservation.car.image_url}
              alt="lux car"
            />
            <h2 className="name-reserve">
              Name of the reserved car: {reservation.car.name}
            </h2>
            <p>Location: {reservation.location}</p>
            <p>cost: {reservation.car.cost}</p>
            <p>date: {reservation.reservation_date}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Reservations;
