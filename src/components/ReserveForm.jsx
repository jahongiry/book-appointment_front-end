import React, { useState , useEffect } from "react"
import { useSelector , useDispatch } from "react-redux"
import { createNewReservation } from "../store/reservationReducer"
import { fetchAllCars } from '../store/mainpage_reducer'
// import { reservations } from "./Reservations"
import './Reservations.css'
import { Link } from "react-router-dom"


const ReserveForm = () => {
  const dispatch = useDispatch()
  const cars = useSelector(state => state.cars.cars)
  const reservations = useSelector(state => state.reservations.reservations)
  // const carId = cars.id
  const { userId } = JSON.parse(window.localStorage.getItem("user"));
  const userid = userId || 1;
  const [date, setDate] = useState('')
  const [city, setCity] = useState('')
  const [model, setModel] = useState('')
  const [carId, setCarId] = useState()
  console.log('carId', carId)
  const newReservation = (e) => {
    e.preventDefault()
    dispatch(createNewReservation({userid , carId ,   date , city , model ,}))
    setCarId('')
    setCity('')
    setDate('')
    setModel('')
  }

  // console.log(newReservation)


useEffect(() => {
  dispatch(fetchAllCars())
}, [dispatch])

// console.log(cars)
  
//     const handleSubmit = (e) =>{
//       e.preventDefault();
//         const newReserve = {
//             id: reserves.length + 1,
//             model, 
//             city,
//             date
//         }              
//        setReservations([...reserves, newReserve])  
//     }
    return (
  
      
      <div className='main'>
        <h1>Reservation Form</h1>
        <div className="card" style={{backgroundColor: 'lightgreen'}}>
          <form onSubmit={newReservation}>
        <div className='form-group'>
       
          <label className="form-lable"><strong>Choose A Car</strong></label>
          <select className="form-control form-control-lg" onChange={(e) =>  
          setCarId(e.target.options[e.target.selectedIndex].value )
        }
          
          placeholder='Choose Car'>
           {cars.map((car) => {
                return <option key={car.id} value={car.id}>{car.name}
                </option>
           })}

          </select>
           
          </div>
          <div className='form-group'>
       
          <label><strong>Choose A Date</strong></label>
          <input className="form-control form-control-lg" type='date' value={date}
          onChange={(e)=> {setDate(e.target.value)} }/>
           
          </div>
          <input type='hidden' value={carId} onChange={()=> {setCarId(cars)} }/>
          <div className='form-group '>
       
          <label><strong>Please Enter City</strong></label>
          <input className="form-control form-control-lg" type='text' value={city}
          onChange={(e)=>{setCity(e.target.value)}}
          />
           </div>
           <div className='form-group '>
       
          <label><strong>Please Enter Model</strong></label>
          <input className="form-control form-control-lg" type='text' value={model}
          onChange={(e)=>{setModel(e.target.value)}}
          />
           </div>
           <button className="btn btn-dark" type='submit' >Make Reservation </button>
      </form>
      </div> 
      </div>
     
      
    )
  }

  export default ReserveForm