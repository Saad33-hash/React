
import './App.css'
import Usercard from './components/usercard.jsx'
import usercard from './components/usercard.jsx'
import man from './assets/man.png';
import data from './assets/data.png';
import scientist from './assets/scientist.png';
function App() {
  
  return (
    
      <div className='Container'>
      <Usercard Name="saad" description="My name is Saad tariq" images={man} style={{"border-radius":"10px"}}/>  
      <Usercard Name="haziq"  description="My name is Haziq Imran" images={data} style={{"border-radius":"10px"}}/>
      <Usercard Name="rahim"  description="My name is Rahim Waqar" images={scientist} style={{"border-radius":"10px"}}/>
        </div>
    
  )
}

export default App


