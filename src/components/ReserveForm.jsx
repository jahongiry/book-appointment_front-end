import React, { useState } from "react"
// import { reservations } from "./Reservations"
import './Reservations.css'

export const reservations = [{
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

const ReserveForm = () => {
  const [reserves , setReservations] = useState(reservations)  
  const [date, setDate] = useState('')
  const [city, setCity] = useState('')
  const [model, setModel] = useState('none selected')
//   console.log(reservations)
  
    const handleSubmit = (e) =>{
      e.preventDefault();
        const newReserve = {
            id: reserves.length + 1,
            model, 
            city,
            date
        }              
       setReservations([...reserves, newReserve])  
    }
    return (
  
      
      <div className='main'>
        <h1>Reservation Form</h1>
        <div className="card" style={{backgroundColor: 'lightgreen'}}>
          <form onSubmit={handleSubmit}>
        <div className='form-group'>
       
          <label className="form-lable"><strong>Choose A Car model</strong></label>
          <select className="form-control form-control-lg"
          value={model}
          onChange={(e) =>{setModel(e.target.value)}}
          placeholder='Choose Model'>
           {reservations.map((reservation) => {
                return <option key={reservation.id} value={reservation.model}>{reservation.model}</option>
           })}

          </select>
           
          </div>
          <div className='form-group'>
       
          <label><strong>Choose A Date</strong></label>
          <input className="form-control form-control-lg" type='date' value={date}
          onChange={(e)=> {setDate(e.target.value)} }/>
           
          </div>
          <div className='form-group '>
       
          <label><strong>Please Enter City</strong></label>
          <input className="form-control form-control-lg" type='text' value={city}
          onChange={(e)=>{setCity(e.target.value)}}
          />
           </div>
           <button className="btn btn-dark" type='submit'>Make Reservation </button>
      </form>
      </div> 
      </div>
     
      
    )
  }

  export default ReserveForm