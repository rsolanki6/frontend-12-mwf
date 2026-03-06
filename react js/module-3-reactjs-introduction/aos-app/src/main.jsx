import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import AOS from './AOS';
import FlipApp from './PhotoFlipApp';
import './index.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AOS /> */}
    <FlipApp />
  </StrictMode>,
)
