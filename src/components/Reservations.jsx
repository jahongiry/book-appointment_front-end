import React from "react";
import Reservation from "./Reservation";
import './Reservations.css'



const reservations = [{
    name: 'Lexus',
    brand: 'Lexus',
    color: 'black',
    date: '2022-10-24'
  },
  {
    name: 'Hyunda',
    brand: 'Hyundai alvero',
    city: 'Las vegas',
    date: '2022-10-24'
  },
  {

    name: '',
    brand: 'toyo',
    city: 'nevada',
    date: '2022-10-24'
  },
  {
    model: 'toyo',
    city: 'nevada',
    date: '2022-10-24'
  },
  {
    model: 'toyo',
    city: 'nevada',
    date: '2022-10-24'
  }]


const Reservations = () => {
    return (
        <div className="main">
        {/* <div className='res-contain'>
        <table className="table">
      <thead className="thead-dark">
        <tr><th>Car model</th>
        <th>date</th>
        <th>city</th></tr>
      </thead>
        
      <tbody>

        {reservations.map((reservation, index) => {
          return <Reservation key={index} {...reservation} />
        })}
       </tbody>
       </table>
    </div> */}
    <h1>Hello </h1>
    {/* <table >
      <thead >
        <tr><th>Car model</th>
        <th>date</th>
        <th>city</th>
        </tr>
      </thead>
      </table> */}
      <table className="table">
      <thead className="thead-dark">
        <tr><th>Car model</th>
        <th>date</th>
        <th>city</th></tr>
      </thead>
      </table>
        </div>
    )
}

export default Reservations