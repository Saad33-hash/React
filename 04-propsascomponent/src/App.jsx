import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card.jsx'
import Button from './component/button.jsx'
function App() {
  const [count,setCount]=useState(0);

  function handleclick(){
    setCount(count+1);
  }
  return (
    <>
      <div>
      <Button incrementclick={handleclick}
      text="click me"
        >
          <h1>{count} </h1>

      </Button>

     { /*   <Card name="Saad tariq">
          <h1>Best web dev course </h1>
          <p>Trying to be consistent in this</p>
          <p>will complete this course soon</p>
        </Card>
      <Card>
        Hello jii, Kaisey hain ap sab?
      </Card> */}
       </div>
    </>  
  )
}

export default App
