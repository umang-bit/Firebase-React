export default function Modal({handleClose , isSalesModal}) {
  return (
    <div style={{border : "4px solid" 
    , borderColor :isSalesModal? "#ff4500":"black" 
    , textAlign : 'center'}}>
      <h1>thank you for shopping with us </h1>
      <p>come again </p>
      <button onClick={handleClose} className={isSalesModal?"umang":"naive"}>close </button>
    </div>
  )
}
//we practiced how to pass properties into them and children props also