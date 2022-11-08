import React from "react";
import "./Reservations.css";
import { useSelector , useDispatch } from "react-redux";
import { deleteCarAction } from "../store/mainpage_reducer";



const Remove = () => {
  const dispatch = useDispatch()
  const cars = useSelector(state => state.cars.cars)


  return (
    <div className="main">
      <h1>Remove cars from list</h1>

      <div className="res-contain">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Car model</th>
              <th scope="col">Price</th>
              <th scope="col">action</th>
            </tr>
          </thead>
          <tbody >
         { cars.map((car , index) => {
           return (
            <tr key={index}>
            <td scope="col">{car.name}</td>
            <td scope="col">{car.cost}</td>
            <th scope="col" ><button type="submit"  onClick={() => dispatch(deleteCarAction(car.id))
               (window.location.reload(false)) }>remove</button></th>
            </tr>
           )
         })

         }
         </tbody> 
          
        </table>
      </div>
    </div>
  );
};

export default Remove;
