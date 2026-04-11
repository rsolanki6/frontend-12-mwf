import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LayOut from './LayOut'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LayOut />

  </StrictMode>,
)
