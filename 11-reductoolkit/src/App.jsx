
import { useSelector } from 'react-redux'
import './App.css'
import { useDispatch } from 'react-redux';
import { increment, decrement } from './features/CounterSlice.jsx'

function App() {
  // to fetch value from the store we use useSelector hook

const count = useSelector((state)=>state.counter.value);
// to dispatch actions we use useDispatch hook
const dispatch=useDispatch();
function handleincrement(){
dispatch(increment());
}
function handledecrement(){
dispatch(decrement());
}
  return (
    <>
      <div>
        <button onClick={handleincrement}>+</button>
        <p>Count:{count}</p>
        <button onClick={handledecrement}>-</button>
        
      </div>
    
    </>
  )
}

export default App
