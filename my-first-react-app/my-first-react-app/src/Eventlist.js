
import styles from './Eventlist.module.css'
export default function Eventlist({events , handleClick}) {
  return (
    <div>
      {events.map((event, index)=>(
          <div className = {styles.card} key={event.id}>
            <h1 >{event.title}</h1>
            <button onClick={()=>handleClick(event.id)}>clear event</button>
          </div>
        ))}//we just copy pasted the entire code from there the map and all and put it in curly braces as it is dynamic
        //now we will have to intake events as prop only then it will work.
    </div>
  )
}
