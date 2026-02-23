import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import App from './App.jsx'
import HelloApp from './helloapp.jsx'
import Calc from './Calc.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelloApp/>
    <Calc/>
  </StrictMode>,
)