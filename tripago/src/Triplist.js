import React, { useState,useEffect } from 'react'


export default function Triplist() {
    const [trips,setTrips]=useState([])//initially we keep it an empty array
useEffect(()=>{fetch('http://localhost:3000/trips')
    .then((response)=>response.json())
    .then((data)=>setTrips(data))},[])
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
      
    </div>
  )
}
