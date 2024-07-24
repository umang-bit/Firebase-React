import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [name,setName]=useState('Mario');
  const handleClick=()=>{
    setName('Umang Tiwari')
  }
  return (
    <div className="App">
      <h1>{name}</h1>
      <button onClick={handleClick}>click karne se naam badlega</button>
    </div>
  );
}

export default App;
