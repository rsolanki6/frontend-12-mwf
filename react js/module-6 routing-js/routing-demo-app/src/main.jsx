import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Layout from './Layout'
import AboutUs from './AboutUs'
import ContactUsApp from './ContactUsApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<ContactUsApp />} />
      </Routes>
    </Router>
  </StrictMode>,
)
