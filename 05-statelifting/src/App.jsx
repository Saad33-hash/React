
import { useState } from 'react'
import './App.css'
import Card from './components/Card.jsx'
function App() {
 // create state
 // manage state
 // manage state
 // sync the same state to all childs
 // using {Name} we give access to maintain the state or child name is all child with setName function we give him permission to change the name in all childs.

  const [name, SetName]=useState('');
  return (
    <>
      <div>
        <Card title='card1' name={name} SetName={SetName}>
        </Card>
      { /* <p>I an inside parent component and value of name is {name}</p> */ }
        <Card title='card2' name={name} SetName={SetName}></Card>
       </div>
    </>
  )
}

export default App
