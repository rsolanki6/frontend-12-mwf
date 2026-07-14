import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import './index.css'
import Layout from './Layout'
import About from './component/About'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </Router>
  </StrictMode>,
)
