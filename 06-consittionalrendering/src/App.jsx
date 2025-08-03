import { useState } from 'react';
import './App.css'
import LoginBtn from './component/LoginBtn';
import LogoutBtn from './component/LogoutBtn';

function App() {
 const[IsLoggedIn,SetLoggedIn]= useState(true); 
 
  // early rendering
  if(!IsLoggedIn){
    return (
      <LoginBtn/>
    )
  }
  // using condittional operator
  return (
  <div>
  <h1>Welocme to react learning course from code help</h1> 
<div>
  {IsLoggedIn && <LogoutBtn/>}
</div>

  </div>


  )
  
  
  
  
  // using ternary operator
  /* return (
  <>
  <div>
 {IsLoggedIn?<LoginBtn/> : <LogoutBtn/>}
  </div>
 </>    
    
  )
*/}


export default App
