
import { useState } from 'react'
import ChildComponent from './component/ChildComponent'
import './App.css'
import { useCallback } from 'react';

function App() {
  const [Count,setCount]=useState(0);


const incclick=useCallback(()=>{
  setCount(Count+1);
},[]) ;
 return (
    <>
      <div>
      
       <button onClick={incclick}>
        Increment
       </button>
       <p>Count:{Count}</p>

       <div>
 
        <ChildComponent buttonname='click me'
        onClick={incclick}
        />
      
       </div>
        
      </div>
     
    </>
  )
}

export default App
