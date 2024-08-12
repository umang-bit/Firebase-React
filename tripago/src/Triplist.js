import React, { useState,useEffect,useCallback } from 'react'
import useFetch from './hooks/useFetch'


export default function Triplist() {

    const [url,seturl]=useState('http://localhost:3000/trips')

    const {data:trips} = useFetch(url)

  return (
    <div className='trip-list'>
      <h2>Trip List</h2>
      
        <ul>
        {trips && trips.map((trip)=>{return(
            
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
