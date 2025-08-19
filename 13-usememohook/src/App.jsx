import { useMemo, useState } from 'react';
import './App.css'

function App() {
  
  const [Count,setCount]=useState(0);
  const [input,setInput]=useState(0);
  function handleincrement(){
    setCount(Count+1);
  }

  function doublethevalue(num){
    console.log("inside double value");
    for(let i=0;i<1000000000;i++){
      // Simulating a heavy computation
   
    }
       return num*2;
  }

  let value=useMemo(()=>doublethevalue(input),[input]); 

  return (
    <>
      <div>
      <button onClick={handleincrement}>
        Increment
      </button>
      <p>Count:{Count}</p>
      </div>


<input type="number"
placeholder='enter a value'
value={input}
onChange={(e)=>setInput(e.target.value)}
 />
      <div>
        double:{value}
      </div>
     
    </>
  )
}

export default App
