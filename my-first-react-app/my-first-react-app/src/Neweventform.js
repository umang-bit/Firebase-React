import { useState } from "react"


export default function Neweventform({addNewEvent}) {
    const [titleInput,setTitleInput]=useState('')
    const[dateInput,setDateInput]=useState('')
    const handleSubmit = (e)=>{
        e.preventDefault();
        const event ={
            title : titleInput,
            date : dateInput,
            location:location,
            id : Math.floor(Math.random()) * 10000

        }
        addNewEvent(event);//this is where we use the function we took form app.js
        handleReset();
    }
    const handleReset=()=>{
        setTitleInput('')
        setDateInput('')
        setLocation('New Delhi')
    }
    const handleChangetitle=(e)=>{
        setTitleInput(e.target.value)
    }
    const handleChangedate=(e)=>{
        setDateInput(e.target.value)
    }
    const [location,setLocation]=  useState('New Delhi')//new delhi will be the default location
  return (
 
    <form onSubmit={handleSubmit}>
        <label>
            <span>enter title</span>
            <input type="text" onChange={handleChangetitle} value={titleInput}></input>
        </label>

        <label>
            <span>enter date</span>
            <input type="date" onChange={handleChangedate} value={dateInput}></input>
        </label>
        <label>
            <span>select location</span>
            <select onChange={(e)=>setLocation(e.target.value)}>
                <option value='New Delhi'></option>
                <option value='Vadodara'></option>
                <option value='Sharjah'></option>
                <option value='Mumbai'></option>
            </select>
        </label>
        <button>Submit</button>
        <span>{titleInput}{dateInput}</span>
        <p onClick={handleReset}>Reset Karo</p>    
    </form>
  )
}
