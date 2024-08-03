export default function Modal({handleClose}) {
  return (
    <div>
      <h1>thank you for shopping with us </h1>
      <p>come again </p>
      <button onClick={handleClose}>close </button>
    </div>
  )
}
//we practiced how to pass properties into them and children props also