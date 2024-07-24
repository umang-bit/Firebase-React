import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [name,setName]=useState('Mario');
  const handleClick=()=>{
    setName('Umang Tiwari')
  }
  const [events,setEvents]= useState([{title : "marios birthday’", id: 1},{title :" ‘bowser bha’",id : 2},{title :" ‘luigi’",id:3}]) 
  return (
    <div className="App">
      <h1>{name}</h1>
      <button onClick={handleClick}>click karne se naam badlega</button>
      {
        events.map((event, index)=>(
          <div key={event.id}>
            <h1 >{event.title}</h1>
          </div>
        ))
      }
    </div>
  );
}

export default App;
