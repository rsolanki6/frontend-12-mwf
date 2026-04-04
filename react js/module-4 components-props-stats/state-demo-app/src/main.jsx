import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import NameApp from './NameApp.jsx'
// import CounterApp from './CounterApp.jsx'
import MultipleAppUpdateData from './MultipleAppUpdateData.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MultipleAppUpdateData />
  </StrictMode>,
)
