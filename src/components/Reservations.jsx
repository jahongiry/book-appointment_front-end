import React , { useEffect } from "react";
import { useSelector , useDispatch } from "react-redux";
import Reservation from "./Reservation";
import { reservations } from "./ReserveForm";
import { fetchAllReservations } from "../store/reservationReducer";
// import { fetchReservations } from "../store/reservationReducer";
import './Reservations.css'



const Reservations = () => {
  const { userId } = JSON.parse(window.localStorage.getItem("user"));
  // const auth = window.localStorage.getItem("token");
  const reservations = useSelector((state) => state.reservations.reservations);
 
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
        <div className="main">
           <h1>Reservations</h1>
           
        <div className='res-contain'>
        <table className="table">
      <thead className="thead-dark">
        <tr><th scope="col">Car model</th>
        <th scope="col">City</th>
        <th scope="col">Date</th>
        <th scope="col">action</th>
        </tr>
      </thead>
        
      <tbody>

        {reservations.map((reservation, index) => {
          return <Reservation key={index} model={reservation.car.name} city={reservation.location} date={reservation.reservation_date}  />
          
        })}
       </tbody>
       </table>
    </div> 
   
   
        </div>
    )
}

export default Reservations