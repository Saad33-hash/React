import React from 'react'

const   Button = (props) => {
  return (
    <div>
        {props.children}
      <button onclick={props.incrementclick}>
       {props.text}
      </button>
    </div>
  )
}

export default Button

