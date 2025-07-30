import React from 'react'
import './usercard.css'
 


// render a componet
// to use this we have to export it where we want to use it.
const Usercard = (props) => {
  return (
    <div className='user-container' style={props.style}>
     <p id="titlle">{props.Name}</p>
     <img id="userimage" src={props.images}  alt={props.Name} /> 
     <p id="userinfo">{props.description}</p>
    </div>
  )
}

export default Usercard

//important point: we can use the html elements i javascript using the following {nameof thing} thats why it is called jsx jason xtemal.