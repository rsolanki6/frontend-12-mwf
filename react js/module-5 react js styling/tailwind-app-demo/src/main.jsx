import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import tailwindcss from '@tailwindcss/vite'
import './index.css'
// import App from './App.jsx'
import CardApp from './CardApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <CardApp />
  </StrictMode>,
)
