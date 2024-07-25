import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [showEvents,setShowEvents]= useState(true)
  const handleClick = (id)=>{
		setEvents((preevents)=>{return preevents.filter((event)=>{
		return id!=event.id})
		})
}
  const [events,setEvents]= useState([{title : "marios birthday’", id: 1},{title :" ‘bowser bha’",id : 2},{title :" ‘luigi’",id:3}]) 
  return (
    <div className="App">
      {!showEvents && <button onClick={()=>{setShowEvents(true)}}>show</button>}
      {showEvents && <button onClick={()=>{setShowEvents(false)}}>hide</button>}
      
      {
        showEvents && events.map((event, index)=>(
          <div key={event.id}>
            <h1 >{event.title}</h1>
            <button onClick={()=>handleClick(event.id)}>clear event</button>
          </div>
        ))
      }
    </div>
  );
}

export default App;
