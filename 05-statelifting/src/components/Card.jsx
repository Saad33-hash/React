import React from 'react'
// though the event name what we are changing in input filed it will be changing in name 
const Card = (props) => {
  return (
    <div>
   <input type="text" onChange={(e)=> props.SetName(e.target.value)} />
   <p>This is me inside the div tag of main : {props.name}</p>
    </div>
  )
}

export default Card
