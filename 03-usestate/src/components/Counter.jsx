import React, { useState } from 'react'
import './Counter.css'
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className='cardcontainer'>
        <p id='cardtext'>You have click me {count} times</p>
        <button id='cardbutton' onClick={()=> {setCount(count+1) }}>Click me</button>
      
    </div>
  )
}

export default Counter
