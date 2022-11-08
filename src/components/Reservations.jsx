import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Reservation from "./Reservation";
import { reservations } from "./ReserveForm";
import { fetchAllReservations } from "../store/reservationReducer";
// import { fetchReservations } from "../store/reservationReducer";
import "./Reservations.css";

const Reservations = () => {
  const { userId } = JSON.parse(window.localStorage.getItem("user"));
  // const auth = window.localStorage.getItem("token");
  const reservations2 = useSelector((state) => state.reservations.reservations);
  const reservations = [
    {
      id: "1",
      image:
        "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960",
      name: "Lambo",
      cost: "$5000",
      city: "San-Francisco",
      date: "01/01/2022",
    },
    {
      id: "1",
      image:
        "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960",
      name: "Lambo",
      cost: "$5000",
      city: "San-Francisco",
      date: "01/01/2022",
    },
    {
      id: "1",
      image:
        "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960",
      name: "Lambo",
      cost: "$5000",
      city: "San-Francisco",
      date: "01/01/2022",
    },
    {
      id: "1",
      image:
        "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960",
      name: "Lambo",
      cost: "$5000",
      city: "San-Francisco",
      date: "01/01/2022",
    },
  ];
  const userid = userId || 1;
  // console.log(userid);
  const dispatch = useDispatch();
  // console.log(fetchReservations(userid));
  useEffect(() => {
    dispatch(fetchAllReservations(userid));
  }, [dispatch]);
  console.log(reservations);

  // console.log(reservations);

  return (
    <div className="reserve-all-container">
      <h1>Reservations</h1>
      <ul className="reserve-container">
        {reservations.map((reservation) => (
          <div className="cards" key={reservation.id}>
            <img
              className="reserve-img"
              src={reservation.image}
              alt="lux car"
            />
            <h2 className="name-reserve">
              Name of the reserved car: {reservation.name}
            </h2>
            <p>Location: {reservation.city}</p>
            <p>cost: {reservation.cost}</p>
            <p>date: {reservation.date}</p>
          </div>
        ))}
      </ul>
    </div>

    //     <div className="main">
    //        <h1>Reservations</h1>

    //     <div className='res-contain'>
    //     <table className="table">
    //   <thead className="thead-dark">
    //     <tr><th scope="col">Car model</th>
    //     <th scope="col">City</th>
    //     <th scope="col">Date</th>
    //     <th scope="col">action</th>
    //     </tr>
    //   </thead>

    //   <tbody>

    //     {reservations.map((reservation, index) => {
    //       return <Reservation key={index} model={reservation.car.name} city={reservation.location} date={reservation.reservation_date}  />

    //     })}
    //    </tbody>
    //    </table>
    // </div>

    //     </div>
  );
};

export default Reservations;
