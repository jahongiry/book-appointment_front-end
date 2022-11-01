import React from "react";
import Reservation from "./Reservation";
import './Reservations.css'



const reservations = [{
    id: 1,
    model: 'Lexus',
    brand: 'Lexus',
    city: 'Sofia',
    date: '2022-10-24'
  },
  {
    id: 2,
    model: 'Hyunda',
    brand: 'Hyundai alvero',
    city: 'Plovdiv',
    date: '2022-10-24'
  },
  {
    id: 3,
    model: 'Lambo',
    brand: 'Lamborghini',
    city: 'Las vegas',
    date: '2022-10-24'
  },
  {
    id: 4, 
    model: 'Bugatti',
    brand: 'Bugatti',
    city: 'Las vegas',
    date: '2022-10-24'
  },
  {
    id: 5,
    model: 'Ferrari',
    brand: 'Ferrari',
    city: 'Las vegas',
    date: '2022-10-24'
  }]


const Reservations = () => {


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