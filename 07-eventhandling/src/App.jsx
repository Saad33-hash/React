import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function handleclick(){
    alert("I am clicked");
  }

  function onMouseOver(){
    alert("you are pointing on the text");
  }

  function onchnagetext(e){
    console.log("value is changed in input",e.target.value);
  }
  function handleSubmit(e){
    e.preventdefault;
    alert("are you sure to submit the form");

  }
  return (
    <>
      <div  >

        <button onClick={()=>alert("you clicked me")}>Click here</button>
      {/*  <button onClick={alert("you clicked me ")}>Click me</button> 
      it will keep skoing alert when page is reload to be safe from it use fat reload function*/}
    
        {/*< form onSubmit={handleSubmit}>
          <input type="text"  onChange={onchnagetext}/>
          <button className='btn'>Submit</button>
        </form>  */}
    {/*    <h1 className='heading' onMouseOver={onMouseOver}>I am learning react and i am going to be a better developer.</h1>
      <button id='btn' onClick={handleclick}>
        click me
      </button>  */}
      </div>
      
    </>
  )
}

export default App
