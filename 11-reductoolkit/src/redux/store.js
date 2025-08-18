import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/CounterSlice.jsx'



export const store = configureStore({
  reducer: {
     counter: counterReducer,
  },
})

