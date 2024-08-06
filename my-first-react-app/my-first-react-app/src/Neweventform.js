import { useState } from "react"


export default function Neweventform() {
    const [titleInput,setTitleInput]=useState('')
    const[dateInput,setDateInput]=useState('')
    const handleChangetitle=(e)=>{
        setTitleInput(e.target.value)
    }
    const handleChangedate=(e)=>{
        setDateInput(e.target.value)
    }
  return (

    <form>
        <label>
            <span>enter title</span>
            <input type="text" onChange={handleChangetitle}></input>
        </label>

        <label>
            <span>enter date</span>
            <input type="date" onChange={handleChangedate}></input>
        </label>
        <button>Submit</button>
        <span>{titleInput}{dateInput}</span>
    </form>
  )
}
