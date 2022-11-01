import React from "react";
import Reservation from "./Reservation";
import { reservations } from "./ReserveForm";
import './Reservations.css'



const Reservations = () => {
  console.log(reservations);

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
          return <Reservation key={index} {...reservation}  />
          
        })}
       </tbody>
       </table>
    </div> 
   
   
        </div>
    )
}

export default Reservations