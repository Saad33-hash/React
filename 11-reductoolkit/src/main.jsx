import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App /> {/* we wrap the app component so that all the component inside app component including app compoent can access the stoe */}
    </Provider>
  </StrictMode>,
)
