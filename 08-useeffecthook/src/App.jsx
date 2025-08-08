import { useState } from 'react';
import { useEffect } from 'react'
import './App.css'



function App() {
  
const[count,setCount]=useState(0);
const[total,setTotal]=useState(0);
//first -> main sideeffect logic want fetchapi,alert and any other thing
//second -> clean up function means memory leaks ou mount vent listener
//third -> comma seprated dep list

//varaiation:1
//runs on every render
 //useEffect(()=>{
 //alert("i will be shown in every render beacuse i have ben used in render function")
 //})

 //variation2
 // run on only first rendr
 //useEffect(() => {
//alert("I will run on only first render")
 //},[])

 //varaitions3
 //when ever value is updated runs. It rus before th count is updatd and after the rendering

 //useEffect(()=>{
//alert("i will run whenever the count increase");
 //},[count])

//variation4
//useEffect(()=>{
//alert("i will run whenever the count and total increase");
// },[count,total])

//variation5
//this time using ceanup function
useEffect(()=>{
alert("i will be show when count is updated");
return(
  alert("Previous count will be clanup from UI")
)
},[count])
function Clickme(){
  setCount(count+1);
}
function getclickedtotal(){
  setTotal(total+1);
}

  return (
    <>
      <div className='btnandount'>
       <button onClick={Clickme}>
        click me
       </button>
       Count is:{count}
       
      </div>

<br/>
<br/>
      <div className='btnandount'>
       <button onClick={getclickedtotal}>
        Total button
       </button>
       Total is:{total}
       
      </div>
      
    </>
  )
}

export default App
