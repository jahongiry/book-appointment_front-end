import React from 'react'

const Reservation = (props) => {
    const {model , city, date } = props
  return (
    
   
    <tr>
    <td>{model}</td>
    <td>{city}</td>
    <td>{date}</td>
    </tr>
   
  )
}

export default Reservation