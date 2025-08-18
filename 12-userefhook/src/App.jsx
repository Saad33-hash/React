import { useEffect, useState,useRef } from 'react';
import { use } from 'react'
import './App.css'

function App() {
  const[Time,setTime]=useState(0);

let x=useRef(null);
  function startTime(){
    x.current= setInterval(() => {
    setTime(Time => Time+1);
    },1000);
  }

function stopTime(){
  clearInterval(x.current);
x.current=null;
}  

function resetTime(){
  stopTime();
  setTime(0);
}

  /*
const [Count,setCount]=useState(0);
let val=useRef(0);

function handleclick(){
  // variables intialized with useref does not intialize every time the function re-render
  val.current=val.current+1;
  console.log("value of val using useref:",val.current);
  setCount(Count+1);
}

let btnref=useRef();
function chanegcolor(){
  if (1){
  btnref.current.style.backgroundColor="red";

  }
 

}
// THERE is no dependency so it will will run on every render
useEffect(() => {
  console.log("useEffect called"); 
 })
  */

  return (
    <>
    <div className='app'>
      <h1>StopWatch:{Time} seconds</h1>
      <button className='btns' onClick={startTime}>
        start
      </button>
      <br />
      <button onClick={stopTime}>
        Stop Time
      </button>
      <br />
      <button onClick={resetTime}>
        Reset Time
      </button>
    </div>
    {/*}
      <div className='app'>
            <button 
       ref={btnref}
       onClick={handleclick}>
        Increment
       </button>
<p>count:{Count}</p>

<button onClick={chanegcolor}>
  Change color!
</button>
      </div>
*/}     
    </>
  )

}

export default App
