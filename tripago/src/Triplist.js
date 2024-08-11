import React, { useState,useEffect,useCallback } from 'react'


export default function Triplist() {
    const [trips,setTrips]=useState([])//initially we keep it an empty array
    const [url,seturl]=useState('http://localhost:3000/trips')
    const fetchTrips= useCallback(async ()=>{
      const response= await fetch(url)
      const json=await response.json()//this json will have the javascript object
      setTrips(json)//here we update the trips state to the fetched value
    })

useEffect(()=>{
  fetchTrips()
},[fetchTrips])
  return (
    <div className='trip-list'>
      <h2>Trip List</h2>
      
        <ul>
        {trips.map((trip)=>{return(
            
            <li id={trip.id}>
            <h3>{trip.title}</h3>
            <p>{trip.price}</p>
            </li>

        )})}
        </ul>
        <div className='filters'>Filters  
            <button onClick={()=>seturl('http://localhost:3000/trips?loc=europe')}>Europe Trips</button>
            <button onClick={()=>seturl('http://localhost:3000/trips')}>Other Trips</button>
        </div>  
    </div>
  )
}
