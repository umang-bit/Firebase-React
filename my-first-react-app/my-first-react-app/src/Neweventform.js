import { useState } from "react"


export default function Neweventform() {
    const [titleInput,setTitleInput]=useState('')
    const[dateInput,setDateInput]=useState('')
    const handleSubmit = (e)=>{
        e.preventDefault();
        const event ={
            title : titleInput,
            date : dateInput,
            id : Math.floor(Math.random()) * 10000
        }
        handleReset();
    }
    const handleReset=()=>{
        setTitleInput('')
        setDateInput('')
    }
    const handleChangetitle=(e)=>{
        setTitleInput(e.target.value)
    }
    const handleChangedate=(e)=>{
        setDateInput(e.target.value)
    }
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
        <button>Submit</button>
        <span>{titleInput}{dateInput}</span>
        <p onClick={handleReset}>Reset Karo</p>    
    </form>
  )
}
