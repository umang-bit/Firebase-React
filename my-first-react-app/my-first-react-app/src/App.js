import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Title from './Title';
import Modal from './Modal';
import Eventlist from './Eventlist';

function App() {
  
  const [showEvents,setShowEvents]= useState(true)
  const handleClick = (id)=>{
		setEvents((preevents)=>{return preevents.filter((event)=>{
		return id!=event.id})
		})
}
  const[showModal,setShowModal]=useState(true)
  const handleClose=()=>{
    setShowModal(false)
  }
  const [events,setEvents]= useState([{title : "marios birthday’", id: 1},{title :" ‘bowser bha’",id : 2},{title :" ‘luigi’",id:3}]) 
  return (
    <div className="App">
    <Title/>
      {!showEvents && <button onClick={()=>{setShowEvents(true)}}>show</button>}
      {showEvents && <button onClick={()=>{setShowEvents(false)}}>hide</button>}
      
      {
        showEvents && <Eventlist events={events} handleClick={handleClick} />//this the events property and our array of 
        //objects are also named events hence even it is in curly braces.
      }
      <Modal isSalesModal= {true}/>
    </div>
  );
}

export default App;
