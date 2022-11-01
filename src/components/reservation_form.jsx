import React, { useState } from 'react'



const ReserveForm = () => {

  const [pickLocation, setPickLocation] = useState('')
const [dropLocation, setDropLocation] = useState('')
const [model, setModel] = useState('none selected')

  const handleSubmit = (e) =>{
    e.preventDefault();
    const data = {pickLocation, dropLocation}
    console.log(data)
  }
  return (

    
    <div className='sub-container'>
     <form onSubmit={handleSubmit}>
      <div>
     
        <label>Car model</label>
        <select className='model-selector'
        value={model}
        onChange={(e) =>{setModel(e.target.value)}}
        >
          <option>select Car </option>
          <option> bike two</option>
        </select>
         
        </div>
        <div>
     
        <label>Pick up location</label>
        <input type='text' value={pickLocation}
        onChange={(e)=> {setPickLocation(e.target.value)} }/>
         
        </div>
        <div>
     
        <label>Drop off location</label>
        <input type='text' value={dropLocation}
        onChange={(e)=>{setDropLocation(e.target.value)}}
        />
         </div>
         <input type='submit' value='make reservation' />
    </form> 
    </div>
   
    
  )
}

export default ReserveForm
