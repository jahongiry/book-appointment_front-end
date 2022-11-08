import React, { useState , useEffect } from "react"
import { useSelector , useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { createNewReservation } from "../store/reservationReducer"
import { fetchAllCars } from '../store/mainpage_reducer'



const ReserveForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const cars = useSelector(state => state.cars.cars)


  const { userId } = JSON.parse(window.localStorage.getItem("user"));
  const userid = userId || 1;
  const [date, setDate] = useState('')
  const [city, setCity] = useState('')
  const [carId, setCarId] = useState()
  console.log('carId', carId)
  const newReservation = (e) => {
    e.preventDefault()
    dispatch(createNewReservation({userid , carId ,   date , city ,}))
    setCarId()
    setCity('')
    setDate('')
    navigate('/reservations')
  }



useEffect(() => {
  dispatch(fetchAllCars())
}, [dispatch])

    return (
  
      
      <div className='main'>
        <h1>Reservation Form</h1>
        <div className="card" style={{backgroundColor: 'lightgreen'}}>
          <form onSubmit={newReservation}>
        <div className='form-group'>
       
          <label className="form-lable"><strong>Choose A Car</strong></label>
          <select className="form-control form-control-lg" onChange={(e) =>  
          setCarId(e.target.options[e.target.selectedIndex].value || e.target.options[0].value )
        }
          
          placeholder='Choose Car'>
           {cars.map((car) => {
                return <option key={car.id} value={car.id} placeholder="Choose A car">{car.name}</option>
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
           <button className="btn btn-dark" type='submit' >Make Reservation </button>
      </form>
      </div> 
      </div>
     
      
    )
  }

  export default ReserveForm